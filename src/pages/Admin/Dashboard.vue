<template>
  <q-page class="q-pa-md">
     <q-btn
            label="Add Student"
            color="primary"
            dense
            flat
            icon="person_add"
            @click="addNewStudentInfo = true"
          />
    <q-table
    class="my-sticky-header-table"
    title="Student List"
      :rows="allAdmissionInfo"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
      hide-bottom
      :grid="$q.screen.xs"
      bordered
      flat
      dense
    >
      <template v-slot:top-right>
        <div class="q-pa-sm q-gutter-sm row">
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
         
          <q-dialog v-model="addNewStudentInfo" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="bg-primary row">
                <div class="text-h6">Add Student</div>
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
                <q-form class="q-gutter-xs">
                  <div class="text-h6 flex flex-center bg-blue-2">Requirements</div>

                  <div class="flex flex-center">
                    <q-checkbox
                      v-model="inputStudentInfo.reportCard"
                      label="Report Card"
                      color="blue"
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.bCertificate"
                      label="Birth Certificate"
                      color="blue"
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.Pic"
                      label="1x1 Picture"
                      color="blue"
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.eForm"
                      label="Enrollment Form"
                      color="blue"
                    />
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.IdNum"
                        label="ID number"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the ID number',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.lrn"
                        label="LRN"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please Input the LRN',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.ayCode"
                        :options="options1"
                        label="Academic Year"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the AY Code',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.semester"
                        :options="options7"
                        label="Semester"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Semester',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.incomingYlevel"
                        :options="options2"
                        label="Year Level"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Year Level',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.studentType"
                        :options="options3"
                        label="Student Type"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Student Type',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        dense
                        v-model="inputStudentInfo.Courses"
                        label="Course"
                        :options="AllCourse"
                        option-label="courseCode"
                        option-value="courseID"
                        map-options
                        emit-value
                      />
                    </div>
                  </div>

                  <q-separator></q-separator>
                  <div class="text-h6 flex flex-center bg-blue-2">Information</div>

                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        dense
                        v-model="inputStudentInfo.FName"
                        label="First Name"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the First Name',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.MName"
                        label="Middle Initial"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Middle Initial',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.LName"
                        label="Last Name"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Last Name',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.age"
                        label="Age"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please Input the Age',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                      outlined
                      dense
                      stack-label 
                        type="date"
                        label="Date of Birth"
                        v-model="inputStudentInfo.dataOfBirth"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Date of Birth',
                        ]"
                      >
                      </q-input>
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.placeOfBirth"
                        label="Place of Birth"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Place of Birth',
                        ]"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.contactNo"
                        label="Contact Number"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Contact Number',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.gender"
                        :options="options4"
                        label="Gender"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Gender',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.martialStatus"
                        :options="options5"
                        label="Martial Status"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Martial Status',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.citizenship"
                        label="Citizenship"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Citizenship',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.religion"
                        label="Religion"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Religion',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.address"
                        label="Address"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Address',
                        ]"
                      />
                    </div>
                  </div>
                  <!-- <div class="col">
                    <q-file
                      outlined
                      label="Product Image"
                      accept=".jpg, image/*"
                      v-model="imageAttachement"
                      max-file-size="2000000"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="camera" />
                      </template>
                    </q-file>
                  </div> -->
                  <div class="flex flex-center">
                    <q-btn
                      :ripple="false"
                      unelevated
                      flat
                      label="Cancel"
                      color="red-10"
                      @click="resetModel()"
                      v-close-popup
                    />
                    <q-btn
                      :ripple="false"
                      unelevated
                      flat
                      label="Save"
                      color="primary"
                      @click="onAddStudent()"
                      type="submit"
                    />
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </template>
      <!------------------------------------Student Details--------------------------------------------->
      <template v-slot:body-cell-studentDetails="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              round
              color="blue"
              icon="more_vert"
              size="md"
              flat
              dense
              @click="openDialog(props.row)"
            />
            <q-dialog v-model="studentDetails" persistent>
              <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6">Student Info</div>
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
                  <q-form @submit="onAddStudent()" class="q-gutter-sm">
                    <div class="text-h6 flex flex-center bg-blue-2">Requirements</div>

                  <div class="flex flex-center">
                    <q-checkbox
                      v-model="inputStudentInfo.reportCard"
                      label="Report Card"
                      color="blue"
                      disable
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.bCertificate"
                      label="Birth Certificate"
                      color="blue"
                      disable
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.Pic"
                      label="1x1 Picture"
                      color="blue"
                      disable
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.eForm"
                      label="Enrollment Form"
                      color="blue"
                      disable
                    />
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.IdNum"
                        label="ID number"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the ID number',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.lrn"
                        label="LRN"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please Input the LRN',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.ayCode"
                        :options="options1"
                        label="Academic Year"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the AY Code',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.semester"
                        :options="options7"
                        label="Semester"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Semester',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.incomingYlevel"
                        :options="options2"
                        label="Year Level"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Year Level',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.studentType"
                        :options="options3"
                        label="Student Type"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Student Type',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        dense
                        v-model="inputStudentInfo.Courses"
                        label="Course"
                        :options="AllCourse"
                        option-label="courseCode"
                        option-value="courseID"
                        map-options
                        emit-value
                        disable
                      />
                    </div>
                  </div>

                  <q-separator></q-separator>
                  <div class="text-h6 flex flex-center bg-blue-2">Information</div>

                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        dense
                        v-model="inputStudentInfo.FName"
                        label="First Name"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the First Name',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.MName"
                        label="Middle Initial"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Middle Initial',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.LName"
                        label="Last Name"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Last Name',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.age"
                        label="Age"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please Input the Age',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                      outlined
                      dense
                      stack-label 
                        type="date"
                        label="Date of Birth"
                        v-model="inputStudentInfo.dataOfBirth"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Date of Birth',
                        ]"
                      >
                      </q-input>
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.placeOfBirth"
                        label="Place of Birth"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Place of Birth',
                        ]"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.contactNo"
                        label="Contact Number"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Contact Number',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.gender"
                        :options="options4"
                        label="Gender"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Gender',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.martialStatus"
                        :options="options5"
                        label="Martial Status"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Martial Status',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.citizenship"
                        label="Citizenship"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Citizenship',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.religion"
                        label="Religion"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Religion',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.address"
                        label="Address"
                        lazy-rules
                        disable
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Address',
                        ]"
                      />
                    </div>
                  </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
        </q-td>
      </template>

      <!------------------------------------Edit--------------------------------------------->

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
            <q-dialog v-model="updateStudent" persistent>
              <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row bg-primary">
                  <div class="text-h6">Edit Student</div>
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
                  <q-form @submit="oneditStudent()">
                    <div class="text-h6 flex flex-center bg-blue-2">Requirements</div>

                  <div class="flex flex-center">
                    <q-checkbox
                      v-model="inputStudentInfo.reportCard"
                      label="Report Card"
                      color="blue"
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.bCertificate"
                      label="Birth Certificate"
                      color="blue"
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.Pic"
                      label="1x1 Picture"
                      color="blue"
                    />
                    <q-checkbox
                      v-model="inputStudentInfo.eForm"
                      label="Enrollment Form"
                      color="blue"
                    />
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.IdNum"
                        label="ID number"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the ID number',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.lrn"
                        label="LRN"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please Input the LRN',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.ayCode"
                        :options="options1"
                        label="Academic Year"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the AY Code',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.semester"
                        :options="options7"
                        label="Semester"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Semester',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.incomingYlevel"
                        :options="options2"
                        label="Year Level"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Year Level',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.studentType"
                        :options="options3"
                        label="Student Type"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Student Type',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        autofocus
                        outlined
                        dense
                        v-model="inputStudentInfo.Courses"
                        label="Course"
                        :options="AllCourse"
                        option-label="courseCode"
                        option-value="courseID"
                        map-options
                        emit-value
                      />
                    </div>
                  </div>

                  <q-separator></q-separator>
                  <div class="text-h6 flex flex-center bg-blue-2">Information</div>

                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        dense
                        v-model="inputStudentInfo.FName"
                        label="First Name"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the First Name',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.MName"
                        label="Middle Initial"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Middle Initial',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.LName"
                        label="Last Name"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Last Name',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.age"
                        label="Age"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please Input the Age',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                      outlined
                      dense
                      stack-label 
                        type="date"
                        label="Date of Birth"
                        v-model="inputStudentInfo.dataOfBirth"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Date of Birth',
                        ]"
                      >
                      </q-input>
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.placeOfBirth"
                        label="Place of Birth"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Place of Birth',
                        ]"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.contactNo"
                        label="Contact Number"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Contact Number',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.gender"
                        :options="options4"
                        label="Gender"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Gender',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-select
                        outlined
                        dense
                        v-model="inputStudentInfo.martialStatus"
                        :options="options5"
                        label="Martial Status"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Martial Status',
                        ]"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="inputStudentInfo.citizenship"
                        label="Citizenship"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Citizenship',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.religion"
                        label="Religion"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Religion',
                        ]"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        dense
                        v-model="inputStudentInfo.address"
                        label="Address"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Please Input the Address',
                        ]"
                      />
                    </div>
                  </div>
                    <div class="flex flex-center">
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
              @click="deleteSpecificStudent(props.row)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { AdmissionDto, CourseDto } from 'src/services/restapi';
