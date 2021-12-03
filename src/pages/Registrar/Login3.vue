<template>
  <q-page class="flex flex-center bg-image">
    <q-card class="q-pa-xl text-white-2">
      <q-form class="q-gutter-md" style="max-width: 300px">
        <div class="text-h5 text-center text-bold text-black q-pt-xl">
          Log-in as Registrar
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
                  class="full-width"
                  label="Login"
                  color="secondary"
                  size="lg"
                  @click="registrarenroll()"
                />
              </div>
            </q-form>
          </q-card-section>
      </q-form>
        </q-card>
      </q-page>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Login extends Vue {
  username = '';
  password = '';
  isPwd = true;

  async registrarenroll() {
    if (this.username == 'Admin' && this.password == 'Admin') {
      await this.$router.replace('/Registrar/enrollment');
    } else {
      alert(' Try Agains  ');
    }
  }
}
</script>
