import { AxiosError, AxiosResponse } from 'axios'

import { requestService } from './requestService'

export type LoginParams = {
  username: string
  password: string
}
export type TokenResponse = {
  access: string
  refresh: string
}

export const login = async (data: LoginParams): Promise<TokenResponse> => {
  try {
    const response = await requestService.post<
      void,
      AxiosResponse<TokenResponse>
    >('/token/', data)
    return response.data
  } catch (error) {
    throw new Error(
      (error as AxiosError<{ detail?: string }>)?.response?.data?.detail,
    )
  }
}
