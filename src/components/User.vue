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
      <p v-if="user.notesCount" v-html="$t('user_note_count', [user.notesCount])" />
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" variant="plain" @click="onViewProfileClick">
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

  emits: {
    click (payload: {id: string}) {}
  },

  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },

  methods: {
    onViewProfileClick () {
      this.$emit('click', {id: this.user.phone})
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
