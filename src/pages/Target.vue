<template>
  <v-container id="target">
    <v-form @submit.prevent="addTarget">
      <v-row justify="center">
        <v-col xs="12" sm="8" md="8">
          <v-text-field
          v-model="targetText"
            label="今日の目標"
            outlined
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="target in targets" :key="target.id">{{ target }}</v-list-item>
      </v-list>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      targets: [],
      targetText: '',
    }
  },
  methods: {
    addTarget() {
      this.targets.push(this.targetText);
      this.targetText = '';
    }
  },
}
</script>