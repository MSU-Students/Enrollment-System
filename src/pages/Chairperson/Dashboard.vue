<template>
  <q-page>
      <div class="row q-gutter-sm q-pa-sm">
        <div class="col">
          <q-card>
            <q-card-section
              :class="$q.dark.isActive ? 'blue_dark' : 'bg-blue-8'"
              class="text-white"
            >
              <div class="row">
                <div class="col-10">
                  <div class="text-h6">Academic Year</div>
                  <div class="text-h5">3</div>
                </div>
                <div class="col-2">
                  <q-icon size="62px" name="people" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card>
            <q-card-section
              :class="$q.dark.isActive ? 'blue_dark' : 'bg-blue-8'"
              class="text-white"
            >
              <div class="row">
                <div class="col-10">
                  <div class="text-h6">Year Level</div>
                  <div class="text-h5">2</div>
                </div>
                <div class="col-2">
                  <q-icon size="62px" name="person" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card>
            <q-card-section
              :class="$q.dark.isActive ? 'blue_dark' : 'bg-blue-8'"
              class="text-white"
            >
              <div class="row">
                <div class="col-10">
                  <div class="text-h6">Total Subjects</div>
                  <div class="text-h5">
                    <q-icon name="arrow_upward" />
                    Second Semester
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

    <q-table
      class="my-sticky-header-table q-ma-sm"
      title="Subjects for 2021-2022 1st sem."
      :rows="rows2"
      :columns="columns2"
      row-key="name"
      :separator="separator"
      flat
      bordered
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            rounded
            dense
            debounce="300"
            v-model="filters"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </template>

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
              @click="editRow = true"
            />

            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="dialog = true"
            />
            <q-dialog v-model="dialog" persistent>
              <q-card>
                <q-card-section class="row items-center">
                  <q-avatar
                    size="sm"
                    icon="warning"
                    color="red-10"
                    text-color="white"
                  />
                  <span class="q-ml-sm">Confirm Delete?</span>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="Cancel"
                    color="primary"
                    v-close-popup="cancelEnabled"
                    :disable="!cancelEnabled"
                  />
                  <q-btn flat label="Confirm" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'Vue-class-component';

@Options({})
export default class Manage extends Vue {
  columns2 = [
    {
      name: 'subjectcode',
      align: 'center',
      label: 'Subject Code',
      field: 'subjectcode',
      sortable: true,
    },
    {
      name: 'descriptivetitle',
      align: 'center',
      label: 'Descriptive Title',
      field: 'descriptivetitle',
      sortable: true,
    },
    {
      name: 'units',
      align: 'center',
      label: 'Units',
      field: 'units',
      sortable: true,
    },
    {
      name: 'day',
      required: true,
      label: 'Day',
      align: 'center',
      field: 'day',
      sortable: true,
    },
    {
      name: 'time',
      align: 'center',
      label: 'Time',
      field: 'time',
      sortable: true,
    },
    {
      name: 'teacher',
      align: 'center',
      label: 'Teacher',
      field: 'teacher',
      sortable: true,
    },
    {
      name: 'room',
      align: 'center',
      label: 'Room',
      field: 'room',
      sortable: true,
    },
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];
  rows2 = [
    {
      subjectcode: 'Gec101',
      descriptivetitle: 'PROGRAMMING 1',
      units: '2',
      day: 'Monday,Wednessday',
      time: '10:30am-11:30am',
      teacher: 'Naeem Mangcol',
      room: 'Room301',
    },
  ];

  tab = 'teacher';
  dialog = false;
  cancelEnabled = true;
  addTeacher = false;
  addSubject = false;
  editRow = false;
  editTeacher = false;
  editRoom = false;
  addRoom = false;
  editCourse = false;
  addCourse = false;
  options = ['2020-2021 1st Sem.', '2020-2021 2nd Sem.'];
  options1 = ['one (1)', 'two (2)' , 'three (3)' ,'four (4)' , 'five (5)' , 'six (6)', 'seven (7)' , 'eight (8)' , 'nine (9)', 'overload'];
  options2 = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  options3 = ['2020-2021 1st Sem.', '2020-2021 2nd Sem.'];
  options4 = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  subjectcode = '';
  model = '';
  model2= '';
  model3= '';
  name1 = '';
  name2 = '';
  name3 = '';
  name4 = '';
  name5 = '';
  name6 = '';
  name7 = '';
  name8 = '';
  name9 = '';
  name10 = '';
  name11 = '';
  name12 = '';
  name13 = '';
  name14 = '';
  name15 = '';
  name16 = '';
  name17 = '';
  name18 = '';
  name19 = '';
  name20 = '';
  name21 = '';
  name22 = '';
  name23 = '';
  name24 = '';
  name25 = '';
  name26 = '';
  name27 = '';
  name28 = '';
  name29 = '';
  name30 = '';
  name31 = '';
  name32 = '';
  name33 = '';
  name34 = '';
  name35 = '';
  name36 = '';
  name37 = '';
  name38 = '';
  filters = '';
  teal = false;
  orange = false;
  red = false;
  pink = false;
  black = false;
  time = '';
  time1 = '';
  separator = 'vertical';
}
</script>


