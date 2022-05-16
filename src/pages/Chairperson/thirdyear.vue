<template>
  <q-page class="q-pa-lg">
    <div>
      <div class="text-h4 text-white text-bold flex flex-center">
        THIRD YEAR SUBJECTS
      </div>
      <br />
      <div class="q-px-md q-gutter-md row">
        <div class="col">
          <q-table
            title="First Semester"
            :rows="allThirdYear1stSem"
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
                  label="Add Subject"
                  color="primary"
                  e
                  dense
                  flat
                  icon="add"
                  @click="addNewThirdYear1stSem = true"
                />
                <q-dialog v-model="addNewThirdYear1stSem" persistent>
                  <q-card
                    style="width: 800px; max-width: 100vw"
                    class="q-pa-sm"
                  >
                    <q-card-section class="row">
                      <div class="text-h6">Add Subject</div>
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
                    <div class="row q-gutter-md">
                      <div class="col">
                        <q-select
                          label="Subject"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                          outlined
                          color="secondary"
                          :options="AllSubject"
                          option-label="SubjectCode"
                          option-value="subjectID"
                          map-options
                          emit-value
                          v-model="inputThirdYear1stSem.subject"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          label="Teacher"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                          outlined
                          color="secondary"
                          :options="allTeacher"
                          option-label="FullName"
                          option-value="teacherID"
                          map-options
                          emit-value
                          v-model="inputThirdYear1stSem.teacher"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          label="Room"
                          transition-show="flip-up"
                          transition-hide="flip-down"
                          outlined
                          color="secondary"
                          :options="AllRoom"
                          option-label="Room"
                          option-value="roomID"
                          map-options
                          emit-value
                          v-model="inputThirdYear1stSem.room"
                        />
                      </div>
                    </div>
                    <div align="right">
                      <q-btn
                        flat
                        label="Cancel"
                        color="red-10"
                        v-close-popup
                        @click="resetModel2()"
                      />
                      <q-btn
                        flat
                        label="Save"
                        color="primary"
                        type="submit"
                        @click="onaddThirdYear1stSem()"
                      />
                    </div>
                  </q-card>
                </q-dialog>
              </div>
            </template>
          </q-table>
        </div>

        <div class="col">
          <q-table
            title="Second Semester"
            :rows="allThirdYear2ndSem"
            :columns="columns2"
            row-key="name"
            :rows-per-page-options="[0]"
            :filter="filter1"
          >
            <template v-slot:top-right>
              <div class="q-pa-md q-gutter-sm row">
                <q-input
                  outlined
                  rounded
                  dense
                  debounce="300"
                  v-model="filter1"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-btn
                  label="Add Subject"
                  color="primary"
                  e
                  dense
                  flat
                  icon="add"
                  @click="addNewThirdYear2ndSem = true"
                />
                <q-dialog v-model="addNewThirdYear2ndSem" persistent>
                  <q-card
                    style="width: 800px; max-width: 100vw"
                    class="q-pa-sm"
                  >
                    <q-card-section class="row">
                      <div class="text-h6">Add Subject</div>
                      <q-space />
                      <q-btn
                        flat
                        round
                        dense
                        icon="close"
                        v-close-popup
                        @click="resetModel2()"
                      />
                    </q-card-section>
                    <q-form @submit="onaddThirdYear2ndSem">
                      <div class="row q-gutter-md">
                        <div class="col">
                          <q-select
                            label="Subject"
                            transition-show="flip-up"
                            transition-hide="flip-down"
                            outlined
                            color="secondary"
                            :options="AllSubject"
                            option-label="SubjectCode"
                            option-value="subjectID"
                            map-options
                            emit-value
                            v-model="inputThirdYear1stSem.subject"
                          />
                        </div>
                        <div class="col">
                          <q-select
                            label="Teacher"
                            transition-show="flip-up"
                            transition-hide="flip-down"
                            outlined
                            color="secondary"
                            :options="allTeacher"
                            option-label="FullName"
                            option-value="teacherID"
                            map-options
                            emit-value
                            v-model="inputThirdYear1stSem.teacher"
                          />
                        </div>
                        <div class="col">
                          <q-select
                            label="Room"
                            transition-show="flip-up"
                            transition-hide="flip-down"
                            outlined
                            color="secondary"
                            :options="AllRoom"
                            option-label="Room"
                            option-value="roomID"
                            map-options
                            emit-value
                            v-model="inputThirdYear1stSem.room"
                          />
                        </div>
                      </div>
                      <div align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="red-10"
                          v-close-popup
                          @click="resetModel2()"
                        />
                        <q-btn label="Submit" color="primary" type="submit" />
                      </div>
                    </q-form>
                  </q-card>
                </q-dialog>
              </div>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  TeacherDto,
  Thirdyear1stsemDto,
  Thirdyear2ndsemDto,
} from 'src/services/restapi';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { ManagementRoom } from 'src/store/ManagementRoom/state';
import { ManagementSubject } from 'src/store/ManagementSubject/state';

