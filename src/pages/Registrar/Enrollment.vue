<template>
  <div class="text-h3 q-pudding-lg">Entering Subject</div>

  <div class="row">
    <q-card dark bordered class="bg-secondary full-width">
      <q-card-section class="q-gutter-md row">
        <div class="col-2">
          <q-input outlined dense label="ID Number" />
        </div>
        <q-btn push color="cyan" label="Enter" text-color="dark" />
      </q-card-section>

      <q-card class="bg-secondary my-card">
        <q-card-section rounded class="bg-secondary">
          <div class="col-2">
            <div>Name:</div>
            <div>Cur. Program:</div>
            <div>Religion:</div>
            <div>Gender:</div>
            <div>Admitted:</div>
          </div>
        </q-card-section>
      </q-card>

      <div bordered class="bg-secondary full-width">
        <q-splitter
          v-model="splitterModel"
          separator-class="bg-white"
          separator-style="width: 3px"
        >
          <template v-slot:before>
            <div class="bg-secondary">
              <div class="text-h4 q-mb-md">Offered Subject</div>
                <div class="q-gutter-sm">
                  <q-checkbox size="xs" v-model="right" label="CCC111" />
                </div>
                <div class="q-gutter-sm">
                  <q-checkbox size="xs" v-model="right" label="CCC111" />
                </div>
                <div class="q-gutter-sm">
                  <q-checkbox size="xs" v-model="right" label="CCC111" />
                </div>
                <div class="q-gutter-sm">
                  <q-checkbox size="xs" v-model="right" label="CCC111" />
                </div>
                <div class="q-gutter-sm">
                  <q-checkbox size="xs" v-model="right" label="CCC111" />
                </div>
                <div class="q-gutter-sm">
                  <q-checkbox size="xs" v-model="right" label="CCC111" />
                </div>
            </div>
          </template>

          <template v-slot:after>
            <div class="q-pa-md">
              <div class="text-h4 q-mb-md">Entered Subject</div>
              <div class="q-my-md">
                <div>csc322</div>
                <div>csc322</div>
                <div>csc322</div>
                <div>csc322</div>
                <div>csc322</div>
              </div>
            </div>
            <q-btn
              class="flex-bottom-center"
              push
              color="white"
              label="Print"
              text-color="dark"
            />
          </template>
        </q-splitter>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'Vue-class-component';

@Options({})
export default class Manage extends Vue {
  splitterModel = 50;
  right = true;
}
</script>
<style lang="sass" scoped>
.my-card
  width: 500%
  max-width: 500px
</style>
