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

