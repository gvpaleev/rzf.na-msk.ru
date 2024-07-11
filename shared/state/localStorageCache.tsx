// 'use client'
const isClient = typeof window !== 'undefined';
// class localStorageCache {
//   private static instance: localStorageCache;
//
//   private constructor() { }
//
//   public static getInstance(): localStorageCache {
//     if (!localStorageCache.instance) {
//       localStorageCache.instance = new localStorageCache();
//     }
//     return localStorageCache.instance;
//   }
//
//   public setItem(key: string, value: string) {
//     if (isClient)
//       localStorage.setItem(key, value);
//   }
//   public getItem(key: string): string {
//     return window ? localStorage.getItem(key) || '' : ''
//
//   }
// }
//
// export default localStorageCache.getInstance();
//
// export function setItem(key: string, value: string) {
//   // if (isClient)
//   localStorage.setItem(key, value);
// }
// export function getItem(key: string): string {
//   // if (isClient)
//   return localStorage.getItem(key) || '';
//   return ''
// }
// import { createEffect } from "effector"
//
//
//
// const localStorageSetFx = createEffect(async (key: string, value: string) => {
//   localStorage.setItem(key, value);
// });
//
//
//
// const localStorageGetFx = createEffect(async (key: string) => {
//   return localStorage.getItem(key) || ''
// });


