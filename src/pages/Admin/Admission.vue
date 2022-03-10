<template>
  <q-page class="q-gutter-md q-pa-lg flex flex-center">
    <q-card style="width: 900px; max-width: 200vw">
      <q-form @submit="onSubmit" class="q-gutter-sm">
        <div class="text-h4 flex flex-center">Requirements</div>

        <div class="flex flex-center">
          <q-checkbox v-model="selection" label="Report Card" color="blue" />
          <q-checkbox
            v-model="selection"
            label="Birth Certificate"
            color="blue"
          />
          <q-checkbox v-model="selection" label="1x1 Picture" color="blue" />
          <q-checkbox
            v-model="selection"
            label="Enrollment Form"
            color="blue"
          />
        </div>

        <div class="q-px-sm">
          The model data: <strong>{{ selection }}</strong>
        </div>
        <div class="row q-gutter-sm q-py-sm">
          <div class="col">
            <q-input autofocus outlined v-model="name" label="ID number" />
          </div>
          <div class="col">
            <q-input outlined v-model="name" label="LRN" />
          </div>
          <div class="col">
            <q-select
              outlined
              v-model="name"
              :options="options"
              label="AY Code"
            />
          </div>
        </div>
        <div class="row q-gutter-sm q-py-sm">
          <div class="col">
            <q-select
              outlined
              v-model="name"
              :options="options"
              label="Year Level"
            />
          </div>
          <div class="col">
            <q-select
              outlined
              v-model="name"
              :options="options"
              label="Student Type"
            />
          </div>
        </div>

        <q-separator></q-separator>
        <div class="text-h4 flex flex-center">Information</div>

        <div class="row q-gutter-sm q-py-sm">
          <div class="col">
            <q-input autofocus outlined v-model="name" label="First Name" />
          </div>
          <div class="col">
            <q-input outlined v-model="name" label="Middle Initial" />
          </div>
          <div class="col">
            <q-input outlined v-model="name" label="Last Name" />
          </div>
        </div>
        <div class="row q-gutter-sm q-py-sm">
          <div class="col">
            <q-input outlined v-model="name" label="Username" />
          </div>
          <div class="col">
            <q-input outlined v-model="name" label="Password" />
          </div>
        </div>
        <div class="row q-gutter-sm q-py-sm">
          <div class="col">
            <q-select
              outlined
              v-model="name"
              :options="options"
              label="Designation"
            />
          </div>
        </div>

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      selection: ref(['']),

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },
    };
  },
};
</script>
