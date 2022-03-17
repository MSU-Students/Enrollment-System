<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon
        name="account_circle"
        color="light-blue-6"
        style="font-size: 4rem"
      />
      Manage Teacher
    </div>

    <br />

    <q-table
      title="Teacher List"
      :rows="manageTeacher"
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
            label="Add Teacher"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="addNewTeacher = true"
          />
          <q-dialog v-model="addNewTeacher" persistent>
            <q-card style="width: 800px; max-width: 100vw">
              <q-card-section class="bg-primary row">
                <div class="text-h6">Add Teacher</div>
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
                <q-form @submit="onaddTeacher" class="q-gutter-md">
                  <div class="row">
                    <div class="col col-md-6">
                      <q-input
                        autofocus
                        class="q-py-md"
                        outlined
                        v-model="inputTeacher.TeacherID"
                        label="Teacher ID"
                      />
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputTeacher.FullName"
                        label="Full Name"
                      />
                    </div>

                    <div class="col-md-6 q-pl-md">
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputTeacher.Degree"
                        label="Degree"
                      />
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputTeacher.Specialization"
                        label="Specialization"
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
            <q-dialog v-model="updateTeacher" persistent>
              <q-card style="width: 800px; max-width: 100vw">
                <q-card-section class="bg-primary row">
                  <div class="text-h6">Edit Teacher</div>
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
                  <q-form @submit="oneditTeacher" class="q-gutter-md">
                    <div class="row">
                      <div class="col col-md-6">
                        <q-input
                          autofocus
                          class="q-py-md"
                          outlined
                          v-model="inputTeacher.TeacherID"
                          label="Teacher ID"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputTeacher.FullName"
                          label="Full Name"
                        />
                      </div>

                      <div class="col-md-6 q-pl-md">
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputTeacher.Degree"
                          label="Degree"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputTeacher.Specialization"
                          label="Specialization"
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
              @click="deleteSpecificTeacher(props.row)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ManagementTeacher } from 'src/store/ManagementTeacher/state';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('ManagementTeacher', ['manageTeacher']),
  },
  methods: {
    ...mapActions('ManagementTeacher', [
      'addTeacher',
      'editTeacher',
      'deleteTeacher',
    ]),
  },
})
export default class ManageTeacher extends Vue {
  addTeacher!: (payload: ManagementTeacher) => Promise<void>;
  editTeacher!: (payload: ManagementTeacher) => Promise<void>;
  deleteTeacher!: (payload: ManagementTeacher) => Promise<void>;
  manageTeacher!: ManagementTeacher[];

  columns = [
    {
      name: 'TeacherID',
      required: true,
      label: 'Teacher ID',
      align: 'left',
      field: (row: ManagementTeacher) => row.TeacherID,
      format: (val: string) => `${val}`,
    },
    {
      name: 'FullName',
      align: 'center',
      label: 'Full Name',
      field: 'FullName',
    },
    {
      name: 'Degree',
      align: 'center',
      label: 'Degree',
      field: 'Degree',
    },

    {
      name: 'Specialization',
      align: 'center',
      label: 'Specialization',
      field: 'Specialization',
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewTeacher = false;
  updateTeacher = false;
  filter = '';

  inputTeacher: ManagementTeacher = {
    teacherID: '',
    TeacherID: '',
    FullName: '',
    Degree: '',
    Specialization: '',
  };

  async onaddTeacher() {
    await this.addTeacher(this.inputTeacher);
    this.addNewTeacher = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditTeacher() {
    await this.editTeacher(this.inputTeacher);
    this.updateTeacher = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificTeacher(val: ManagementTeacher) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteTeacher(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: ManagementTeacher) {
    this.updateTeacher = true;
    this.inputTeacher = { ...val };
  }

  resetModel() {
    this.inputTeacher = {
      teacherID: '',
      TeacherID: '',
      FullName: '',
      Degree: '',
      Specialization: '',
    };
  }
}
</script>
