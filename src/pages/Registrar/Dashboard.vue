<template>
  <div class="text-h4 q-mb-md flex flex-center">Entering Subject</div>

  <div class="q-gutter-md row items-start">
    <q-card dark bordered class="bg-red-14 full-width">
      <q-card-section class="q-gutter-md row">
        <div class="col-2">
          <q-input  outlined dense label="ID Number" />
        </div>
        <q-btn push color="white" label="Enter" text-color="dark" />
      </q-card-section>

      <q-card class="bg-red-14 my-card">
        <q-card-section>
          <div class="col-2">
            <div>Name:</div>
            <div>Cur. Program:</div>
            <div>Religion:</div>
            <div>Gender:</div>
            <div>Admitted:</div>
          </div>
        </q-card-section>
      </q-card>/

      
    </q-card>

      <div bordered class="bg-red-14 full-width">
        <q-splitter
          v-model="splitterModel"
          separator-class="bg-white"
          separator-style="width: 3px"
        >
          <template v-slot:before>
            <div class="q-pa-md">
              <div class="text-h4 q-mb-md">Offered Subject</div>
              <div class="q-my-md">
                <div>ccc111</div>
                <div>ccc111</div>
                <div>ccc111</div>
                <div>ccc111</div>
                <div>ccc111</div>
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
            <q-btn class='flex-bottom-center' push color="white" label="Print" text-color="dark" />
          </template>
        </q-splitter>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'Vue-class-component';

@Options({})
export default class Manage extends Vue {
  splitterModel = 50;
}
</script>
<style lang="sass" scoped>
.my-card
  width: 500%
  max-width: 500px
</style>
