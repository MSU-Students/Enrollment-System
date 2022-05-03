<template>
  <q-page class="q-pa-lg">
    <div>
      <div class="text-h4 text-white text-bold flex flex-center">
        SECOND YEAR SUBJECTS
      </div>
      <br />
      <div class="q-px-md q-gutter-md row">
        <div class="col">
          <q-table
            title="First Semester"
            :rows="allSecondYear1stSem"
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
                  @click="addNewSecondYear1stSem = true"
                />
                <q-dialog v-model="addNewSecondYear1stSem" persistent>
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

                    <q-card-section>
                      <q-form @submit="onaddSecondYear1stSem()">
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
                              v-model="inputSecondYear1stSem.subject"
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
                              v-model="inputSecondYear1stSem.teacher"
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
                              v-model="inputSecondYear1stSem.room"
                            />
                          </div>
                        </div>
                        <div align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="red-10"
                            v-close-popup
                            @click="resetModel()"
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

        <div class="col">
          <q-table
            title="Second Semester"
            :rows="allSecondYear2ndSem"
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
                  @click="addNewSecondYear2ndSem = true"
                />
                <q-dialog v-model="addNewSecondYear2ndSem" persistent>
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
                      <q-form @submit="onaddSecondYear2ndSem">
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
                              v-model="inputSecondYear2ndSem.subject"
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
                              v-model="inputSecondYear2ndSem.teacher"
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
                              v-model="inputSecondYear2ndSem.room"
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
  SubjectDto,
  TeacherDto,
  RoomDto,
  Secondyear1stsemDto,
  Secondyear2ndsemDto,
} from 'src/services/restapi';
import { Vue, Options } from 'vue-class-component';
import { ISecondYear1stSemInfo } from 'src/store/Secondyear1stSem/state';
import { ISecondYear2ndSemInfo } from 'src/store/Secondyear2ndSem/state';
import { mapActions, mapState } from 'vuex';
@Options({
  computed: {
    ...mapState('SecondYear1stSem', ['allSecondYear1stSem']),
    ...mapState('SecondYear2ndSem', ['allSecondYear2ndSem']),
    ...mapState('ManagementSubject', ['AllSubject']),
    ...mapState('ManagementTeacher', ['allTeacher']),
    ...mapState('ManagementRoom', ['AllRoom']),
  },
  methods: {
    ...mapActions('SecondYear1stSem', ['addSecondyear']),
    ...mapActions('SecondYear2ndSem', ['addSecondYear2ndSem']),
  },
})
export default class Assigning extends Vue {
  addSecondyear!: (payload: Secondyear1stsemDto) => Promise<void>;
  allSecondYear1stSem!: Secondyear1stsemDto[];
  AllSubject!: SubjectDto[];
  allTeacher!: TeacherDto[];
  AllRoom!: RoomDto[];

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

  addNewSecondYear1stSem = false;
  filter = '';

  inputSecondYear1stSem: ISecondYear1stSemInfo = {
    subject: '',
    description: '',
    units: ' ',
    teacher: '',
    room: '',
    schedule: '',
  };
  async onaddSecondYear1stSem() {
    await this.addSecondyear(this.inputSecondYear1stSem);
    this.addNewSecondYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      position: 'center',
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  resetModel() {
    this.inputSecondYear1stSem = {
      subject: '',
      description: '',
      units: '',
      teacher: '',
      room: '',
      schedule: '',
    };
  }

  //---------------------------> Second Year <----------------------------------------------

  addSecondYear2ndSem!: (payload: Secondyear2ndsemDto) => Promise<void>;
  allSecondYear2ndSem!: Secondyear2ndsemDto[];

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

  addNewSecondYear2ndSem = false;
  filter1 = '';

  inputSecondYear2ndSem: ISecondYear2ndSemInfo = {
    subject: '',
    description: '',
    units: ' ',
    teacher: '',
    room: '',
    schedule: '',
  };
  async onaddSecondYear2ndSem() {
    await this.addSecondYear2ndSem(this.inputSecondYear2ndSem);
    this.addNewSecondYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  resetModel2() {
    this.inputSecondYear2ndSem = {
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
