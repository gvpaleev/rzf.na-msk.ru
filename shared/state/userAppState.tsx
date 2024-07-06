'use client'
import { createStore } from "effector";
import localStorageCache from "./localStorageCache";

const townId = localStorageCache.getItem('townId');

const townName = localStorageCache.getItem('townName');

const regionId = localStorageCache.getItem('regionId');

const regionName = localStorageCache.getItem('regionName')

export const $townId = createStore<number>(townId === '' ? -1 : +townId);
$townId.watch((newState) => {
  localStorageCache.setItem('townId', `${newState}`)
});

export const $townName = createStore<string>(townName);
$townName.watch((newState) => {
  localStorageCache.setItem('townName', `${newState}`)
});

export const $regionId = createStore<number>(regionId === '' ? -1 : +regionId);
$regionId.watch((newState) => {
  localStorageCache.setItem('regionId', `${newState}`)
});

export const $regionName = createStore<string>(regionName);
$regionName.watch((newState) => {
  localStorageCache.setItem('regionName', `${newState}`)
});
