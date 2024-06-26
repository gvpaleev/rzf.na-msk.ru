import { requestWrapper } from '@api/helpers'
import { requestService } from '@api/requestService'

export interface Group {
  /** ID */
  id?: number;
  location?: any;
  /** Имя */
  name: string;
  /**
   * Ссылка
   * Format: slug
   */
  slug?: string;
  /** Описание */
  description?: string;
  /** Показывать карту */
  show_map?: boolean;
  /** Свободные служения */
  free_services?: string;
  /**
   * Email
   * Format: email
   */
  email?: string;
  /** Активна */
  active?: boolean;
  /** Город */
  town?: number;
  /** Местность группы */
  locality?: number;
  /** Служащий группы */
  servant?: number;
};
interface Locality {
  /** ID */
  id?: number;
  /** Имя */
  name: string;
  /**
   * Ссылка
   * Format: slug
   */
  slug: string;
  /** Описание */
  description?: string;
  /** Свободные служения */
  free_services?: string;
  /**
   * Email
   * Format: email
   */
  email?: string;
  /** Активна */
  active?: boolean;
  /**
   * Логотип
   * Format: uri
   * @description Загрузите логотип
   */
  logo?: string;
  /** Регион РЗФ местности */
  service_region?: number;
  /** Служащий местности */
  servant?: number;
};


interface ServiceRegion {
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

export async function getRegionIdByCity(townId: number): Promise<number | undefined> {

  let groups: Group[] = await requestWrapper(
    requestService.get<Group[]>('/groups/', {
      params: { town: townId },
    }),

  )
  let { locality: localityId } = groups[0];
  let locality: Locality = await requestWrapper(
    requestService.get<Locality>(`/localities/${localityId}/`, {})
  )
  let { service_region: serviceId } = locality;
  let service: ServiceRegion = await requestWrapper(
    requestService.get<ServiceRegion>(`/service-regions/${serviceId}/`, {})
  )
  // debugger;
  return service.id;
}

