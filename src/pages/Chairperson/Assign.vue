<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-tabs
        v-model="tab"
        dense
        inline-label
        :breakpoint="0"
        align="justify"
        class="text-primary"
      >
        <q-tab :ripple="false" name="subject" icon="mail" label="Assign Subject" />
        <q-tab :ripple="false" name="teacher" icon="alarm" label="Asign Teacher" />
        <q-tab :ripple="false" name="schedule" icon="movie" label="Assign Schedule" />
        <q-tab :ripple="false" name="assign" icon="mail" label="Assign " />
        <q-tab :ripple="false" name="sassa" icon="alarm" label="Alarms" />
        <q-tab :ripple="false" name="movies" icon="movie" label="Movies" />
        <q-tab :ripple="false" name="mails" icon="mail" label="Mails" />
        <q-tab :ripple="false" name="alarms" icon="alarm" label="Alarms" />
      </q-tabs>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref(''),
    }
  }
}
</script>