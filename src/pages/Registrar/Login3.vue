<template>
  <q-page>
    <q-img class="wave" src="..\..\..\src\assets\back2.jpg" />

    <q-card class="shadow-20 absolute-center">
      <q-card-section>
        <div class="q-pt-lg">
          <div class="col text-h6 ellipsis flex justify-center">
            <div class="text-h3 text-primary q-my-none text-weight-bold">
              Registrar
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
@Options({})
export default class Login extends Vue {
  username = '';
  password = '';
  isPwd = true;
  adminLogin = false;

  async loginUser() {
    if (this.username == 'admin' && this.password == 'admin') {
      await this.$router.replace('/registrar/enrollment');
      this.$q.notify({
        color: 'positive',
        icon: 'cloud_done',
        textColor: 'white',
        position: 'top',
        message: 'You are Logged In!.',
      });
    } else {
      this.username = '';
      this.password = '';
      this.$q.notify({
        color: 'negative',
        type: 'negative',
        textColor: 'white',
        position: 'top',
        message: 'Incorrect username or password.',
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
