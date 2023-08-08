import { AxiosResponse } from 'axios'

export type Response<T> = {
  count: number
  next: number | null
  previous: number | null
  results: T
}
export const requestWrapper = async <T>(
  request: Promise<AxiosResponse<Response<T>>>,
) => {
  try {
    const response = await request
    return response.data?.results
  } catch (err) {
    console.error('>>>>>>>>>>>>>>>> ERROR: ', err)
    throw err
  }
}
