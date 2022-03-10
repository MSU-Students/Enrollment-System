<template>
  <q-page class="q-pa-lg">
    <div>
      <div class="text-h4 text-white text-bold flex flex-center">
        FOURTH YEAR SUBJECTS
      </div>
      <br />
      <div class="q-px-md q-gutter-md row">
        <div class="col">
          <q-table
            title="First Semester"
            :rows="allFourYear1stSem"
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
                  @click="addNewFourYear1stSem = true"
                />
                <q-dialog v-model="addNewFourYear1stSem" persistent>
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
                      <q-form @submit="onaddFourYear1stSem">
                        <div class="row q-gutter-md q-py-sm">
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFourYear1stSem.subject"
                              label="Subject"
                            />
                          </div>
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFourYear1stSem.units"
                              label="Units"
                            />
                          </div>
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFourYear1stSem.description"
                              label="Description"
                            />
                          </div>
                        </div>

                        <div align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="red-10"
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
                  <q-dialog v-model="updateFourYear1stSem" persistent>
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
                        <q-form @submit="oneditFourYear1stSem">
                          <div class="row q-gutter-md q-py-sm">
                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFourYear1stSem.subject"
                                label="Subject"
                              />
                            </div>
                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFourYear1stSem.units"
                                label="Units"
                              />
                            </div>

                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFourYear1stSem.description"
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
                    @click="deleteSpecificFourYear1stSem(props.row)"
                  />
                </div>
              </q-td>
            </template>
          </q-table>
        </div>

        <div class="col">
          <q-table
            title="Second Semester"
            :rows="allFourYear2ndSem"
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
                  e
                  dense
                  flat
                  icon="add"
                  @click="addNewFourYear2ndSem = true"
                />
                <q-dialog v-model="addNewFourYear2ndSem" persistent>
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
                      <q-form @submit="onaddFourYear2ndSem">
                        <div class="row q-gutter-md q-py-sm">
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFourYear2ndSem.subject"
                              label="Subject"
                            />
                          </div>
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFourYear2ndSem.units"
                              label="Units"
                            />
                          </div>
                          <div class="col">
                            <q-input
                              autofocus
                              outlined
                              v-model="inputFourYear2ndSem.description"
                              label="Description"
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
                  <q-dialog v-model="updateFourYear2ndSem" persistent>
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
                        <q-form @submit="oneditFourYear2ndSem">
                          <div class="row q-gutter-md q-py-sm">
                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFourYear2ndSem.subject"
                                label="Subject"
                              />
                            </div>
                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFourYear2ndSem.units"
                                label="Units"
                              />
                            </div>

                            <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputFourYear2ndSem.description"
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
                    @click="deleteSpecificFourYear2ndSem(props.row)"
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
import { IFourYear1stSemInfo } from 'src/store/ForthYear1stSem/state';
import { IFourYear2ndSemInfo } from 'src/store/ForthYear2ndSem/state';
import { mapActions, mapState } from 'vuex';
@Options({
  computed: {
    ...mapState('FourYear1stSem', ['allFourYear1stSem']),
    ...mapState('FourYear2ndSem', ['allFourYear2ndSem']),
  },
  methods: {
    ...mapActions('FourYear1stSem', [
      'addFourYear1stSem',
      'editFourYear1stSem',
      'deleteFourYear1stSem',
    ]),
    ...mapActions('FourYear2ndSem', [
      'addFourYear2ndSem',
      'editFourYear2ndSem',
      'deleteFourYear2ndSem',
    ]),
  },
})
export default class ManageAccount extends Vue {
  addFourYear1stSem!: (payload: IFourYear1stSemInfo) => Promise<void>;
  editFourYear1stSem!: (payload: IFourYear1stSemInfo) => Promise<void>;
  deleteFourYear1stSem!: (payload: IFourYear1stSemInfo) => Promise<void>;
  allFourYear1stSem!: IFourYear1stSemInfo[];
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Subjects',
      align: 'left',
      field: (row: IFourYear1stSemInfo) => row.subject + ' ',
      format: (val: string) => `${val}`,
    },
    {
      name: 'Description',
      align: 'left',
      label: 'Description',
      field: 'description',
    },

    { name: 'status', align: 'left', label: 'Units', field: 'units' },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewFourYear1stSem = false;
  updateFourYear1stSem = false;
  filter = '';
  options = ['Admin', 'Chairperson', 'Registrar'];
  inputFourYear1stSem: IFourYear1stSemInfo = {
    subject: '',
    description: '',
    units: ' ',
  };
  async onaddFourYear1stSem() {
    await this.addFourYear1stSem(this.inputFourYear1stSem);
    this.addNewFourYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }
  async oneditFourYear1stSem() {
    await this.editFourYear1stSem(this.inputFourYear1stSem);
    this.updateFourYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }
  deleteSpecificFourYear1stSem(val: IFourYear1stSemInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteFourYear1stSem(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }
  openEditDialog(val: IFourYear1stSemInfo) {
    this.updateFourYear1stSem = true;
    this.inputFourYear1stSem = { ...val };
  }
  resetModel() {
    this.inputFourYear1stSem = {
      subject: '',
      description: '',
      units: ' ',
    };
  }
  //---------------------------> Second Semester <----------------------------------------------

  addFourYear2ndSem!: (payload: IFourYear2ndSemInfo) => Promise<void>;
  editFourYear2ndSem!: (payload: IFourYear2ndSemInfo) => Promise<void>;
  deleteFourYear2ndSem!: (payload: IFourYear2ndSemInfo) => Promise<void>;
  allFourYear2ndSem!: IFourYear2ndSemInfo[];
  columns2 = [
    {
      name: 'name',
      required: true,
      label: 'Subjects',
      align: 'left',
      field: (row: IFourYear2ndSemInfo) => row.subject,
      format: (val: string) => `${val}`,
    },
    {
      name: 'Description',
      align: 'left',
      label: 'Description',
      field: 'description',
    },

    { name: 'status', align: 'left', label: 'Units', field: 'units' },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewFourYear2ndSem = false;
  updateFourYear2ndSem = false;
  filter2 = '';
  options2 = ['Admin', 'Chairperson', 'Registrar'];
  inputFourYear2ndSem: IFourYear2ndSemInfo = {
    subject: '',
    description: '',
    units: ' ',
  };
  async onaddFourYear2ndSem() {
    await this.addFourYear2ndSem(this.inputFourYear2ndSem);
    this.addNewFourYear2ndSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }
  async oneditFourYear2ndSem() {
    await this.editFourYear2ndSem(this.inputFourYear2ndSem);
    this.updateFourYear2ndSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }
  deleteSpecificFourYear2ndSem(val: IFourYear2ndSemInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteFourYear2ndSem(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }
  openEditDialog2(val: IFourYear2ndSemInfo) {
    this.updateFourYear2ndSem = true;
    this.inputFourYear2ndSem = { ...val };
  }
  resetModel2() {
    this.inputFourYear2ndSem = {
      subject: '',
      description: '',
      units: ' ',
    };
  }
}
</script>
