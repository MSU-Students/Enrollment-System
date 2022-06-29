<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="house" color="light-blue-6" style="font-size: 4rem" />
      Student Records
    </div>

    <br />

    <q-table
      title="Student Records"
      :rows="AllstudentRecord"
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
        </div>
      </template>

      <template v-slot:body-cell-viewStudentRecord="props">
        <q-td :props="props">
          <div>
            <q-btn
              round
              color="teal-4"
              icon="open_in_new"
              size="sm"
              flat
              dense
              @click="openViewStudentRecord(props.row)"
            />
          </div>
          <q-dialog v-model="showSubjectList">
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
                    <!-- table for COR -->
                    <q-card flat bordered class="my-card q-pa-md">
                      <q-table
                        dense
                        :rows="mapEnrollSub(inputStudentRecord)"
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
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { EnrollmentDto, StudentRecordDto } from 'src/services/restapi';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('studentRecord', ['AllstudentRecord']),
    ...mapState('enrollment', ['AllEnrollment']),
  },
  methods: {
    ...mapActions('studentRecord', ['getAllstudentRecord']),
    ...mapActions('enrollment', [
      'addEnrollment',
      'editEnrollment',
      'deleteEnrollment',
      'getAllEnrollment',
    ]),
  },
})
export default class studentRecord extends Vue {
  getAllstudentRecord!: () => Promise<void>;
  getAllEnrollment!: () => Promise<void>;
  AllstudentRecord!: studentRecord[];
  AllEnrollment!: EnrollmentDto[];

  mapEnrollSub(data: StudentRecordDto) {
    return this.AllEnrollment.filter(
      (s) => s.cor?.StudentRecordID === data.StudentRecordID,
    );
  }

  async mounted() {
    await this.getAllstudentRecord();
    await this.getAllEnrollment();
  }
  columns = [
    {
      name: 'studentID',
      required: true,
      label: 'Student ID',
      align: 'left',
      field: (row: any) => row.Idnumber?.IdNum,
    },
    {
      name: 'fullName',
      align: 'center',
      label: 'Full Name',
      field: (row: any) =>
        row.Idnumber?.FName +
        ' ' +
        row.Idnumber?.MName +
        ' ' +
        row.Idnumber?.LName,
      format: (val: string) => `${val}`,
    },

    {
      name: 'viewStudentRecord',
      align: 'center',
      label: 'View Subject Taken',
    },
  ];

  columns2 = [
    {
      name: 'Subject Code',
      align: 'center',
      label: 'Subject Code',
      field: (row: EnrollmentDto) => row.enteredsubjectCode,
    },
    {
      name: 'Section',
      align: 'center',
      label: 'Section',
      field: (row: EnrollmentDto) => row.enteredsection,
    },
    {
      name: 'DescriptiveTitle',
      align: 'center',
      label: 'Descriptive Title',
      field: (row: EnrollmentDto) => row.entereddescriptiveTitle,
    },
    {
      name: 'Time and Date',
      align: 'center',
      label: 'Time and Date',
      field: (row: EnrollmentDto) => row.enteredtime + ' ' + row.entereddate,
    },
    {
      name: 'Units',
      align: 'center',
      label: 'Units',
      field: (row: EnrollmentDto) => row.enteredunits,
    },
  ];

  addNewRoom = false;
  updateCourse = false;
  filter = '';
  showSubjectList = false;

  inputStudentRecord: StudentRecordDto = {};

  inputEnrollee: EnrollmentDto = {
    enteredsubjectCode: '',
    enteredsection: '',
    entereddescriptiveTitle: '',
    enteredtime: '',
    entereddate: '',
    enteredunits: '',
    enteredteacher: '',
  };

  openViewStudentRecord(val: StudentRecordDto) {
    this.showSubjectList = true;
    this.inputStudentRecord = { ...val };
  }

  print() {
    window.print();
  }
}
</script>
