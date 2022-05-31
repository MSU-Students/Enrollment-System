<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="people" color="light-black-6" style="font-size: 4rem" />
      Student Enrollment
    </div>

    <br />

    <q-table
      title="Master List"
      :rows="AllEnrollment"
      :columns="columns"
      row-key="name"
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
            label="Add Enrollee"
            color="primary"
            e
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
              <q-scroll-area style="height: 10rem">
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

              <q-card class="q-pa-lg q-gutter-sm q-py-sm">
                <div class="col">
                  Name: {{ inputStudentInfo.FName }}
                  {{ inputStudentInfo.MName }} {{ inputStudentInfo.LName }}
                </div>
                <div class="col">ID Number: {{ inputStudentInfo.IdNum }}</div>
              </q-card>

              <q-card-section>
                <div class="row q-gutter-sm q-py-sm">
                  <div class="col">
                    <q-select
                      autofocus
                      v-model="inputEnrollee.course"
                      outlined
                      label="Course"
                      transition-show="flip-up"
                      transition-hide="flip-down"
                      :options="AllSchedule"
                      option-label="courseCode"
                      option-value="scheduleID"
                      map-options
                      emit-value
                    />
                    <br />
                  </div>
                  <div class="col">
                    <q-select
                      autofocus
                      outlined
                      v-model="inputEnrollee.section"
                      label="Section"
                      transition-show="flip-up"
                      transition-hide="flip-down"
                      :options="AllSchedule"
                      option-label="sectionName"
                      option-value="scheduleID"
                      map-options
                      emit-value
                    />
                    <br />
                  </div>
                </div>

                <div class="row q-gutter-sm q-py-sm">
                  <div class="col">
                    <q-select
                      autofocus
                      outlined
                      label="Year Level"
                      v-model="inputEnrollee.yearLevel"
                      transition-show="flip-up"
                      transition-hide="flip-down"
                      :options="AllSchedule"
                      option-label="yearLevel"
                      option-value="scheduleID"
                      map-options
                      emit-value
                    />
                  </div>

                  <div class="col">
                    <q-select
                      autofocus
                      outlined
                      item-aligned="left"
                      label="Semester"
                      v-model="inputEnrollee.semester"
                      transition-show="flip-up"
                      transition-hide="flip-down"
                      :options="AllSchedule"
                      option-label="Semester"
                      option-value="scheduleID"
                      map-options
                      emit-value
                    />
                  </div>
                </div>
              </q-card-section>

              <div class="q-pa-md bg-cyan-11col col-md-4">
                <q-table
                  title="Subject List and Schedule"
                  :rows="AllEnrollment"
                  :columns="columns1"
                  color="primary"
                  row-key="name"
                />

                <q-card-actions align="center">
                  <q-btn
                    label="Cancel"
                    color="red-10"
                    v-close-popup
                    type="submit"
                  />
                  <q-btn
                    label="Enroll Student"
                    color="blue-10"
                    v-close-popup
                    type="submit"
                  />
                  <q-btn
                    label="Print Priview"
                    color="blue-10"
                    v-close-popup
                    type="submit"
                  />
                </q-card-actions>
              </div>
            </q-card>
          </q-dialog>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { IStudentInfo } from 'src/store/Admission/state';
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { enrollmentmodule } from 'src/store/enrollment/state';
import {
  AdmissionDto,
  EnrollmentDto,
  SchedulingDto,
} from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('enrollment', ['AllEnrollment']),
    ...mapState('Admission', ['allAdmissionInfo']),
    ...mapState('scheduling', ['AllSchedule']),
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
  },
})
export default class Enrollment extends Vue {
  addEnrollment!: (payload: EnrollmentDto) => Promise<void>;
  editEnrollment!: (payload: EnrollmentDto) => Promise<void>;
  deleteEnrollment!: (payload: EnrollmentDto) => Promise<void>;
  allAdmissionInfo!: IStudentInfo[];
  AllEnrollment!: EnrollmentDto[];
  AllSchedule!: SchedulingDto[];
  getAllAdmission!: () => Promise<void>;
  getAllEnrollment!: () => Promise<void>;
  getAllschedule!: () => Promise<void>;

  async mounted() {
    await this.getAllAdmission();
    await this.getAllEnrollment();
    await this.getAllschedule();
  }

  columns = [
    {
      name: 'StudentID',
      required: true,
      label: 'Student ID',
      align: 'left',
      field: (row: any) => row.Admission?.StudentID || 'None',
    },
    {
      name: 'Fullname',
      align: 'center',
      label: 'Full Name',
      field: (row: any) =>
        row.Admission?.FName +
          ' ' +
          row.Admission?.MName +
          ' ' +
          row.Admission?.LName || 'None',
    },
    {
      name: 'AcademicYear',
      align: 'center',
      label: 'Academic Year',
      field: (row: any) => row.schoolyear?.schoolyear || 'None',
    },
    {
      name: 'Semester',
      align: 'center',
      label: 'Semester',
      field: (row: any) => row.Scheduling?.Semester || 'None',
    },
    {
      name: 'Course',
      align: 'center',
      label: 'Course',
      field: (row: any) => row.Course?.courseCode || 'None',
    },
    {
      name: 'YearLevel',
      align: 'center',
      label: 'Year Level',
      field: (row: any) => row.Scheduling?.AcademicYear || 'None',
    },
    {
      name: 'Section',
      align: 'center',
      label: 'Section',
      field: (row: any) => row.section?.sectionName || 'None',
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];

  columns1 = [
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
    {
      name: 'Units',
      align: 'center',
      label: 'Units',
      field: 'Units',
    },
    {
      name: 'Semester',
      align: 'center',
      label: 'Semester',
      field: 'Semester',
    },
    {
      name: 'Time/Date',
      align: 'center',
      label: 'Time / Date',
      field: 'Time/Date',
    },
    {
      name: 'Teacher',
      align: 'center',
      label: 'Teacher',
      field: 'Teacher',
    },
  ];

  search = '';
  onFindSubjects = false;
  displayInfo = false;
  selectedYear = '';
  filter = '';
  printPreview = false;
  addNewEnrollee = false;
  updateEnrollee = false;
  options1 = ['First year', 'Second year', 'Third year', 'Fourth year'];

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
  };

  currentStudent = { ...this.inputStudentInfo };

  inputEnrollee: EnrollmentDto = {};
  inputSchedule: SchedulingDto = {
    yearLevel: '',
    AcademicYear: '',
    Semester: '',
    Day: '',
    Day2: '',
    Time: '',
    Time2: '',
  };

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
    };
  }
}
</script>
