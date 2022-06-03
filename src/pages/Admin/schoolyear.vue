<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-bold">Add School Year</div>

    <br />

    <q-table
      title="School Year List"
      :rows="allSchoolYear"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            rounded
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn
            label="Add SchoolYear"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="addNewSchoolYear = true"
          />
          <q-dialog v-model="addNewSchoolYear" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="row">
                <div class="text-h6">Add School Year</div>
                <q-space />
                <q-btn
                  flat
                  round
                  dense
                  icon="close"
                  v-close-popup
                  @click="resetModel()"
                />
              </q-card-section>

              <q-card-section>
                <q-form @submit="onaddSchoolYear">
                  <div class="q-gutter-md q-py-sm">
                    <q-input
                      autofocus
                      outlined
                      v-model="inputSchoolYear.schoolyear"
                      label="School Year"
                    />
                  </div>

                  <div align="right">
                    <q-btn
                      flat
                      label="Cancel"
                      color="red-10"
                      v-close-popup
                      @click="resetModel()"
                    />
                    <q-btn flat label="Save" color="primary" type="submit" />
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { SchoolYearDto } from 'src/services/restapi';

@Options({
  computed: {
    ...mapState('schoolyear', ['allSchoolYear']),
  },
  methods: {
    ...mapActions('schoolyear', [
      'addSchoolYear',
      'editSchoolYear',
      'deleteSchoolYear',
      'getAllSchoolYear',
    ]),
  },
})
export default class ManageSchoolYear extends Vue {
  addSchoolYear!: (payload: SchoolYearDto) => Promise<void>;
  editSchoolYear!: (payload: SchoolYearDto) => Promise<void>;
  deleteSchoolYear!: (payload: SchoolYearDto) => Promise<void>;
  getAllSchoolYear!: () => Promise<void>;
  allSchoolYear!: SchoolYearDto[];

  async mounted() {
    await this.getAllSchoolYear();
  }
  columns = [
    {
      name: 'schoolyear',
      required: true,
      label: 'School Year',
      align: 'left',
      field: (row: SchoolYearDto) => row.schoolyear,
      format: (val: number) => `${val}`,
    },
  ];

  addNewSchoolYear = false;
  updateSchoolYear = false;
  filter = '';

  inputSchoolYear: SchoolYearDto = {
    schoolyear: '',
  };

  async onaddSchoolYear() {
    await this.addSchoolYear(this.inputSchoolYear);
    this.addNewSchoolYear = false;
    this.resetModel();
    this.$q.notify({
      type: 'positive',
      message: 'Successfully Added.',
    });
  }

  resetModel() {
    this.inputSchoolYear = {
      schoolyear: '',
    };
  }
}
</script>
