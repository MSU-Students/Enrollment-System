<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section
            :class="$q.dark.isActive ? 'blue_dark' : 'bg-blue-8'"
            class="text-white"
          >
            <div class="row">
              <div class="col-10">
                <div class="text-h6">Total of Student</div>
                <div class="text-h5">3</div>
              </div>
              <div class="col-2">
                <q-icon size="62px" name="people" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section
            :class="$q.dark.isActive ? 'green_dark' : 'bg-green-8'"
            class="text-white"
          >
            <div class="row">
              <div class="col-10">
                <div class="text-h6">Enrolled Student</div>
                <div class="text-h5">2</div>
              </div>
              <div class="col-2">
                <q-icon size="62px" name="person" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section
            :class="$q.dark.isActive ? 'orange_dark' : 'bg-orange-9'"
            class="text-white"
          >
            <div class="row">
              <div class="col-10">
                <div class="text-h6">Academic Year</div>
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
      :rows="rows"
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
            label="Add User"
            color="primary"
            dense
            flat
            icon="add"
            to="admission"
          />
        </div>
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <div>
            <q-td>
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
            </q-td>
          </div>

          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

interface IRow {
  name: string;
}

@Options({})
export default class ManageAccount extends Vue {
  columns = [
     {
      name: 'studentid',
      align: 'center',
      label: 'Student ID',
      field: 'studentid',
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
      field: (row: IRow) => row.name,
      format: (val: string) => `${val}`,
    },
    {
      name: 'yearlevel',
      align: 'center',
      label: 'Year Level',
      field: 'yearlevel',
    },
    { name: 'status', align: 'center', label: 'Status', field: 'status' },
    { name: 'aycode', align: 'center', label: 'AY Code', field: 'aycode' },
    
  ];
  rows = [
    {
      studentid: '201810757',
      lrn: '335573655382',
      name: 'NAEEM M. MANGCOL',
      yearlevel: '1ST YEAR',
      status: 'ENROLLED',
      aycode: '2021-2022 1st TERM',
    },
    {
      studentid: '201823445',
      lrn: '232454657767',
      name: 'MUAMMAR A. ALIB',
      yearlevel: '1ST YEAR',
      status: 'ENROLLED',
      aycode: '2021-2022 1st TERM',
    },
    {
      studentid: '201855343',
      lrn: '535565743435',
      name: 'JAMAEL B. POONADATU',
      yearlevel: '1ST YEAR',
      status: 'NOT ENROLLED',
      aycode: '2021-2022 1st TERM',
    },
    
  ];
  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  filter = '';

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
