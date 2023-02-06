import { AppActions, TypeAppActions } from "./appActions";
import { AppState } from "./appState";


export function appReducer(state: AppState, action: AppActions) {
  switch (action.type) {
    case TypeAppActions.SIGNIN:
      return {
        ...state,
        userIsLogged: action.payload.userIsLogged,
        isLoading: action.payload.isLoading
      }
    case TypeAppActions.FETCH:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
  }
}