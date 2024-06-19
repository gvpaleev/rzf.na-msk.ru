import axios from 'axios'

export const requestService = axios.create()

requestService.interceptors.request.use(
  async function (config) {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE

    return { ...config, baseURL }
  },
  function (error) {
    console.error(error?.message || 'Unknown error!')
    return Promise.reject(error)
  },
)
