<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="style" color="light-blue-6" style="font-size: 4rem" />
      Manage Subject
    </div>

    <br />

    <q-table
      title="Subject List"
      :rows="AllSubject"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            rounded
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn
            label="Add Subject"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="addNewSubject = true"
          />
          <q-dialog v-model="addNewSubject" persistent>
            <q-card style="width: 800px; max-width: 100vw">
              <q-card-section class="bg-primary row">
                <div class="text-h6">Add Subject</div>
                <q-space />
                <q-btn
                  flat
                  round
                  dense
                  icon="close"
                  v-close-popup
                  @click="resetModel()"
                />
              </q-card-section>

              <q-card-section>
                <q-form class="q-gutter-md">
                  <div class="row">
                    <div class="col col-md-6">
                      <q-select
                        autofocus
                        class="q-py-md"
                        outlined
                        v-model="inputSubject.AYCodes"
                        label="AY Code"
                        transition-show="flip-up"
                        transition-hide="flip-down"
                        :options="allSchoolYear"
                        option-label="schoolyear"
                        option-value="schoolyearid"
                        map-options
                        emit-value
                      />
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputSubject.SubjectCode"
                        label="Subject Code"
                      />
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputSubject.DescriptiveTitle"
                        label="DescriptiveTitle"
                      />
                    </div>

                    <div class="col-md-6 q-pl-md">
                      <q-select
                        outlined
                        class="q-py-md"
                        v-model="inputSubject.YearLevel"
                        :options="options"
                        label="Year Level"
                      />
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputSubject.Units"
                        label="Units"
                      />
                    </div>
                  </div>

                  <q-card-actions align="right">
                    <q-btn
                      label="Cancel"
                      color="red-10"
                      v-close-popup
                      @click="resetModel()"
                    />
                    <q-btn
                      v-close-popup
                      label="Add"
                      color="primary"
                      @click="onaddSubject()"
                    />
                  </q-card-actions>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              round
              color="blue"
              icon="edit"
              size="sm"
              flat
              dense
              @click="openEditDialog(props.row)"
            />
            <q-dialog v-model="updateSubject" persistent>
              <q-card style="width: 800px; max-width: 100vw">
                <q-card-section class="bg-primary row">
                  <div class="text-h6">Edit Subject</div>
                  <q-space />
                  <q-btn
                    flat
                    round
                    dense
                    icon="close"
                    v-close-popup
                    @click="resetModel()"
                  />
                </q-card-section>

                <q-card-section>
                  <q-form @submit="oneditSubject" class="q-gutter-md">
                    <div class="row">
                      <div class="col col-md-6">
                        <q-input
                          autofocus
                          class="q-py-md"
                          outlined
                          v-model="inputSubject.AYCodes"
                          label="AY Code"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputSubject.SubjectCode"
                          label="Subject Code"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputSubject.DescriptiveTitle"
                          label="DescriptiveTitle"
                        />
                      </div>

                      <div class="col-md-6 q-pl-md">
                        <q-select
                          outlined
                          class="q-py-md"
                          v-model="inputSubject.YearLevel"
                          :options="options"
                          label="Year Level"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputSubject.Units"
                          label="Units"
                        />
                      </div>
                    </div>
                    <q-card-actions align="right">
                      <q-btn
                        label="Cancel"
                        color="red-10"
                        v-close-popup
                        @click="resetModel()"
                      />
                      <q-btn
                        v-close-popup
                        label="Save"
                        color="primary"
                        type="submit"
                      />
                    </q-card-actions>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-dialog>
            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="deleteSpecificSubject(props.row)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ManagementSubject } from 'src/store/ManagementSubject/state';
import { mapActions, mapState } from 'vuex';
import { SchedulingDto, SchoolYearDto, SubjectDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('schoolyear', ['allSchoolYear']),
  },
  methods: {
    ...mapActions('ManagementSubject', [
      'addSubjects',
      'editSubject',
      'deleteSubject',
      'getAllSubjects',
    ]),
    ...mapActions('schoolyear', ['getAllSchoolYear']),
  },
})
export default class ManageSubject extends Vue {
  addSubjects!: (payload: SubjectDto) => Promise<void>;
  editSubject!: (payload: SubjectDto) => Promise<void>;
  deleteSubject!: (payload: SubjectDto) => Promise<void>;
  AllSubject!: ManagementSubject[];
  allSchoolYear!: SchoolYearDto[];
  getAllSubjects!: () => Promise<void>;
  getAllSchoolYear!: () => Promise<void>;

  async mounted() {
    await this.getAllSubjects();
    await this.getAllSchoolYear();
  }
  columns = [
    {
      name: 'AYCode',
      required: true,
      label: 'AY Code',
      align: 'left',
      field: (row: SubjectDto) => row.AYCodes?.schoolyear,
    },
    {
      name: 'SubjectCode',
      align: 'center',
      label: 'Subject Code',
      field: 'SubjectCode',
    },
    {
      name: 'DescriptiveTitle',
      align: 'center',
      label: 'Descriptive Title',
      field: 'DescriptiveTitle',
    },
    {
      name: 'YearLevel',
      align: 'center',
      label: 'Year Level',
      field: 'YearLevel',
    },

    { name: 'Units', align: 'center', label: 'Units', field: 'Units' },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewSubject = false;
  updateSubject = false;
  filter = '';
  options = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];

  inputSubject: SubjectDto = {
    SubjectCode: '',
    DescriptiveTitle: '',
    Units: '',
    YearLevel: '',
  };

  inputSchoolYear: SchoolYearDto = {
    schoolyear: '',
  };

  async onaddSubject() {
    await this.addSubjects(this.inputSubject);
    this.addNewSubject = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditSubject() {
    await this.editSubject(this.inputSubject);
    this.updateSubject = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificSubject(val: SubjectDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteSubject(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: SubjectDto) {
    this.updateSubject = true;
    this.inputSubject = { ...val };
  }

  resetModel() {
    this.inputSubject = {
      SubjectCode: '',
      DescriptiveTitle: '',
      Units: '',
      YearLevel: '',
    };
  }
}
</script>
