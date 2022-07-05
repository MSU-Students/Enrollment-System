<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-tabs
        v-model="tab"
        dense
        inline-label
        :breakpoint="0"
        align="justify"
        class="text-white"
      >
        <q-tab
          :ripple="false"
          name="firstyear"
          icon="person"
          label="First Year"
        />
        <q-tab
          :ripple="false"
          name="secondyear"
          icon="person"
          label="Second year"
        />
        <q-tab
          :ripple="false"
          name="thirdyear"
          icon="person"
          label="Third Year"
        />
        <q-tab
          :ripple="false"
          name="forthyear"
          icon="people"
          label="Fourth Year"
        />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="firstyear">
          <q-splitter
            v-model="splitterModel"
            separator-class="bg-white"
            separator-style="width: 3px"
          >
            <template v-slot:before>
              <q-table
                class="my-sticky-header-table"
                title="FIRST SEMESTER"
                :rows="rows"
                :columns="columns"
                row-key="name"
                :separator="separator"
                flat
                bordered
              >
                <template v-slot:top-right>
                  <div class="q-pa-md q-gutter-sm row">
                    <q-btn
                      label="Add Subject"
                      color="black"
                      dense
                      flat
                      icon="add"
                      @click="addSubject = true"
                    />
                  </div>
                </template>
              </q-table>
            </template>

            <template v-slot:after>
              <q-table
                class="my-sticky-header-table"
                title="SECOND SEMESTER"
                :rows="rows"
                :columns="columns"
                row-key="name"
                flat
                bordered
              >
                <template v-slot:top-right>
                  <div class="q-pa-md q-gutter-sm row">
                    <q-btn
                      label="Add Subject"
                      color="black"
                      dense
                      flat
                      icon="add"
                      @click="addSubject = true"
                    />
                  </div>
                </template>
              </q-table>
            </template>
          </q-splitter>
        </q-tab-panel>
      </q-tab-panels>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="secondyear">
          <q-splitter
            v-model="splitterModel"
            separator-class="bg-white"
            separator-style="width: 3px"
          >
            <template v-slot:before>
              <q-table
                class="my-sticky-header-table"
                title="FIRST SEMESTER"
                :rows="rows"
                :columns="columns"
                row-key="name"
                :separator="separator"
                flat
                bordered
              >
                <template v-slot:top-right>
                  <div class="q-pa-md q-gutter-sm row">
                    <q-btn
                      label="Add Subject"
                      color="black"
                      dense
                      flat
                      icon="add"
                      @click="addSubject = true"
                    />
                  </div>
                </template>
              </q-table>
            </template>

            <template v-slot:after>
              <q-table
                class="my-sticky-header-table"
                title="SECOND SEMESTER"
                :rows="rows"
                :columns="columns"
                row-key="name"
                flat
                bordered
              >
                <template v-slot:top-right>
                  <div class="q-pa-md q-gutter-sm row">
                    <q-btn
                      label="Add Subject"
                      color="black"
                      dense
                      flat
                      icon="add"
                      @click="addSubject = true"
                    />
                  </div>
                </template>
              </q-table>
            </template>

          </q-splitter>
        </q-tab-panel>
      </q-tab-panels>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="thirdyear">
          <q-splitter
            v-model="splitterModel"
            separator-class="bg-white"
            separator-style="width: 3px"
          >
            <template v-slot:before>
              <q-table
                class="my-sticky-header-table"
                title="FIRST SEMESTER"
                :rows="rows"
                :columns="columns"
                row-key="name"
                flat
                bordered
              >
                <template v-slot:top-right>
                  <div class="q-pa-md q-gutter-sm row">
                    <q-btn
                      label="Add Subject"
                      color="black"
                      dense
                      flat
                      icon="add"
                      @click="addSubject = true"
                    />
                  </div>
                </template>
              </q-table>
            </template>

            <template v-slot:after>
              <q-table
                class="my-sticky-header-table"
                title="SECOND SEMESTER"
                :rows="rows"
                :columns="columns"
                row-key="name"
                flat
                bordered
              >
                <template v-slot:top-right>
                  <div class="q-pa-md q-gutter-sm row">
                    <q-btn
                      label="Add Subject"
                      color="black"
                      dense
                      flat
                      icon="add"
                      @click="addSubject = true"
                    />
                  </div>
                </template>
              </q-table>
            </template>

          </q-splitter>
        </q-tab-panel>
      </q-tab-panels>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="forthyear">
          <q-splitter
            v-model="splitterModel"
            separator-class="bg-white"
            separator-style="width: 3px"
          >
            <template v-slot:before>
              <q-table
                class="my-sticky-header-table"
                title="FIRST SEMESTER"
                :rows="rows"
                :columns="columns"
                row-key="name"
                flat
                bordered
              >
                <template v-slot:top-right>
                  <div class="q-pa-md q-gutter-sm row">
                    <q-btn
                      label="Add Subject"
                      color="black"
                      dense
                      flat
                      icon="add"
                      @click="addSubject = true"
                    />
                  </div>
                </template>
              </q-table>
            </template>

            <template v-slot:after>
              <q-table
                class="my-sticky-header-table"
                title="SECOND SEMESTER"
                :rows="rows"
                :columns="columns"
                row-key="name"
                flat
                bordered
              >
                <template v-slot:top-right>
                  <div class="q-pa-md q-gutter-sm row">
                    <q-btn
                      label="Add Subject"
                      color="black"
                      dense
                      flat
                      icon="add"
                      @click="addSubject = true"
                    />
                  </div>
                </template>
              </q-table>
            </template>

          </q-splitter>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'Vue-class-component';
@Options({})
export default class Manage extends Vue {
  columns = [

  ]
  rows = [

  ]
    addSubject = true;
    splitterModel = 50;
  tab = 'firstyear';
  name1 = ' ';
  options1 = ['2020-2021 1st Sem.', '2020-2021 2nd Sem.'];
  separator = 'vertical';
}
</script>
<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%
  max-height: 700px
  width: 100%
  max-width: 1500px


  .q-table__top,
  .q-table__bottom,
thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #B3E5FC
  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

</style>
