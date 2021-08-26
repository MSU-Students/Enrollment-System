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
            <q-checkbox
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

        <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input outlined v-model="text30" label="ID Number" stack-label />
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input outlined v-model="text31" label="LRN" stack-label />
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-select
              outlined
              v-model="single2"
              :options="options3"
              label="AY Code"
              stack-label
            />
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-select
              outlined
              v-model="single3"
              :options="options4"
              label="Incoming Year Level"
              stack-label
            />
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-select
              outlined
              v-model="single4"
              :options="options5"
              label="Student Type"
              stack-label
            />
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
            <q-input outlined v-model="text" label="Last Name" stack-label />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input outlined v-model="text7" label="First Name" stack-label />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input outlined v-model="text1" label="Middle Name" stack-label />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input outlined v-model="text2" label="Age" stack-label />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              v-model="date"
              type="date"
              label="Date of Birth"
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
            <q-input outlined v-model="text4" label="Contact No." stack-label />
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
            <q-select
              outlined
              v-model="single1"
              :options="options2"
              label="Marital Status"
              stack-label
            />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input outlined v-model="text5" label="Citizenship" stack-label />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input outlined v-model="text6" label="Religion" stack-label />
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-input outlined v-model="text8" label="Address" stack-label />
          </div>
        </div>
      </q-step>

      <q-step
        :name="3"
        title="Parents Details"
        icon="create_new_folder"
        :done="step > 3"
      >
        <q-splitter
          v-model="splitterModel"
          :limits="[50, 50]"
          style="height: 200px"
        >
          <template v-slot:before>
            <div class="q-pa-md">
              <div class="text-h5 q-mb-md">Mother</div>
              <div class="q-my-md flex flex-center" style="max-width: 600px">
                <q-input
                  outlined
                  v-model="text9"
                  label="Last Name"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text10"
                  label="First Name"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text11"
                  label="Middle Name"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text12"
                  label="Occupation"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text13"
                  label="Contact"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text14"
                  label="Address"
                  stack-label
                  :dense="dense"
                />
              </div>
            </div>
          </template>

          <template v-slot:after>
            <div class="q-pa-md">
              <div class="text-h5 q-mb-md">Father</div>
              <div class="q-my-md flex flex-center" style="max-width: 600px">
                <q-input
                  outlined
                  v-model="text15"
                  label="Last Name"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text16"
                  label="First Name"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text17"
                  label="Middle Name"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text18"
                  label="Occupation"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text19"
                  label="Contact"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text20"
                  label="Address"
                  stack-label
                  :dense="dense"
                />
              </div>
            </div>
          </template>
        </q-splitter>
      </q-step>

      <q-step
        :name="4"
        title="Guardian Details"
        caption="Other Details"
        icon="create_new_folder"
        :done="step > 4"
      >
        <q-splitter
          v-model="splitterModel"
          :limits="[50, 50]"
          style="height: 200px"
        >
          <template v-slot:before>
            <div class="q-pa-md">
              <div class="text-h5 q-mb-md">Gurdian Details</div>
              <div class="q-my-md flex flex-center" style="max-width: 600px">
                <q-input
                  outlined
                  v-model="text21"
                  label="Last Name"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text22"
                  label="First Name"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text23"
                  label="Middle Name"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text24"
                  label="Contact"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text25"
                  label="Address"
                  stack-label
                  :dense="dense"
                />
              </div>
            </div>
          </template>

          <template v-slot:after>
            <div class="q-pa-md">
              <div class="text-h5 q-mb-md">Other Details</div>
              <div class="q-my-md flex flex-center" style="max-width: 600px">
                <q-input
                  outlined
                  v-model="text26"
                  label="Previous School Attended"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text27"
                  label="Previous School Year Graduated"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text28"
                  label="Previous School Address"
                  stack-label
                  :dense="dense"
                />

                <q-input
                  outlined
                  v-model="text29"
                  label="General Average"
                  stack-label
                  :dense="dense"
                />

              </div>
            </div>
          </template>
        </q-splitter>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 4 ? 'Finish' : 'Continue'"
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
      text30: ref(''),
      text31: ref(''),
      options3: ['2021-2022 1st Sem.', '2021-2022 2nd Sem.'],
      options4: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
      options5: ['New Student', 'Transferee'],
      text: ref(''),
      text1: ref(''),
      text2: ref(''),
      text3: ref(''),
      text4: ref(''),
      text5: ref(''),
      text6: ref(''),
      text7: ref(''),
      text8: ref(''),
      text9: ref(''),
      text10: ref(''),
      text11: ref(''),
      text12: ref(''),
      text13: ref(''),
      text14: ref(''),
      text15: ref(''),
      text16: ref(''),
      text17: ref(''),
      text18: ref(''),
      text19: ref(''),
      text20: ref(''),
      text21: ref(''),
      text22: ref(''),
      text23: ref(''),
      text24: ref(''),
      text25: ref(''),
      text26: ref(''),
      text27: ref(''),
      text28: ref(''),
      text29: ref(''),
      dense: ref(false),
      single: ref(null),
      single1: ref(null),
      single2: ref(null),
      single3: ref(null),
      single4: ref(null),
      options1: ['Female', 'Male'],
      options2: ['Sigle', 'Married', 'Widowed', 'Divorced'],
      options: [],
      date: ref(''),
      splitterModel: ref(50),
    };
  },
};
</script>
