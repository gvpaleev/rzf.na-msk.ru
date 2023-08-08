import { fork, Scope, serialize } from 'effector'
import { useMemo } from 'react'

let scope: any

const initScope = (initialData: any) => fork({ values: initialData })

const initializeScope = (preloadedData: any) => {
  let _scope = scope ?? initScope(preloadedData)

  // After navigating to a page with an initial scope state, merge that state
  // with the current state in the scope, and create a new scope
  if (preloadedData && scope) {
    _scope = initScope({
      ...serialize(scope, { onlyChanges: true }),
      ...preloadedData,
    })

    // Reset the current scope
    scope = undefined
  }

  // For SSG and SSR always create a new scope
  if (typeof window === 'undefined') {
    return _scope
  }

  // Create the scope once in the client
  if (!scope) {
    scope = _scope
  }

  return _scope
}

export const useScope = (initialState?: any): Scope => {
  return useMemo(() => initializeScope(initialState), [initialState])
}
