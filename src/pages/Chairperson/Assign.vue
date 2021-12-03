<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-tabs
        v-model="tab"
        dense
        inline-label
        :breakpoint="0"
        align="justify"
        class="text-primary"
      >
       <!--  Dont delete this teacher this as a First Year-->
        <q-tab
          :ripple="false"
          name="teacher" 
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
          icon="alarm"
          label="Fourth Year"
        />
      </q-tabs>


      <!-- 
First Year-->
      <q-tab-panels v-model="tab" animated class="text-black">
        <q-tab-panel name="teacher">  <!-- Dont delete this this a considerate as First Year-->
          <q-card-section class="q-gutter-md row">
            <div class="col">
              <q-select
                outlined
                dense
                v-model="name1"
                :options="options1"
                label="AY Code"
              />
            </div>

            <div class="col">

            <q-btn label="Add Subject" @click="icon = true" />
              <q-dialog v-model="icon" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
          </q-card-section>



          <q-table
            class="my-sticky-header-table"
            title="First Semester"
            :rows="rows1"
            :columns="columns1"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >


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
                    @click="editsubject = true"
                  />


                  <q-dialog v-model="editsubject" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          size="sm"
                          icon="warning"
                          color="red-10"
                          text-color="white"
                        />
                        <span class="q-ml-sm">Confirm Delete?</span>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup="cancelEnabled"
                          :disable="!cancelEnabled"
                        />
                        <q-btn
                          flat
                          label="Confirm"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </div>
              </q-td>
            </template>

          </q-table>

   <!-- 
table 2 2nd Sem-->       

          <q-table
            class="my-sticky-header-table"
            title="Second Semester"
            :rows="rows2"
            :columns="columns2"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >


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
                    @click="editsubject2 = true"
                  />


                  <q-dialog v-model="editsubject2" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          size="sm"
                          icon="warning"
                          color="red-10"
                          text-color="white"
                        />
                        <span class="q-ml-sm">Confirm Delete?</span>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup="cancelEnabled"
                          :disable="!cancelEnabled"
                        />
                        <q-btn
                          flat
                          label="Confirm"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </div>
              </q-td>
            </template>
          </q-table>







        </q-tab-panel>
      </q-tab-panels>



      <!-- 
Second Year-->

       <q-tab-panels v-model="tab" animated class="text-black">
        <q-tab-panel name="secondyear">  
          <q-card-section class="q-gutter-md row">
            <div class="col">
              <q-select
                outlined
                dense
                v-model="name2"
                :options="options2"
                label="AY Code"
              />
            </div>

            <div class="col">

            <q-btn label="Add Subject" @click="icon = true" />
              <q-dialog v-model="icon" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
          </q-card-section>



          <q-table
            class="my-sticky-header-table"
            title="First Semester"
            :rows="rows3"
            :columns="columns3"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >


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
                    @click="editsubject = true"
                  />


                  <q-dialog v-model="editsubject" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          size="sm"
                          icon="warning"
                          color="red-10"
                          text-color="white"
                        />
                        <span class="q-ml-sm">Confirm Delete?</span>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup="cancelEnabled"
                          :disable="!cancelEnabled"
                        />
                        <q-btn
                          flat
                          label="Confirm"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </div>
              </q-td>
            </template>

          </q-table>

   <!-- 
table 2 2nd Sem-->       

          <q-table
            class="my-sticky-header-table"
            title="Second Semester"
            :rows="rows4"
            :columns="columns4"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >


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
                    @click="editsubject2 = true"
                  />


                  <q-dialog v-model="editsubject2" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          size="sm"
                          icon="warning"
                          color="red-10"
                          text-color="white"
                        />
                        <span class="q-ml-sm">Confirm Delete?</span>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup="cancelEnabled"
                          :disable="!cancelEnabled"
                        />
                        <q-btn
                          flat
                          label="Confirm"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </div>
              </q-td>
            </template>
          </q-table>







        </q-tab-panel>
      </q-tab-panels>





      <!-- 
THird Year -->

       <q-tab-panels v-model="tab" animated class="text-black">
        <q-tab-panel name="thirdyear">  
          <q-card-section class="q-gutter-md row">
            <div class="col">
              <q-select
                outlined
                dense
                v-model="name3"
                :options="options3"
                label="AY Code"
              />
            </div>

            <div class="col">

            <q-btn label="Add Subject" @click="icon = true" />
              <q-dialog v-model="icon" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
          </q-card-section>



          <q-table
            class="my-sticky-header-table"
            title="First Semester"
            :rows="rows5"
            :columns="columns5"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >


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
                    @click="editsubject = true"
                  />


                  <q-dialog v-model="editsubject" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          size="sm"
                          icon="warning"
                          color="red-10"
                          text-color="white"
                        />
                        <span class="q-ml-sm">Confirm Delete?</span>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup="cancelEnabled"
                          :disable="!cancelEnabled"
                        />
                        <q-btn
                          flat
                          label="Confirm"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </div>
              </q-td>
            </template>

          </q-table>

   <!-- 
