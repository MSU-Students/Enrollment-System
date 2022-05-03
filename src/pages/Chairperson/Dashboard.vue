<template>
  <q-page>
    <q-table
      class="my-sticky-header-table q-ma-sm"
      title="Subjects for 2021-2022 1st sem."
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
  ];
  filters = '';
  separator = 'vertical';
}
</script>