import { IStudentInfo } from 'src/store/Admission/state';

@Options({
  computed: {
    ...mapState('Admission', ['allAdmissionInfo']),
    ...mapState('course', ['AllCourse']),
  },
  methods: {
    ...mapActions('Admission', [
      'addNewAdmission',
      'editAdmissionInfo',
      'deleteAdmission',
      'getAllAdmission',
    ]),
    ...mapActions('course', ['getAllCourse']),
  },
})
export default class ManageStudentInfo extends Vue {
  allAdmissionInfo!: IStudentInfo[];
  AllCourse!: CourseDto[];
  addNewAdmission!: (payload: IStudentInfo) => Promise<void>;
  editAdmissionInfo!: (payload: IStudentInfo) => Promise<void>;
  deleteAdmission!: (payload: IStudentInfo) => Promise<void>;
  getAllAdmission!: () => Promise<void>;
  getAllCourse!: () => Promise<void>;

  async mounted() {
    await this.getAllAdmission();
    await this.getAllCourse();
  }

  onRejected() {
    this.$q.notify({
      type: 'negative',
      message: 'The File is too Large',
    });
  }

  columns = [
    {
      name: 'IdNum',
      align: 'left',
      label: 'Student ID',
      field: 'IdNum',
      sortable: true,
    },
    {
      name: 'lrn',
      align: 'left',
      label: 'LRN',
      field: 'lrn',
      sortable: true,
    },
    {
      name: 'name',
      required: true,
      label: 'Full Name',
      align: 'left',
      field: (row: AdmissionDto) =>
        row.FName + ' ' + row.MName + '. ' + row.LName,
      format: (val: string) => `${val}`,
      sortable: true,
    },
    {
      name: 'incomingYlevel',
      align: 'left',
      label: 'Year Level',
      field: 'incomingYlevel',
      sortable: true,
    },
    { name: 'ayCode', align: 'left', label: 'AY Code', field: 'ayCode', sortable: true,},
    
    {
      name: 'studentDetails',
      align: 'center',
      label: 'studentDetails',
      field: 'studentDetails',
      sortable: true,
    },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];

