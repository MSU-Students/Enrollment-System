<template>
  <q-page class="q-pa-md">
    <q-btn
            label="Add User"
            color="primary"
            dense
            flat
            icon="person_add"
            @click="addNewAccount = true"
          />
    <q-table
    class="my-sticky-header-table"
      title="Account List"
      :rows="allAccount"
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
          
          <q-dialog v-model="addNewAccount" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="bg-primary row">
                <div class="text-h6">Add User</div>
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
                <q-form @submit="onaddAccount()">
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputAccount.FName"
                        label="First Name"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.MName"
                        label="Middle Initial"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.LName"
                        label="Last Name"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.username"
                        label="Username"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.password"
                        label="Password"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.email"
                        label="Email"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.contact"
                        label="Contact Number"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputAccount.userType"
                        :options="options"
                        label="Designation"
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
            <q-dialog v-model="updateAccount" persistent>
              <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row bg-primary">
                  <div class="text-h6">Edit User</div>
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
                  <q-form @submit="oneditAccount">
                    <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        autofocus
                        outlined
                        v-model="inputAccount.FName"
                        label="First Name"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.MName"
                        label="Middle Initial"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.LName"
                        label="Last Name"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.username"
                        label="Username"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.password"
                        label="Password"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.email"
                        label="Email"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        outlined
                        v-model="inputAccount.contact"
                        label="Contact Number"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-md q-py-sm">
                    <div class="col">
                      <q-select
                        outlined
                        v-model="inputAccount.userType"
                        :options="options"
                        label="Designation"
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
              @click="deleteSpecificAccount(props.row)"
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
import { UserDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('account', ['allAccount']),
  },
  methods: {
    ...mapActions('account', [
      'addAccount',
      'editAccount',
      'deleteAccount',
      'getAllUser',
    ]),
  },
})
export default class ManageAccount extends Vue {
  addAccount!: (payload: UserDto) => Promise<void>;
  editAccount!: (payload: UserDto) => Promise<void>;
  deleteAccount!: (payload: UserDto) => Promise<void>;
  getAllUser!: () => Promise<void>;
  allAccount!: UserDto[];

  async mounted() {
    await this.getAllUser();
  }
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: UserDto) => row.FName + ' ' + row.MName + '. ' + row.LName,
      format: (val: string) => `${val}`,
    },
    {
      name: 'username',
      align: 'center',
      label: 'Username',
      field: 'username',
    },
    {
      name: 'userType',
      align: 'center',
      label: 'Designation',
      field: 'userType',
    },
    { name: 'contact', align: 'center', label: 'Contact', field: 'contact' },
    { name: 'email', align: 'center', label: 'Email', field: 'email' },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  addNewAccount = false;
  updateAccount = false;
  filter = '';
  options = ['admin', 'chairperson', 'registrar'];

  inputAccount: UserDto = {
    MName: '',
    contact: '',
    email: '',
    FName: '',
    LName: '',
    userType: '',
    username: '',
    password: '',
  };

  async onaddAccount() {
    await this.addAccount(this.inputAccount);
    this.addNewAccount = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  async oneditAccount() {
    await this.editAccount(this.inputAccount);
    this.updateAccount = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Edit.',
    });
  }

  deleteSpecificAccount(val: UserDto) {
    this.$q
      .dialog({
        message: 'Confirm to delete?',
        cancel: true,
        persistent: true,
      })
      .onOk(async () => {
        await this.deleteAccount(val.id as any);
        this.$q.notify({
          type: 'warning',
          message: 'Successfully deleted',
        });
      });
  }

  openEditDialog(val: UserDto) {
    this.updateAccount = true;
    this.inputAccount = { ...val };
  }

  resetModel() {
    this.inputAccount = {
      MName: '',
      contact: '',
      email: '',
      FName: '',
      LName: '',
      userType: '',
      username: '',
      password: '',
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
