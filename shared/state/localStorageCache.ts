'use client'
class localStorageCache {
  private static instance: localStorageCache;

  private constructor() { }

  public static getInstance(): localStorageCache {
    if (!localStorageCache.instance) {
      localStorageCache.instance = new localStorageCache();
    }
    return localStorageCache.instance;
  }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public getItem(key: string): string {
    return localStorage.getItem(key) || ''

  }
}

export default localStorageCache.getInstance();

