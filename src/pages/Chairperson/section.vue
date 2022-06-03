<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="style" color="light-blue-6" style="font-size: 4rem" />
      Manage Section
    </div>

    <br />

    <q-table
      title="Section List"
      :rows="AllSection"
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
            label="Add Section"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="addNewSection = true"
          />
          <q-dialog v-model="addNewSection" persistent>
            <q-card style="width: 800px; max-width: 100vw">
              <q-card-section class="bg-primary row">
                <div class="text-h6">Add Section</div>
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
                        v-model="inputSection.YearLevel"
                        :options="options"
                        label="Year Level"
                      />
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputSection.sectionName"
                        label="Section Name"
                      />
                      <q-select
                        outlined
                        v-model="inputSection.sectionTeachers"
                        label="Adviser"
                        transition-show="flip-up"
                        transition-hide="flip-down"
                        :options="allTeacher"
                        option-label="FullName"
                        option-value="teacherID"
                        map-options
                        emit-value
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
                      @click="onaddSection()"
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
            <q-dialog v-model="updateSection" persistent>
              <q-card style="width: 800px; max-width: 100vw">
                <q-card-section class="bg-primary row">
                  <div class="text-h6">Edit Section</div>
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
                  <q-form @submit="oneditSection" class="q-gutter-md">
                    <div class="row">
                      <div class="col col-md-6">
                        <q-select
                          autofocus
                          class="q-py-md"
                          outlined
                          v-model="inputSection.YearLevel"
                          :options="options"
                          label="Year Level"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputSection.sectionName"
                          label="Section Name"
                        />
                        <q-select
                          outlined
                          v-model="inputSection.sectionTeachers"
                          label="Adviser"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                          :options="allTeacher"
                          option-label="FullName"
                          option-value="teacherID"
                          map-options
                          emit-value
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
              @click="deleteSpecificSection(props.row)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { section } from 'src/store/section/state';
import { mapActions, mapState } from 'vuex';
import { SectionDto, TeacherDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('section', ['AllSection']),
    ...mapState('ManagementTeacher', ['allTeacher']),
  },
  methods: {
    ...mapActions('section', [
      'addsections',
      'editsection',
      'deletesection',
      'getAllsection',
    ]),
    ...mapActions('ManagementTeacher', ['getAllTeacher']),
  },
})
export default class ManageSection extends Vue {
  addsections!: (payload: SectionDto) => Promise<void>;
  editsection!: (payload: SectionDto) => Promise<void>;
  deletesection!: (payload: SectionDto) => Promise<void>;
  AllSection!: section[];
  allTeacher!: TeacherDto[];
  getAllsection!: () => Promise<void>;
  getAllTeacher!: () => Promise<void>;

  async mounted() {
    await this.getAllsection();
    await this.getAllTeacher();
  }
  columns = [
    {
      name: 'Year Level',
      align: 'center',
      label: 'Year Level',
      field: (row: SectionDto) => row.YearLevel,
      format: (val: string) => `${val}`,
    },
    {
      name: 'Section Name',
      align: 'center',
      label: 'Section Name',
      field: (row: SectionDto) => row.sectionName,
      format: (val: string) => `${val}`,
    },

    {
      name: 'teacher',
      align: 'left',
      label: 'Adviser',
      field: (row: SectionDto) => row.sectionTeachers?.FullName,
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewSection = false;
  updateSection = false;
  filter = '';
  options = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];

  inputSection: SectionDto = {
    YearLevel: '',
    sectionName: '',
  };

  async onaddSection() {
    await this.addsections(this.inputSection);
    this.addNewSection = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditSection() {
    await this.editsection(this.inputSection);
    this.updateSection = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificSection(val: SectionDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deletesection(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: SectionDto) {
    this.updateSection = true;
    this.inputSection = { ...val };
  }

  resetModel() {
    this.inputSection = {
      YearLevel: '',
      sectionName: '',
    };
  }
}
</script>
