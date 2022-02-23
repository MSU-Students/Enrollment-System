<template>
  <q-page class="flex flex-center bg-image">
    <q-card class="bg-secondary q-pa-xl text-white">
      <q-form class="q-gutter-md" style="max-width: 380px">
        <div class="text-h4 text-center text-bold text-white q-pt-xl">
          Log-in as Admistrator
        </div>

        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input v-model="username" label="Username">
              <template v-slot:prepend>
                <q-icon name="people" />
              </template>
            </q-input>

            <q-input
              v-model="password"
              label="Password"
              :type="isPwd ? 'password' : 'text'"
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

            <div>
              <q-btn
                :ripple="false"
                unelevated
                class="full-width"
                label="Login"
                color="primary"
                size="lg"
                type="submit"
                @click="admindashboard()"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-form>
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

  async admindashboard() {
    if (this.username == 'Admin' && this.password == 'Admin') {
      await this.$router.replace('/admin/dashboard');
      this.$q.notify({
        color: 'positive',
        icon: 'cloud_done',
        textColor: 'white',
        position: 'bottom',
        message: 'You are Logged In!',
      });
    } else {
      this.username = '';
      this.password = '';
      this.$q.notify({
        type: 'negative',
        message: 'Wrong Username and Password!!',
      });
    }
  }
}
</script>
