<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold flex flex-center">Manage Account</div>

    <br />

    <q-table
      title="Account List"
      :rows="account"
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
            label="Add User"
            color="primary"
            dense
            flat
            icon="add"
            @click="onNewAccount()"
          />
          <q-dialog v-model="activeUser">
            <q-card style="width: 600px">
              <q-card-section class="row">
                <div class="text-h6">Add User</div>
                <q-space />
                <q-btn flat round dense icon="close" v-close-popup />
              </q-card-section>

              <q-card-section class="q-gutter-md">
                <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="presentAccount.fName"
                      label="First Name"
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="presentAccount.mInitial"
                      label="Middle Initial"
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="presentAccount.lName"
                      label="Last Name"
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="presentAccount.username"
                      label="Username"
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="presentAccount.password"
                      label="Password"
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-select
                      outlined
                      v-model="presentAccount.designation"
                      :options="options"
                      label="Designation"
                    />
                  </div>
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="red-10" v-close-popup />
                <q-btn
                  flat
                  label="Add"
                  color="primary"
                  @click="onSaveAccount"
                  v-close-popup
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <div>
            <q-td>
              <q-btn
                round
                color="blue"
                icon="edit"
                size="sm"
                flat
                dense
                @click="onEditAccount(props.row)"
              />
              <q-dialog v-model="editRow">
                <q-card style="width: 600px">
                  <q-card-section class="row">
                    <div class="text-h6">Edit User</div>
                    <q-space />
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-card-section>

                  <q-card-section class="q-gutter-md">
                    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-input
                          outlined
                          v-model="presentAccount.fName"
                          label="First Name"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-input
                          outlined
                          v-model="presentAccount.mInitial"
                          label="Middle Initial"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-input
                          outlined
                          v-model="presentAccount.lName"
                          label="Last Name"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-input
                          outlined
                          v-model="presentAccount.username"
                          label="Username"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-input
                          outlined
                          v-model="presentAccount.password"
                          label="Password"
                        />
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-select
                          outlined
                          v-model="presentAccount.designation"
                          :options="options"
                          label="Roles"
                        />
                      </div>
                    </div>
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="red-10" v-close-popup />
                    <q-btn
                      flat
                      label="Add"
                      color="primary"
                      @click="onEditAccount"
                      v-close-popup
                    />
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
                @click="onDeleteAccount(props.row)"
              />
              <q-dialog v-model="confirmDelete" persistent>
                <q-card>
                  <q-card-section class="row items-center">
                    <q-avatar
                      size="sm"
                      icon="warning"
                      color="red-10"
                      text-color="white"
                    />
                    <span class="q-ml-sm"
                      >Confirm Delete {{ presentAccount.fName }}?</span
                    >
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
                      label="Delete"
                      color="primary"
                      @click="onConfirmDelete"
                      v-close-popup
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-td>
          </div>

          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { AccountInfo } from 'src/store/account/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('account', ['account', 'activeAccount']),
  },
  methods: {
    ...mapActions('account', ['newAccount', 'editAccount', 'deleteAccount']),
  },
})
export default class ManageAccount extends Vue {
  account!: AccountInfo[];
  newAccount!: (account: AccountInfo) => Promise<void>;
  editAccount!: (account: AccountInfo) => Promise<void>;
  deleteAccount!: (account: AccountInfo) => Promise<void>;

  columns = [
    {
      name: 'name',
      required: true,
      label: 'Full Name',
      align: 'left',
      field: (row: AccountInfo) =>
        row.fName + ' ' + row.mInitial + ' ' + row.lName,
      format: (val: string) => `${val}`,
    },
    { name: 'username', align: 'left', label: 'Username', field: 'username' },
    { name: 'password', align: 'left', label: 'Password', field: 'password' },
    {
      name: 'designation',
      align: 'center',
      label: 'Designation',
      field: 'designation',
    },
    { name: 'status', align: 'center', label: 'Status', field: 'status' },
  ];
  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;
  defaultAccount: AccountInfo = {
    fName: '',
    mInitial: '',
    lName: '',
    designation: '',
    username: '',
    password: '',
    status: 'Active',
  };
  presentAccount = { ...this.defaultAccount };
  filter = '';
  options = ['Admin', 'Registrar', 'Chairperson'];

  onNewAccount() {
    this.presentAccount = { ...this.defaultAccount };
    this.editRow = false;
    this.activeUser = true;
  }

  onEditAccount(account: AccountInfo) {
    this.presentAccount = { ...account };
    this.editRow = true;
    this.confirmDelete = false;
  }

  onDeleteAccount(account: AccountInfo) {
    this.presentAccount = { ...account };
    this.confirmDelete = true;
  }

  async onSaveAccount() {
    if (!this.editRow) {
      await this.newAccount(this.presentAccount);
    } else {
      await this.editAccount(this.presentAccount);
    }
  }

  async onConfirmDelete() {
    await this.deleteAccount(this.presentAccount);
    this.confirmDelete = true;
  }
}
</script>
