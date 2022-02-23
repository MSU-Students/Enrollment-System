<template>
  <div class="q-pa-md">
    <div style="max-width: 300px">
      <q-form @submit="SubmitForm">
        
      </q-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { StudentInfo } from 'src/store/Admission/state';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('Admission', ['account', 'activeAccount']),
  },
  methods: {
    ...mapActions('account', ['newAccount', 'editAccount', 'deleteAccount']),
  },
})
export default class Admission extends Vue {}
</script>
