<template>
  <q-page class="q-pa-md">
          <q-btn
            label="Add Section"
            color="primary"
            dense
            flat
            icon="add"
            @click="addNewSection = true"
          />
    <q-table
    class="my-sticky-header-table"
      title="Section List"
      :rows="AllSection"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
      :grid="$q.screen.xs"
      hide-bottom
      bordered
      flat
      dense
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            rounded
            dense
            debounce="100"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          
          <q-dialog v-model="addNewSection" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="bg-primary row">
                <div class="text-h6">Add Section</div>
                <q-space />
                <q-btn
                  flat
                  round
                  dense
                  icon="close"
                  v-close-popup
                  @click="resetModel()"
                />
              </q-card-section>

              <q-card-section>
                <q-form>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSection.sectionName"
                        label="Section Name"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.YearLevel"
                        :options="options"
                        label="Year Level"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.time1"
                        :options="time"
                        label="Time"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.time2"
                        :options="time"
                        label="Time"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.day1"
                        :options="day"
                        label="Day"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.day2"
                        :options="day"
                        label="Day"
                      />
                    </div>
                  </div>

                  <q-card-actions align="right">
                    <q-btn
                      label="Cancel"
                      color="red-10"
                      v-close-popup
                      @click="resetModel()"
                    />
                    <q-btn
                      v-close-popup
                      label="Add"
                      color="primary"
                      @click="onaddSection()"
                    />
                  </q-card-actions>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              round
              color="blue"
              icon="edit"
              size="sm"
              flat
              dense
              @click="openEditDialog(props.row)"
            />
            <q-dialog v-model="updateSection" persistent>
              <q-card style="width: 800px; max-width: 100vw">
                <q-card-section class="bg-primary row">
                  <div class="text-h6">Edit Section</div>
                  <q-space />
                  <q-btn
                    flat
                    round
                    dense
                    icon="close"
                    v-close-popup
                    @click="resetModel()"
                  />
                </q-card-section>

                <q-card-section>
                  <q-form @submit="oneditSection">
                    <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSection.sectionName"
                        label="Section Name"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.YearLevel"
                        :options="options"
                        label="Year Level"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.time1"
                        :options="time"
                        label="Time"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.time2"
                        :options="time"
                        label="Time"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.day1"
                        :options="day"
                        label="Day"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        v-model="inputSection.day2"
                        :options="day"
                        label="Day"
                      />
                    </div>
                  </div>
                    <q-card-actions align="right">
                      <q-btn
                        label="Cancel"
                        color="red-10"
                        v-close-popup
                        @click="resetModel()"
                      />
                      <q-btn
                        v-close-popup
                        label="Save"
                        color="primary"
                        type="submit"
                      />
                    </q-card-actions>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-dialog>
            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="deleteSpecificSection(props.row)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { section } from 'src/store/section/state';
import { mapActions, mapState } from 'vuex';
import { SectionDto, TeacherDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('section', ['AllSection']),
  },
  methods: {
    ...mapActions('section', [
      'addsections',
      'editsection',
      'deletesection',
      'getAllsection',
    ]),
  },
})
export default class ManageSection extends Vue {
  addsections!: (payload: SectionDto) => Promise<void>;
  editsection!: (payload: SectionDto) => Promise<void>;
  deletesection!: (payload: SectionDto) => Promise<void>;
  AllSection!: section[];
  getAllsection!: () => Promise<void>;

  async mounted() {
    await this.getAllsection();
  }
  columns = [
    {
      name: 'Year Level',
      align: 'center',
      label: 'Year Level',
      field: (row: SectionDto) => row.YearLevel,
    },
    {
      name: 'Section Name',
      align: 'center',
      label: 'Section Name',
      field: (row: SectionDto) => row.sectionName,
      format: (val: string) => `${val}`,
    },

    {
      name: 'time/date',
      align: 'left',
      label: 'Time and Day',
      field: (row: SectionDto) =>
        row.time1 + ' -' + row.time2 + ' /' + row.day1 + ' -' + row.day2,
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewSection = false;
  updateSection = false;
  filter = '';
  options = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  time = [
    '6:00am',
    '6:30am',
    '7:00am',
    '7:30am',
    '8:00am',
    '8:30am',
    '9:00am',
    '9:30am',
    '10:00am',
    '10:30am',
    '11:30am',
    '12:00am',
    '12:30pm',
    '1:00pm',
    '1:30pm',
    '2:00pm',
    '2:30pm',
    '3:00pm',
    '3:30pm',
    '4:00pm',
    '4:30pm',
    '5:00pm',
    '5:30pm',
    '6:00pm',
  ];
  day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  inputSection: SectionDto = {
    YearLevel: '',
    sectionName: '',
    time1: '',
    time2: '',
    day1: '',
    day2: '',
  };

  async onaddSection() {
    await this.addsections(this.inputSection);
    this.addNewSection = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditSection() {
    await this.editsection(this.inputSection);
    this.updateSection = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificSection(val: SectionDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deletesection(val.sectionID as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: SectionDto) {
    this.updateSection = true;
    this.inputSection = { ...val };
  }

  resetModel() {
    this.inputSection = {
      YearLevel: '',
      sectionName: '',
      time1: '',
      time2: '',
      day1: '',
      day2: '',
    };
  }
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