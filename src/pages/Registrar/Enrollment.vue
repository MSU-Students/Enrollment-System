<template>
  <q-page>
    <q-card style="width: 1200px" class="absolute-center bg-grey-2">
      <div class="q-pa-md text-h3 flex justify-center">ENTER SUBJECTS</div>
      <div class="q-pa-lg">
        <q-form @submit="searchAction(search)">
          <q-input
            v-model="search"
            style="max-width: 300px"
            dense
            filled
            outlined
            bottom-slots
            label="ID NUMBER"
          >
            <template v-slot:after>
              <q-btn
                color="primary"
                label="Enter"
                type="submit"
                @click="searchAction(search)"
              />
            </template>
          </q-input>
        </q-form>
        <q-card class="q-pa-md">
          <div class="row">
            <div class="col">Name:</div>
            <div class="col">ID Number:</div>
          </div>
          <div class="row">
            <div class="col">Year & Course:</div>
            <div class="col">Year Admitted:</div>
          </div>
          <div class="row">
            <div class="col">Gender:</div>
            <div class="col">Civil Status:</div>
          </div>
          <div>Religion:</div>

          <q-separator></q-separator>
          <q-btn
            label="Offered Subjects"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="onFindSubjects = true"
          />
          <q-dialog v-model="onFindSubjects" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="row">
                <div class="text-h6">Offered Subjects</div>
                <q-space />
                <q-btn flat round dense icon="close" v-close-popup />
              </q-card-section>
              <div class="row">
                <div class="q-pa-md col-7">
                  <q-select
                    outlined
                    dense
                    square
                    :options="options1"
                    label="Select Year and Semester"
                  />
                </div>
              </div>
              <q-card-section>
                <q-form @submit="onFindSubjects">
                  <div class="row q-gutter-md q-py-sm">
                    <div align="right">
                      <q-btn
                        flat
                        label="Cancel"
                        color="red-10"
                        v-close-popup
                        @click="resetModel()"
                      />
                      <q-btn flat label="Add" color="primary" type="submit" />
                    </div>
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
          <div class="row q-px-lg q-gutter-lg q-pb-lg q-pa-lg">
            <q-card class="col" style="width: 1500px">
              <div class="q-pa-md text-h4 flex justify-center">
                ENTERED SUBJECT
              </div>
            </q-card>
          </div>
        </q-card>
      </div>

      <div class="q-pa-md flex justify-center">
        <q-btn color="primary" label="Confirm" />
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { IStudentInfo } from 'src/store/Admission/state';
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('Admission', ['allAdmissionInfo']),
  },
  methods: {
    ...mapActions('Admission', ['addNewAdmission', 'getAllAdmission']),
  },
})
export default class Enrollment extends Vue {
  allAdmissionInfo!: IStudentInfo[];
  getAllAdmission!: () => Promise<void>;

  async mounted() {
    await this.getAllAdmission();
    console.log(this.allAdmissionInfo);
  }

  text = '';
  ph = '';
  dense = false;
  val = true;
  search = '';
  onFindSubjects = false;
  options1 = [
    'First year 1st Sem.',
    'First year 2nd Sem.',
    'Second year 1st Semester',
    'Second year 2nd Semester',
    'Third year 1st Semester',
    'Third year 2nd Semester',
    'Fourth year 1st Semester',
    'Fourth year 2nd Semester',
  ];

  inputStudentInfo: any = {
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

  searchAction(res: any) {
    console.log('HELLO');
    console.log(res);
    this.currentStudent = res;
  }
  resetModel() {}
}
</script>
