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
