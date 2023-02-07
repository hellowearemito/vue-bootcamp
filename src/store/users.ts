import {defineStore} from 'pinia'
import {fetchUsers, User} from "../utils/api";

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      users: [] as User[] | undefined,
      selectedUserId: {} as string
    }
  },

  actions: {
    async initialize () {
      const [error ,users] = await fetchUsers()

      if (error) return console.error('Failed to fetch users, terminating app.')

      this.users = users?.data.results;
    },

    setSelectedUserId (id: string) {
      this.selectedUserId = id;
    }
  },

  getters: {
    selectedUser (state) {
      return state.users?.find((user: User) => user.phone === state.selectedUserId)
    }
  },

  persist: {
    storage: sessionStorage
  }
})
