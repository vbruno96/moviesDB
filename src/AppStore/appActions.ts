export enum TypeAppActions {
  SIGNIN,
  FETCH
}

export type SignInAction = {
  type: TypeAppActions.SIGNIN,
  payload: {
    userIsLogged: boolean,
    isLoading: boolean
  }
}

export type FetchAction = {
  type: TypeAppActions.FETCH,
  payload: {
    isLoading: boolean
  }
}

export type AppActions = SignInAction | FetchAction