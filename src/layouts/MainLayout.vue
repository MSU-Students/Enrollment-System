<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="q-px-lg q-py-md">
      <q-toolbar>
        <q-img src="~assets/logo.png" style="width: 150px"></q-img>
        <q-space />
        <q-card flat class="bg-transparent">
          <div class="font1 text-h3 flex flex-center">
            Enrollment Management System
          </div>
          <div class="font2 text-h6 flex flex-center">
            Mindanao State University Lanao National College of Arts and Trades
          </div>
        </q-card>

        <q-space />

        <q-img src="~assets/msulogo.png" style="width: 150px"></q-img>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-secondary text-white">
      <q-toolbar>
        <div class="font2 text-substitle1">
          <div>
            Mindanao State University – Lanao National College of Arts and
            Trades is an integrated campus located in Lanao del sur of Mindanao
            State University (MSU). The school was converted into national
            school of arts and trades known as the Lanao school of arts and
            trades in 1956 by virtue of R.A No. 1567 as amended by R.A No. 304.
            Later become Lanao national college of arts and trades.
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
})
export default class Dashboard extends Vue {}
</script>

<style>
.bg-image {
  background-image: url(../assets/logo.png);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(240, 240, 239);
  background-size: 80%;
}
</style>