@Options({
  computed: {
    ...mapState('Thirdyear1stSem', ['allThirdYear1stSem']),
    ...mapState('Thirdyear2ndSem', ['allThirdYear2ndSem']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
  },
  methods: {
    ...mapActions('Thirdyear1stSem', ['addThirdyear', 'getAllThirdyear1stsem']),
    ...mapActions('Thirdyear2ndSem', [
      'addThirdyear2ndsem',
      'getAllThirdyear2ndsem',
    ]),
    ...mapActions('ManagementSubject', ['getAllSubjects']),
    ...mapActions('ManagementTeacher', ['getAllTeacher']),
    ...mapActions('ManagementRoom', ['getAllRoom']),
  },
})
export default class ManageAccount extends Vue {
  addThirdyear!: (payload: Thirdyear1stsemDto) => Promise<void>;
  getAllThirdyear1stsem!: () => Promise<void>;
  getAllSubjects!: () => Promise<void>;
  getAllRoom!: () => Promise<void>;
  getAllTeacher!: () => Promise<void>;
  allThirdYear1stSem!: Thirdyear1stsemDto[];
  AllSubject!: ManagementSubject[];
  allTeacher!: TeacherDto[];
  AllRoom!: ManagementRoom[];

  addThirdyear2ndsem!: (payload: Thirdyear2ndsemDto) => Promise<void>;
  allThirdYear2ndSem!: Thirdyear2ndsemDto[];
  getAllThirdyear2ndsem!: () => Promise<void>;

  async mounted() {
    await this.getAllThirdyear1stsem();
    await this.getAllSubjects();
    await this.getAllRoom();
    await this.getAllTeacher();
    await this.getAllThirdyear2ndsem();
  }

  columns = [
    {
      name: 'name',
      required: true,
      label: 'Subject Code',
      align: 'left',
      field: (row: any) => row.subject?.SubjectCode || 'None',
    },
    {
      name: 'Description',
      align: 'left',
      label: 'Description',
      field: (row: any) => row.subject?.DescriptiveTitle || 'None',
    },

    {
      name: 'Units',
      align: 'left',
      label: 'Units',
      field: (row: any) => row.subject?.Units || 'None',
    },

    {
      name: 'Teacher',
      align: 'left',
      label: 'Teacher',
      field: (row: any) => row.teacher?.FullName || 'None',
    },

    {
      name: 'Room',
      align: 'left',
      label: 'Room',
      field: (row: any) =>
        row.room?.Room + ' -' + row.room?.Description || 'None',
      format: (val: string) => `${val}`,
    },
    {
      name: 'Schedule',
      align: 'left',
      label: 'Schedule',
      field: (row: any) =>
        row.subject?.Day +
          ' -' +
          row.subject?.Day2 +
          ' /' +
          row.subject?.Time +
          ' -' +
          row.subject?.Time2 || 'None',
      format: (val: string) => `${val}`,
    },
  ];

  columns2 = [
    {
      name: 'name',
      required: true,
      label: 'Subject Code',
      align: 'left',
      field: (row: any) => row.subject?.SubjectCode || 'None',
    },
    {
      name: 'Description',
      align: 'left',
      label: 'Description',
      field: (row: any) => row.subject?.DescriptiveTitle || 'None',
    },

    {
      name: 'Units',
      align: 'left',
      label: 'Units',
      field: (row: any) => row.subject?.Units || 'None',
    },

    {
      name: 'Teacher',
      align: 'left',
      label: 'Teacher',
      field: (row: any) => row.teacher?.FullName || 'None',
    },

    {
      name: 'Room',
      align: 'left',
      label: 'Room',
      field: (row: any) =>
        row.room?.Room + ' -' + row.room?.Description || 'None',
      format: (val: string) => `${val}`,
    },
    {
      name: 'Schedule',
      align: 'left',
      label: 'Schedule',
      field: (row: any) =>
        row.subject?.Day +
          ' -' +
          row.subject?.Day2 +
          ' /' +
          row.subject?.Time +
          ' -' +
          row.subject?.Time2 || 'None',
      format: (val: string) => `${val}`,
    },
  ];

  addNewThirdYear1stSem = false;
  filter = '';

  addNewThirdYear2ndSem = false;
  filter1 = '';

  inputThirdYear1stSem: Thirdyear1stsemDto = {};

  inputThirdYear2ndSem: Thirdyear2ndsemDto = {};

  async onaddThirdYear1stSem() {
    await this.addThirdyear(this.inputThirdYear1stSem);
    this.addNewThirdYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  async onaddThirdYear2ndSem() {
    await this.addThirdyear2ndsem(this.inputThirdYear2ndSem);
    this.addNewThirdYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  resetModel() {
    this.inputThirdYear1stSem = {};
  }

  resetModel2() {
    this.inputThirdYear2ndSem = {};
  }
}
</script>
