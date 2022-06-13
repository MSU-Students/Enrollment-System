<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="style" color="light-blue-6" style="font-size: 4rem" />
      Manage Schedule
    </div>

    <br />

    <q-table
      title="Offerings"
      :rows="AllSchedule"
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
            label="Add Offerings"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="addNewSchedule = true"
          />
          <q-dialog v-model="addNewSchedule" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="row">
                <div class="text-h6">Add Offerings</div>
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
                <q-form class="q-gutter-sm">
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.AcademicYear"
                        label="Academic Year"
                        :options="academicYear"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSchedule.yearLevel"
                        :options="yearLevel"
                        label="Year Level"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.Semester"
                        :options="sem"
                        label="Semester"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSchedule.Courses"
                        label="Course"
                        :options="AllCourse"
                        option-label="courseCode"
                        option-value="courseID"
                        map-options
                        emit-value
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSchedule.SubjectCode"
                        label="SubjectCode"
                        :options="AllSubject"
                        option-label="SubjectCode"
                        option-value="subjectID"
                        map-options
                        emit-value
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.sections"
                        label="Section"
                        :options="AllSection"
                        option-label="sectionName"
                        option-value="sectionID"
                        map-options
                        emit-value
                        lazy-rules
                        :rules="[(val) => val || 'Select Section']"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.room"
                        :options="AllRoom"
                        option-label="roomCode"
                        option-value="roomID"
                        label="Room"
                        map-options
                        emit-value
                        lazy-rules
                        :rules="[(val) => val || 'Select Room']"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.Teachers"
                        :options="allTeacher"
                        option-label="FullName"
                        option-value="teacherID"
                        label="Teacher"
                        map-options
                        emit-value
                        lazy-rules
                        :rules="[(val) => val || 'Select Teacher']"
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
                      @click="onaddSchedule()"
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
            <q-dialog v-model="updateSchedule" persistent>
              <q-card style="width: 800px; max-width: 100vw">
                <q-card-section class="bg-primary row">
                  <div class="text-h6">Edit Offerings</div>
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

                <q-card-section class="bg-info">
                  <q-form class="q-gutter-sm">
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.AcademicYear"
                          label="Academic Year"
                          :options="academicYear"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          autofocus
                          outlined
                          v-model="inputSchedule.yearLevel"
                          :options="yearLevel"
                          label="Year Level"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.Semester"
                          :options="sem"
                          label="Semester"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.Courses"
                          label="Courses"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                          :options="AllCourse"
                          option-label="coursesCode"
                          option-value="coursesID"
                          map-options
                          emit-value
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-select
                          autofocus
                          outlined
                          v-model="inputSchedule.SubjectCode"
                          label="SubjectCode"
                          :options="AllSubject"
                          option-label="SubjectCode"
                          option-value="subjectID"
                          map-options
                          emit-value
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.sections"
                          label="Section"
                          :options="AllSection"
                          option-label="sectionName"
                          option-value="sectionID"
                          map-options
                          emit-value
                          lazy-rules
                          :rules="[(val) => val || 'Select Section']"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.room"
                          :options="AllRoom"
                          option-label="roomCode"
                          option-value="roomID"
                          label="Room"
                          map-options
                          emit-value
                          lazy-rules
                          :rules="[(val) => val || 'Select Room']"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.Teachers"
                          :options="allTeacher"
                          option-label="FullName"
                          option-value="teacherID"
                          label="Teacher"
                          map-options
                          emit-value
                          lazy-rules
                          :rules="[(val) => val || 'Select Teacher']"
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
              @click="deleteSpecificSchedule(props.row)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import {
  CourseDto,
  RoomDto,
  SchedulingDto,
  SchoolYearDto,
  SectionDto,
  SubjectDto,
  TeacherDto,
} from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('scheduling', ['AllSchedule']),
    ...mapState('course', ['AllCourse']),
    ...mapState('section', ['AllSection']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('room', ['AllRoom']),
  },
  methods: {
    ...mapActions('scheduling', [
      'addschedule',
      'editschedule',
      'deleteschedule',
      'getAllschedule',
    ]),
    ...mapActions('course', ['getAllCourse']),
    ...mapActions('section', ['getAllsection']),
    ...mapActions('ManagementSubject', ['getAllSubjects']),
    ...mapActions('ManagementTeacher', ['getAllTeacher']),
    ...mapActions('room', ['getAllRoom']),
  },
})
export default class ManageSchedule extends Vue {
  addschedule!: (payload: SchedulingDto) => Promise<void>;
  editschedule!: (payload: SchedulingDto) => Promise<void>;
  deleteschedule!: (payload: SchedulingDto) => Promise<void>;
  AllSchedule!: SchedulingDto[];
  AllSubject!: SubjectDto[];
  allTeacher!: TeacherDto[];
  AllCourse!: CourseDto[];
  AllSection!: SectionDto[];
  AllRoom!: RoomDto[];
  getAllsection!: () => Promise<void>;
  getAllschedule!: () => Promise<void>;
  getAllSubjects!: () => Promise<void>;
  getAllTeacher!: () => Promise<void>;
  getAllCourse!: () => Promise<void>;
  getAllRoom!: () => Promise<void>;
  // sections: SectionDto[] = [];
  // subjectCodes: SubjectDto[] = [];

