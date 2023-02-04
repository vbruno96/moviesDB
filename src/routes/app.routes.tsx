import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/Login"
import { Home } from "../screens/Home"

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen 
        name="home"
        component={Home}
      />
    </Navigator>
  )
}
