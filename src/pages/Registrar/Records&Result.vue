<template>
  <q-page class="q-pa-lg">
    <q-card>
      <q-card flat bordered class="col col-md-12 q-pa-md">
        <div class="font2 text-h4 text-bold">
          <q-icon name="style" color="light-black-6" style="font-size: 3rem" />
          CLASS LIST
        </div>
      </q-card>

      <q-card flat bordered class="col col-md-12 q-pa-md">
        <div class="q-gutter-md row">
          <q-select
            label="Year Level"
            v-model="yearFilter"
            :options="Year"
            style="width: 250px"
          />

          <q-select
            label="Section"
            v-model="inputRecords.Section"
            transition-show="scale"
            transition-hide="scale"
            filled
            :options="sections"
            option-label="sectionName"
            option-value="sectionID"
            map-options
            emit-value
            style="width: 250px"
          />

          <q-select
            label="Semester"
            filled
            v-model="semFilter"
            :options="sem"
            style="width: 250px"
          />

          <q-select
            label="Subject"
            transition-show="jump-up"
            transition-hide="jump-up"
            :options="AllSubject"
            option-label="SubjectCode"
            option-value="SubjectCode"
            map-options
            emit-value
            filled
            style="width: 250px"
          />

          <q-btn
            label="LOAD"
            color="blue-10"
            size="20px"
            style="width: 200px"
            @click="showClasslist = true"
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

                    <div class="font2 text-h9 flex flex-center">
                      Republic of the Philippines
                    </div>

                    <div class="font2 text-h9 flex flex-center">
                      Mindanao State University Lanao National College of Arts
                      and Trades
                    </div>

                    <div class="font2 text-h9 flex flex-center">
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
                          <div class="col">Year Level:</div>
                          <div class="col">Course:</div>
                        </div>
                        <div class="row">
                          <div class="col">Subject:</div>
                          <div class="col">Section:</div>
                        </div>
                        <div class="row">
                          <div class="col">Schol Year:</div>
                          <div class="col">Semester:</div>
                        </div>
                      </div>
                    </q-card>
                    <q-card flat bordered class="my-card q-pa-md">
                      <q-table
                        :rows="filterSubject()"
                        :columns="columns"
                        row-key="name"
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
  sem = ['1st Semester', '2nd Semester'];
  Year = ['First year', 'Second year', 'Third year', 'Fourth year'];

  inputRecords: ReportandreportsDto = {};

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
    this.sections = this.AllSection;
  }

  filterSection(val: string) {
    this.sections = this.AllSection.filter(
      (i) => i.YearLevel.toLowerCase() == val.toLowerCase(),
    );
  }

  filterSubject() {
    const result = this.AllSchedule;
    return result;
  }

  print() {
    window.print();
  }
}
</script>