table 2 2nd Sem-->       

          <q-table
            class="my-sticky-header-table"
            title="Second Semester"
            :rows="rows6"
            :columns="columns6"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >


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
                    @click="editsubject2 = true"
                  />


                  <q-dialog v-model="editsubject2" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          size="sm"
                          icon="warning"
                          color="red-10"
                          text-color="white"
                        />
                        <span class="q-ml-sm">Confirm Delete?</span>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup="cancelEnabled"
                          :disable="!cancelEnabled"
                        />
                        <q-btn
                          flat
                          label="Confirm"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </div>
              </q-td>
            </template>
          </q-table>







        </q-tab-panel>
      </q-tab-panels>




      <!-- 
Forth Year-->

       <q-tab-panels v-model="tab" animated class="text-black">
        <q-tab-panel name="forthyear">  
          <q-card-section class="q-gutter-md row">
            <div class="col">
              <q-select
                outlined
                dense
                v-model="name4"
                :options="options4"
                label="AY Code"
              />
            </div>

            <div class="col">

            <q-btn label="Add Subject" @click="icon = true" />
              <q-dialog v-model="icon" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
          </q-card-section>



          <q-table
            class="my-sticky-header-table"
            title="First Semester"
            :rows="rows7"
            :columns="columns7"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >


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
                    @click="editsubject = true"
                  />


                  <q-dialog v-model="editsubject" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          size="sm"
                          icon="warning"
                          color="red-10"
                          text-color="white"
                        />
                        <span class="q-ml-sm">Confirm Delete?</span>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup="cancelEnabled"
                          :disable="!cancelEnabled"
                        />
                        <q-btn
                          flat
                          label="Confirm"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </div>
              </q-td>
            </template>

          </q-table>

   <!-- 
table 2 2nd Sem-->       

          <q-table
            class="my-sticky-header-table"
            title="Second Semester"
            :rows="rows8"
            :columns="columns8"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >


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
                    @click="editsubject2 = true"
                  />


                  <q-dialog v-model="editsubject2" >
                  <q-card style="width: 350px; max-width: 30vw">

                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">College Subject</div>
                    <q-space />

                  </q-card-section>

                  <q-card-section class="items-center q-pb-xs  col">
                    <div class="col">
                      <q-checkbox v-model="check1" label="CCC 100" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check2 " label="CCC 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check3" label="CCC 121" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check4" label="CCC 181" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check5" label="ITE 185" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check6" label="ISY 108" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check7" label="CCC191" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check8" label="CCC191" />
                    </div>


                  </q-card-section>
                  <q-space />
                </q-card>

                 <q-space style="width: 50px; max-width: 1vw" />




                <q-card>
                  <q-card-section class="row items-center q-pb-non">
                    <div class="text-h4">Other College Subject.</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </q-card-section>
                 <q-card-section class="items-center  col">
                    <div class="col">
                      <q-checkbox v-model="check9" label="Fil 101" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check10" label="Fil 102" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check11" label="Ethics 192" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check12" label="Gec 109" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check13" label="Gec 103" />
                    </div>
                    <div class="col">
                      <q-checkbox v-model="check14" label="Gec 103" />
                    </div>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar
                          size="sm"
                          icon="warning"
                          color="red-10"
                          text-color="white"
                        />
                        <span class="q-ml-sm">Confirm Delete?</span>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="primary"
                          v-close-popup="cancelEnabled"
                          :disable="!cancelEnabled"
                        />
                        <q-btn
                          flat
                          label="Confirm"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                </div>
              </q-td>
            </template>
          </q-table>







        </q-tab-panel>
      </q-tab-panels>



    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'Vue-class-component';
