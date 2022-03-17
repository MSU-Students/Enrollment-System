<template>
  <q-page class="q-pa-lg">
    <div>
      <div class="text-h4 text-white text-bold flex flex-center">
        FIRST YEAR SUBJECTS
      </div>
      <br />
      <div class="q-px-md q-gutter-md row">
        <div class="col">
          <q-table
            title="First Semester"
            :rows="allFirsYear"
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
                  label="Add Subject"
                  color="primary"
                  e
                  dense
                  flat
                  icon="add"
                  @click="addNewFirstYear = true"
                />
                <q-dialog v-model="addNewFirstYear" persistent>
                  <q-card
                    style="width: 800px; max-width: 100vw"
                    class="q-pa-sm"
                  >
                    <q-card-section class="row">
                      <div class="text-h6">Add Subject</div>
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
                      <q-form @submit="onaddFirstYear">
                        <div class="row q-gutter-md q-py-sm">
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFirstYear.subject"
                              label="Subject"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Does not accept empty input',
                              ]"
                            />
                          </div>
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFirstYear.description"
                              label="Description"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Does not accept empty input',
                              ]"
                            />
                          </div>
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFirstYear.units"
                              label="Units"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Does not accept empty input',
                              ]"
                            />
                          </div>
                        </div>

                        <div align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="red"
                            v-close-popup
                            @click="resetModel()"
                          />
                          <q-btn
                            flat
                            label="Save"
                            color="primary"
                            type="submit"
                          />
                        </div>
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
                  <q-dialog v-model="updateFirstYear" persistent>
                    <q-card
                      style="width: 800px; max-width: 100vw"
                      class="q-pa-sm"
                    >
                      <q-card-section class="row">
                        <div class="text-h6">Edit Subject</div>
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
                        <q-form @submit="oneditFirstYear">
                          <div class="row q-gutter-md q-py-sm">
                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFirstYear.subject"
                                label="Subject"
                              />
                            </div>
                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFirstYear.units"
                                label="Units"
                              />
                            </div>

                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFirstYear.description"
                                label="Description"
                              />
                            </div>
                          </div>

                          <div align="right">
                            <q-btn
                              flat
                              label="Cancel"
                              color="red-10"
                              @click="resetModel()"
                              v-close-popup
                            />
                            <q-btn
                              flat
                              label="Save"
                              color="primary"
                              type="submit"
                            />
                          </div>
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
                    @click="deleteSpecificFirstYear(props.row)"
                  />
                </div>
              </q-td>
            </template>
          </q-table>
        </div>

        <div class="col">
          <q-table
            title="Second Semester"
            :rows="allFirstYear2ndSem"
            :columns="columns2"
            row-key="name"
            :rows-per-page-options="[0]"
            :filter="filter2"
          >
            <template v-slot:top-right>
              <div class="q-pa-md q-gutter-sm row">
                <q-input
                  outlined
                  rounded
                  dense
                  debounce="300"
                  v-model="filter2"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-btn
                  label="Add Subject"
                  color="primary"
                  dense
                  flat
                  icon="add"
                  @click="addNewFirstYear2ndSem = true"
                />
                <q-dialog v-model="addNewFirstYear2ndSem" persistent>
                  <q-card
                    style="width: 800px; max-width: 100vw"
                    class="q-pa-sm"
                  >
                    <q-card-section class="row">
                      <div class="text-h6">Add Subject</div>
                      <q-space />
                      <q-btn
                        flat
                        round
                        dense
                        icon="close"
                        v-close-popup
                        @click="resetModel2()"
                      />
                    </q-card-section>

                    <q-card-section>
                      <q-form @submit="onaddFirstYear2ndSem">
                        <div class="row q-gutter-md q-py-sm">
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFirstYear2ndSem.subjectSecond"
                              label="Subject"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Does not accept empty input',
                              ]"
                            />
                          </div>

                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFirstYear2ndSem.descriptionSecond"
                              label="Description"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Does not accept empty input',
                              ]"
                            />
                          </div>
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFirstYear2ndSem.unitsSecond"
                              label="Units"
                              lazy-rules=""
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Does not accept empty input',
                              ]"
                            />
                          </div>
                        </div>

                        <div align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="red-10"
                            v-close-popup
                            @click="resetModel2()"
                          />
                          <q-btn
                            flat
                            label="Save"
                            color="primary"
                            type="submit"
                          />
                        </div>
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
                    @click="openEditDialog2(props.row)"
                  />
                  <q-dialog v-model="updateFirstYear2ndSem" persistent>
                    <q-card
                      style="width: 800px; max-width: 100vw"
                      class="q-pa-sm"
                    >
                      <q-card-section class="row">
                        <div class="text-h6">Edit Subject</div>
                        <q-space />
                        <q-btn
                          flat
                          round
                          dense
                          icon="close"
                          v-close-popup
                          @click="resetModel2()"
                        />
                      </q-card-section>

                      <q-card-section>
                        <q-form @submit="oneditFirstYear2ndSem">
                          <div class="row q-gutter-md q-py-sm">
                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFirstYear2ndSem.subjectSecond"
                                label="Subject"
                              />
                            </div>
                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFirstYear2ndSem.unitsSecond"
                                label="UnitSecond"
                              />
                            </div>

                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFirstYear2ndSem.descriptionSecond"
                                label="Description"
                              />
                            </div>
                          </div>

                          <div align="right">
                            <q-btn
                              flat
                              label="Cancel"
                              color="red-10"
                              @click="resetModel2()"
                              v-close-popup
                            />
                            <q-btn
                              flat
                              label="Save"
                              color="primary"
                              type="submit"
                            />
                          </div>
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
                    @click="deleteSpecificFirstYear2ndSem(props.row)"
                  />
                </div>
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { IFirstYearInfo } from 'src/store/Firstyear1stSem/state';
import { IFirstYear2ndSemInfo } from 'src/store/Firstyear2ndSem/state';
import { mapActions, mapState } from 'vuex';
@Options({
  computed: {
    ...mapState('FirstYear1stSem', ['allFirsYear']),
    ...mapState('FirstYear2ndSem', ['allFirstYear2ndSem']),
  },
  methods: {
    ...mapActions('FirstYear1stSem', [
      'addFirstYear',
      'editFirstYear',
      'deleteFirstYear',
    ]),
    ...mapActions('FirstYear2ndSem', [
      'addFirstYear2ndSem',
      'editFirstYear2ndSem',
      'deleteFirstYear2ndSem',
    ]),
  },
})
export default class ManageAccount extends Vue {
  addFirstYear!: (payload: IFirstYearInfo) => Promise<void>;
  editFirstYear!: (payload: IFirstYearInfo) => Promise<void>;
  deleteFirstYear!: (payload: IFirstYearInfo) => Promise<void>;
  allFirsYear!: IFirstYearInfo[];
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Subjects',
      align: 'left',
      field: (row: IFirstYearInfo) => row.subject + ' ',
      format: (val: string) => `${val}`,
    },
    {
      name: 'Description',
      align: 'left',
      label: 'Description',
      field: 'description',
    },

    { name: 'Units', align: 'left', label: 'Units', field: 'units' },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewFirstYear = false;
  updateFirstYear = false;

  filter = '';
  options = ['Admin', 'Chairperson', 'Registrar'];
  inputFirstYear: IFirstYearInfo = {
    subject: '',
    description: '',
    units: ' ',
  };
  async onaddFirstYear() {
    await this.addFirstYear(this.inputFirstYear);
    this.addNewFirstYear = false;
    this.resetModel();
    this.$q.notify({
      position: 'center',
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }
  async oneditFirstYear() {
    await this.editFirstYear(this.inputFirstYear);
    this.updateFirstYear = false;
    this.resetModel();
    this.$q.notify({
      position: 'center',
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }
  deleteSpecificFirstYear(val: IFirstYearInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteFirstYear(val);
        this.$q.notify({
          position: 'center',
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }
  openEditDialog(val: IFirstYearInfo) {
    this.updateFirstYear = true;
    this.inputFirstYear = { ...val };
  }
  resetModel() {
    this.inputFirstYear = {
      subject: '',
      description: '',
      units: '',
    };
  }
  //---------------------------> SECOND SEMESTER <----------------------------------------------
  addFirstYear2ndSem!: (payload: IFirstYear2ndSemInfo) => Promise<void>;
  editFirstYear2ndSem!: (payload: IFirstYear2ndSemInfo) => Promise<void>;
  deleteFirstYear2ndSem!: (payload: IFirstYear2ndSemInfo) => Promise<void>;
  allFirstYear2ndSem!: IFirstYear2ndSemInfo[];
  columns2 = [
    {
      name: 'name',
      required: true,
      label: 'Subject',
      align: 'left',
      field: (row: IFirstYear2ndSemInfo) => row.subjectSecond,
      format: (val: string) => `${val}`,
    },
    {
      name: 'Description',
      align: 'left',
      label: 'Description',
      field: 'descriptionSecond',
    },

    { name: 'status', align: 'left', label: 'Unit', field: 'unitsSecond' },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];

  addNewFirstYear2ndSem = false;
  updateFirstYear2ndSem = false;
  filter2 = '';
  options2 = ['Admin', 'Chairperson', 'Registrar'];
  inputFirstYear2ndSem: IFirstYear2ndSemInfo = {
    subjectSecond: '',
    descriptionSecond: '',
    unitsSecond: ' ',
  };
  async onaddFirstYear2ndSem() {
    await this.addFirstYear2ndSem(this.inputFirstYear2ndSem);
    this.addNewFirstYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      position: 'center',
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }
  async oneditFirstYear2ndSem() {
    await this.editFirstYear2ndSem(this.inputFirstYear2ndSem);
    this.updateFirstYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      position: 'center',
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }
  deleteSpecificFirstYear2ndSem(val: IFirstYear2ndSemInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteFirstYear2ndSem(val);
        this.$q.notify({
          position: 'center',
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }
  openEditDialog2(val: IFirstYear2ndSemInfo) {
    this.updateFirstYear2ndSem = true;
    this.inputFirstYear2ndSem = { ...val };
  }
  resetModel2() {
    this.inputFirstYear2ndSem = {
      subjectSecond: '',
      descriptionSecond: '',
      unitsSecond: ' ',
    };
  }
}
</script>
