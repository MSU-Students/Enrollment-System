<template>
  
  <q-page class="q-pa-lg">
    <div>
      <div class="text-h4 text-white text-bold flex flex-center">SECOND YEAR SUBJECTS</div>
        <br />
        <div class="q-px-md q-gutter-md row">
           <div class="col">
             <q-table
                title="First Semester"
                :rows="allSecondYear1stSem"
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
                      @click="addNewSecondYear1stSem = true"
                    />
                    <q-dialog v-model="addNewSecondYear1stSem" persistent>
                      <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
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
                          <q-form @submit="onaddSecondYear1stSem">
                            <div class="row q-gutter-md q-py-sm">
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputSecondYear1stSem.subject"
                                  label="Subject"
                                />
                              </div>
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputSecondYear1stSem.units"
                                  label="Units"
                                />
                              </div>
                            <div class="col">
                                  <q-input
                                  autofocus
                                  outlined
                                  v-model="inputSecondYear1stSem.description"
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
                              <q-btn flat label="Save" color="primary" type="submit" />
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
                    <q-dialog v-model="updateSecondYear1stSem" persistent>
                      <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
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
                          <q-form @submit="oneditSecondYear1stSem">
                            <div class="row q-gutter-md q-py-sm">
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputSecondYear1stSem.subject"
                                  label="Subject"
                                />
                              </div>
                              <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputSecondYear1stSem.units"
                                label="Units"
                              />
                            </div>

                            <div class="col">
                                <q-input
                                autofocus
                                outlined
                                v-model="inputSecondYear1stSem.description"
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
                              <q-btn flat label="Save" color="primary" type="submit" />
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
                      @click="deleteSpecificSecondYear1stSem(props.row)"
                    />
                  </div>
                </q-td>
              </template>
            </q-table>
          </div>


        <div class="col">
             <q-table
                title="Second Semester"
                :rows="allSecondYear2ndSem"
                :columns="columns2"
                row-key="name"
                :rows-per-page-options="[0]"
                :filter="filter1"
              >
                <template v-slot:top-right>
                  <div class="q-pa-md q-gutter-sm row">
                    <q-input
                      outlined
                      rounded
                      dense
                      debounce="300"
                      v-model="filter1"
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
                      @click="addNewSecondYear2ndSem = true"
                    />
                    <q-dialog v-model="addNewSecondYear2ndSem" persistent>
                      <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
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
                          <q-form @submit="onaddSecondYear2ndSem">
                            <div class="row q-gutter-md q-py-sm">
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputSecondYear2ndSem.subject"
                                  label="Subject"
                                />
                              </div>
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputSecondYear2ndSem.units"
                                  label="Units"
                                />
                              </div>
                            <div class="col">
                                  <q-input
                                  autofocus
                                  outlined
                                  v-model="inputSecondYear2ndSem.description"
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
                              <q-btn flat label="Save" color="primary" type="submit" />
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
                    <q-dialog v-model="updateSecondYear2ndSem" persistent>
                      <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
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
                          <q-form @submit="oneditSecondYear2ndSem">
                            <div class="row q-gutter-md q-py-sm">
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputSecondYear2ndSem.subject"
                                  label="Subject"
                                />
                              </div>
                              <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputSecondYear2ndSem.units"
                                label="Units"
                              />
                            </div>

                            <div class="col">
                                <q-input
                                autofocus
                                outlined
                                v-model="inputSecondYear2ndSem.description"
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
                              <q-btn flat label="Save" color="primary" type="submit" />
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
                      @click="deleteSpecificSecondYear2ndSem(props.row)"
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
import { ISecondYear1stSemInfo } from 'src/store/SecondYear1stSem/state';
import { ISecondYear2ndSemInfo } from 'src/store/SecondYear2ndSem/state';


import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('SecondYear1stSem', ['allSecondYear1stSem']),
    ...mapState('SecondYear2ndSem', ['allSecondYear2ndSem']),
   
   
  },
  methods: {
    ...mapActions('SecondYear1stSem', ['addSecondYear1stSem', 'editSecondYear1stSem', 'deleteSecondYear1stSem']),
    ...mapActions('SecondYear2ndSem', ['addSecondYear2ndSem', 'editSecondYear2ndSem', 'deleteSecondYear2ndSem']),
    
  },
})
export default class ManageAccount extends Vue {


  
  addSecondYear1stSem!: (payload: ISecondYear1stSemInfo) => Promise<void>;
  editSecondYear1stSem!: (payload: ISecondYear1stSemInfo) => Promise<void>;
  deleteSecondYear1stSem!: (payload: ISecondYear1stSemInfo) => Promise<void>;
  allSecondYear1stSem!: ISecondYear1stSemInfo[];

  columns = [
    {
      name: 'name',
      required: true,
      label: 'Subjects',
      align: 'left',
      field: (row: ISecondYear1stSemInfo) =>
        row.subject + ' ',
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

  addNewSecondYear1stSem = false;
  updateSecondYear1stSem = false;
  filter = '';
  options = ['Admin', 'Chairperson', 'Registrar'];

  inputSecondYear1stSem: ISecondYear1stSemInfo = {
    subject: '',
   description: '',
    units: ' ',
  };

  async onaddSecondYear1stSem() {
    await this.addSecondYear1stSem(this.inputSecondYear1stSem);
    this.addNewSecondYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  async oneditSecondYear1stSem() {
    await this.editSecondYear1stSem(this.inputSecondYear1stSem);
    this.updateSecondYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificSecondYear1stSem(val: ISecondYear1stSemInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteSecondYear1stSem(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: ISecondYear1stSemInfo) {
    this.updateSecondYear1stSem = true;
    this.inputSecondYear1stSem = { ...val };
  }

  resetModel() {
    this.inputSecondYear1stSem = {
      subject: '',
     description: '',
      units: ' ',
    };
  }

//---------------------------> Second Year <----------------------------------------------
 
 

  addSecondYear2ndSem!: (payload: ISecondYear2ndSemInfo) => Promise<void>;
  editSecondYear2ndSem!: (payload: ISecondYear2ndSemInfo) => Promise<void>;
  deleteSecondYear2ndSem!: (payload: ISecondYear2ndSemInfo) => Promise<void>;
  allSecondYear2ndSem!: ISecondYear2ndSemInfo[];

  columns2 = [
    {
      name: 'name',
      required: true,
      label: 'Subjects',
      align: 'left',
      field: (row: ISecondYear2ndSemInfo) =>
        row.subject + ' ',
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

  addNewSecondYear2ndSem = false;
  updateSecondYear2ndSem = false;
  filter1 = '';
  options1 = ['Admin', 'Chairperson', 'Registrar'];

  inputSecondYear2ndSem: ISecondYear2ndSemInfo = {
    subject: '',
   description: '',
    units: ' ',
  };

  async onaddSecondYear2ndSem() {
    await this.addSecondYear2ndSem(this.inputSecondYear2ndSem);
    this.addNewSecondYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  async oneditSecondYear2ndSem() {
    await this.editSecondYear2ndSem(this.inputSecondYear2ndSem);
    this.updateSecondYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificSecondYear2ndSem(val: ISecondYear2ndSemInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteSecondYear2ndSem(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog2(val: ISecondYear2ndSemInfo) {
    this.updateSecondYear2ndSem = true;
    this.inputSecondYear2ndSem = { ...val };
  }

  resetModel2() {
    this.inputSecondYear2ndSem = {
      subject: '',
     description: '',
      units: ' ',
    };
  }
}
</script>
