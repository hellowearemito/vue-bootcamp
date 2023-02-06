<script lang="ts">
import {defineComponent} from "vue";
import {fetchUsers, User} from "./utils/api";

const App = defineComponent({
  name: 'App',

  data () {
    return {
      users: [] as User[] | undefined
    }
  },

  async mounted() {
    const [,users] = await fetchUsers()
    this.users = users?.data.results;
  }
})
export default App;
</script>

<template>
  <div class="container">
    <h1 class="text-h2 text-pink">Welcome to Mito Vue Bootcamp!</h1>
    <div class="cards">
      <v-card
        v-for="user in users"
        :key="user.phone"
        class="bg-grey-lighten-5 rounded-0"
      >
        <v-img
          cover
          :src="user.picture.large"
        />
        <v-card-item>
          <v-card-title>{{ user.name.first }} {{ user.name.last }}</v-card-title>

          <v-card-subtitle>{{ user.phone }}</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          {{ user.email }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="plain">
            call
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: auto;
  max-width: 1280px;
}

h1 {
  margin: 5rem auto;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.v-card {
  width: 250px;
  margin-right: 30px;
  margin-bottom: 30px;
}
</style>
