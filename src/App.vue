<script lang="ts">
import {defineComponent} from "vue";
const App = defineComponent({
  name: 'App',
})
export default App;
</script>

<template>
  <div>
    <h1 class="text-h2">Welcome to Mito Vue Bootcamp!</h1>
    <v-card width="400">
      <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        This is content
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" variant="plain">
          Button
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>

</style>