  updateStudent = false;
  filter = '';
  addNewStudentInfo = false;
  studentDetails = false;
  imageAttachement: File = new File([], 'Select File');
  options1 = ['2022-2023'];
  options7 = ['First Semester', 'Second Semester', 'Summer'];
  options2 = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  options3 = ['New Student', 'Transferee'];
  options4 = ['Male', 'Female'];
  options5 = ['Single', 'Merried'];

  inputStudentInfo: AdmissionDto = {
    reportCard: false,
    bCertificate: false,
    Pic: false,
    eForm: false,
    IdNum: '',
    lrn: '',
    ayCode: '',
    incomingYlevel: '',
    studentType: '',
    FName: '',
    MName: '',
    LName: '',
    age: '',
    dataOfBirth: '',
    placeOfBirth: '',
    contactNo: '',
    gender: '',
    martialStatus: '',
    citizenship: '',
    religion: '',
    address: '',
    semester: '',
  };

  async onAddStudent() {
    await this.addNewAdmission(this.inputStudentInfo);
    this.addNewStudentInfo = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Adeded.',
    });
  }

  async oneditStudent() {
    await this.editAdmissionInfo(this.inputStudentInfo);
    this.updateStudent = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edited.',
    });
  }

  deleteSpecificStudent(val: AdmissionDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteAdmission(val.admissionID as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: AdmissionDto) {
    this.updateStudent = true;
    this.inputStudentInfo = { ...val };
  }
  openDialog(val: AdmissionDto) {
    this.studentDetails = true;
    this.inputStudentInfo = { ...val };
  }

  resetModel() {
    this.inputStudentInfo = {
      reportCard: false,
      bCertificate: false,
      Pic: false,
      eForm: false,
      IdNum: '',
      lrn: '',
      ayCode: '',
      incomingYlevel: '',
      studentType: '',
      FName: '',
      MName: '',
      LName: '',
      age: '',
      dataOfBirth: '',
      placeOfBirth: '',
      contactNo: '',
      gender: '',
      martialStatus: '',
      citizenship: '',
      religion: '',
      address: '',
      semester: '',
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
