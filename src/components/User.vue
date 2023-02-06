<template>
  <v-card class="bg-grey-lighten-5 rounded-0">
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
        View profile
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import type { User } from "../utils/api";

const User = defineComponent({
  name: 'User',
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  }
})

export default User
</script>

<style lang="scss" scoped>
.v-card {
  width: 250px;
  margin-right: 30px;
  margin-bottom: 30px;
}
</style>
