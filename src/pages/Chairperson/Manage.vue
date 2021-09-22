<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-tabs
        v-model="tab"
        dense
        inline-label
        :breakpoint="0"
        align="justify"
        class="text-primary"
      >
        <q-tab
          :ripple="false"
          name="teacher"
          icon="alarm"
          label="Manage Teacher"
        />
        <q-tab
          :ripple="false"
          name="subject"
          icon="mail"
          label="Manage Subject"
        />

        <q-tab
          :ripple="false"
          name="schedule"
          icon="movie"
          label="Manage Schedule"
        />
        <q-tab :ripple="false" name="room" icon="mail" label="Manage Room" />
        <q-tab
          :ripple="false"
          name="course"
          icon="alarm"
          label="Manage Courses"
        />
      </q-tabs>
      <!-- 
manage teacher -->
      <q-tab-panels v-model="tab" animated class="text-black">
        <q-tab-panel name="teacher">
          <q-table
            class="my-sticky-header-table"
            title="Teachers"
            :rows="rows"
            :columns="columns"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >
            <template v-slot:top-right>
              <div class="q-pa-md q-gutter-sm row">
                <q-input
                  outlined
                  rounded
                  dense
                  debounce="300"
                  v-model="filters"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-btn
                  label="Add Teacher"
                  color="black"
                  dense
                  flat
                  icon="add"
                  @click="addTeacher = true"
                />
                <q-dialog v-model="addTeacher" full-width>
                  <q-card>
                    <q-card-section class="row">
                      <div class="text-h6">Add Teacher</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-input outlined dense v-model="name1" label="Teacher ID" />
                      </div>
                      <div class="col">
                      <q-input outlined dense v-model="name2" label="Last Name" />
                       </div>
                      <div class="col">
                      <q-input outlined dense v-model="name3" label="First Name" />
                       </div>
                    </q-card-section>
                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-input outlined dense v-model="name4" label="Middle Name" />
                      </div>
                      <div class="col">
                      <q-input outlined dense v-model="name5" label="Degree" />
                      </div>
                      <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="name6"
                        label="Specialization"
                      />
                      </div>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="editTeacher = true"
                  />
                  <q-dialog v-model="editTeacher" full-width>
                  <q-card>
                    <q-card-section class="row">
                      <div class="text-h6">Add Teacher</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-input outlined dense v-model="name1" label="Teacher ID" />
                      </div>
                      <div class="col">
                      <q-input outlined dense v-model="name2" label="Last Name" />
                       </div>
                      <div class="col">
                      <q-input outlined dense v-model="name3" label="First Name" />
                       </div>
                    </q-card-section>
                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-input outlined dense v-model="name4" label="Middle Name" />
                      </div>
                      <div class="col">
                      <q-input outlined dense v-model="name5" label="Degree" />
                      </div>
                      <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="name6"
                        label="Specialization"
                      />
                      </div>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
