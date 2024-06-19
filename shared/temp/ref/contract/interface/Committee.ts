export interface Committee {
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
  /** Регион РЗФ */
  service_region?: number;
  /** Местность комитета */
  locality?: number;
  /** Локация комитета */
  location?: number;
  /** Служащий комитета */
  servant?: number;
}

