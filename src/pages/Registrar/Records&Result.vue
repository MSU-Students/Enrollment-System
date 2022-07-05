<template>
  <q-page class="q-pa-lg">
    <q-card>
      <q-card flat bordered class="col col-md-12 q-pa-md">
        <div class="font1 text-h4 text-bold flex flex-center">
          <q-icon name="style" color="black" style="font-size: 3rem" />
          CLASS LIST
        </div>
      </q-card>

      <q-card flat bordered class="col col-md-12 q-pa-md">
        <div class="q-gutter-md row">
          <q-select
          dense
            label="Year Level"
            v-model="yearFilter"
            :options="Year"
            style="width: 250px"
          />

          <q-select
          dense
            label="Section"
            v-model="sectionFilter"
            :options="sections"
            option-label="sectionName"
            option-value="sectionID"
            map-options
            emit-value
            style="width: 250px"
          />

          <q-select
          dense
            label="Semester"
            v-model="semFilter"
            :options="sem"
            style="width: 250px"
          />

          <q-select
          dense
            label="Subject"
            v-model="subjectFilter"
            :options="AllSubject"
            option-label="SubjectCode"
            option-value="subjectID"
            map-options
            emit-value
            style="width: 250px"
          />
          <q-btn
            dense
            label="LOAD"
            color="blue-10"
            size="20px"
            style="width: 200px"
            @click="openViewStudentRecord"
          />
          <q-dialog v-model="showClasslist">
            <q-page class="q-pa-lg">
              <q-card
                style="width: 800px; height: 1000px"
                class="q-px-sm q-pb-md"
                @click="print()"
              >
                <q-toolbar>
                  <q-space />
                  <q-img src="~assets/logo.png" style="width: 100px"></q-img>

                  <q-card flat class="bg-transparent">
                    <br />

                    <div class="font1 text-h9 flex flex-center">
                      Republic of the Philippines
                    </div>

                    <div class="font1 text-h9 flex flex-center">
                      Mindanao State University Lanao National College of Arts
                      and Trades
                    </div>

                    <div class="font1 text-h9 flex flex-center">
                      Marawi City, Philippines
                    </div>

                    <div class="font1 text-h6 flex flex-center">Class List</div>
                  </q-card>

                  <q-img src="~assets/msulogo.png" style="width: 100px"></q-img>
                  <q-space />
                </q-toolbar>

                <q-card>
                  <div class="q-pa-sm col col-md-12">
                    <q-card flat bordered class="col col-md-12 q-pa-sm">
                      <div class="q-pa-md">
                        <div class="row">
                          <div class="col">Year Level: {{inputStudentRecord.enrolledSub}}</div>
                          <div class="col">Course: {{inputStudentRecord.enrolledSub?.Courses?.course}}</div>
                        </div>
                        <div class="row">
                          <div class="col">Subject: {{inputStudentRecord.enrolledSub?.enteredsubjectCode}}</div>
                          <div class="col">Section: {{inputStudentRecord.enrolledSub?.enteredsection}}</div>
                        </div>
                        <div class="row">
                          <div class="col">Schol Year: {{inputStudentRecord.enrolledSub}}</div>
                          <div class="col">Semester: {{inputStudentRecord.enrolledSub}}</div>
                        </div>
                      </div>
                    </q-card>
                    <q-card flat bordered class="my-card q-pa-md">
                      <q-table
                        dense
                        :rows="filterSubject()"
                        :columns="columns"
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
      </q-card>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import {
  CourseDto,
  EnrollmentDto,
  ReportandreportsDto,
  SchedulingDto,
  SectionDto,
  StudentRecordDto,
  SubjectDto,
  TeacherDto,
} from 'src/services/restapi';
import { IStudentInfo } from 'src/store/Admission/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('enrollment', ['AllEnrollment']),
    ...mapState('Admission', ['allAdmissionInfo']),
    ...mapState('scheduling', ['AllSchedule']),
    ...mapState('course', ['AllCourse']),
    ...mapState('section', ['AllSection']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
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
  },
})
export default class ManageSubject extends Vue {
  allAdmissionInfo!: IStudentInfo[];
  AllEnrollment!: EnrollmentDto[];
  AllSchedule!: SchedulingDto[];
  AllSubject!: SubjectDto[];
  allTeacher!: TeacherDto[];
  AllCourse!: CourseDto[];
  AllSection!: SectionDto[];
  getAllAdmission!: () => Promise<void>;
  getAllEnrollment!: () => Promise<void>;
  getAllschedule!: () => Promise<void>;
  getAllSubjects!: () => Promise<void>;
  getAllTeacher!: () => Promise<void>;
  getAllCourse!: () => Promise<void>;
  getAllsection!: () => Promise<void>;
  sections: SectionDto[] = [];

  // mapSubject(data: ReportandreportsDto){
  //   return this.AllEnrollment.filter(
      
  //   )
  // }

  columns = [
    {
      name: 'StudentID',
      required: true,
      label: 'Student ID',
      align: 'left',
      field: 'StudentID',
    },
    {
      name: 'LastName',
      align: 'center',
      label: 'Last Name',
      field: 'LastName',
    },
    {
      name: 'FirstName',
      align: 'center',
      label: 'First Name',
      field: 'FirstName',
    },
    {
      name: 'MiddleName',
      align: 'center',
      label: 'MiddleName',
      field: 'MiddleName',
    },
  ];

  showClasslist = false;
  yearFilter = '';
  sectionFilter = '';
  semFilter = '';
  subjectFilter = '';
  filter = '';
  showSubjectList = false;
  sem = ['1st Semester', '2nd Semester'];
  Year = ['First year', 'Second year', 'Third year', 'Fourth year'];

  inputRecords: ReportandreportsDto = {};
  
   inputStudentRecord: StudentRecordDto = {};

  async mounted() {
    await this.getAllAdmission();
    await this.getAllEnrollment();
    await this.getAllschedule();
    await this.getAllSubjects();
    await this.getAllTeacher();
    await this.getAllCourse();
    await this.getAllsection();
    this.filterSubject();
    this.sections = this.AllSection;
  }

  filterSubject() {
    const result = this.AllSchedule.filter(
      (s) =>
        s.sections?.sectionName === this.sectionFilter &&
        s.yearLevel === this.yearFilter &&
        s.Semester === this.semFilter && 
        s.SubjectCode?.SubjectCode === this.subjectFilter,
    );
    return result;
  }

  openViewStudentRecord(res: any) {
    this.showClasslist = true;
    this.inputStudentRecord = res;
  }

  print() {
    window.print();
  }
}
</script>
