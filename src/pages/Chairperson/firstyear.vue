<template>
  <q-page class="q-pa-lg">
    <div>
      <div class="text-h4 text-white text-bold flex flex-center">
        FIRST YEAR SUBJECTS
      </div>
      <br />
      <div class="q-px-md q-gutter-md row">
        <div class="col">
          <q-table
            title="First Semester"
            :rows="allFirstYear"
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
                  @click="addNewFirstYear = true"
                />
                <q-dialog v-model="addNewFirstYear" persistent>
                  <q-card
                    style="width: 900px; max-width: 100vw"
                    class="q-pa-sm"
                  >
                    <q-card-section class="row q-pa-md">
                      <div class="text-h5">Add Subject</div>
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
                      <q-form @submit="onaddFirstYear1stSem">
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
                              option-value="firstyear1stSemID"
                              map-options
                              emit-value
                              v-model="inputFirstYear.subject"
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
                              v-model="inputFirstYear.teacher"
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
                              v-model="inputFirstYear.room"
                            />
                          </div>
                        </div>
                        <div align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="red-10"
                            @click="resetModel()"
                            v-close-popup
                          />
                          <q-btn label="Submit" color="primary" type="submit" />
                        </div>
                      </q-form>
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </div>
            </template>
          </q-table>
        </div>

        <div class="col">
          <q-table
            title="Second Semester"
            :rows="allFirstYear2ndSem"
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
                  dense
                  flat
                  icon="add"
                  @click="addNewFirstYear2ndSem = true"
                />
                <q-dialog v-model="addNewFirstYear2ndSem" persistent>
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
                      <q-form @submit="onaddFirstYear2ndSem">
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
                              option-value="firstyear1stSemID"
                              map-options
                              emit-value
                              v-model="inputFirstYear2ndSem.subject"
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
                              v-model="inputFirstYear2ndSem.teacher"
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
                              v-model="inputFirstYear2ndSem.room"
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
  Firstyear1stsemDto,
  Firstyear2ndsemDto,
  SubjectDto,
  TeacherDto,
} from 'src/services/restapi';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { ManagementRoom } from 'src/store/ManagementRoom/state';
import { ManagementSubject } from 'src/store/ManagementSubject/state';

@Options({
  computed: {
    ...mapState('Firstyear1stSem', ['allFirstYear']),
    ...mapState('Firstyear2ndSem', ['allFirstYear2ndSem']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
  },
  methods: {
    ...mapActions('Firstyear1stSem', [
      'add1stSubjectfor1styear',
      'getAllFirstyear',
    ]),
    ...mapActions('Firstyear2ndSem', [
      'addFirstyear2ndsem',
      'getAllFirstyear2ndsem',
    ]),
    ...mapActions('ManagementSubject', ['getAllSubjects']),
    ...mapActions('ManagementTeacher', ['getAllTeacher']),
    ...mapActions('ManagementRoom', ['getAllRoom']),
  },
})
export default class Assigning extends Vue {
  add1stSubjectfor1styear!: (payload: Firstyear1stsemDto) => Promise<void>;
  getAllFirstyear!: () => Promise<void>;
  getAllSubjects!: () => Promise<void>;
  getAllRoom!: () => Promise<void>;
  getAllTeacher!: () => Promise<void>;
  allFirstYear!: Firstyear1stsemDto[];
  AllSubject!: ManagementSubject[];
  allTeacher!: TeacherDto[];
  AllRoom!: ManagementRoom[];
  addFirstyear2ndsem!: (payload: Firstyear2ndsemDto) => Promise<void>;
  getAllFirstyear2ndsem!: () => Promise<void>;
  allFirstYear2ndSem!: Firstyear2ndsemDto[];

  async mounted() {
    await this.getAllFirstyear();
    await this.getAllSubjects();
    await this.getAllRoom();
    await this.getAllTeacher();
    await this.getAllFirstyear2ndsem();
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

  addNewFirstYear = false;
  filter = '';
  addNewFirstYear2ndSem = false;
  filter2 = '';

  inputFirstYear: Firstyear1stsemDto = {};

  inputFirstYear2ndSem: Firstyear2ndsemDto = {};

  async onaddFirstYear1stSem() {
    await this.add1stSubjectfor1styear(this.inputFirstYear);
    this.addNewFirstYear = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  async onaddFirstYear2ndSem() {
    await this.addFirstyear2ndsem(this.inputFirstYear2ndSem);
    this.addNewFirstYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  resetModel() {
    this.inputFirstYear = {};
  }
  resetModel2() {
    this.inputFirstYear2ndSem = {};
  }
}
</script>
