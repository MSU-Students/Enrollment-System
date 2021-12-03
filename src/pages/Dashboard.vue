<template>
    <q-page class="bg-image">
        <div class="row q-gutter-sm q-pa-sm">
          <div class="col">
            <q-card
              flex
              flex-center
              clickable
              v-ripple
              @click="() => $router.replace('/login')"
            >
              <q-card-section
                :class="$q.dark.isActive ? 'blue_dark' : 'bg-primary'"
                class="text-white"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="font2 text-h4 absolute-center">Administration</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="62px" name="person" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card
              flex
              flex-center
              clickable
              v-ripple
              @click="() => $router.replace('/login3')"
            >
              <q-card-section
                :class="$q.dark.isActive ? 'blue_dark' : 'bg-primary'"
                class="text-white"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="font2 text-h4 absolute-center">Registrar</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="62px" name="list" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card
              flex
              flex-center
              clickable
              v-ripple
              @click="() => $router.replace('/login2')"
            >
              <q-card-section
                :class="$q.dark.isActive ? 'blue_dark' : 'bg-primary'"
                class="text-white"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="font2 text-h4 absolute-center">Chairperson</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="62px" name="people" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({})
export default class Dashboard extends Vue {}
</script>

