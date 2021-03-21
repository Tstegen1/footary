<template>
  <v-container id="target">
    <v-form @submit.prevent="addTarget">
      <v-list v-if="targets.length < 2">
        <v-list-item>
          今日の目標を入力しよう！
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item>
          今日の目標！
        </v-list-item>
      </v-list>
      <v-row justify="center">
        <v-col xs="12" sm="8" md="8">
          <v-text-field
          v-if="targets.length < 2"
          v-model="targetText"
            label="今日の目標"
            outlined
            autocomplete="off"
          >
          </v-text-field>
        </v-col>
      </v-row>      
      <v-list>
        <v-list-item v-for="(target, index) in targets" :key="target.id" height="48">
          {{ target.value }}
          <v-icon @click="deleteTarget(index, target)">mdi-close-circle</v-icon>
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
      if(this.targetText !== '') {
        this.targets.push(item);
      } else {
        alert('入力されていません');
      }
      this.targetText = '';
    },
    deleteTarget(index, target) {
      if(confirm(`"${target.value}"を削除しますか？`)) {
        this.targets.splice(index, 1);
      }
    }
  },
  watch: {
    targets: function() {
      localStorage.setItem('targets', JSON.stringify(this.targets));
    }
  },
  mounted() {
    this.targets = JSON.parse(localStorage.getItem('targets')) || [];
  }
}
</script>

<style scoped>
.v-list-item {
  display: block;
  text-align: center;
  font-size: 20px;
}  
</style>