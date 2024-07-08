const isClient = typeof window !== 'undefined';
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
    if (isClient)
      localStorage.setItem(key, value);
  }
  public getItem(key: string): string {
    if (isClient)
      return localStorage.getItem(key) || ''
    return ''

  }
}

export default localStorageCache.getInstance();

