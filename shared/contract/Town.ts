export interface Town {
  /** ID */
  id?: number;
  /** Имя */
  name: string;
  /**
   * Ссылка
   * Format: slug
   */
  slug: string;
  /** Is big */
  is_big?: boolean;
  /** Географический регион города */
  geographic_region?: number;
  service_region?: number;
};
