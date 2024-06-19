export interface Event {
  /** ID */
  id?: number;
  /**
   * Flyer
   * Format: uri
   */
  flyer?: string;
  /** Duration */
  duration?: string;
  /**
   * Время начала
   * Format: date-time
   */
  time: string;
  /** Заголовок (генерируется из типа если пустое) */
  title?: string;
  /** Описание */
  description?: string;
  /** Онлайн */
  online?: boolean;
  /** Глобальное */
  is_global?: boolean;
  /** Описание для онлайн */
  online_description?: string;
  /** Мероприятие какой группы */
  group?: number;
  /** Мероприятие какого подкомитета */
  committee?: number;
  /** Мероприятие какой местности */
  locality?: number;
  /** Мероприятие какого Региона РЗФ */
  service_region?: number;
  /** Географический регион мероприятия */
  geographic_region?: number;
}
