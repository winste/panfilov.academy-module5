import axios from 'axios'

export const API = {
  connection: axios.create({
    baseURL: `https://module5.7t33n.ru/`
  }),

  async fetchData(route) {
    try {
      await this.connection.get(route).then(response => {
        console.log(response);
        return response.data
      })
    } catch (error) {
      console.log(error)
    }
  },

  async postData(route) {
    try {
      await this.connection.post(route).then((response) => {
        return response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
