<template>
  <q-page class="q-pa-md">
    <q-btn
            label="Add Course"
            color="primary"
            dense
            flat
            icon="add"
            @click="addNewCourse = true"
          />
    <q-table
    class="my-sticky-header-table"
      title="Course List"
      :rows="AllCourse"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
      hide-bottom
      :grid="$q.screen.xs"
      bordered
      flat
      dense
    >
      <template v-slot:top-right>
        <div class="q-pa-sm q-gutter-sm row">
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
          
          <q-dialog v-model="addNewCourse" persistent>
            <q-card style="width: 500px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="bg-primary row">
                <div class="text-h6">Add Course</div>
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
                <q-form @submit="onaddCourse" class="q-gutter-md">
                  <div class="row flex flex-center">
                    <div class="col">
                      <q-input
                        autofocus
                        stack-label
                        class="q-py-sm"
                        outlined
                        v-model="inputcourse.courseCode"
                        label="Course"
                      />
                      <q-input
                      autofocus
                      stack-label
                        outlined
                        class="q-py-sm"
                        v-model="inputcourse.courseDescription"
                        label="Description"
                      />
                    </div>
                  </div>

                  <div align="right">
                    <q-btn
                      flat
                      label="Cancel"
                      color="red-10"
                      v-close-popup
                      @click="resetModel()"
                    />
                    <q-btn
                      flat
                      label="Add"
                      color="primary"
                      type="submit"
                    />
                  </div>
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
            <q-dialog v-model="updateCourse" persistent>
              <q-card style="width: 500px; max-width: 100vw" class="q-gutter-sm">
                <q-card-section class="bg-primary row">
                  <div class="text-h6">Edit Course</div>
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
                  <q-form @submit="oneditCourse()" class="q-gutter-md">
                    <div class="row flex flex-center">
                    <div class="col">
                      <q-input
                        autofocus
                        stack-label
                        class="q-py-sm"
                        outlined
                        v-model="inputcourse.courseCode"
                        label="Course"
                      />
                      <q-input
                      autofocus
                      stack-label
                        outlined
                        class="q-py-sm"
                        v-model="inputcourse.courseDescription"
                        label="Description"
                      />
                    </div>
                  </div>
                    <div align="right">
                      <q-btn
                        flat
                        label="Cancel"
                        color="red-10"
                        v-close-popup
                        @click="resetModel()"
                      />
                      <q-btn
                        flat
                        label="Save"
                        color="primary"
                        type="submit"
                      />
                    </div>
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
              @click="deleteSpecificCourse(props.row)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { course } from 'src/store/course/state';
import { mapActions, mapState } from 'vuex';
import { CourseDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('course', ['AllCourse']),
  },
  methods: {
    ...mapActions('course', [
      'addCourses',
      'editCourse',
      'deleteCourse',
      'getAllCourse',
    ]),
  },
})
export default class ManageCourse extends Vue {
  addCourses!: (payload: CourseDto) => Promise<void>;
  editCourse!: (payload: CourseDto) => Promise<void>;
  deleteCourse!: (payload: CourseDto) => Promise<void>;
  getAllCourse!: () => Promise<void>;
  AllCourse!: course[];

  async mounted() {
    await this.getAllCourse();
  }
  columns = [
    {
      name: 'Course',
      required: true,
      label: 'Course',
      align: 'left',
      field: (row: CourseDto) => row.courseCode,
      format: (val: string) => `${val}`,
    },
    {
      name: 'Description',
      align: 'center',
      label: 'Description',
      field: (row: CourseDto) => row.courseDescription,
      format: (val: string) => `${val}`,
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewCourse = false;
  updateCourse = false;
  filter = '';

  inputcourse: CourseDto = {
    courseCode: '',
    courseDescription: '',
  };

  async onaddCourse() {
    await this.addCourses(this.inputcourse);
    this.addNewCourse = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditCourse() {
    await this.editCourse(this.inputcourse);
    this.updateCourse = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificCourse(val: CourseDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteCourse(val.courseID as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: CourseDto) {
    this.updateCourse = true;
    this.inputcourse = { ...val };
  }

  resetModel() {
    this.inputcourse = {
      courseCode: '',
      courseDescription: '',
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