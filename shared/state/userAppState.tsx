import { createStore } from "effector";

export const $townId = createStore<number>(-1);
export const $townName = createStore<string>('Москва')
export const $regionId = createStore<number>(-1)
export const $regionName = createStore<string>('Большая Москва')
