<template>
  <div class="profile-page">
    <h1 class="text-h2 mb-10">Profile of <strong>{{ fullName }}</strong></h1>

    <Form as="v-form" :validation-schema="schema" @submit="onSubmit">
      <Field name="notes" v-slot="{ field, errors }" v-model="textField">
        <v-text-field v-bind="field" label="Notes" :error-messages="errors" />
      </Field>

      <v-btn :loading="isLoading" color="pink" class="mt-10" type="submit">Save</v-btn>
    </Form>

    <v-snackbar
      v-model="isSuccessfulSubmit"
      :timeout="3000"
    >
      Notes saved!
    </v-snackbar>

    <h2 class="text-h4 mt-10">Saved notes</h2>
    <hr>
    <v-list lines="one">
      <v-list-item
        v-for="item in orderedNotes"
        :key="item.timestamp.toString()"
        :subtitle="new Date(item.timestamp).toGMTString()"
      >
        <div class="list-item-content">
          <div>{{ item.notes }}</div>
          <v-btn
            class="delete"
            size="small"
            color="white"
          >❌</v-btn>
        </div>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapActions, mapState} from "pinia";
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

import {UserNotes, useUsersStore} from "../store/users";

const ProfilePage = defineComponent({
  name: 'ProfilePage',

  components: {
    Field,
    Form
  },

  data () {
    return {
      isLoading: false,
      isSuccessfulSubmit: false,
      textField: '',
      schema: {
        notes: yup.string().required().min(2).label('Notes')
      }
    }
  },

  mounted () {
    if (this.selectedUser === undefined) this.$router.push('/')
  },

  computed: {
    ...mapState(useUsersStore, ['selectedUser', 'selectedUserNotes']),

    fullName (): string {
      return `${this.selectedUser?.name.first} ${this.selectedUser?.name.last}`
    },

    orderedNotes (): UserNotes[] | undefined {
      return this.selectedUserNotes?.reverse()
    }
  },

  methods: {
    ...mapActions(useUsersStore, ['updateSelectedUserNotes']),

    async onSubmit (values: { notes: string }) {
      this.isLoading = true;

      await this.updateSelectedUserNotes({
        timestamp: new Date(),
        notes: values.notes
      })

      this.isSuccessfulSubmit = true;

      this.isLoading = false;
    }
  }
})

export default ProfilePage
</script>

<style lang="scss" scoped>
.list-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  &:hover {
    background: #f2f2f2;

    .delete {
      visibility: visible;
    }
  }

  .delete {
    visibility: hidden;
  }
}
</style>
