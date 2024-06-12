export interface CustomUserCreate {
  /**
   * Адрес электронной почты
   * Format: email
   * @description Введите адрес электронной почты
   */
  email: string;
  /** ID */
  id?: number;
  /**
   * Имя пользователя
   * @description Введите имя пользователя
   */
  username: string;
  /** Имя */
  first_name?: string;
  /** Фамилия */
  last_name?: string;
  /** Password */
  password: string;
}
