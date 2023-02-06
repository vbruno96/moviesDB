export type AppState = {
  userIsLogged: boolean,
  isLoading: boolean
}

export const initialAppState: AppState = {
  userIsLogged: false,
  isLoading: false
}