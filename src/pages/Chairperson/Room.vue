<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">
      <q-icon name="house" color="light-blue-6" style="font-size: 4rem" />
      Manage Room
    </div>

    <br />

    <q-table
      title="Room List"
      :rows="AllRoom"
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
            label="Add Room"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="addNewRoom = true"
          />
          <q-dialog v-model="addNewRoom" persistent>
            <q-card style="width: 800px; max-width: 100vw">
              <q-card-section class="bg-primary row">
                <div class="text-h6">Add Room</div>
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
                <q-form @submit="onaddRoom" class="q-gutter-md">
                  <div class="row">
                    <div class="col col-md-6">
                      <q-input
                        autofocus
                        class="q-py-md"
                        outlined
                        v-model="inputRoom.Room"
                        label="Room"
                      />
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputRoom.Description"
                        label="Description"
                      />
                    </div>

                    <div class="col-md-6 q-pl-md">
                      <q-input
                        outlined
                        class="q-py-md"
                        v-model="inputRoom.Status"
                        label="Status"
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
            <q-dialog v-model="updateRoom" persistent>
              <q-card style="width: 800px; max-width: 100vw">
                <q-card-section class="bg-primary row">
                  <div class="text-h6">Edit Room</div>
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
                  <q-form @submit="oneditRoom" class="q-gutter-md">
                    <div class="row">
                      <div class="col col-md-6">
                        <q-input
                          autofocus
                          class="q-py-md"
                          outlined
                          v-model="inputRoom.Room"
                          label="Room"
                        />
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputRoom.Description"
                          label="Description"
                        />
                      </div>

                      <div class="col-md-6 q-pl-md">
                        <q-input
                          outlined
                          class="q-py-md"
                          v-model="inputRoom.Status"
                          label="Status"
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
              @click="deleteSpecificRoom(props.row)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { ManagementRoom } from 'src/store/ManagementRoom/state';
import { mapActions, mapState } from 'vuex';
import { RoomDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('ManagementRoom', ['AllRoom']),
  },
  methods: {
    ...mapActions('ManagementRoom', [
      'addRoom',
      'editRoom',
      'deleteRoom',
      'getAllRoom',
    ]),
  },
})
export default class ManageRoom extends Vue {
  addRoom!: (payload: ManagementRoom) => Promise<void>;
  editRoom!: (payload: ManagementRoom) => Promise<void>;
  deleteRoom!: (payload: ManagementRoom) => Promise<void>;
  getAllRoom!: () => Promise<void>;
  AllRoom!: ManagementRoom[];

  async mounted() {
    await this.getAllRoom();
  }
  columns = [
    {
      name: 'Room',
      required: true,
      label: 'Room',
      align: 'left',
      field: (row: RoomDto) => row.Room,
      format: (val: string) => `${val}`,
    },
    {
      name: 'Description',
      align: 'center',
      label: 'Description',
      field: 'Description',
    },
    {
      name: 'Status',
      align: 'center',
      label: 'Status',
      field: 'Status',
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewRoom = false;
  updateRoom = false;
  filter = '';

  inputRoom: RoomDto = {
    Room: '',
    Description: '',
    Status: '',
  };

  async onaddRoom() {
    await this.addRoom(this.inputRoom);
    this.addNewRoom = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditRoom() {
    await this.editRoom(this.inputRoom);
    this.updateRoom = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificRoom(val: RoomDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteRoom(val);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: RoomDto) {
    this.updateRoom = true;
    this.inputRoom = { ...val };
  }

  resetModel() {
    this.inputRoom = {
      Room: '',
      Description: '',
      Status: '',
    };
  }
}
</script>
