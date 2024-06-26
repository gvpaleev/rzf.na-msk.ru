import { requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'


export interface ServiceRegion {
  /** ID */
  id?: number;
  /** Имя */
  name: string;
  /** Описание */
  description?: string;
  /**
   * Ссылка
   * Format: slug
   */
  slug: string;
  /**
   * Email
   * Format: email
   */
  email?: string;
  /** Свободные служения региона */
  free_services?: string;
  /**
   * Логотип
   * Format: uri
   * @description Загрузите логотип
   */
  logo?: string;
  /** Служащий региона */
  servant?: number;
};

export async function getRegionIdById(id: number): Promise<ServiceRegion> {

  let service: ServiceRegion = await requestWrapper(
    requestService.get<ServiceRegion>(`/service-regions/${id}/`, {})
  )
  // debugger;
  return service;
}

