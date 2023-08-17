import axios from 'axios'

export const api = {
  connection: axios.create({
    baseURL: `https://module5.7t33n.ru/`,
  }),

  async fetchData(route) {
    return await this.connection.get(route)
  },

  async postData(route, data) {
    return await this.connection.post(route, data)
  },
}
