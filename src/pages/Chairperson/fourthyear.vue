<template>
  <q-page class="q-pa-lg">
    <div>
      <div class="text-h4 text-white text-bold flex flex-center">
        FOURTH YEAR SUBJECTS
      </div>
      <br />
      <div class="q-px-md q-gutter-md row">
        <div class="col">
          <q-table
            title="First Semester"
            :rows="allFourYear1stSem"
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
                  @click="addNewFourYear1stSem = true"
                />
                <q-dialog v-model="addNewFourYear1stSem" persistent>
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
                          v-model="inputFourYear1stSem.subject"
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
                          v-model="inputFourYear1stSem.teacher"
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
                          v-model="inputFourYear1stSem.room"
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
                        @click="onaddFourYear1stSem()"
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
            :rows="allFourYear2ndSem"
            :columns="columns2"
            row-key="name"
            :rows-per-page-options="[0]"
            :filter="filter2"
          >
            <template v-slot:top-right>
              <div class="q-pa-md q-gutter-sm row">
                <q-input
                  outlined
                  rounded
                  dense
                  debounce="300"
                  v-model="filter2"
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
                  @click="addNewFourYear2ndSem = true"
                />
                <q-dialog v-model="addNewFourYear2ndSem" persistent>
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

                    <q-card-section>
                      <q-form @submit="onaddFourYear2ndSem">
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
                              v-model="inputFourYear2ndSem.subject"
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
                              v-model="inputFourYear2ndSem.teacher"
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
                              v-model="inputFourYear2ndSem.room"
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
                          />
                        </div>
                      </q-form>
                    </q-card-section>
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
  Fourthyear1stsemDto,
  Fourthyear2ndsemDto,
  TeacherDto,
} from 'src/services/restapi';
import { Vue, Options } from 'vue-class-component';
import { IFourthYear1stSemInfo } from 'src/store/Forthyear1stSem/state';
import { IFourthYear2ndSemInfo } from 'src/store/Forthyear2ndSem/state';
import { mapActions, mapState } from 'vuex';
import { ManagementRoom } from 'src/store/ManagementRoom/state';
import { ManagementSubject } from 'src/store/ManagementSubject/state';

@Options({
  computed: {
    ...mapState('FourYear1stSem', ['allFourthYear1stSem']),
    ...mapState('FourYear2ndSem', ['allFourthYear2ndSem']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
  },
  methods: {
    ...mapActions('FourYear1stSem', ['addFourthYear1stSem']),
    ...mapActions('FourYear2ndSem', ['addFourthYear2ndSem']),
  },
})
export default class ManageAccount extends Vue {
  addFourYear1stSem!: (payload: IFourthYear1stSemInfo) => Promise<void>;
  allFourYear1stSem!: IFourthYear1stSemInfo[];
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

  addNewFourYear1stSem = false;
  filter = '';

  inputFourYear1stSem: IFourthYear1stSemInfo = {
    subject: '',
    description: '',
    units: ' ',
    teacher: '',
    room: '',
    schedule: '',
  };

  async onaddFourYear1stSem() {
    await this.addFourYear1stSem(this.inputFourYear1stSem);
    this.addNewFourYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  resetModel() {
    this.inputFourYear1stSem = {
      subject: '',
      description: '',
      units: ' ',
      teacher: '',
      room: '',
      schedule: '',
    };
  }
  //---------------------------> Second Semester <----------------------------------------------

  addFourYear2ndSem!: (payload: IFourthYear2ndSemInfo) => Promise<void>;
  allFourYear2ndSem!: IFourthYear2ndSemInfo[];

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

  addNewFourYear2ndSem = false;
  filter2 = '';

  inputFourYear2ndSem: IFourthYear2ndSemInfo = {
    subject: '',
    description: '',
    units: ' ',
    teacher: '',
    room: '',
    schedule: '',
  };
  async onaddFourYear2ndSem() {
    await this.addFourYear2ndSem(this.inputFourYear2ndSem);
    this.addNewFourYear2ndSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  resetModel2() {
    this.inputFourYear2ndSem = {
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
