<template>
  <q-page class="q-pa-md">
    <q-table
      title="Student List"
      :rows="allAdmissionInfo"
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
            label="Add Student"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="addNewStudentInfo = true"
          />
          <q-dialog v-model="addNewStudentInfo" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="row">
                <div class="text-h6">Add Student</div>
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
                  <div class="text-h4 flex flex-center">Requirements</div>

                  <div class="flex flex-center">
                    <q-checkbox
                      v-model="inputStudentInfo.reportCard"
                      label="Report Card"
                      color="blue"
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.bCertificate"
                      label="Birth Certificate"
                      color="blue"
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.Pic"
                      label="1x1 Picture"
                      color="blue"
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.eForm"
                      label="Enrollment Form"
                      color="blue"
                    />
                  </div>
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputStudentInfo.IdNum"
                        label="ID number"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputStudentInfo.lrn"
                        label="LRN"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputStudentInfo.ayCode"
                        :options="options1"
                        label="AY Code"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputStudentInfo.incomingYlevel"
                        :options="options2"
                        label="Year Level"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputStudentInfo.studentType"
                        :options="options3"
                        label="Student Type"
                      />
                    </div>
                  </div>

                  <q-separator></q-separator>
                  <div class="text-h4 flex flex-center">Information</div>

                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputStudentInfo.FName"
                        label="First Name"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputStudentInfo.MName"
                        label="Middle Initial"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputStudentInfo.LName"
                        label="Last Name"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputStudentInfo.age"
                        label="Age"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        filled
                        type="date"
                        label="Date of Birth"
                        v-model="inputStudentInfo.dataOfBirth"
                      >
                        <!-- <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="inputStudentInfo.dataOfBirth">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template> -->
                      </q-input>
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputStudentInfo.placeOfBirth"
                        label="Place of Birth"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputStudentInfo.contactNo"
                        label="Contact Number"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputStudentInfo.gender"
                        :options="options4"
                        label="Gender"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputStudentInfo.martialStatus"
                        :options="options5"
                        label="Martial Status"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputStudentInfo.citizenship"
                        label="Citizenship"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputStudentInfo.religion"
                        label="Religion"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputStudentInfo.address"
                        label="Address"
                      />
                    </div>
                  </div>

                  <div class="flex flex-center">
                    <q-btn
                      flat
                      label="Cancel"
                      color="red-10"
                      @click="resetModel()"
                      v-close-popup
                    />
                    <q-btn
                      flat
                      label="Save"
                      color="primary"
                      @click="onAddStudent()"
                      type="submit"
                    />
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </template>
      <!------------------------------------Student Details--------------------------------------------->
      <template v-slot:body-cell-studentDetails="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              round
              color="blue"
              icon="more_vert"
              size="md"
              flat
              dense
              @click="openDialog(props.row)"
            />
            <q-dialog v-model="studentDetails" persistent>
              <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6">Student Info</div>
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
                  <q-form @submit="onAddStudent()" class="q-gutter-sm">
                    <div class="text-h4 flex flex-center">Requirements</div>

                    <div class="flex flex-center">
                      <q-checkbox
                        v-model="inputStudentInfo.reportCard"
                        label="Report Card"
                        color="blue"
                        disable
                      />
                      <q-checkbox
                        v-model="inputStudentInfo.bCertificate"
                        label="Birth Certificate"
                        color="blue"
                        disable
                      />
                      <q-checkbox
                        v-model="inputStudentInfo.Pic"
                        label="1x1 Picture"
                        color="blue"
                        disable
                      />
                      <q-checkbox
                        v-model="inputStudentInfo.eForm"
                        label="Enrollment Form"
                        color="blue"
                        disable
                      />
                    </div>
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.IdNum"
                          label="ID number"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.lrn"
                          label="LRN"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.ayCode"
                          :options="options1"
                          label="AY Code"
                          disable
                        />
                      </div>
                    </div>
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.incomingYlevel"
                          :options="options2"
                          label="Year Level"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.studentType"
                          :options="options3"
                          label="Student Type"
                          disable
                        />
                      </div>
                    </div>

                    <q-separator></q-separator>
                    <div class="text-h4 flex flex-center">Information</div>

                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.FName"
                          label="First Name"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.MName"
                          label="Middle Initial"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.LName"
                          label="Last Name"
                          disable
                        />
                      </div>
                    </div>
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.age"
                          label="Age"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-input
                          filled
                          type="date"
                          label="Date of Birth"
                          v-model="inputStudentInfo.dataOfBirth"
                          disable
                        >
                          <!-- <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="inputStudentInfo.dataOfBirth">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template> -->
                        </q-input>
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.placeOfBirth"
                          label="Place of Birth"
                          disable
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.contactNo"
                          label="Contact Number"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.gender"
                          :options="options4"
                          label="Gender"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.martialStatus"
                          :options="options5"
                          label="Martial Status"
                          disable
                        />
                      </div>
                    </div>
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.citizenship"
                          label="Citizenship"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.religion"
                          label="Religion"
                          disable
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.address"
                          label="Address"
                          disable
                        />
                      </div>
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
        </q-td>
      </template>

      <!------------------------------------Edit--------------------------------------------->

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
            <q-dialog v-model="updateStudent" persistent>
              <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6">Edit Student</div>
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
                  <q-form @submit="oneditStudent()" class="q-gutter-sm">
                    <div class="text-h4 flex flex-center">Requirements</div>

                    <div class="flex flex-center">
                      <q-checkbox
                        v-model="inputStudentInfo.reportCard"
                        label="Report Card"
                        color="blue"
                      />
                      <q-checkbox
                        v-model="inputStudentInfo.bCertificate"
                        label="Birth Certificate"
                        color="blue"
                      />
                      <q-checkbox
                        v-model="inputStudentInfo.Pic"
                        label="1x1 Picture"
                        color="blue"
                      />
                      <q-checkbox
                        v-model="inputStudentInfo.eForm"
                        label="Enrollment Form"
                        color="blue"
                      />
                    </div>
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.IdNum"
                          label="ID number"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.lrn"
                          label="LRN"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.ayCode"
                          :options="options1"
                          label="AY Code"
                        />
                      </div>
                    </div>
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.incomingYlevel"
                          :options="options2"
                          label="Year Level"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.studentType"
                          :options="options3"
                          label="Student Type"
                        />
                      </div>
                    </div>

                    <q-separator></q-separator>
                    <div class="text-h4 flex flex-center">Information</div>

                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.FName"
                          label="First Name"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.MName"
                          label="Middle Initial"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.LName"
                          label="Last Name"
                        />
                      </div>
                    </div>
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.age"
                          label="Age"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          filled
                          type="date"
                          label="Date of Birth"
                          v-model="inputStudentInfo.dataOfBirth"
                        >
                          <!-- <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="inputStudentInfo.dataOfBirth">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template> -->
                        </q-input>
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.placeOfBirth"
                          label="Place of Birth"
                        />
                      </div>
                    </div>

                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.contactNo"
                          label="Contact Number"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.gender"
                          :options="options4"
                          label="Gender"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="inputStudentInfo.martialStatus"
                          :options="options5"
                          label="Martial Status"
                        />
                      </div>
                    </div>
                    <div class="row q-gutter-sm q-py-sm">
                      <div class="col">
                        <q-input
                          autofocus
                          outlined
                          v-model="inputStudentInfo.citizenship"
                          label="Citizenship"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.religion"
                          label="Religion"
                        />
                      </div>
                      <div class="col">
                        <q-input
                          outlined
                          v-model="inputStudentInfo.address"
                          label="Address"
                        />
                      </div>
                    </div>

                    <div class="flex flex-center">
                      <q-btn
                        flat
                        label="Cancel"
                        color="red-10"
                        @click="resetModel()"
                        v-close-popup
                      />
                      <q-btn
                        flat
                        label="Save"
                        color="primary"
                        @click="onAddStudent()"
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
              @click="deleteSpecificStudent(props.row)"
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
import { AdmissionDto } from 'src/services/restapi';
import { IStudentInfo } from 'src/store/Admission/state';

