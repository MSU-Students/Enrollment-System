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
            :rows="allFourthYear1stSem"
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
                  @click="addNewFourthYear1stSem = true"
                />
                <q-dialog v-model="addNewFourthYear1stSem" persistent>
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
                          v-model="inputFourthYear1stSem.subject"
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
                          v-model="inputFourthYear1stSem.teacher"
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
                          v-model="inputFourthYear1stSem.room"
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
            :rows="allFourthYear2ndSem"
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
                  @click="addNewFourthYear2ndSem = true"
                />
                <q-dialog v-model="addNewFourthYear2ndSem" persistent>
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
                              v-model="inputFourthYear2ndSem.subject"
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
                              v-model="inputFourthYear2ndSem.teacher"
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
                              v-model="inputFourthYear2ndSem.room"
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
import { mapActions, mapState } from 'vuex';
import { ManagementRoom } from 'src/store/ManagementRoom/state';
import { ManagementSubject } from 'src/store/ManagementSubject/state';

@Options({
  computed: {
    ...mapState('Forthyear1stSem', ['allFourthYear1stSem']),
    ...mapState('Forthyear2ndSem', ['allFourthYear2ndSem']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
  },
  methods: {
    ...mapActions('Forthyear1stSem', [
      'addFourthyear',
      'getAllFourthYear1stsem',
    ]),
    ...mapActions('Forthyear2ndSem', [
      'addFourthyear2ndsem',
      'getAllFourthyear2ndsem',
    ]),
    ...mapActions('ManagementSubject', ['getAllSubjects']),
    ...mapActions('ManagementTeacher', ['getAllTeacher']),
    ...mapActions('ManagementRoom', ['getAllRoom']),
  },
})
export default class ManageAccount extends Vue {
  addFourthyear!: (payload: Fourthyear1stsemDto) => Promise<void>;
  getAllFourthYear1stsem!: () => Promise<void>;
  getAllSubjects!: () => Promise<void>;
  getAllRoom!: () => Promise<void>;
  getAllTeacher!: () => Promise<void>;
  allFourthYear1stSem!: Fourthyear1stsemDto[];
  AllSubject!: ManagementSubject[];
  allTeacher!: TeacherDto[];
  AllRoom!: ManagementRoom[];

  addFourthyear2ndsem!: (payload: Fourthyear2ndsemDto) => Promise<void>;
  getAllFourthyear2ndsem!: () => Promise<void>;
  allFourthYear2ndSem!: Fourthyear2ndsemDto[];

  async mounted() {
    await this.getAllFourthYear1stsem();
    await this.getAllSubjects();
    await this.getAllRoom();
    await this.getAllTeacher();
    await this.getAllFourthyear2ndsem();
  }

  columns = [
    {
      name: 'subject',
      required: true,
      label: 'Subject Code',
      align: 'left',
      field: (row: any) => row.subject?.SubjectCode || 'None',
    },
    {
      name: 'description',
      align: 'left',
      label: 'Description',
      field: (row: any) => row.subject?.DescriptiveTitle || 'None',
    },

    {
      name: 'units',
      align: 'left',
      label: 'Units',
      field: (row: any) => row.subject?.Units || 'None',
    },

    {
      name: 'teacher',
      align: 'left',
      label: 'Teacher',
      field: (row: any) => row.teacher?.FullName || 'None',
    },

    {
      name: 'room',
      align: 'left',
      label: 'Room',
      field: (row: any) =>
        row.room?.Room + ' -' + row.room?.Description || 'None',
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

  addNewFourthYear1stSem = false;
  filter = '';
  addNewFourthYear2ndSem = false;
  filter2 = '';

  inputFourthYear1stSem: Fourthyear1stsemDto = {};

  inputFourthYear2ndSem: Fourthyear2ndsemDto = {};

  async onaddFourYear1stSem() {
    await this.addFourthyear(this.inputFourthYear1stSem);
    this.addNewFourthYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  async onaddFourYear2ndSem() {
    await this.addFourthyear2ndsem(this.inputFourthYear2ndSem);
    this.addNewFourthYear2ndSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  resetModel() {
    this.inputFourthYear1stSem = {};
  }
  resetModel2() {
    this.inputFourthYear2ndSem = {};
  }
}
</script>
