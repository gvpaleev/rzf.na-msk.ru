import { LoginParams, TokenResponse, login } from '@/api/login'
import { createEffect, createEvent, createStore, sample } from 'effector'

import { createCacheStoreForKey } from './localStorageCache'

const REFRESH_TOKEN = 'REFRESH_TOKEN'

const refreshTokenCache = createCacheStoreForKey(REFRESH_TOKEN)

export const loginEvent = createEvent<LoginParams>()

const loginFx = createEffect<LoginParams, TokenResponse>((params) =>
  login(params),
)

export const $token = createStore<string | null>(null)

$token.on(loginFx.doneData, (_, { access }) => access)

export const $loginError = createStore<string | null>(null)

$loginError
  .on(loginFx.done, () => null)
  .on(loginFx.fail, (_, { error }) => error.message)

sample({
  clock: loginEvent,
  target: loginFx,
})

sample({
  clock: loginFx.doneData,
  fn: ({ refresh }) => refresh,
  target: refreshTokenCache.setCacheFx,
})
