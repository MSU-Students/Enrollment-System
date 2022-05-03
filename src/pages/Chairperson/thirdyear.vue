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
  Firstyear1stsemDto,
  Firstyear2ndsemDto,
  TeacherDto,
} from 'src/services/restapi';
import { Vue, Options } from 'vue-class-component';
import { IThirdYear1stSemInfo } from 'src/store/Thirdyear1stSem/state';
import { IThirdYear2ndSemInfo } from 'src/store/Thirdyear2ndSem/state';
import { mapActions, mapState } from 'vuex';
import { ManagementRoom } from 'src/store/ManagementRoom/state';
import { ManagementSubject } from 'src/store/ManagementSubject/state';

@Options({
  computed: {
    ...mapState('ThirdYear1stSem', ['allThirdYear1stSem']),
    ...mapState('ThirdYear2ndSem', ['allThirdYear2ndSem']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
  },
  methods: {
    ...mapActions('ThirdYear1stSem', ['addThirdYear1stSem']),
    ...mapActions('ThirdYear2ndSem', ['addThirdYear2ndSem']),
  },
})
export default class ManageAccount extends Vue {
  addThirdYear1stSem!: (payload: Firstyear1stsemDto) => Promise<void>;
  allThirdYear1stSem!: Firstyear2ndsemDto[];
  AllSubject!: ManagementSubject[];
  allTeacher!: TeacherDto[];
  AllRoom!: ManagementRoom[];

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
      field: (row: any) => row.Teacher?.FullName || 'None',
    },

    {
      name: 'Room',
      align: 'left',
      label: 'Room',
      field: (row: any) =>
        row.Room?.Room + ' -' + row.Room?.Description || 'None',
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

  inputThirdYear1stSem: IThirdYear1stSemInfo = {
    subject: '',
    description: '',
    units: ' ',
    teacher: '',
    room: '',
    schedule: '',
  };

  async onaddThirdYear1stSem() {
    await this.addThirdYear1stSem(this.inputThirdYear1stSem);
    this.addNewThirdYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  resetModel() {
    this.inputThirdYear1stSem = {
      subject: '',
      description: '',
      units: ' ',
      teacher: '',
      room: '',
      schedule: '',
    };
  }
  //---------------------------> Third Second Sem <----------------------------------------------

  addThirdYear2ndSem!: (payload: IThirdYear2ndSemInfo) => Promise<void>;
  allThirdYear2ndSem!: IThirdYear2ndSemInfo[];
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
      field: (row: any) => row.Teacher?.FullName || 'None',
    },

    {
      name: 'Room',
      align: 'left',
      label: 'Room',
      field: (row: any) =>
        row.Room?.Room + ' -' + row.Room?.Description || 'None',
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

  addNewThirdYear2ndSem = false;
  filter1 = '';

  inputThirdYear2ndSem: IThirdYear2ndSemInfo = {
    subject: '',
    description: '',
    units: ' ',
    teacher: '',
    room: '',
    schedule: '',
  };
  async onaddThirdYear2ndSem() {
    await this.addThirdYear2ndSem(this.inputThirdYear2ndSem);
    this.addNewThirdYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  resetModel2() {
    this.inputThirdYear2ndSem = {
      subject: '',
      description: '',
      units: ' ',
      teacher: '',
      room: '',
      schedule: '',
    };
  }
}
</script>
