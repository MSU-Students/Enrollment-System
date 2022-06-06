<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="people" color="light-black-6" style="font-size: 4rem" />
      Student Enrollment
    </div>

    <br />

    <q-table
      title="Student Enrolled Master List"
      :rows="AllEnrollment"
      :columns="columns"
      row-key="enrollmentID"
      :rows-per-page-options="[0]"
      :filter="filter"
      dense
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
            label="Add Enrollee"
            color="primary"
            dense
            flat
            icon="add"
            @click="addNewEnrollee = true"
          />
          <q-dialog v-model="addNewEnrollee" persistent>
            <q-card style="width: 1405px; max-width: 90vw">
              <q-card class="col">
                <div class="q-pa-md text-h6 flex justify-left bg-primary">
                  ENROLLMENT MODULE
                </div>
              </q-card>
              <div class="q-pa-md q-gutter-sm row">
                <q-form @submit="searchAction()">
                  <q-input
                    v-model="search"
                    style="max-width: 300px"
                    dense
                    filled
                    outlined
                    bottom-slots
                    placeholder="Search for ID Number"
                    class="searchinput"
                    @clear="clearSearch()"
                  >
                    <template v-slot:prepend>
                      <q-btn flat round size="sm">
                        <q-icon name="bi-search" type="submit" size="xs" />
                      </q-btn>
                    </template>
                  </q-input>
                </q-form>
              </div>
              <!-- display search         -->
              <q-scroll-area style="height: 3rem">
                <q-list
                  v-for="(result, index) in searchResultStudent"
                  :key="index"
                >
                  <div v-if="result.IdNum">
                    <q-item
                      clickable
                      dense
                      class="q-pt-md q-my-sm row items-center"
                      style="height: 3rem"
                      @click="onShowClick(result)"
                    >
                      <div class="col">
                        <q-item-section>
                          <q-item-label
                            lines="1"
                            class="defaultfont-semibold"
                            style="font-size: medium"
                          >
                            {{ result.FName }} {{ result.MName }}
                            {{ result.LName }}
                          </q-item-label>
                          <q-item-label lines="1" style="font-size: small">
                            <p>@{{ result.IdNum }}</p>
                          </q-item-label>
                        </q-item-section>
                      </div>
                    </q-item>
                  </div>
                </q-list>
              </q-scroll-area>
              <!-- display name -->

              <q-card class="q-pa-sm q-gutter-sm q-py-sm">
                <div class="q-pa-md">
                  <div class="row">
                    <div class="col">
                      Name: {{ inputStudentInfo.FName }}
                      {{ inputStudentInfo.MName }}
                      {{ inputStudentInfo.LName }}
                    </div>
                    <div class="col">
                      ID Number: {{ inputStudentInfo.IdNum }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      Year:
                      {{ inputStudentInfo.incomingYlevel }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">Gender: {{ inputStudentInfo.gender }}</div>
                    <div class="col">
                      Civil Status:
                      {{ inputStudentInfo.martialStatus }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      Religion:{{ inputStudentInfo.religion }}
                    </div>
                  </div>
                </div>

                <q-card-section>
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-select
                        autofocus
                        v-model="courseFilter"
                        outlined
                        label="Course"
                        transition-show="flip-up"
                        transition-hide="flip-down"
                        :options="AllCourse"
                        option-label="courseCode"
                        option-value="courseCode"
                        map-options
                        emit-value
                      />
                      <br />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        label="Year Level"
                        v-model="yearFilter"
                        :options="Year"
                      />
                    </div>

                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        item-aligned="left"
                        label="Semester"
                        v-model="semFilter"
                        :options="sem"
                      />
                    </div>
                  </div>

                  <!-- Table result -->
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-table
                        dense
                        title="Subject List and Schedule"
                        :rows="filterSubject()"
                        :columns="columns1"
                        color="primary"
                        row-key="name"
                        wrap-cells
                        hide-bottom
                      >
                        <template v-slot:body-cell-checking="props">
                          <q-td :props="props">
                            <div class="q-gutter-sm">
                              <q-btn
                                round
                                color="blue"
                                icon="check"
                                size="sm"
                                flat
                                dense
                                @click="onaddSub(props.row)"
                              />
                            </div>
                          </q-td>
                        </template>
                      </q-table>
                    </div>
                    <div class="col">
                      <q-table
                        dense
                        title="Subject List and Schedule"
                        :rows="AllEnteredSub"
                        :columns="columns2"
                        color="primary"
                        row-key="enteredSubID"
                        wrap-cells
                        hide-bottom
                      />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
              <q-card-actions align="center">
                <q-btn
                  label="Cancel"
                  color="red-10"
                  v-close-popup
                  @click="resetModel()"
                />
                <q-btn
                  label="Enroll Student"
                  color="blue-10"
                  v-close-popup
                  type="submit"
                  @click="onaddEnrollee()"
                />
                <!-- printPreview -->
                <q-btn
                  label="Print Preview"
                  color="blue-10"
                  @click="printPreview = true"
                />
                <q-dialog v-model="printPreview">
                  <q-page class="q-pa-lg">
                    <q-card
                      style="width: 1000px; height: 600px"
                      class="q-px-sm q-pb-md"
                      @click="print()"
                    >
                      <q-toolbar>
                        <q-space />
                        <q-img
                          src="~assets/logo.png"
                          style="width: 110px"
                        ></q-img>

                        <q-card flat class="bg-transparent">
                          <br />

                          <div class="font2 text-h6 flex flex-center">
                            Republic of the Philippines
                          </div>

                          <div class="font2 text-h6 flex flex-center">
                            Mindanao State University Lanao National College of
                            Arts and Trades
                          </div>

                          <div class="font11 text-h6 flex flex-center">
                            Marawi City, Philippines
                          </div>

                          <div class="font1 text-h3 flex flex-center">
                            CERTIFICATE OF REGISTRATION
                          </div>
                        </q-card>

                        <q-img
                          src="~assets/msulogo.png"
                          style="width: 110px"
                        ></q-img>
                        <q-space />
                      </q-toolbar>

                      <q-card>
                        <div class="q-pa-md col col-md-12">
                          <q-card flat bordered class="col col-md-12 q-pa-md">
                            <div class="q-pa-md">
                              <div class="row">
                                <div class="col">
                                  Name: {{ inputStudentInfo.FName }}
                                  {{ inputStudentInfo.MName }}
                                  {{ inputStudentInfo.LName }}
                                </div>
                                <div class="col">
                                  ID Number: {{ inputStudentInfo.IdNum }}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  Year:
                                  {{ inputStudentInfo.incomingYlevel }}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  Gender: {{ inputStudentInfo.gender }}
                                </div>
                                <div class="col">
                                  Civil Status:
                                  {{ inputStudentInfo.martialStatus }}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  Religion:{{ inputStudentInfo.religion }}
                                </div>
                              </div>
                            </div>
                          </q-card>
                          <!-- table for COR -->
                          <q-card flat bordered class="my-card q-pa-md">
                            <q-table
                              dense
                              :rows="AllEnteredSub"
                              :columns="columns2"
                              row-key="name"
                              :filter="filter"
                              wrap-cells
                              hide-bottom
                            />
                          </q-card>
                        </div>
                      </q-card>
                    </q-card>
                  </q-page>
                </q-dialog>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </template>
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn round color="blue" label="print" size="sm" flat dense />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { IStudentInfo } from 'src/store/Admission/state';
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import {
  AdmissionDto,
  CourseDto,
  EnrollmentDto,
  SchedulingDto,
  SchoolYearDto,
  SectionDto,
  SubjectDto,
  TeacherDto,
} from 'src/services/restapi';
import { enteredSub } from 'src/store/enteredSub/state';

@Options({
  computed: {
    ...mapState('enteredSub', ['AllEnteredSub']),
    ...mapState('enrollment', ['AllEnrollment']),
    ...mapState('Admission', ['allAdmissionInfo']),
    ...mapState('scheduling', ['AllSchedule']),
    ...mapState('course', ['AllCourse']),
    ...mapState('section', ['AllSection']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
    ...mapState('schoolyear', ['allSchoolYear']),
  },
  methods: {
    ...mapActions('enrollment', [
      'addEnrollment',
      'editEnrollment',
      'deleteEnrollment',
      'getAllEnrollment',
    ]),
    ...mapActions('Admission', ['addNewAdmission', 'getAllAdmission']),
    ...mapActions('scheduling', ['getAllschedule']),
    ...mapActions('course', ['getAllCourse']),
    ...mapActions('section', ['getAllsection']),
    ...mapActions('ManagementSubject', ['getAllSubjects']),
    ...mapActions('ManagementTeacher', ['getAllTeacher']),
    ...mapActions('ManagementRoom', ['getAllRoom']),
    ...mapActions('schoolyear', ['getAllSchoolYear']),
    ...mapActions('enteredSub', [
      'addEnteredSubs',
      'editEnteredSubs',
      'deleteEnteredSubs',
      'clear',
    ]),
  },
})
export default class Enrollment extends Vue {
  addEnrollment!: (payload: EnrollmentDto) => Promise<void>;
  editEnrollment!: (payload: EnrollmentDto) => Promise<void>;
  deleteEnrollment!: (payload: EnrollmentDto) => Promise<void>;

  addEnteredSubs!: (payload: enteredSub) => Promise<void>;

  allAdmissionInfo!: IStudentInfo[];
  AllEnrollment!: EnrollmentDto[];
  AllSchedule!: SchedulingDto[];
  AllSubject!: SubjectDto[];
  allTeacher!: TeacherDto[];
  AllCourse!: CourseDto[];
  AllSection!: SectionDto[];
  allSchoolYear!: SchoolYearDto[];
  AllEnteredSub!: enteredSub[];
  getAllAdmission!: () => Promise<void>;
  getAllEnrollment!: () => Promise<void>;
  getAllschedule!: () => Promise<void>;
  getAllSubjects!: () => Promise<void>;
  getAllTeacher!: () => Promise<void>;
  getAllCourse!: () => Promise<void>;
  getAllSchoolYear!: () => Promise<void>;
  getAllsection!: () => Promise<void>;
  sections: SectionDto[] = [];

  columns = [
    {
      name: 'StudentID',
      required: true,
      label: 'Student ID',
      align: 'left',
      field: 'StudentID',
    },
    {
      name: 'Fullname',
      align: 'center',
      label: 'Full Name',
      field: 'Fullname',
    },
    {
      name: 'AcademicYear',
      align: 'center',
      label: 'Academic Year',
      field: 'AcademicYear',
    },
    {
      name: 'Semester',
      align: 'center',
      label: 'Semester',
      field: 'Semester',
    },
    {
      name: 'Course',
      align: 'center',
      label: 'Course',
      field: 'Course',
    },
    {
      name: 'YearLevel',
      align: 'center',
      label: 'Year Level',
      field: 'YearLevel',
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];

  columns1 = [
    {
      name: 'SubjectCode',
      align: 'center',
      label: 'Subject Code',
      field: (row: SchedulingDto) => row.SubjectCodes?.SubjectCode,
    },
    {
      name: 'Units',
      align: 'center',
      label: 'Units',
      field: (row: SchedulingDto) => row.SubjectCodes?.Units,
    },

    {
      name: 'Time/Date',
      align: 'center',
      label: 'Time / Date',
      field: (row: SchedulingDto) =>
        row.Time + ' ' + row.Time2 + ' ' + row.Day + ' ' + row.Day2,
    },
    {
      name: 'Section',
      align: 'center',
      label: 'Section',
      field: (row: SchedulingDto) => row.Section?.sectionName,
    },
    {
      name: 'teacher',
      align: 'center',
      label: 'Teacher',
      field: (row: SchedulingDto) => row.Section?.sectionTeachers?.FullName,
    },
    { name: 'checking', align: 'center', label: 'Action', field: 'checking' },
  ];
  columns3 = [
    {
      name: 'SubjectCode',
      align: 'center',
      label: 'Subject Code',
      field: (row: SchedulingDto) => row.SubjectCodes?.SubjectCode,
    },
    {
      name: 'Units',
      align: 'center',
      label: 'Units',
      field: (row: SchedulingDto) => row.SubjectCodes?.Units,
    },

    {
      name: 'Time/Date',
      align: 'center',
      label: 'Time / Date',
      field: (row: SchedulingDto) =>
        row.Time + ' ' + row.Time2 + ' ' + row.Day + ' ' + row.Day2,
    },
    {
      name: 'Section',
      align: 'center',
      label: 'Section',
      field: (row: SchedulingDto) => row.Section?.sectionName,
    },
    {
      name: 'Teacher',
      align: 'center',
      label: 'Teacher',
      field: (row: SchedulingDto) => row.Section?.sectionTeachers?.FullName,
    },
  ];
  columns2 = [
    {
      name: 'Subject Code',
      align: 'center',
      label: 'Subject Code',
      field: (row: SchedulingDto) => row.SubjectCodes?.SubjectCode,
    },
    {
      name: 'Section',
      align: 'center',
      label: 'Section',
      field: (row: SchedulingDto) => row.Section?.sectionName,
    },
    {
      name: 'DescriptiveTitle',
      align: 'center',
      label: 'Descriptive Title',
      field: (row: SchedulingDto) => row.SubjectCodes?.DescriptiveTitle,
    },
    {
      name: 'Time and Date',
      align: 'center',
      label: 'Time and Date',
      field: (row: SchedulingDto) =>
        row.Time + ' ' + row.Time2 + ' ' + row.Day + ' ' + row.Day2,
    },
    {
      name: 'Units',
      align: 'center',
      label: 'Units',
      field: (row: SchedulingDto) => row.SubjectCodes?.Units,
    },
  ];

  search = '';
  courseFilter = '';
  yearFilter = '';
  semFilter = '';
  onFindSubjects = false;
  displayInfo = false;
  selectedYear = '';
  filter = '';
  printPreview = false;
  addNewEnrollee = false;
  updateEnrollee = false;
  Year = ['First year', 'Second year', 'Third year', 'Fourth year'];
  sem = ['1st Semester', '2nd Semester'];

  inputStudentInfo: AdmissionDto = {
    reportCard: false,
    bCertificate: false,
    Pic: false,
    eForm: false,
    IdNum: '',
    lrn: '',
    ayCode: '',
    incomingYlevel: '',
    studentType: '',
    FName: '',
    MName: '',
    LName: '',
    age: '',
    dataOfBirth: '',
    placeOfBirth: '',
    contactNo: '',
    gender: '',
    martialStatus: '',
    citizenship: '',
    religion: '',
    address: '',
    course: '',
  };

  currentStudent = { ...this.inputStudentInfo };

  inputEnrollee: EnrollmentDto = {};
  inputSchedule: SchedulingDto = {
    yearLevel: '',
    Semester: '',
    Day: '',
    Day2: '',
    Time: '',
    Time2: '',
  };

  async mounted() {
    await this.getAllAdmission();
    await this.getAllEnrollment();
    await this.getAllschedule();
    await this.getAllSubjects();
    await this.getAllTeacher();
    await this.getAllCourse();
    await this.getAllsection();
    await this.getAllSchoolYear();
    this.filterSubject();
  }

  onShowClick(res: any) {
    this.displayInfo = true;
    this.inputStudentInfo = res;
  }

  async onaddEnrollee() {
    await this.addEnrollment(this.inputEnrollee);
    this.addNewEnrollee = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  /////

  async onaddSub(Val: enteredSub) {
    await this.addEnteredSubs(Val);
  }

  /////

  async oneditEnrollee() {
    await this.editEnrollment(this.inputEnrollee);
    this.updateEnrollee = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificEnrollee(val: any) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteEnrollment(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: any) {
    this.updateEnrollee = true;
    this.inputEnrollee = { ...val };
  }

  searchResultStudent: IStudentInfo[] = [];

  searchAction() {
    const resultStudentInfo = this.allAdmissionInfo.filter((IStudentInfo) =>
      IStudentInfo.IdNum.toLowerCase().includes(this.search.toLowerCase()),
    );
    this.searchResultStudent = resultStudentInfo;
  }

  filterSubject() {
    const result = this.AllSchedule.filter(
      (s) =>
        s.Courses?.courseCode === this.courseFilter &&
        s.yearLevel === this.yearFilter &&
        s.Semester === this.semFilter,
    );
    console.log(result);
    return result;
  }

  clearSearch() {
    this.search = '';
  }
  print() {
    window.print();
  }

  resetModel() {
    this.inputStudentInfo = {
      reportCard: false,
      bCertificate: false,
      Pic: false,
      eForm: false,
      IdNum: '',
      lrn: '',
      ayCode: '',
      incomingYlevel: '',
      studentType: '',
      FName: '',
      MName: '',
      LName: '',
      age: '',
      dataOfBirth: '',
      placeOfBirth: '',
      contactNo: '',
      gender: '',
      martialStatus: '',
      citizenship: '',
      religion: '',
      address: '',
      course: '',
    };
  }
}
</script>
