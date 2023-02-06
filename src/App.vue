<template>
  <AppHeader />
  <div class="container">
    <RouterView />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AppHeader from "./components/AppHeader.vue";

const App = defineComponent({
  name: 'App',

  components: {
    AppHeader
  }
})
export default App;
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  max-width: 1280px;
  padding-top: 80px;
}
</style>
