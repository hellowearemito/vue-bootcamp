import axios from "axios";
import to from 'await-to-js'

export type User = {
  email: string,
  name: {
    title: string,
    first: string,
    last: string
  },

  phone: string

  picture: {
    thumbnail: string
    large: string
  }
}
interface UsersResponse {
  data: {
    results: Array<User>
  }
}

export const fetchUsers = async () =>
  await to<UsersResponse>(axios.get('https://randomuser.me/api/?results=10'));
