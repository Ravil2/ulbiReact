import axios from 'axios'

export default class PostService {
  static async getAll(limit = 10, skip = 10) {
    const response = await axios.get('https://dummyjson.com/posts', {
      params: {
        limit: limit,
        skip: skip,
      },
    })
    return response
  }
}