manage subject -->
      <q-tab-panels v-model="tab" animated class="text-white">
        <q-tab-panel name="subject">
          <q-table
            class="my-sticky-header-table"
            title="Subjects"
            :rows="rows1"
            :columns="columns1"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >
            <template v-slot:top-right>
              <div class="q-pa-md q-gutter-sm row">
                <q-input
                  outlined
                  rounded
                  dense
                  debounce="300"
                  v-model="filters"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-btn
                  label="Add New"
                  color="black"
                  dense
                  flat
                  icon="add"
                  @click="addSubject = true"
                />
                <q-dialog v-model="addSubject" full-width>
                  <q-card>
                    <q-card-section class="row">
                      <div class="text-h6">Add Subject</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-select
                        outlined
                        v-model="name13"
                        :options="options3"
                        label="AY Code"
                      />
                      </div>
                      <div class="col">
                      <q-select
                        outlined
                        v-model="name14"
                        :options="options4"
                        label="Year Level"
                      />
                      </div>
                      <div class="col">
                      <q-input outlined v-model="name15" label="Subject Code" />
                      </div>
                    </q-card-section>
                      <q-card-section class="q-gutter-md row">
                      <div class="col-8">
                      <q-input
                        outlined
                        v-model="name16"
                        label="Descriptive Title"
                      />
                      </div>
                      <div class="col">
                      <q-input outlined v-model="name17" label="Units" />
                      </div>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="editRow = true"
                  />
                  <q-dialog v-model="editRow" full-width>
                  <q-card>
                    <q-card-section class="row">
                      <div class="text-h6">Add Subject</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-select
                        outlined
                        v-model="name13"
                        :options="options3"
                        label="AY Code"
                      />
                      </div>
                      <div class="col">
                      <q-select
                        outlined
                        v-model="name14"
                        :options="options4"
                        label="Year Level"
                      />
                      </div>
                      <div class="col">
                      <q-input outlined v-model="name15" label="Subject Code" />
                      </div>
                    </q-card-section>
                      <q-card-section class="q-gutter-md row">
                      <div class="col-8">
                      <q-input
                        outlined
                        v-model="name16"
                        label="Descriptive Title"
                      />
                      </div>
                      <div class="col">
                      <q-input outlined v-model="name17" label="Units" />
                      </div>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
manage schedule -->
      <q-tab-panels v-model="tab" animated class="text-black">
        <q-tab-panel name="schedule">
          <q-card-section class="q-gutter-md row">
            <div class="col">
              <q-select
                outlined
                dense
                v-model="name23"
                :options="options1"
                label="AY Code"
              />
            </div>

            <div class="col">
              <q-select
                outlined
                dense
                v-model="name24"
                :options="options2"
                label="Year Level"
              />
            </div>
            <div class="col">
              <q-input outlined dense v-model="name25" label="Room" />
            </div>
            <div class="col">
              <q-input outlined dense v-model="name26" label="Adviser ID" />
            </div>
            <div class="col">
              <q-input outlined dense v-model="name27" label="Adviser Name" />
            </div>
          </q-card-section>
          <q-card-section class="q-gutter-md row">
            <div class="col">
              <q-input outlined dense v-model="subjectcode" label="Subject Code" />
            </div>
            <div class="col">
              <q-input outlined dense v-model="name28" label="Descripstive Title" />
            </div>
            <div class="col">
              <q-input outlined dense v-model="name29" label="Unit/s" />
            </div>
            <div class="col">
              <q-input outlined dense v-model="name30" label="Teacher ID" />
            </div>
            <div class="col">
              <q-input outlined dense v-model="name31" label="Teacher" />
            </div>
          </q-card-section>
          <q-card-section class="q-gutter-md row">
            <div class="col">
              <q-checkbox v-model="teal" label="Monday" />
              <q-checkbox v-model="orange" label="Tuesday" />
              <q-checkbox v-model="red" label="Wednessday" />
              <q-checkbox v-model="pink" label="Thursday" />
              <q-checkbox v-model="black" label="Friday" />
            </div>
            <q-input dense v-model="time" filled type="time" label="time" />
            <div>=</div>
            <q-input dense v-model="time1" filled type="time" label="time" />
            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="red-10" v-close-popup />
              <q-btn flat label="Add" color="primary" v-close-popup />
            </q-card-actions>
          </q-card-section>

          <q-table
            class="my-sticky-header-table"
            title="Subjects"
            :rows="rows2"
            :columns="columns2"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >
            <template v-slot:top-right>
              <div class="q-pa-md q-gutter-sm row">
                <q-input
                  outlined
                  rounded
                  dense
                  debounce="300"
                  v-model="filters"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
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
                    @click="editRow = true"
                  />
                  
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
manage room -->
      <q-tab-panels v-model="tab" animated class="text-white">
        <q-tab-panel name="room">
          <q-table
            class="my-sticky-header-table"
            title="Rooms"
            :rows="rows3"
            :columns="columns3"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >
            <template v-slot:top-right>
              <div class="q-pa-md q-gutter-sm row">
                <q-input
                  outlined
                  rounded
                  dense
                  debounce="300"
                  v-model="filters"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-btn
                  label="Add New"
                  color="black"
                  dense
                  flat
                  icon="add"
                  @click="addRoom = true"
                />
                <q-dialog v-model="addRoom" full-width>
                  <q-card>
                    <q-card-section class="row">
                      <div class="text-h6">Add Room</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-input outlined v-model="name33" label="Room" />
                      </div>
                      <div class="col">
                      <q-input outlined v-model="name34" label="Description" />
                       </div>
                      <div class="col">
                      <q-input outlined v-model="name35" label="Status" />
                       </div>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="editRoom = true"
                  />
                  <q-dialog v-model="editRoom" full-width>
                  <q-card>
                    <q-card-section class="row">
                      <div class="text-h6">Edit Room</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-input outlined v-model="name36" label="Room" />
                      </div>
                      <div class="col">
                      <q-input outlined v-model="name37" label="Description" />
                       </div>
                      <div class="col">
                      <q-input outlined v-model="name38" label="Status" />
                       </div>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
