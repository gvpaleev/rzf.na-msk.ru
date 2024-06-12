import { AxiosResponse } from 'axios'

export type ListResponse<T> = {
  count: number
  next: number | null
  previous: number | null
  results: T
}

export type Response<T> = T

export const requestWrapper = async <T extends {}>(
  request: Promise<AxiosResponse<Response<T> | ListResponse<T>>>,
) => {
  try {
    const response = await request
    return 'results' in response.data ? response.data?.results : response.data
  } catch (err) {
    console.error('>>>>>>>>>>>>>>>> ERROR: ', err)
    throw err
  }
}
