'use client'
import { getItemFromLocalStorage, setItemToLocalStorage } from "@/utils/getItemFromLocalStorage";
import { LocalStorageKeys } from "@/utils/types/utils";
import { createStore } from "effector";
// import { getItem, setItem } from "./localStorageCache";

const townId = getItemFromLocalStorage<string>(LocalStorageKeys.TOWN_ID) || '';

const townName = getItemFromLocalStorage<string>(LocalStorageKeys.TOWN_NAME) || '';

const regionId = getItemFromLocalStorage<string>(LocalStorageKeys.REGION_ID) || '';

const regionName = getItemFromLocalStorage<string>(LocalStorageKeys.REGION_NAME) || '';

export const $townId = createStore<number>(townId === '' ? -1 : +townId);
$townId.watch((newState) => {
  setItemToLocalStorage<number>(LocalStorageKeys.TOWN_ID, newState)
});

export const $townName = createStore<string>(townName);
$townName.watch((newState) => {
  setItemToLocalStorage<string>(LocalStorageKeys.TOWN_NAME, newState)
});

export const $regionId = createStore<number>(regionId === '' ? -1 : +regionId);
$regionId.watch((newState) => {

  setItemToLocalStorage<number>(LocalStorageKeys.REGION_ID, newState)
});

export const $regionName = createStore<string>(regionName);
$regionName.watch((newState) => {
  setItemToLocalStorage<string>(LocalStorageKeys.REGION_NAME, newState)
});
