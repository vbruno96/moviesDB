export enum TypeAppActions {
  SIGNIN,
  FETCH,
  SIGNOUT
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

export type SignOutAction = {
  type: TypeAppActions.SIGNOUT,
  payload: {
    userIsLogged: boolean
  }
}

export type AppActions = SignInAction | FetchAction | SignOutAction