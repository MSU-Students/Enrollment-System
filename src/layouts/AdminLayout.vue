<template>
  <div class="bg-image5">
    <q-layout view="hHh lpR lFf">
      <q-header elevated class="q-px-lg q-py-md bg-image1">
        <q-toolbar>
          <q-img src="~assets/logo.png" style="width: 110px"></q-img>
          <q-space />
          <q-card flat class="bg-transparent">
            <div class="font1 text-h3 flex flex-center">
              Administration Module
            </div>
            <div class="font2 text-h6 flex flex-center">
              ______________________________________________________________________________________________
            </div>
          </q-card>

          <q-space />

          <q-img src="~assets/msulogo.png" style="width: 130px"></q-img>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="250"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple to="/admin/dashboard">
              <q-item-section avatar>
                <q-icon name="dashboard" color="blue-2" />
              </q-item-section>
              <q-item-section> Enrollment List </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple to="/admin/ManageAccount">
              <q-item-section avatar>
                <q-icon name="how_to_reg" color="blue-2" />
              </q-item-section>

              <q-item-section> Manage Account </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple to="/admin/Course">
              <q-item-section avatar>
                <q-icon name="room" color="black" />
              </q-item-section>
              <q-item-section> Manage Course</q-item-section>
            </q-item>
            <q-separator />

            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="logout" color="red" />
              </q-item-section>

              <q-item-section> Logout </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({})
export default class MainLayout extends Vue {
  drawer = false;
  miniState = true;
}
</script>
