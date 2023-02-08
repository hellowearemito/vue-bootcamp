import {defineStore} from 'pinia'
import {delay, fetchUsers, User} from "../utils/api";

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
    },

    async updateSelectedUserNotes (notes: { timestamp: Date, notes: string }) {
      await delay(1000)
      localStorage.setItem(this.selectedUserId, JSON.stringify(
        [...JSON.parse(localStorage.getItem(this.selectedUserId) || '[]'), notes]
      ))
    }
  },

  getters: {
    selectedUser (state) {
      return state.users?.find((user: User) => user.phone === state.selectedUserId)
    },

    selectedUserNotes (state) {
      return JSON.parse(localStorage.getItem(state.selectedUserId) || '[]')
    }
  },

  persist: {
    storage: sessionStorage
  }
})
