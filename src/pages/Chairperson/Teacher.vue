<template>
  <q-page class="q-pa-md">
     <q-btn
            label="Add Teacher"
            color="primary"
            dense
            flat
            icon="add"
            @click="addNewTeacher = true"
          />
    <q-table
    class="my-sticky-header-table"
      title="Teacher List"
      :rows="allTeacher"
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
         
          <q-dialog v-model="addNewTeacher" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
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
                  <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputTeacher.FullName"
                        label="Full Name"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputTeacher.Degree"
                        label="Degree"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
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
                    <div class="row q-gutter-sm q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputTeacher.FullName"
                        label="Full Name"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputTeacher.Degree"
                        label="Degree"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
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
import { mapActions, mapState } from 'vuex';
import { TeacherDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('ManagementTeacher', ['allTeacher']),
  },
  methods: {
    ...mapActions('ManagementTeacher', [
      'addTeacher',
      'editTeacher',
      'deleteTeacher',
      'getAllTeacher',
    ]),
  },
})
export default class ManageTeacher extends Vue {
  addTeacher!: (payload: TeacherDto) => Promise<void>;
  editTeacher!: (payload: TeacherDto) => Promise<void>;
  deleteTeacher!: (payload: TeacherDto) => Promise<void>;
  allTeacher!: TeacherDto[];
  getAllTeacher!: () => Promise<void>;

  async mounted() {
    await this.getAllTeacher();
  }

  columns = [
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

  inputTeacher: TeacherDto = {
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

  deleteSpecificTeacher(val: TeacherDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteTeacher(val.teacherID as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: TeacherDto) {
    this.updateTeacher = true;
    this.inputTeacher = { ...val };
  }

  resetModel() {
    this.inputTeacher = {
      FullName: '',
      Degree: '',
      Specialization: '',
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