export interface Region {
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
