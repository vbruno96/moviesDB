import { useEffect, useState } from "react"
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Alert } from "react-native"
import * as LocalAuthentication from 'expo-local-authentication'
import { CircleNotch, Fingerprint, UserFocus } from "phosphor-react-native"
import Logo from '../assets/logo.svg'
import { useApp } from "../hooks/useAuth"
import { fakeAuthUser } from "../lib/fakeApiAuth"
import { TypeAppActions } from "../AppStore/appActions"

enum BiometricType {
  FINGERPRINT = 1 as number,
  FACIAL_RECOGNITION = 2 as number
}

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [hasBiometricsHardware, setHasBiometricHardware] = useState(false)
  const [biometricsType, setBiometricsType] = useState<number[]>()
  const { dispatch, state } = useApp()

  const btnIsDisabled = user === '' || password === '' ? true : false
  
  async function login() {
    dispatch({type: TypeAppActions.FETCH, payload: {isLoading: true}})
    await fakeAuthUser(user, password)
      .then(() => dispatch({type: TypeAppActions.SIGNIN, payload: {userIsLogged: true, isLoading: false}}))
      .catch(() => Alert.alert('Credênciais inválidas!', 'Usuário ou senha incorreto'))
  }

  async function checkBiometricsHardware() {
    await LocalAuthentication.hasHardwareAsync()
      .then(hasHardware => setHasBiometricHardware(hasHardware))
    await LocalAuthentication.supportedAuthenticationTypesAsync()
      .then(types => setBiometricsType(types))
  }

  async function biometricAuthentication() {
    await LocalAuthentication.authenticateAsync({
      promptMessage: "Informe a senha para acessar os filmes",
      fallbackLabel: "Tente digitar o código"
    }).then(result => {
      if (result.success) {
        dispatch({type: TypeAppActions.SIGNIN, payload: {userIsLogged: true, isLoading: false}})
      }
    })
  }

  useEffect(() => {
    checkBiometricsHardware()
  }, [])
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-background"
      >
        <View
          className="flex-1 bg-background justify-center items-center pt-24"
        >
          <View
            className="mb-12"
          >
            <Logo />
            <Text
              className="text-4xl text-primary"
            >
              Movies <Text className="text-accent">DB</Text>
            </Text>
          </View>
          
          <View>
            <TextInput
              className="rounded-full w-80 h-12 mb-9 bg-white/20 bg-opacity-20 text-primary text-center"
              placeholder="Email"
              placeholderTextColor="#0C9F7B"
              keyboardType="email-address"
              onChangeText={setUser}
              value={user}
            />
            <TextInput
              className="rounded-full w-80 h-12 mb-9 bg-white/20 bg-opacity-20 text-primary text-center"
              placeholder="Senha"
              placeholderTextColor="#0C9F7B"
              keyboardType="visible-password"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              className={`rounded-full w-80 h-12 mb-12 py-2 bg-primary ${btnIsDisabled && 'opacity-60'}`}
              disabled={btnIsDisabled}
              onPress={() => login()}
            >
              <Text
                className="text-white text-xl text-center"
              >
                {
                  state.isLoading ? (
                    <CircleNotch
                      size={20}
                      color="#FFF"
                    />
                  ) : 'Login'
                }
              </Text>
            </TouchableOpacity>
            {
              hasBiometricsHardware && (
                <TouchableOpacity 
                  className="items-center"
                  onPress={() => biometricAuthentication()}
                >
                  {
                    biometricsType && biometricsType.length > 1 && biometricsType[0] === BiometricType.FINGERPRINT ? (
                      <>
                        <Fingerprint
                          size={40}
                          color="#0C9F7B"
                          weight="regular"
                        />
                        <Text
                          className="w-[160] text-center text-primary mt-2"
                        >
                          Acesse com a digital
                        </Text>
                      </>
                    ) : (
                      <>
                        <UserFocus
                          size={40}
                          color="#0C9F7B"
                          weight="regular"
                        />
                        <Text
                          className="w-[160] text-center text-primary mt-2"
                        >
                          Acesse com a indentificação facial
                        </Text>
                      </>
                    )
                  }
                </TouchableOpacity>
              )
            }
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
  