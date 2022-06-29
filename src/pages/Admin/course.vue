<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="house" color="light-blue-6" style="font-size: 4rem" />
      Manage Course
    </div>

    <br />

    <q-table
      title="Course List"
      :rows="AllCourse"
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
            label="Add Course"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="addNewCourse = true"
          />
          <q-dialog v-model="addNewCourse" persistent>
            <q-card style="width: 800px; max-width: 100vw">
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
                  <div class="row">
                    <div class="col col-md-6">
                      <q-input
                        autofocus
                        class="q-py-md"
                        outlined
                        v-model="inputcourse.courseCode"
                        label="Course"
                      />
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputcourse.courseDescription"
                        label="Description"
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
                      type="submit"
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
            <q-dialog v-model="updateCourse" persistent>
              <q-card style="width: 800px; max-width: 100vw">
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
                  <q-form @submit="oneditCourse" class="q-gutter-md">
                    <div class="row">
                      <div class="col col-md-6">
                        <q-input
                          autofocus
                          class="q-py-md"
                          outlined
                          v-model="inputcourse.courseCode"
                          label="Course"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputcourse.courseDescription"
                          label="Description"
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
  addCourses!: (payload: course) => Promise<void>;
  editCourse!: (payload: course) => Promise<void>;
  deleteCourse!: (payload: course) => Promise<void>;
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
        await this.deleteCourse(val);
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
