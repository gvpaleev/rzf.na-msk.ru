import { LocalStorageKeys } from '@/shared/utils/types/utils'

export const IS_SERVER = typeof window === 'undefined'

export const getItemFromLocalStorage = <T>(key: LocalStorageKeys): T | null => {
  if (IS_SERVER) {
    return null
  }
  const item = localStorage.getItem(key)
  try {
    return item ? (JSON.parse(item) as T) : null
  } catch (e) {
    console.error('>>>>>>>>>>>>>>>> Error parsing item: ', key)
    return null
  }
}

export const setItemToLocalStorage = <T>(
  key: LocalStorageKeys,
  value: T,
): void => {
  if (IS_SERVER) return

  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error('>>>>>>>>>>>>>>>> Error setting item: ', key)
  }
}
