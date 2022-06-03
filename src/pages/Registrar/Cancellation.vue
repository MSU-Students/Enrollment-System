<template>
  <q-page class="q-pa-lg">
    <div class="q-pa-lg text-light-blue-5 text-bold" style="font-size: 2rem">
      CLASS LIST
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Enrollment extends Vue {
  text = '';
  ph = '';
  dense = false;
  val = true;
}
</script>
