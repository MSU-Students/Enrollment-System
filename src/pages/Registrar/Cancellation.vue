<template>
  <q-page>
    <q-card style="width: 1200px" class="absolute-center bg-grey-2">
      <div class="q-pa-lg">
        <q-input
          style="max-width: 300px"
          dense
          filled
          bottom-slots
          v-model="text"
          label="ID NUMBER"
        >
          <template v-slot:after>
            <q-btn color="primary" label="Enter" />
          </template>
        </q-input>
        <q-card class="q-pa-md">
          <div class="row">
            <div class="col">Name:</div>
            <div class="col">ID Number:</div>
          </div>
          <div class="row">
            <div class="col">Year & Course:</div>
            <div class="col">Year Admitted:</div>
          </div>
          <div class="row">
            <div class="col">Gender:</div>
            <div class="col">Civil Status:</div>
          </div>
          <div class="row">
            <div class="col">Religion:</div>
            <div class="col">ID NUmber:</div>
          </div>
        </q-card>
      </div>
      <div class="row q-px-lg q-gutter-md q-pb-lg">
        <q-card class="col">
          <div class="q-pa-md text-h4 flex justify-center">
            ENROLLED SUBJECT
          </div>
          <div class="col">
            <q-checkbox v-model="val" />
          </div>
          <div class="col">
            <q-checkbox v-model="val" />
          </div>
          <div class="col">
            <q-checkbox v-model="val" />
          </div>
          <div class="col">
            <q-checkbox v-model="val" />
          </div>
          <div class="col">
            <q-checkbox v-model="val" />
          </div>
          <div class="col">
            <q-checkbox v-model="val" />
          </div>
          <div class="col">
            <q-checkbox v-model="val" />
          </div>
          <div class="col">
            <q-checkbox v-model="val" />
          </div>
        </q-card>
      </div>
      <div class="q-pa-md flex justify-center">
        <q-btn color="primary" label="Refresh" />
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Enrollment extends Vue {
  text = '';
  ph = '';
  dense = false;
  val = true;
}
</script>
