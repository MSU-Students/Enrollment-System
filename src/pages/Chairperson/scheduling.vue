<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="style" color="light-blue-6" style="font-size: 4rem" />
      Manage Schedule
    </div>

    <br />

    <q-table
      title="Scheduling"
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
            label="Add Schedule"
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
                <div class="text-h6">Add Schedule</div>
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
                        transition-show="flip-up"
                        transition-hide="flip-down"
                        :options="allSchoolYear"
                        option-label="schoolyear"
                        option-value="schoolyearid"
                        map-options
                        emit-value
                        @update:model-value="filterSubject($event)"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.Courses"
                        label="Course"
                        transition-show="flip-up"
                        transition-hide="flip-down"
                        :options="AllCourse"
                        option-label="courseCode"
                        option-value="courseID"
                        map-options
                        emit-value
                      />
                    </div>

                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSchedule.yearLevel"
                        :options="options3"
                        label="Year Level"
                        @update:model-value="filterSection($event)"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-sm q-py-sm">
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
                        v-model="inputSchedule.Section"
                        label="Section"
                        transition-show="flip-up"
                        transition-hide="flip-down"
                        :options="sections"
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
                        autofocus
                        outlined
                        v-model="inputSchedule.SubjectCodes"
                        label="SubjectCode"
                        transition-show="flip-up"
                        transition-hide="flip-down"
                        :options="subjectCodes"
                        option-label="SubjectCode"
                        option-value="subjectID"
                        map-options
                        emit-value
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSchedule.Time"
                        label="Time"
                      />
                    </div>

                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSchedule.Time2"
                        label="Time 2"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.Day"
                        :options="options"
                        label="Day"
                      />
                    </div>

                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.Day2"
                        :options="options2"
                        label="Day 2"
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
                  <div class="text-h6">Edit Schedule</div>
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
                  <q-form class="q-gutter-md">
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.AcademicYear"
                          label="Academic Year"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                          :options="allSchoolYear"
                          option-label="schoolyear"
                          option-value="schoolyearid"
                          map-options
                          emit-value
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.Courses"
                          label="Course"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                          :options="AllCourse"
                          option-label="courseCode"
                          option-value="courseID"
                          map-options
                          emit-value
                        />
                      </div>

                      <div class="col">
                        <q-select
                          autofocus
                          outlined
                          v-model="inputSchedule.yearLevel"
                          :options="options3"
                          label="Year Level"
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-sm q-py-sm">
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
                          v-model="inputSchedule.Section"
                          label="Section"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                          :options="AllSection"
                          option-label="sectionName"
                          option-value="sectionID"
                          map-options
                          emit-value
                        />
                      </div>
                      <div class="col">
                        <q-select
                          autofocus
                          outlined
                          v-model="inputSchedule.SubjectCodes"
                          label="SubjectCode"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                          :options="subjectCodes"
                          option-label="SubjectCode"
                          option-value="subjectID"
                          map-options
                          emit-value
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputSchedule.Teachers"
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

                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputSchedule.Time"
                          label="Time"
                        />
                      </div>

                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputSchedule.Time2"
                          label="Time 2"
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.Day"
                          :options="options"
                          label="Day"
                        />
                      </div>

                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputSchedule.Day2"
                          :options="options2"
                          label="Day 2"
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
  SchedulingDto,
  SchoolYearDto,
  SectionDto,
  SubjectDto,
  TeacherDto,
} from 'src/services/restapi';
import { scheduling } from 'src/store/scheduling/state';
import { section } from 'src/store/section/state';

@Options({
  computed: {
    ...mapState('scheduling', ['AllSchedule']),
    ...mapState('course', ['AllCourse']),
    ...mapState('section', ['AllSection']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
    ...mapState('schoolyear', ['allSchoolYear']),
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
    ...mapActions('ManagementRoom', ['getAllRoom']),
    ...mapActions('schoolyear', ['getAllSchoolYear']),
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
  allSchoolYear!: SchoolYearDto[];
  getAllsection!: () => Promise<void>;
  getAllschedule!: () => Promise<void>;
  getAllSubjects!: () => Promise<void>;
  getAllTeacher!: () => Promise<void>;
  getAllCourse!: () => Promise<void>;
  getAllSchoolYear!: () => Promise<void>;
  sections: SectionDto[] = [];
  subjectCodes: SubjectDto[] = [];

  columns = [
    {
      name: 'SubjectCode',
      required: true,
      label: 'Subject Code',
      align: 'left',
      field: (row: SchedulingDto) => row.SubjectCodes?.SubjectCode,
      format: (val: string) => `${val}`,
    },
    {
      name: 'DescriptiveTitle',
      align: 'center',
      label: 'Descriptive Title',
      field: (row: SchedulingDto) =>
        row.SubjectCodes?.DescriptiveTitle || 'None',
    },

    {
      name: 'Time',
      align: 'center',
      label: 'Time / Day',
      field: (row: SchedulingDto) =>
        row.Time +
        ' -' +
        row.Time2 +
        ' ' +
        '/ ' +
        row.Day +
        ' ' +
        ' -' +
        row.Day2 +
        ' ',
      format: (val: string) => `${val}`,
    },
    {
      name: 'yearlevel',
      align: 'center',
      label: 'Year Level',
      field: (row: SchedulingDto) => row.yearLevel,
    },
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: (row: SchedulingDto) => row.Courses?.courseCode,
    },
    {
      name: 'section',
      align: 'center',
      label: 'Section',
      field: (row: SchedulingDto) => row.Section?.sectionName,
    },
    {
      name: 'Teachers',
      align: 'center',
      label: 'Adviser',
      field: (row: SchedulingDto) => row.Section?.sectionTeachers?.FullName,
    },

    { name: 'action', align: 'center', label: ' ', field: 'action' },
  ];
  addNewSchedule = false;
  updateSchedule = false;
  AcademicYear = false;
  filter = '';
  Time = '';
  Time2 = '';
  options3 = ['First year', 'Second year', 'Third year', 'Fourth year'];
  options = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  options2 = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  sem = ['1st Semester', '2nd Semester'];

  inputSchedule: SchedulingDto = {
    yearLevel: '',
    Semester: '',
    Day: '',
    Day2: '',
    Time: '',
    Time2: '',
  };
  inputSchoolYear: SchoolYearDto = {
    schoolyear: '',
  };

  async mounted() {
    await this.getAllschedule();
    await this.getAllSubjects();
    await this.getAllTeacher();
    await this.getAllCourse();
    await this.getAllsection();
    await this.getAllSchoolYear();
    this.sections = this.AllSection;
    this.subjectCodes = this.AllSubject;
  }

  filterSubject(val: string) {
    this.subjectCodes = this.AllSubject.filter(
      (i: any) =>
        i.AYCodes.schoolyearid === val &&
        i.YearLevel.toLowerCase() ===
          this.inputSchedule.yearLevel.toLowerCase(),
    );
  }

  filterSection(val: string) {
    this.sections = this.AllSection.filter(
      (i) => i.YearLevel.toLowerCase() == val.toLowerCase(),
    );
  }

  onSelectSection(section: any) {
    this.inputSchedule.Section = section.sectionTeachers;
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
      Day: '',
      Day2: '',
      Time: '',
      Time2: '',
    };
  }
}
</script>
