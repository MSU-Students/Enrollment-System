<template>
    <q-page class="bg-image">
        <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card
              flex
              flex-center
              clickable
              v-ripple
              @click="() => $router.replace('/login')"
            >
              <q-card-section
                :class="$q.dark.isActive ? 'blue_dark' : 'bg-blue-8'"
                class="text-white"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6">Administration</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="62px" name="person" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card
              flex
              flex-center
              clickable
              v-ripple
              @click="() => $router.replace('/login')"
            >
              <q-card-section
                :class="$q.dark.isActive ? 'blue_dark' : 'bg-blue-8'"
                class="text-white"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6">Registrar</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="62px" name="list" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <q-card
              flex
              flex-center
              clickable
              v-ripple
              @click="() => $router.replace('/login')"
            >
              <q-card-section
                :class="$q.dark.isActive ? 'blue_dark' : 'bg-blue-8'"
                class="text-white"
              >
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6">Chairperson</div>
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