  columns = [
    {
      name: 'academicYear',
      required: true,
      label: 'Academic Year',
      align: 'left',
      field: (row: SchedulingDto) => row.AcademicYear,
    },
    {
      name: 'semester',
      required: true,
      label: 'Semester',
      align: 'left',
      field: (row: SchedulingDto) => row.Semester,
    },
    {
      name: 'SubjectCode',
      required: true,
      label: 'Subject Code',
      align: 'left',
      field: (row: SchedulingDto) => row.SubjectCode?.SubjectCode,
      format: (val: string) => `${val}`,
    },
    {
      name: 'DescriptiveTitle',
      align: 'center',
      label: 'Descriptive Title',
      field: (row: SchedulingDto) =>
        row.SubjectCode?.DescriptiveTitle || 'None',
    },

    {
      name: 'Time',
      align: 'center',
      label: 'Time / Day',
      field: (row: SchedulingDto) =>
        row.sections?.time1 +
        ' ' +
        row.sections?.time2 +
        ' ' +
        row.sections?.day1 +
        ' ' +
        row.sections?.day2,
      format: (val: string) => `${val}`,
    },
    {
      name: 'yearlevel',
      align: 'center',
      label: 'Year Level',
      field: (row: SchedulingDto) => row.yearLevel,
    },
    {
      name: 'courses',
      align: 'center',
      label: 'Courses',
      field: (row: SchedulingDto) => row.Courses?.courseCode,
    },
    {
      name: 'section',
      align: 'center',
      label: 'Section',
      field: (row: SchedulingDto) => row.sections?.sectionName,
    },
    {
      name: 'teacher',
      align: 'center',
      label: 'Teacher',
      field: (row: SchedulingDto) => row.Teachers?.FullName,
    },
    {
      name: 'room',
      align: 'center',
      label: 'Room',
      field: (row: SchedulingDto) => row.room?.roomCode,
    },

    { name: 'action', align: 'center', label: ' ', field: 'action' },
  ];
  addNewSchedule = false;
  updateSchedule = false;
  AcademicYear = false;
  filter = '';
  yearLevel = ['First year', 'Second year', 'Third year', 'Fourth year'];
  sem = ['1st Semester', '2nd Semester'];
  academicYear = ['2022-2023'];

  inputSchedule: SchedulingDto = {
    yearLevel: '',
    Semester: '',
    AcademicYear: '',
  };

  async mounted() {
    await this.getAllschedule();
    await this.getAllSubjects();
    await this.getAllTeacher();
    await this.getAllCourse();
    await this.getAllsection();
    await this.getAllRoom();
    // this.sections = this.AllSection;
    // this.subjectCodes = this.AllSubject;
  }

  // filterSubject(val: string) {
  //   this.subjectCodes = this.AllSubject.filter(
  //     (i: any) =>
  //       i.AYCodes.schoolyearid === val &&
  //       i.YearLevel.toLowerCase() ===
  //         this.inputSchedule.yearLevel.toLowerCase(),
  //   );
  // }

  // filterSection(val: string) {
  //   this.sections = this.AllSection.filter(
  //     (i) => i.YearLevel.toLowerCase() == val.toLowerCase(),
  //   );
  // }

  onSelectCourse(Course: any) {
    this.inputSchedule.Courses = Course.courseCode;
  }

  async onaddSchedule() {
    await this.addschedule(this.inputSchedule);
    this.addNewSchedule = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditSchedule() {
    await this.editschedule(this.inputSchedule);
    this.updateSchedule = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificSchedule(val: SchedulingDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteschedule(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: SchedulingDto) {
    this.updateSchedule = true;
    this.inputSchedule = { ...val };
  }

  resetModel() {
    this.inputSchedule = {
      yearLevel: '',
      Semester: '',
      AcademicYear: '',
    };
  }
}
</script>
