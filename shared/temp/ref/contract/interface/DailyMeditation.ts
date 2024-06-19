export interface DailyMeditation {
  /** Id */
  id?: number;
  /** День */
  day: number;
  /** Месяц */
  month: number;
  /** Заголовок */
  title: string;
  /** Цитата */
  quote: string;
  /** Источник цитаты */
  quote_from: string;
  /** Текст */
  body: string;
  /** Только сегодня */
  jft: string;
}
