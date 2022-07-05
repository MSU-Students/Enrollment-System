<template>
  <q-page class="q-pa-lg">
    
   
      <q-form @submit="searchAction()">
        <q-input
          v-model="search"
          style="max-width: 300px"
          dense
          outlined
          bottom-slots
          placeholder="Search for ID Number"
          class="searchinput"
          @clear="clearSearch()"
        >
          <template v-slot:prepend>
            <q-btn flat round size="sm">
              <q-icon name="search" type="submit" size="xs" />
            </q-btn>
          </template>
        </q-input>
      </q-form>
    
    <!-- display search -->
    <div>
    <q-scroll-area style="height: 3rem">
      <q-list v-for="(result, index) in searchResultStudent" :key="index">
        <div v-if="result.IdNum == search">
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
      <div class="q-pa-sm">
        <div class="row" >
          <div class="col">
            Name: {{ inputStudentInfo.FName }}
            {{ inputStudentInfo.MName }}
            {{ inputStudentInfo.LName }}
            </div>
          <div class="col">ID Number: {{ inputStudentInfo.IdNum }}</div>
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
          <div class="col">Religion:{{ inputStudentInfo.religion }}</div>
        </div>
      </div>

      <q-card-section>
        <div class="row q-gutter-sm q-py-sm">
          <div class="col">
            <q-select
              autofocus
              v-model="courseFilter"
              outlined
              dense
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
              dense
              label="Year Level"
              v-model="yearFilter"
              :options="Year"
            />
          </div>

          <div class="col">
            <q-select
              autofocus
              outlined
              dense
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
            class="my-sticky-header-table"
              dense
              title="Subject List and Schedule"
              :rows="filterSubject()"
              :columns="columns1"
              color="primary"
              row-key="name"
              wrap-cells
              hide-bottom
              :grid="$q.screen.xs"
              bordered
              flat
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
            class="my-sticky-header-table"
              dense
              title="Entered Subject and Schedule"
              :rows="AllEnteredSub"
              :columns="columns2"
              color="primary"
              row-key="enteredSubID"
              wrap-cells
              hide-bottom
              :grid="$q.screen.xs"
              bordered
              flat
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
    </div>
  
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
        @click="onConfirmEnrollment()"
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
              <q-img src="~assets/logo.png" style="width: 110px"></q-img>

              <q-card flat class="bg-transparent">
                <br />

                <div class="font2 text-h6 flex flex-center">
                  Republic of the Philippines
                </div>

                <div class="font2 text-h6 flex flex-center">
                  Mindanao State University Lanao National College of Arts and
                  Trades
                </div>

                <div class="font11 text-h6 flex flex-center">
                  Marawi City, Philippines
                </div>

                <div class="font1 text-h3 flex flex-center">
                  CERTIFICATE OF REGISTRATION
                </div>
              </q-card>

              <q-img src="~assets/msulogo.png" style="width: 110px"></q-img>
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
    <template v-slot:body-cell-action="props">
      <q-td :props="props">
        <div class="q-gutter-sm">
          <q-btn
            round
            color="blue"
            label="print"
            size="sm"
            flat
            dense
            @click="printCOR = true"
          />
          <q-dialog v-model="printCOR">
            <q-page class="q-pa-lg">
              <q-card
                style="width: 1000px; height: 600px"
                class="q-px-sm q-pb-md"
                @click="print()"
              >
                <q-toolbar>
                  <q-space />
                  <q-img src="~assets/logo.png" style="width: 110px"></q-img>

                  <q-card flat class="bg-transparent">
                    <br />

                    <div class="font2 text-h6 flex flex-center">
                      Republic of the Philippines
                    </div>

                    <div class="font2 text-h6 flex flex-center">
                      Mindanao State University Lanao National College of Arts
                      and Trades
                    </div>

                    <div class="font11 text-h6 flex flex-center">
                      Marawi City, Philippines
                    </div>

                    <div class="font1 text-h3 flex flex-center">
                      CERTIFICATE OF REGISTRATION
                    </div>
                  </q-card>

                  <q-img src="~assets/msulogo.png" style="width: 110px"></q-img>
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
        </div>
      </q-td>
    </template>
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
  SectionDto,
  StudentRecordDto,
  SubjectDto,
  TeacherDto,
} from 'src/services/restapi';
import { enteredSub } from 'src/store/enteredSub/state';

