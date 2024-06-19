export interface ContentBanners {
  /** ID */
  id?: number;
  /**
   * Картинка
   * Format: uri
   */
  image: string;
  /**
   * Кликабельная ссылка
   * Format: uri
   */
  link?: string;
  /** Активный */
  active?: boolean;
}
