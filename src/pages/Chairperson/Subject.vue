<template>
  <q-page class="q-pa-md">
   <q-btn
            label="Add Subject"
            color="primary"
            dense
            flat
            icon="add"
            @click="addNewSubject = true"
          />
    <q-table
    class="my-sticky-header-table"
      title="Subject List"
      :rows="AllSubject"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
      :grid="$q.screen.xs"
      hide-bottom
      bordered
      flat
      dense
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            rounded
            dense
            debounce="100"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          
          <q-dialog v-model="addNewSubject" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
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
                <q-form>
                  <div class="row q-gutter-md">
                    <div class="col">
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

                    <div class="col">
                      <q-select
                        outlined
                        class="q-py-md"
                        v-model="inputSubject.course"
                        label="Course"
                        :options="AllCourse"
                        option-label="courseCode"
                        option-value="courseID"
                        map-options
                        emit-value
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
                    <div class="row q-gutter-md">
                    <div class="col">
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

                    <div class="col">
                      <q-select
                        outlined
                        class="q-py-md"
                        v-model="inputSubject.course"
                        label="Course"
                        :options="AllCourse"
                        option-label="courseCode"
                        option-value="courseID"
                        map-options
                        emit-value
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
import { CourseDto, SubjectDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('course', ['AllCourse']),
  },
  methods: {
    ...mapActions('ManagementSubject', [
      'addSubjects',
      'editSubject',
      'deleteSubject',
      'getAllSubjects',
    ]),
    ...mapActions('course', ['getAllCourse']),
  },
})
export default class ManageSubject extends Vue {
  addSubjects!: (payload: SubjectDto) => Promise<void>;
  editSubject!: (payload: SubjectDto) => Promise<void>;
  deleteSubject!: (payload: SubjectDto) => Promise<void>;
  AllSubject!: ManagementSubject[];
  AllCourse!: CourseDto[];
  getAllSubjects!: () => Promise<void>;
  getAllCourse!: () => Promise<void>;

  async mounted() {
    await this.getAllSubjects();
    await this.getAllCourse();
  }
  columns = [
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
    { name: 'Units', align: 'center', label: 'Units', field: 'Units' },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: SubjectDto) => row.course?.courseCode,
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewSubject = false;
  updateSubject = false;
  filter = '';

  inputSubject: SubjectDto = {
    SubjectCode: '',
    DescriptiveTitle: '',
    Units: '',
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
        await this.deleteSubject(val.subjectID as any);
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
    };
  }
}
</script>
<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%
  max-height: 700px
  width: 100%
  max-width: 1500px


  .q-table__top,
  .q-table__bottom,
thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #B3E5FC
  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

</style>