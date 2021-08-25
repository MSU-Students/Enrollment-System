<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      alternative-labels
      color="primary"
      animated
    >
      <q-step :name="1" title="Requirements" icon="settings" :done="step > 1">
        <div class="text-h5 flex flex-center">REQUIREMENTS</div>
        <div class="flex flex-center">
          <div class="q-gutter-sm">
            <q-checkbox"
              v-model="selection"
              val="Report Card"
              label="Report Card"
              color="cyan"
            />
            <q-checkbox
              v-model="selection"
              val="Birth Certificate"
              label="Birth Certificate"
              color="cyan"
            />
            <div>
              <q-checkbox
                v-model="selection"
                val="1x1 Picture"
                label="1x1 Picture"
                color="cyan"
              />
              <q-checkbox
                v-model="selection"
                val="Enrollment Form"
                label="Enrollment Form"
                color="cyan"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="q-px-sm">
            The model data: <strong>{{ selection }}</strong>
          </div>
        </div>
      </q-step>

      <q-step
        :name="2"
        title="Student Details"
        icon="settings"
        :done="step > 2"
      >
        <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="text"
              label="Last Name"
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="text7"
              label="First Name"
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="text1"
              label="Middle Name"
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="text2"
              label="Age"
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="date"
              type="date"
              label="Birth Date"
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-select
              outlined
              v-model="single"
              :options="options1"
              label="Gender"
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="text3"
              label="Place of Birth"
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="text4"
              label="Contact No."
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="text5"
              label="Citizen"
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="text6"
              label="Religion"
              stack-label
            />
          </div>
        </div>
      </q-step>

      <q-step
        :name="3"
        title="Parents Details"
        icon="settings"
        :done="step > 3"
      >
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.
      </q-step>

      <q-step
        :name="4"
        title="Guardian Details"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 4"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.
      </q-step>

      <q-step :name="5" title="Other Details" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 5 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      step: ref(1),
      selection: ref([]),
      text: ref(''),
      text1: ref(''),
      text2: ref(''),
      text3: ref(''),
      text4: ref(''),
      text5: ref(''),
      text6: ref(''),
      text7: ref(''),
      dense: ref(false),
      single: ref(null),
      options1: ['Female', 'Male'],
      options: [],
      date: ref(''),
    };
  },
};
</script>
