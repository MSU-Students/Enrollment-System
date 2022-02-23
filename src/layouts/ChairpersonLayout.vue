<template>
  <div class="q-pa-sm bg-image2">
    <q-layout view="hHh lpR lFf">
      <q-header elevated class="q-px-lg q-py-md bg-image1">
        <q-toolbar>
          <q-img src="~assets/logo.png" style="width: 110px"></q-img>
          <q-space />
          <q-card flat class="bg-transparent">
            <div class="font1 text-h3 flex flex-center">Chairperson Module</div>
            <div class="font2 text-h6 flex flex-center">
              ______________________________________________________________________________________________
            </div>
          </q-card>

          <q-space />

          <q-img src="~assets/msulogo.png" style="width: 110px"></q-img>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        :breakpoint="400"
        bordered class="bg-white"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple to="/chairperson/dashboard">
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section> Dashboard </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/chairperson/manage">
              <q-item-section avatar>
                <q-icon name="how_to_reg" />
              </q-item-section>

              <q-item-section> Managing </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/chairperson/assign">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section> Assigning </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="logout" />
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

<script>
export default {
  name: 'Mylayout',

  data() {
    return {
      drawer: false,
      miniState: true,
    };
  },
};
</script>
