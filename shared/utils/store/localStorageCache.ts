import { Effect, createEffect } from 'effector'

type CacheObject<T> = {
  loadCacheFx: Effect<void, T, Error>
  setCacheFx: Effect<T, T>
  clearCacheFx: Effect<void, void, Error>
  getCacheSync: () => T | null
}

export const createCacheStoreForKey = <T>(key: string): CacheObject<T> => {
  const getCacheSync = () => localStorage.getItem(key) as T
  const loadCacheFx = createEffect<void, T>(`>>>>>>> ${key} LOAD CACHE`, {
    handler: () => {
      const cache = getCacheSync()
      if (cache) {
        return cache
      }
      throw new Error(`[${key}] cache is empty.`)
    },
  })

  const clearCacheFx = createEffect(`>>>>>>> ${key} REMOVE CACHE`, {
    handler: () => {
      localStorage?.removeItem(key)
    },
  })

  const setCacheFx = createEffect<T, T>(`>>>>>>> ${key} SET CACHE`, {
    handler: async (value) => {
      localStorage.setItem(key, JSON.stringify(value))
      return value
    },
  })

  return {
    loadCacheFx,
    setCacheFx,
    clearCacheFx,
    getCacheSync,
  }
}
