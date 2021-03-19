<!-- サッカーノートを書く -->
<template>
  <v-main>
    <Target></Target>
    <v-container id="diary">
      <v-row justify="center">
        <v-col xs="12" sm="8" md="8">
          <v-textarea 
            auto-grow
            outlined
            name="良かった点"
            label="良かった点"
            v-model="goodText"
          ></v-textarea>          
          <v-textarea
            auto-grow
            outlined
            name="反省点"
            label="反省点"
            v-model="badText"
          ></v-textarea>
          <v-textarea
            auto-grow
            outlined
            name="明日意識すること"
            label="明日意識すること"
            v-model="mindText"
          ></v-textarea>          
        </v-col>
      </v-row>
    </v-container>
    <v-container id="submit">
      <v-btn color="primary" width="180px" @click="post">
        登録する
      </v-btn>
    </v-container>
  </v-main>
</template>


<script>
export default {
  data() {
    return {
      goodText: null,
      badText: null,
      mindText: null,
    }
  },
  methods: {
    post() {
      //firebaseに保存する処理を書く
      console.log('登録します');
    }
  },
}
</script>

<style scoped>
#submit {
  text-align: center;
}
  
</style>