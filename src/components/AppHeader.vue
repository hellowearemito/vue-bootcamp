<template>
  <v-layout>
    <v-app-bar
      color="pink"
      density="compact"
    >
      <template v-slot:append>
        <v-btn @click="changeLocale">{{ localeIcon }}</v-btn>
      </template>

      <v-app-bar-title><a href="/">Mito Vue Bootcamp</a></v-app-bar-title>

    </v-app-bar>
  </v-layout>
</template>

<script lang="ts">
import {defineComponent} from "vue";

const AppHeader = defineComponent({
  name: 'AppHeader',

  methods: {
    changeLocale (): void {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'hu' : 'en';
    }
  },

  computed: {
    localeIcon (): string {
      return this.$i18n.locale === 'hu' ? '🇺🇸' : '🇭🇺'
    }
  }
})

export default AppHeader;
</script>

<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: none;
}
</style>
