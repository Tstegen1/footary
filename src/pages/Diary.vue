<!-- サッカーノートを書く -->
<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col xs="12" sm="8" md="8">
          <v-textarea 
            auto-grow
            outlined
            name="良かったところ"
            label="良かったところ"
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
            name="振り返り"
            label="1日の振り返り"
            v-model="diaryText"
          ></v-textarea>          
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="primary" class="btn">
      登録する
    </v-btn>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      goodText: null,
      badText: null,
      diaryText: null,
    }
  }
}
</script>
