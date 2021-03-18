<!-- サッカーノートを書く -->
<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
        <v-textarea 
          auto-grow
          outlined
          name="良かったところ"
          label="良かったところ"
          v-model="goodText"
        ></v-textarea>          
        </v-col>
        <v-col cols="12" md="6">
        <v-textarea
          auto-grow
          outlined
          name="反省点"
          label="反省点"
          v-model="badText"
        ></v-textarea>          
        </v-col>
        <v-col cols="12" md="6">
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