manage course -->
      <q-tab-panels v-model="tab">
        <q-tab-panel name="course">
          <q-table
            class="my-sticky-header-table"
            title="Course"
            :rows="rows4"
            :columns="columns4"
            row-key="name"
            :separator="separator"
            flat
            bordered
          >
            <template v-slot:top-right>
              <div class="q-pa-md q-gutter-sm row">
                <q-input
                  outlined
                  rounded
                  dense
                  debounce="300"
                  v-model="filters"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-btn
                  label="Add New"
                  color="black"
                  dense
                  flat
                  icon="add"
                  @click="addCourse = true"
                />
                <q-dialog v-model="addCourse" full-width>
                  <q-card>
                    <q-card-section class="row">
                      <div class="text-h6">Add Course</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-input outlined v-model="name33" label="Course" />
                      </div>
                      <div class="col">
                      <q-input outlined v-model="name34" label="Description" />
                       </div>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
                    @click="editCourse = true"
                  />
                  <q-dialog v-model="editCourse" full-width>
                  <q-card>
                    <q-card-section class="row">
                      <div class="text-h6">Edit Room</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md row">
                      <div class="col">
                      <q-input outlined v-model="name36" label="Course" />
                      </div>
                      <div class="col">
                      <q-input outlined v-model="name37" label="Description" />
                       </div>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Add" color="primary" v-close-popup />
                    </q-card-actions>
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
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Teacher ID',
      align: 'left',
      field: 'name',
      sortable: true,
    },
    {
      name: 'fullname',
      align: 'center',
      label: 'Full Name',
      field: 'fullname',
      sortable: true,
    },
    {
      name: 'degree',
      align: 'center',
      label: 'Degree',
      field: 'degree',
      sortable: true,
    },
    {
      name: 'specialization',
      align: 'center',
      label: 'Specialization',
      field: 'specialization',
    },
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ];

  rows = [
    {
      name: 201810757,
      fullname: 'NAEEM MANGCOL',
      degree: 'BACHELOR',
      specialization: 'PROGRAMMING',
    },
    {
      name: 201810757,
      fullname: 'NAEEM MANGCOL',
      degree: 'BACHELOR',
      specialization: 'PROGRAMMING',
    },
  ];
  columns1 = [
    {
      name: 'aycode',
      required: true,
      label: 'AY Code',
      align: 'left',
      field: 'aycode',
      sortable: true,
    },
    {
      name: 'yearlevel',
      align: 'center',
      label: 'Year Level',
      field: 'yearlevel',
      sortable: true,
    },
    {
      name: 'subjectcode',
      align: 'center',
      label: 'Subject Code',
      field: 'subjectcode',
      sortable: true,
    },
    {
      name: 'descriptivetitle',
      align: 'center',
      label: 'Descriptive Title',
      field: 'descriptivetitle',
      sortable: true,
    },
    {
      name: 'units',
      align: 'center',
      label: 'Units',
      field: 'units',
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
      aycode: '2020-2021 1st Semester',
      yearlevel: 'First Year',
      subjectcode: 'Gec101',
      descriptivetitle: 'PROGRAMMING 1',
      units: '3',
    },
  ];
  columns2 = [
    {
      name: 'subjectcode',
      align: 'center',
      label: 'Subject Code',
      field: 'subjectcode',
      sortable: true,
    },
    {
      name: 'descriptivetitle',
      align: 'center',
      label: 'Descriptive Title',
      field: 'descriptivetitle',
      sortable: true,
    },
    {
      name: 'units',
      align: 'center',
      label: 'Units',
      field: 'units',
      sortable: true,
    },
    {
      name: 'day',
      required: true,
      label: 'Day',
      align: 'left',
      field: 'day',
      sortable: true,
    },
    {
      name: 'time',
      align: 'center',
      label: 'Time',
      field: 'time',
      sortable: true,
    },
    {
      name: 'teacher',
      align: 'center',
      label: 'Teacher',
      field: 'teacher',
      sortable: true,
    },
    {
      name: 'room',
      align: 'center',
      label: 'Room',
      field: 'room',
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
      subjectcode: 'Gec101',
      descriptivetitle: 'PROGRAMMING 1',
      units: '2',
      day: 'Monday,Wednessday',
      time: '10:30am-11:30am',
      teacher: 'Naeem Mangcol',
      room: 'Room301',
    },
  ];
  columns3 = [
      {
      name: 'room',
      align: 'center',
      label: 'Room',
      field: 'room',
      sortable: true,
    },
    {
      name: 'description',
      align: 'center',
      label: 'Description',
      field: 'description',
      sortable: true,
    },
    {
      name: 'status',
      align: 'center',
      label: 'Status',
      field: 'status',
      sortable: true,
    },
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ]
  rows3 = [
    {
    room: 'Room103',
    description: 'CIT BUILDING',
    status: 'USED',
    }
  ]
  columns4 = [
    {
      name: 'course',
      align: 'center',
      label: 'Course',
      field: 'course',
      sortable: true,
    },
    {
      name: 'description',
      align: 'center',
      label: 'Description',
      field: 'description',
      sortable: true,
    },
    {
      name: 'action',
      align: 'center',
      label: '',
      field: 'action',
    },
  ]
  rows4 = [
    {
      course: 'IT',
      description: 'Information Technology',
    }
  ]

  tab = 'teacher';
  dialog = false;
  cancelEnabled = true;
  addTeacher = false;
  addSubject = false;
  editRow = false;
  editTeacher = false;
  editRoom = false;
  addRoom = false;
  editCourse = false;
  addCourse = false;
  options1 = ['2020-2021 1st Sem.', '2020-2021 2nd Sem.'];
  options2 = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  options3 = ['2020-2021 1st Sem.', '2020-2021 2nd Sem.'];
  options4 = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  subjectcode = '';
  name1 = '';
  name2 = '';
  name3 = '';
  name4 = '';
  name5 = '';
  name6 = '';
  name7 = '';
  name8 = '';
  name9 = '';
  name10 = '';
  name11 = '';
  name12 = '';
  name13 = '';
  name14 = '';
  name15 = '';
  name16 = '';
  name17 = '';
  name18 = '';
  name19 = '';
  name20 = '';
  name21 = '';
  name22 = '';
  name23 = '';
  name24 = '';
  name25 = '';
  name26 = '';
  name27 = '';
  name28 = '';
  name29 = '';
  name30 = '';
  name31 = '';
  name32 = '';
  name33 = '';
  name34 = '';
  name35 = '';
  name36 = '';
  name37 = '';
  name38 = '';
  filters = '';
  teal = false;
  orange = false;
  red = false;
  pink = false;
  black = false;
  time = '';
  time1 = '';
  separator = 'vertical';
  
}
</script>
<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: rgb(135, 206, 235)

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