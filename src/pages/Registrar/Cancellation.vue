<template>
  <q-card-section class="q-gutter-md row">
    <div class="col-4">
      <q-input outlined dense label="ID Number" />
    </div>
    <q-btn push color="cyan" label="Enter" text-color="dark" />
  </q-card-section>

  <div class="row">
    <div class="col-8 q-pa-sm">
      <q-banner inline-actions rounded class="bg-cyan text-white">
        STUDENT INFORMATION
      </q-banner>
    </div>
    <div class="col-4 q-pa-sm">
      <q-banner inline-actions rounded class="bg-cyan text-white">
        Enrolled Subjects
      </q-banner>
    </div>
    <div class="col-8">
      <q-card-section rounded class="bg-blue-1">
        <div class="text-subtitle2 text-cyan-8">NAME:</div>
        <div class="text-subtitle2 text-cyan-8">ADDRESS:</div>
        <div class="text-subtitle2 text-cyan-8">YEAR:</div>
        <div class="text-subtitle2 text-cyan-8">COURSE:</div>
        <div class="text-subtitle2 text-cyan-8">SCHOLARSHIP:</div>
        <div class="text-subtitle2 text-cyan-8">YEAR ADMITTED:</div>
        <div class="text-subtitle2 text-cyan-8">UNITS:</div>
      </q-card-section>
    </div>
    
    <div class="col-4">
      <q-card flat bordered class="my-card q-pa-md">
        <q-card-section>
          <div class="text-subtitle2">CCC 101</div>
          <div class="text-subtitle2">CsC 102</div>
          <div class="text-subtitle2">IT 151</div>
          <div class="text-subtitle2">IT 181</div>
          <div class="text-subtitle2">CCC 101</div>
          <div class="text-subtitle2">IT 101</div>
          <div class="text-subtitle2">ISY 101</div>
        </q-card-section>
        <q-btn color="cyan" label="REFRESH" size="15px" />
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      IDno: ref(''),
      lorem: 'ENTREP, PED001',
      model: '',
      model2: '',
      model3: '',
    };
  },
};
</script>
