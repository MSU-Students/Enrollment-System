<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="style" color="light-blue-6" style="font-size: 4rem" />
      Manage Schedule
    </div>

    <br />

    <q-table
      title="Schedule List"
      :rows="AllSchedule"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            rounded
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn
            label="Add Schedule"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="addNewSchedule = true"
          />
          <q-dialog v-model="addNewSchedule" persistent>
            <q-card style="width: 800px; max-width: 100vw">
              <q-card-section class="bg-primary row">
                <div class="text-h6">Add Schedule</div>
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
                <q-form @submit="onaddSchedule">
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputSchedule.SubjectCode"
                        label="SubjectCode"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSchedule.DescriptiveTitle"
                        label="Descriptive Title"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSchedule.Units"
                        label="Units"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSchedule.Teacher"
                        label="Teacher"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSchedule.Room"
                        label="Room"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.Day"
                        :options="options"
                        label="Day"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputSchedule.Day2"
                        :options="options1"
                        label="Day 2"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSchedule.Time"
                        mask="time"
                        :rules="['time']"
                        label="Time"
                      >
                        <template v-slot:append>
                          <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy
                              cover
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-time v-model="inputSchedule.Time">
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-time>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputSchedule.Time2"
                        mask="time"
                        :rules="['time']"
                        label="Time"
                      >
                        <template v-slot:append>
                          <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy
                              cover
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-time v-model="inputSchedule.Time2">
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-time>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
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
                      type="submit"
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
            <q-dialog v-model="updateSchedule" persistent>
              <q-card style="width: 800px; max-width: 100vw">
                <q-card-section class="bg-primary row">
                  <div class="text-h6">Edit Schedule</div>
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
                  <q-form @submit="oneditSchedule">
                    <div class="row">
                      <div class="col col-md-6">
                        <q-input
                          autofocus
                          class="q-py-md"
                          outlined
                          v-model="inputSchedule.SubjectCode"
                          label="SubjectCode"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputSchedule.DescriptiveTitle"
                          label="Descriptive Title"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputSchedule.Units"
                          label="Units"
                        />
                        <q-select
                          outlined
                          class="q-py-md"
                          v-model="inputSchedule.Day"
                          :options="options"
                          label="Day"
                        />
                        <q-select
                          outlined
                          class="q-py-md"
                          v-model="inputSchedule.Day2"
                          :options="options1"
                          label="Day 2"
                        />
                      </div>

                      <div class="col-md-6 q-pl-md">
                        <q-input
                          outlined
                          v-model="inputSchedule.Time"
                          mask="time"
                          :rules="['time']"
                          label="Time"
                        >
                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy
                                cover
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-time v-model="inputSchedule.Time">
                                  <div class="row items-center justify-end">
                                    <q-btn
                                      v-close-popup
                                      label="Close"
                                      color="primary"
                                      flat
                                    />
                                  </div>
                                </q-time>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                        <q-input
                          outlined
                          v-model="inputSchedule.Time2"
                          mask="time"
                          :rules="['time']"
                          label="Time"
                        >
                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy
                                cover
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-time v-model="inputSchedule.Time2">
                                  <div class="row items-center justify-end">
                                    <q-btn
                                      v-close-popup
                                      label="Close"
                                      color="primary"
                                      flat
                                    />
                                  </div>
                                </q-time>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputSchedule.Teacher"
                          label="Teacher"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputSchedule.Room"
                          label="Room"
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
              @click="deleteSpecificSchedule(props.row)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ManagementSchedule } from 'src/store/ManagementSchedule/state';
import { mapActions, mapState } from 'vuex';
import { ScheduleDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('ManagementSchedule', ['AllSchedule']),
  },
  methods: {
    ...mapActions('ManagementSchedule', [
      'addSchedule',
      'editSchedule',
      'deleteSchedule',
      'getAllSchedules',
    ]),
  },
})
export default class ManageSchedule extends Vue {
  addSchedule!: (payload: ScheduleDto) => Promise<void>;
  editSchedule!: (payload: ScheduleDto) => Promise<void>;
  deleteSchedule!: (payload: ScheduleDto) => Promise<void>;
  getAllSchedules!: () => Promise<void>;
  AllSchedule!: ScheduleDto[];

  async mounted() {
    await this.getAllSchedules();
    console.log(this.AllSchedule);
  }
  columns = [
    {
      name: 'SubjectCode',
      required: true,
      label: 'Subject Code',
      align: 'left',
      field: (row: ScheduleDto) => row.SubjectCode,
      format: (val: string) => `${val}`,
    },
    {
      name: 'DescriptiveTitle',
      align: 'center',
      label: 'Descriptive Title',
      field: 'DescriptiveTitle',
    },
    { name: 'Units', align: 'center', label: 'Units', field: 'Units' },
    {
      name: 'Teacher',
      align: 'center',
      label: 'Teacher',
      field: 'Teacher',
    },
    {
      name: 'Room',
      align: 'center',
      label: 'Room',
      field: 'Room',
    },
    {
      name: 'Day',
      align: 'center',
      label: 'Day',
      field: (row: ScheduleDto) => row.Day + ' - ' + row.Day2,
      format: (val: string) => `${val}`,
    },

    {
      name: 'Time',
      align: 'center',
      label: 'Time',
      field: (row: ScheduleDto) => row.Time + ' - ' + row.Time2,
      format: (val: string) => `${val}`,
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewSchedule = false;
  updateSchedule = false;
  filter = '';
  time = '';
  options = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  options1 = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  inputSchedule: ScheduleDto = {
    SubjectCode: '',
    DescriptiveTitle: '',
    Units: '',
    Day: '',
    Day2: '',
    Time: '',
    Time2: '',
    Teacher: '',
    Room: '',
  };

  async onaddSchedule() {
    await this.addSchedule(this.inputSchedule);
    this.addNewSchedule = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditSchedule() {
    await this.editSchedule(this.inputSchedule);
    this.updateSchedule = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificSchedule(val: ScheduleDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteSchedule(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: ScheduleDto) {
    this.updateSchedule = true;
    this.inputSchedule = { ...val };
  }

  resetModel() {
    this.inputSchedule = {
      SubjectCode: '',
      DescriptiveTitle: '',
      Units: '',
      Day: '',
      Day2: '',
      Time: '',
      Time2: '',
      Teacher: '',
      Room: '',
    };
  }
}
</script>
