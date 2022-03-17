<template>
  <q-page>
    <q-card style="width: 1200px" class="absolute-center bg-grey-2">
      <div class="q-pa-md text-h3 flex justify-center">ENTER SUBJECTS</div>
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
          <div>Religion:</div>
        </q-card>
      </div>
      <div class="row q-px-lg q-gutter-md q-pb-lg">
        <q-card class="col q-pa-md">
          <div class="text-h4 flex justify-center">OFFERED SUBJECT</div>
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
        <q-card class="col">
          <div class="q-pa-md text-h4 flex justify-center">ENTERED SUBJECT</div>
        </q-card>
      </div>
      <div class="q-pa-md flex justify-center">
        <q-btn color="primary" label="Confirm" />
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

export default class Enrollment extends Vue {
  text = '';
  ph = '';
  dense = false;
  val = true;
}
</script>
