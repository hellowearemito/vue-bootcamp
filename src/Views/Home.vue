<template>
  <div class="cards">
    <UserCard
      v-for="user in users"
      :key="user.phone"
      :user="user"
      class="bg-grey-lighten-5 rounded-0"
      @click="onProfileCardClick"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { mapActions, mapState } from "pinia";
import { default as UserCard } from '../components/User.vue'
import { useUsersStore } from "../store/users";

const Home = defineComponent({
  name: 'Home',
  components: {
    UserCard
  },

  async mounted() {
    await this.initialize()
  },

  computed: {
    ...mapState(useUsersStore, ['users'])
  },

  methods: {
    ...mapActions(useUsersStore, ['setSelectedUserId', 'initialize']),

    onProfileCardClick (payload: {id: string}) {
      this.setSelectedUserId(payload.id)
      this.$router.push({ path: `profile/${payload.id}` })
    }
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