@Options({})
export default class Manage extends Vue {
  columns1 = [
    {
      name: 'aycode',
      required: true,
      label: 'AY CODE',
      align: 'center',
      field: 'aycode',
      sortable: true,
    },
    {
      name: 'subject',
      align: 'center',
      label: 'SUBJECTS',
      field: 'subject',
      sortable: true,
    },
    
    
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];
  rows1 = [
    {
      aycode: '2021-2021 1st Sem',
      subject: 'ccc 121',
      
    },
    {
      aycode:'2021-2021 1st Sem',
      subject: 'Fil 101',
      
    },
  ];
  columns2 = [
    {
      name: 'aycode1',
      required: true,
      label: 'AY CODE',
      align: 'center',
      field: 'aycode1',
      sortable: true,
    },
    {
      name: 'subject1',
      align: 'center',
      label: 'SUBJECTS',
      field: 'subject1',
      sortable: true,
    },
    
    
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];
  rows2 = [
     {
      aycode1: '2021-2021 2nd Sem',
      subject1: 'ITE 102',
      
    },
    {
      aycode1:'2021-2021 2nd Sem',
      subject1: 'Ethic 101',
      
    },
  ];
  columns3 = [
    {
      name: 'aycode',
      required: true,
      label: 'AY CODE',
      align: 'center',
      field: 'aycode',
      sortable: true,
    },
    {
      name: 'subject',
      align: 'center',
      label: 'SUBJECTS',
      field: 'subject',
      sortable: true,
    },
    
    
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];
  rows3 = [
    {
      aycode: '2021-2021 1st Sem',
      subject: 'ITE 185',
      
    },
    {
      aycode:'2021-2021 1st Sem',
      subject: 'Gec 109',
      
    },
  ];
  columns4 = [
    {
      name: 'aycode',
      required: true,
      label: 'AY CODE',
      align: 'center',
      field: 'aycode',
      sortable: true,
    },
    {
      name: 'subject',
      align: 'center',
      label: 'SUBJECTS',
      field: 'subject',
      sortable: true,
    },
    
    
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];
  rows4 = [
    {
      aycode: '2021-2021 2nd Sem',
      subject: 'ITE 192',
      
    },
    {
      aycode:'2021-2021 2nd Sem',
      subject: 'ISY 108',
      
    },
  ];
   columns5 = [
    {
      name: 'aycode',
      required: true,
      label: 'AY CODE',
      align: 'center',
      field: 'aycode',
      sortable: true,
    },
    {
      name: 'subject',
      align: 'center',
      label: 'SUBJECTS',
      field: 'subject',
      sortable: true,
    },
    
    
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];
  rows5 = [
    {
      aycode: '2021-2021 1st Sem',
      subject: 'ccc 121',
      
    },
    {
      aycode:'2021-2021 1st Sem',
      subject: 'Fil 101',
      
    },
  ];
  columns6 = [
    {
      name: 'aycode1',
      required: true,
      label: 'AY CODE',
      align: 'center',
      field: 'aycode1',
      sortable: true,
    },
    {
      name: 'subject1',
      align: 'center',
      label: 'SUBJECTS',
      field: 'subject1',
      sortable: true,
    },
    
    
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];
  rows6 = [
     {
      aycode1: '2021-2021 2nd Sem',
      subject1: 'ITE 102',
      
    },
    {
      aycode1:'2021-2021 2nd Sem',
      subject1: 'Ethic 101',
      
    },
  ];
  columns7 = [
    {
      name: 'aycode',
      required: true,
      label: 'AY CODE',
      align: 'center',
      field: 'aycode',
      sortable: true,
    },
    {
      name: 'subject',
      align: 'center',
      label: 'SUBJECTS',
      field: 'subject',
      sortable: true,
    },
    
    
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];
  rows7 = [
    {
      aycode: '2021-2021 1st Sem',
      subject: 'ITE 185',
      
    },
    {
      aycode:'2021-2021 1st Sem',
      subject: 'Gec 109',
      
    },
  ];
  columns8 = [
    {
      name: 'aycode',
      required: true,
      label: 'AY CODE',
      align: 'center',
      field: 'aycode',
      sortable: true,
    },
    {
      name: 'subject',
      align: 'center',
      label: 'SUBJECTS',
      field: 'subject',
      sortable: true,
    },
    
    
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];
  rows8 = [
    {
      aycode: '2021-2021 2nd Sem',
      subject: 'ITE 192',
      
    },
    {
      aycode:'2021-2021 2nd Sem',
      subject: 'ISY 108',
      
    },
  ];
  
  check1 = false;
  check2 = false;
  check3 = false;
  check4 = false;
  check5 = false;
  check6 = false;
  check7 = false;
  check8 = false;
  check9 = false;
  check10 = false;
 check11 = false;
  check12 = false;
   check13 = false;
    check14 = false;
  icon2 = false;
  icon = false;
  tab = 'teacher';
  dialog = false;
  cancelEnabled = true;
  
  editsubject = false;
  editsubject2 = false;
   editRow = false;
  
  options1 = ['2020-2021 1st Sem.', '2020-2021 2nd Sem.'];
  options2 = ['2020-2021 1nd Sem.', '2020-2021 2nd Sem.'];
  options3 = ['2020-2021 1st Sem.', '2020-2021 2nd Sem.'];
  options4 = ['2020-2021 1st Sem.', '2020-2021 2nd Sem.'];
 
  subjectcode = '';
  name1 =' ';
  name2 =' ';
  name3 =' ';
  name4 =' ';
 
  filters = '';
 
  separator = 'vertical';
}
</script>