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
            <q-item clickable v-ripple to="/chairperson/dashboard">
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section> Dashboard </q-item-section>
            </q-item>

            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="people" color="black" />
                </q-item-section>
                <q-item-section> Manage </q-item-section>
              </template>
              <q-card>
                <q-card-section>
                  <q-item clickable v-ripple to="/chairperson/Teacher">
                    <q-item-section avatar>
                      <q-icon name="person" color="black" />
                    </q-item-section>
                    <q-item-section> Manage Teacher </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/chairperson/Subject">
                    <q-item-section avatar>
                      <q-icon name="style" color="black" />
                    </q-item-section>
                    <q-item-section> Manage Subject </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/chairperson/Room">
                    <q-item-section avatar>
                      <q-icon name="room" color="black" />
                    </q-item-section>
                    <q-item-section> Manage Room</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/chairperson/Schedule">
                    <q-item-section avatar>
                      <q-icon name="schedule" color="black" />
                    </q-item-section>
                    <q-item-section> Manage Schedule </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="analytics" color="blue-2" />
                </q-item-section>
                <q-item-section> Assigning </q-item-section>
              </template>
              <q-card>
                <q-card-section>
                  <q-item clickable v-ripple to="/chairperson/firstyear">
                    <q-item-section avatar>
                      <q-icon name="person" color="blue-2" />
                    </q-item-section>
                    <q-item-section> First Year </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/chairperson/secondyear">
                    <q-item-section avatar>
                      <q-icon name="person" color="blue-2" />
                    </q-item-section>
                    <q-item-section> Second Year </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/chairperson/thirdyear">
                    <q-item-section avatar>
                      <q-icon name="person" color="blue-2" />
                    </q-item-section>
                    <q-item-section> Third Year </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/chairperson/fourthyear">
                    <q-item-section avatar>
                      <q-icon name="person" color="blue-2" />
                    </q-item-section>
                    <q-item-section> Fourth Year </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </q-expansion-item>

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
