<template>
  <q-page>
    <q-img class="wave" src="../assets/back2.jpg" />

    <q-card class="shadow-20 absolute-center">
      <q-card-section>
        <div class="q-pt-lg">
          <div class="col text-h6 ellipsis flex justify-center">
            <div class="text-h3 text-primary q-my-none text-weight-bold">
              Log-In
            </div>
          </div>
          <div class="col text-h6 ellipsis flex justify-center">
            <div class="text-h4 text-primary q-my-none text-weight-bold">
              MSU-LNCAT
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="loginUser">
          <div class="q-pl-xl q-pr-xl">
            <q-input
              v-model="username"
              dense
              label="Username"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Input your Username',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              v-model="password"
              dense
              label="Password"
              :type="isPwd ? 'password' : 'text'"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Input your password',
              ]"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <div class="flex justify-center">
              <q-btn
                :ripple="false"
                unelevated
                rounded
                dense
                class="glossy q-mt-xs full-width"
                label="Login"
                color="primary"
                type="submit"
              />
            </div>
            <div
              class="
                q-mt-md
                text-center text-caption text-weight-medium text-primary
                absolute-center-right
              "
            >
              *To register your account and retrieve the password, proceed to
              Administration office.
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { AUser } from 'src/store/auth/state';
import { mapActions, mapState } from 'vuex';

@Options({
  methods: {
    ...mapActions('auth', ['login', 'authUser']),
  },
  computed: {
    ...mapState('auth', ['currentUser']),
  },
})
export default class Login extends Vue {
  login!: (auth: { userName: string; password: string }) => Promise<AUser>;
  currentUser!: AUser;

  username = '';
  password = '';
  isPwd = true;

  async loginUser() {
    try {
      await this.login({
        userName: this.username,
        password: this.password,
      });
      if (this.currentUser.userType == 'admin') {
        await this.$router.replace('/admin/dashboard');
        this.$q.notify({
          type: 'positive',
          message: 'You are logged in',
        });
      } else if (this.currentUser.userType == 'chairperson') {
        await this.$router.replace('/chairperson/dashboard');
        this.$q.notify({
          type: 'positive',
          message: 'You are logged in',
        });
      } else if (this.currentUser.userType == 'registrar') {
        await this.$router.replace('/registrar/enrollment');
        this.$q.notify({
          type: 'positive',
          message: 'You are logged in',
        });
      }
    } catch (error) {
      this.$q.notify({
        type: 'negative',
        message: 'Wrong Username or Password!',
      });
    }
  }
}
</script>

<style>
.head {
  background-color: transparent;
}
.wave {
  background-color: #e6ddd3;
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
