import { AxiosResponse } from 'axios'

import { Response, requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'


export interface GetNewsListResponseType {
  /** ID */
  id?: number;
  /**
   * Image
   * Format: uri
   */
  image?: string;
  /** Глобальная */
  is_global?: boolean;
  /**
   * Pub date
   * Format: date-time
   */
  pub_date?: string;
  /** Заголовок */
  title: string;
  /** Новость */
  description?: string;
  /** Новость какой группы */
  group?: number;
  /** Новость какого подкомитета */
  committee?: number;
  /** Новость какой местности */
  locality?: number;
  /** Новость какого Региона РЗФ */
  service_region?: number;
  /** Географический регион новости */
  geographic_region?: number;
};

export const getNewsList = () => {
  return requestWrapper(
    requestService.get<void, AxiosResponse<Response<GetNewsListResponseType[]>>>(
      '/news/',
    ),
  )
}
