export type Response<T> = {
  count: number
  next: number | null
  previous: number | null
  results: T
}
export const requestWrapper = async <T>(request: Promise<Response<T>>) => {
  try {
    const response = await request
    return response.results
  } catch (err) {
    console.error('>>>>>>>>>>>>>>>> ERROR: ', err)
    throw err
  }
}
