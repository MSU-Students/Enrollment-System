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
                <div class="text-h5">4</div>
              </div>
              <div class="col-2">
                <q-icon size="62px" name="trending_up" />
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
                <div class="text-h5">4</div>
              </div>
              <div class="col-2">
                <q-icon size="62px" name="far fa-dot-circle" />
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
                  <q-icon name="arrow_downward" />
                  Second Semester
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
        </div>
      </div>
     
      <q-table
      class="row q-ma-sm"
      title="Account List"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <!-- <template v-slot:body="props">
        <q-tr :props="props">
          <div>
            <q-td>
              <q-btn size="sm" color="blue" round dense icon="edit" />
            </q-td>
            <q-td>
              <q-btn size="sm" color="red-10" round dense icon="delete" />
            </q-td>
          </div>

          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template> -->
    </q-table>
  </q-page>
</template>

<script lang="ts">
const columns = [
  {
    name: 'StudentNo.',
    label: 'Student No.',
    align: 'center',
    field: 'name'
  },
  {
    name: 'FullName',
    required: true,
    align: 'center',
    label: 'Full Name',
    field: 'email',
  },
  {
    name: 'AY',
    align: 'center',
    label: 'AY',
    field: 'dateCreated',
  },
  { name: 'Term', align: 'center', label: 'Term', field: 'role' },
  { name: 'Date', align: 'center', label: 'Date', field: 'status' },
  {
    name: 'Course',
    align: 'center',
    label: 'Course',
    field: 'lastLogin',
  },
  {
    name: 'Status',
    align: 'center',
    label: 'Status',
    field: 'button'
  },
];

const rows = [
  {
    StudentNo: '201810757',
    FullName: 'Naeem mamangcao Mangcol Jr',
    AY: '2021-2022',
    Term: 'First Term',
    Date: 'August 25,2021',
    Course: 'BS-IT',
    status: 'Enrolled',
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

