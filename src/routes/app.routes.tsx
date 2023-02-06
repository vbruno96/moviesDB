import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/Login"
import { Home } from "../screens/Home"
import { Movie } from "../screens/Movie"
import { AppContext } from "../AppStore/appContext"
import { useReducer } from "react"
import { appReducer } from "../AppStore/appReducer"
import { initialAppState } from "../AppStore/appState"

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <Navigator
        screenOptions={{ headerShown: false }}
      >
        {
          state.userIsLogged ? (
            <>
              <Screen 
                name="home"
                component={Home}
              />
              <Screen 
                name="movie"
                component={Movie}
              />
            </>
          ) : (
            <Screen 
              name="login"
              component={Login}
            />
          )
        }
      </Navigator>
    </AppContext.Provider>
  )
}