@Options({
  computed: {
    ...mapState('enteredSub', ['AllEnteredSub']),
    ...mapState('enrollment', ['AllEnrollment']),
    ...mapState('studentRecord', ['AllstudentRecord']),
    ...mapState('Admission', ['allAdmissionInfo']),
    ...mapState('scheduling', ['AllSchedule']),
    ...mapState('course', ['AllCourse']),
    ...mapState('section', ['AllSection']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
  },
  methods: {
    ...mapActions('Admission', ['addNewAdmission', 'getAllAdmission']),
    ...mapActions('scheduling', ['getAllschedule']),
    ...mapActions('course', ['getAllCourse']),
    ...mapActions('section', ['getAllsection']),
    ...mapActions('ManagementSubject', ['getAllSubjects']),
    ...mapActions('ManagementTeacher', ['getAllTeacher']),
    ...mapActions('ManagementRoom', ['getAllRoom']),
    ...mapActions('enteredSub', [
      'addEnteredSubs',
      'editEnteredSubs',
      'deleteEnteredSubs',
      'clear',
    ]),
    ...mapActions('enrollment', [
      'addEnrollment',
      'editEnrollment',
      'deleteEnrollment',
      'getAllEnrollment',
    ]),
    ...mapActions('studentRecord', ['addstudentRecord']),
  },
})
export default class Enrollment extends Vue {
  addEnrollment!: (payload: EnrollmentDto) => Promise<void>;
  editEnrollment!: (payload: EnrollmentDto) => Promise<void>;
  deleteEnrollment!: (payload: EnrollmentDto) => Promise<void>;
  addEnteredSubs!: (payload: enteredSub) => Promise<void>;
  addstudentRecord!: (payload: any) => Promise<void>;

  allAdmissionInfo!: IStudentInfo[];
  AllEnrollment!: EnrollmentDto[];
  AllSchedule!: SchedulingDto[];
  AllSubject!: SubjectDto[];
  allTeacher!: TeacherDto[];
  AllCourse!: CourseDto[];
  AllSection!: SectionDto[];
  AllEnteredSub!: enteredSub[];
  getAllAdmission!: () => Promise<void>;
  getAllEnrollment!: () => Promise<void>;
  getAllschedule!: () => Promise<void>;
  getAllSubjects!: () => Promise<void>;
  getAllTeacher!: () => Promise<void>;
  getAllCourse!: () => Promise<void>;
  getAllsection!: () => Promise<void>;
  sections: SectionDto[] = [];

  columns1 = [
    {
      name: 'subjectCode',
      align: 'center',
      label: 'Subject Code',
      field: (row: SchedulingDto) => row.SubjectCode?.SubjectCode,
    },
    {
      name: 'Units',
      align: 'center',
      label: 'Units',
      field: (row: SchedulingDto) => row.SubjectCode?.Units,
    },

    {
      name: 'Time/Date',
      align: 'center',
      label: 'Time / Date',
      field: (row: SchedulingDto) =>
        row.sections?.time1 +
        ' ' +
        row.sections?.time2 +
        ' ' +
        row.sections?.day1 +
        ' ' +
        row.sections?.day2,
    },
    {
      name: 'Section',
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
    { name: 'checking', align: 'center', label: 'Action', field: 'checking' },
  ];
  columns3 = [
    {
      name: 'SubjectCode',
      align: 'center',
      label: 'Subject Code',
      field: (row: SchedulingDto) => row.SubjectCode?.SubjectCode,
    },
    {
      name: 'Units',
      align: 'center',
      label: 'Units',
      field: (row: SchedulingDto) => row.SubjectCode?.Units,
    },

    {
      name: 'Time/Date',
      align: 'center',
      label: 'Time / Date',
      field: (row: SchedulingDto) =>
        row.sections?.time1 +
        ' ' +
        row.sections?.time2 +
        ' ' +
        row.sections?.day1 +
        ' ' +
        row.sections?.day2,
    },
    {
      name: 'Section',
      align: 'center',
      label: 'Section',
      field: (row: SchedulingDto) => row.sections?.sectionName,
    },
    {
      name: 'Teacher',
      align: 'center',
      label: 'Teacher',
      field: (row: SchedulingDto) => row.Teachers?.FullName,
    },
  ];
  columns2 = [
    {
      name: 'Subject Code',
      align: 'center',
      label: 'Subject Code',
      field: (row: SchedulingDto) => row.SubjectCode?.SubjectCode,
    },
    {
      name: 'Section',
      align: 'center',
      label: 'Section',
      field: (row: SchedulingDto) => row.sections?.sectionName,
    },
    {
      name: 'DescriptiveTitle',
      align: 'center',
      label: 'Descriptive Title',
      field: (row: SchedulingDto) => row.SubjectCode?.DescriptiveTitle,
    },
    {
      name: 'Time and Date',
      align: 'center',
      label: 'Time and Date',
      field: (row: SchedulingDto) =>
        row.sections?.time1 +
        ' ' +
        row.sections?.time2 +
        ' ' +
        row.sections?.day1 +
        ' ' +
        row.sections?.day2,
    },
    {
      name: 'Units',
      align: 'center',
      label: 'Units',
      field: (row: SchedulingDto) => row.SubjectCode?.Units,
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
  printCOR = false;
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
    semester: '',
  };

  currentStudent = { ...this.inputStudentInfo };

  inputEnrollee: EnrollmentDto = {
    enteredsubjectCode: '',
    enteredsection: '',
    entereddescriptiveTitle: '',
    enteredtime: '',
    entereddate: '',
    enteredunits: '',
    enteredteacher: '',
  };

  inputSchedule: SchedulingDto = {
    yearLevel: '',
    Semester: '',
    AcademicYear: '',
  };

  async mounted() {
    await this.getAllAdmission();
    await this.getAllEnrollment();
    await this.getAllschedule();
    await this.getAllSubjects();
    await this.getAllTeacher();
    await this.getAllCourse();
    await this.getAllsection();
    this.filterSubject();
    console.log(this.AllEnteredSub);
  }

  onShowClick(res: any) {
    this.displayInfo = true;
    this.inputStudentInfo = res;
  }

  async onaddEnrollee(val: any) {
    await this.addEnrollment(this.inputEnrollee);
    this.addNewEnrollee = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  /////
  inputTempSub: enteredSub = {
    enteredsubjectCode: '',
    enteredsection: '',
    entereddescriptiveTitle: '',
    enteredtime: '',
    entereddate: '',
    enteredunits: '',
    enteredteacher: '',
  };

  inputStudentRecord: StudentRecordDto = {};
  resetStudentRecord() {
    this.inputStudentRecord = {};
  }

  async onaddSub(val: SchedulingDto) {
    await this.addEnteredSubs({
      ...val,
      enteredsubjectCode: val.SubjectCode?.SubjectCode,
      enteredsection: val.sections?.sectionName,
      entereddescriptiveTitle: val.SubjectCode?.DescriptiveTitle,
      enteredtime: val.sections?.time1 + '-' + val.sections?.time2,
      entereddate: val.sections?.day1 + '-' + val.sections?.day2,
      enteredunits: val.SubjectCode?.Units,
      enteredteacher: val.Teachers?.FullName,
    } as enteredSub);
    this.resetSubject();
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  onConfirmEnrollment() {
    console.log('this.inputStudentRecord', this.inputStudentRecord);
    console.log('this.inputStudentInfo', {
      Idnumber: this.inputStudentInfo.admissionID,
    });
    this.$q
      .dialog({
        message: 'Confirm to enroll?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.addstudentRecord({
          Idnumber: this.inputStudentInfo.admissionID,
        });
        this.$q.notify({
          type: 'positive',
          message: 'Successfully enrolled',
        });
        // eslint-disable-next-line @typescript-eslint/unbound-method
        this.resetStudentRecord;
      });
  }

  /////

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
    return result;
  }

  clearSearch() {
    this.search = '';
  }
  print() {
    window.print();
  }

  resetSubject() {
    this.inputTempSub = {
      enteredsubjectCode: '',
      enteredsection: '',
      entereddescriptiveTitle: '',
      enteredtime: '',
      entereddate: '',
      enteredunits: '',
      enteredteacher: '',
    };
  }

  resetModel() {
    this.inputEnrollee = {
      enteredsubjectCode: '',
      enteredsection: '',
      entereddescriptiveTitle: '',
      enteredtime: '',
      entereddate: '',
      enteredunits: '',
      enteredteacher: '',
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
