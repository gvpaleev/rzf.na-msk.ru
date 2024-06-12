import { Group } from "./Group";

export interface ScheduledMeeting {
  /** ID */
  id?: number;
  group?: Group;
  /** Продолжительность */
  duration?: string;
  /** Время начала */
  time: string;
  /**
   * День недели
   * @enum {string}
   */
  day_of_week: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "0";
  /**
   * Какой по счёту в месяце
   * @enum {string}
   */
  schedule:
  | "12345"
  | "1"
  | "2"
  | "3"
  | "4"
  | "12"
  | "34"
  | "13"
  | "24"
  | "last"
  | "exclast"
  | "5";
  /** Онлайн */
  online?: boolean;
  /** Описание для онлайн */
  online_description?: string;
  /** Собрание какого подкомитета */
  committee?: number;
  /** Собрание какой местности */
  locality?: number;
  /** Локация */
  location?: number;
  /** Тип собрания */
  type: number;
}