@Options({
  computed: {
    ...mapState('Admission', ['allAdmissionInfo']),
  },
  methods: {
    ...mapActions('Admission', [
      'addNewAdmission',
      'editAdmissiontInfo',
      'deleteAdmission',
      'getAllAdmission',
    ]),
  },
})
export default class ManageStudentInfo extends Vue {
  allAdmissionInfo!: IStudentInfo[];
  addNewAdmission!: (payload: IStudentInfo) => Promise<void>;
  editAdmissionInfo!: (payload: IStudentInfo) => Promise<void>;
  deleteAdmission!: (payload: IStudentInfo) => Promise<void>;
  getAllAdmission!: () => Promise<void>;

  async mounted() {
    await this.getAllAdmission();
    console.log(this.allAdmissionInfo);
  }

  columns = [
    {
      name: 'IdNum',
      align: 'center',
      label: 'Student ID',
      field: 'IdNum',
    },
    {
      name: 'lrn',
      align: 'center',
      label: 'LRN',
      field: 'lrn',
    },
    {
      name: 'name',
      required: true,
      label: 'Full Name',
      align: 'left',
      field: (row: AdmissionDto) =>
        row.FName + ' ' + row.MName + '. ' + row.LName,
      format: (val: string) => `${val}`,
    },
    {
      name: 'incomingYlevel',
      align: 'center',
      label: 'Year Level',
      field: 'incomingYlevel',
    },
    { name: 'ayCode', align: 'center', label: 'AY Code', field: 'ayCode' },
    {
      name: 'studentDetails',
      align: 'center',
      label: 'studentDetails',
      field: 'studentDetails',
    },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];

  updateStudent = false;
  filter = '';
  addNewStudentInfo = false;
  studentDetails = false;
  options1 = ['First Semester', 'Second Semester'];
  options2 = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  options3 = ['New Student', 'Transferee'];
  options4 = ['Male', 'Female'];
  options5 = ['Single', 'Merried'];

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

  async onAddStudent() {
    await this.addNewAdmission(this.inputStudentInfo);
    this.addNewStudentInfo = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  async oneditStudent() {
    await this.editAdmissionInfo(this.inputStudentInfo);
    this.updateStudent = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificStudent(val: AdmissionDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteAdmission(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: AdmissionDto) {
    this.updateStudent = true;
    this.inputStudentInfo = { ...val };
  }
  openDialog(val: AdmissionDto) {
    this.studentDetails = true;
    this.inputStudentInfo = { ...val };
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
