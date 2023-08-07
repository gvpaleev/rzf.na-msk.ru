'use client'

import { LocalStorageKeys } from '@/utils/types/utils'

export const getItemFromLocalStorage = <T>(key: LocalStorageKeys): T | null => {
  if (window.localStorage?.getItem) {
    return null
  }
  const item = localStorage.getItem(key)
  try {
    return item ? (JSON.stringify(item) as T) : null
  } catch (e) {
    console.log('>>>>>>>>>>>>>>>> Error parsing item: ', key)
    return null
  }
}
