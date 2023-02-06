<template>
  <AppHeader />
  <div class="container">
    <div class="cards">
      <UserCard
        v-for="user in users"
        :key="user.phone"
        :user="user"
        class="bg-grey-lighten-5 rounded-0"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {fetchUsers, User} from "./utils/api";
import { default as UserCard } from './components/User.vue'
import AppHeader from "./components/AppHeader.vue";

const App = defineComponent({
  name: 'App',

  components: {
    UserCard,
    AppHeader
  },

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

<style scoped lang="scss">
.container {
  margin: auto;
  max-width: 1280px;
  padding-top: 80px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
