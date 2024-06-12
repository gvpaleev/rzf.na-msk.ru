export interface SetUsername {
  /** Current password */
  current_password: string;
  /**
   * Адрес электронной почты
   * Format: email
   * @description Введите адрес электронной почты
   */
  new_email: string;
}
