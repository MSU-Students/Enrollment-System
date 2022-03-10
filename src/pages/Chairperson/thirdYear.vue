<template>
  
  <q-page class="q-pa-lg">
    <div>
      <div class="text-h4 text-white text-bold flex flex-center">THIRD YEAR SUBJECTS</div>
        <br />
        <div class="q-px-md q-gutter-md row">
           <div class="col">
             <q-table
                title="First Semester"
                :rows="allThirdYear1stSem"
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
                      @click="addNewThirdYear1stSem = true"
                    />
                    <q-dialog v-model="addNewThirdYear1stSem" persistent>
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
                          <q-form @submit="onaddThirdYear1stSem">
                            <div class="row q-gutter-md q-py-sm">
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputThirdYear1stSem.subject"
                                  label="Subject"
                                />
                              </div>
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputThirdYear1stSem.units"
                                  label="Units"
                                />
                              </div>
                            <div class="col">
                                  <q-input
                                  autofocus
                                  outlined
                                  v-model="inputThirdYear1stSem.description"
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
                    <q-dialog v-model="updateThirdYear1stSem" persistent>
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
                          <q-form @submit="oneditThirdYear1stSem">
                            <div class="row q-gutter-md q-py-sm">
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputThirdYear1stSem.subject"
                                  label="Subject"
                                />
                              </div>
                              <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputThirdYear1stSem.units"
                                label="Units"
                              />
                            </div>

                            <div class="col">
                                <q-input
                                autofocus
                                outlined
                                v-model="inputThirdYear1stSem.description"
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
                      @click="deleteSpecificThirdYear1stSem(props.row)"
                    />
                  </div>
                </q-td>
              </template>
            </q-table>
          </div>


            <div class="col">
             <q-table
                title="Second Semester"
                :rows="allThirdYear2ndSem"
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
                      @click="addNewThirdYear2ndSem = true"
                    />
                    <q-dialog v-model="addNewThirdYear2ndSem" persistent>
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
                          <q-form @submit="onaddThirdYear2ndSem">
                            <div class="row q-gutter-md q-py-sm">
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputThirdYear2ndSem.subject"
                                  label="Subject"
                                />
                              </div>
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputThirdYear2ndSem.units"
                                  label="Units"
                                />
                              </div>
                            <div class="col">
                                  <q-input
                                  autofocus
                                  outlined
                                  v-model="inputThirdYear2ndSem.description"
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
                    <q-dialog v-model="updateThirdYear2ndSem" persistent>
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
                          <q-form @submit="oneditThirdYear2ndSem">
                            <div class="row q-gutter-md q-py-sm">
                              <div class="col">
                                <q-input
                                  autofocus
                                  outlined
                                  v-model="inputThirdYear2ndSem.subject"
                                  label="Subject"
                                />
                              </div>
                              <div class="col">
                              <q-input
                                autofocus
                                outlined
                                v-model="inputThirdYear2ndSem.units"
                                label="Units"
                              />
                            </div>

                            <div class="col">
                                <q-input
                                autofocus
                                outlined
                                v-model="inputThirdYear2ndSem.description"
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
                      @click="deleteSpecificThirdYear2ndSem(props.row)"
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
import { IThirdYear1stSemInfo } from 'src/store/ThirdYear1stSem/state';
import { IThirdYear2ndSemInfo } from 'src/store/ThirdYear2ndSem/state';



import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('ThirdYear1stSem', ['allThirdYear1stSem']),
    ...mapState('ThirdYear2ndSem', ['allThirdYear2ndSem']),
   
   
   
  },
  methods: {
    ...mapActions('ThirdYear1stSem', ['addThirdYear1stSem', 'editThirdYear1stSem', 'deleteThirdYear1stSem']),
    ...mapActions('ThirdYear2ndSem', ['addThirdYear2ndSem', 'editThirdYear2ndSem', 'deleteThirdYear2ndSem']),
    
    
  },
})
export default class ManageAccount extends Vue {


  
  addThirdYear1stSem!: (payload: IThirdYear1stSemInfo) => Promise<void>;
  editThirdYear1stSem!: (payload: IThirdYear1stSemInfo) => Promise<void>;
  deleteThirdYear1stSem!: (payload: IThirdYear1stSemInfo) => Promise<void>;
  allThirdYear1stSem!: IThirdYear1stSemInfo[];

  columns = [
    {
      name: 'name',
      required: true,
      label: 'Subjects',
      align: 'left',
      field: (row: IThirdYear1stSemInfo) =>
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

  addNewThirdYear1stSem = false;
  updateThirdYear1stSem = false;
  filter = '';
  options = ['Admin', 'Chairperson', 'Registrar'];

  inputThirdYear1stSem: IThirdYear1stSemInfo = {
    subject: '',
   description: '',
    units: ' ',
  };

  async onaddThirdYear1stSem() {
    await this.addThirdYear1stSem(this.inputThirdYear1stSem);
    this.addNewThirdYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  async oneditThirdYear1stSem() {
    await this.editThirdYear1stSem(this.inputThirdYear1stSem);
    this.updateThirdYear1stSem = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificThirdYear1stSem(val: IThirdYear1stSemInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteThirdYear1stSem(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: IThirdYear1stSemInfo) {
    this.updateThirdYear1stSem = true;
    this.inputThirdYear1stSem = { ...val };
  }

  resetModel() {
    this.inputThirdYear1stSem = {
      subject: '',
     description: '',
      units: ' ',
    };
  }

//---------------------------> Third Second Sem <----------------------------------------------
 

  addThirdYear2ndSem!: (payload: IThirdYear2ndSemInfo) => Promise<void>;
  editThirdYear2ndSem!: (payload: IThirdYear2ndSemInfo) => Promise<void>;
  deleteThirdYear2ndSem!: (payload: IThirdYear2ndSemInfo) => Promise<void>;
  allThirdYear2ndSem!: IThirdYear2ndSemInfo[];

  columns2 = [
    {
      name: 'name',
      required: true,
      label: 'Subjects',
      align: 'left',
      field: (row: IThirdYear2ndSemInfo) =>
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

  addNewThirdYear2ndSem = false;
  updateThirdYear2ndSem = false;
  filter1 = '';
  options1 = ['Admin', 'Chairperson', 'Registrar'];

  inputThirdYear2ndSem: IThirdYear2ndSemInfo = {
    subject: '',
   description: '',
    units: ' ',
  };

  async onaddThirdYear2ndSem() {
    await this.addThirdYear2ndSem(this.inputThirdYear2ndSem);
    this.addNewThirdYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  async oneditThirdYear2ndSem() {
    await this.editThirdYear2ndSem(this.inputThirdYear2ndSem);
    this.updateThirdYear2ndSem = false;
    this.resetModel2();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificThirdYear2ndSem(val: IThirdYear2ndSemInfo) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteThirdYear2ndSem(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog2(val: IThirdYear2ndSemInfo) {
    this.updateThirdYear2ndSem = true;
    this.inputThirdYear2ndSem = { ...val };
  }

  resetModel2() {
    this.inputThirdYear2ndSem = {
      subject: '',
     description: '',
      units: ' ',
    };
  }

 

 
}
</script>
