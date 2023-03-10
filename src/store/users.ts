import {defineStore} from 'pinia'
import {delay, fetchUsers, User} from "../utils/api";

export type UserNotes = {
  timestamp: Date,
  notes: string
}

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      _users: [] as User[] | undefined,
      _selectedUserNotes: [] as UserNotes[] | undefined,
      selectedUserId: {} as string
    }
  },

  actions: {
    async initialize () {
      const [error ,users] = await fetchUsers()

      if (error) return console.error('Failed to fetch users, terminating app.')

      this._users = users?.data.results;
    },

    initializeSelectedUser (id: string) {
      this.selectedUserId = id;
      this._selectedUserNotes = JSON.parse(localStorage.getItem(this.selectedUserId) || '[]');
    },

    async updateSelectedUserNotes (notes: { timestamp: Date, notes: string }) {
      await delay(1000)
      localStorage.setItem(this.selectedUserId, JSON.stringify(
        [...JSON.parse(localStorage.getItem(this.selectedUserId) || '[]'), notes]
      ))

      this._selectedUserNotes = JSON.parse(localStorage.getItem(this.selectedUserId) || '[]');
    }
  },

  getters: {
    users (state) {
      return state._users?.map(user => ({
        ...user,
        notesCount: JSON.parse(localStorage.getItem(user.phone) || '[]').length
      }))
    },

    selectedUser (state) {
      return state._users?.find((user: User) => user.phone === state.selectedUserId)
    },

    selectedUserNotes (state) {
      return state._selectedUserNotes
    }
  },

  persist: {
    storage: sessionStorage
  }
})
