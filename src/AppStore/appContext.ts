import { Dispatch, createContext } from "react";
import { AppState, initialAppState } from "./appState";
import { AppActions } from "./appActions";

type AppContextType = {
  state: AppState,
  dispatch: Dispatch<AppActions>
}

export const AppContext = createContext<AppContextType>({
  state: initialAppState,
  dispatch: () => undefined
})