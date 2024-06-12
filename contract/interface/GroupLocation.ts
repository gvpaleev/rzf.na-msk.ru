export interface GroupLocation {
  /** ID */
  id?: number;
  /** Короткое название */
  title: string;
  /** Широта и долгота */
  latitude_longitude?: string;
  /** Yandex company ID */
  ya_company_id?: string;
  /** Фрэйм карт */
  map: string;
  /** Адрес */
  address: string;
  /** Описание локации */
  place_description?: string;
  /** Доступность для инвалидов */
  accessibility_for_disabled?: boolean;
  /** Шаговая доступность */
  step_availability?: boolean;
  /**
   * Дата изменения информации
   * Format: date
   */
  edit_date_information?: string;
  /** Изображения */
  images?: string;
  /** Город локации */
  town?: number;
  metro_stations?: number[];
}
