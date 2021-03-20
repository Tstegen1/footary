<template>
  <v-container id="target">
    <v-form @submit.prevent="addTarget">
      <v-row justify="center">
        <v-col xs="12" sm="8" md="8">
          <v-text-field
          v-model="targetText"
            label="今日の目標"
            outlined
            autocomplete="off"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-list v-if="targets.length">
        <v-list-item v-for="(target, index) in targets" :key="target.id" height="48">
          {{ target.value }}
          <v-icon @click="deleteTarget(index)">mdi-close-circle</v-icon>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item>
          今日の目標を入力しよう！
        </v-list-item>
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
      let item = {
        value: this.targetText,
        isDone: false,
      }
      if(this.targetText) {
        this.targets.push(item);
      } else {
        alert('入力されていません');
      }
      this.targetText = '';
    },
    deleteTarget(index) {
      if(confirm('削除しますか？')) {
        this.targets.splice(index, 1);
      }
    }
  },
}
</script>

<style scoped>
.v-list-item {
  display: block;
  text-align: center;
  font-size: 20px;
}  
</style>