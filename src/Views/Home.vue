<template>
  <div class="cards">
    <UserCard
      v-for="user in users"
      :key="user.phone"
      :user="user"
      class="bg-grey-lighten-5 rounded-0"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { default as UserCard } from '../components/User.vue'
import { fetchUsers, User } from "../utils/api";

const Home = defineComponent({
  name: 'Home',
  components: {
    UserCard
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

export default Home;
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
