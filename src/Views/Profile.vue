<template>
  <div>Profile of <strong>{{ fullName }}</strong></div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapState} from "pinia";
import {useUsersStore} from "../store/users";

const ProfilePage = defineComponent({
  name: 'ProfilePage',

  computed: {
    ...mapState(useUsersStore, ['selectedUser']),

    fullName (): string {
      return `${this.selectedUser?.name.first} ${this.selectedUser?.name.last}`
    }
  }
})

export default ProfilePage
</script>
