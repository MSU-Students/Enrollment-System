<template>
  <q-page class="q-pa-md">
    <q-btn
            label="Add Room"
            color="primary"
            dense
            flat
            icon="add"
            @click="addNewRoom = true"
          />
    <q-table
    class="my-sticky-header-table"
      title="Room List"
      :rows="AllRoom"
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
          
          <q-dialog v-model="addNewRoom" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
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
                <q-form @submit="onaddRoom">
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputroom.roomCode"
                        label="Room"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputroom.roomDescription"
                        label="Description"
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
            <q-dialog v-model="updateCourse" persistent>
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
                    <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputroom.roomCode"
                        label="Room"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputroom.roomDescription"
                        label="Description"
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
import { mapActions, mapState } from 'vuex';
import { CourseDto, RoomDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('room', ['AllRoom']),
  },
  methods: {
    ...mapActions('room', ['addRoom', 'editRoom', 'deleteRoom', 'getAllRoom']),
  },
})
export default class ManageRoom extends Vue {
  addRoom!: (payload: RoomDto) => Promise<void>;
  editRoom!: (payload: RoomDto) => Promise<void>;
  deleteRoom!: (payload: RoomDto) => Promise<void>;
  getAllRoom!: () => Promise<void>;
  AllRoom!: ManageRoom[];

  async mounted() {
    await this.getAllRoom();
  }
  columns = [
    {
      name: 'Room',
      required: true,
      label: 'Room',
      align: 'left',
      field: (row: RoomDto) => row.roomCode,
      format: (val: string) => `${val}`,
    },
    {
      name: 'Description',
      align: 'center',
      label: 'Description',
      field: (row: RoomDto) => row.roomDescription,
      format: (val: string) => `${val}`,
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewRoom = false;
  updateCourse = false;
  filter = '';

  inputroom: RoomDto = {
    roomCode: '',
    roomDescription: '',
  };

  async onaddRoom() {
    await this.addRoom(this.inputroom);
    this.addNewRoom = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditRoom() {
    await this.editRoom(this.inputroom);
    this.updateCourse = false;
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
        await this.deleteRoom(val.roomID as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: RoomDto) {
    this.updateCourse = true;
    this.inputroom = { ...val };
  }

  resetModel() {
    this.inputroom = {
      roomCode: '',
      roomDescription: '',
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