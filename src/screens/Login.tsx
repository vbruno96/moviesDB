import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native"
import { UserFocus } from "phosphor-react-native"
import Logo from '../assets/logo.svg'

export function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-background"
      >
        <View className="flex-1 bg-background justify-center items-center pt-24">
          <View className="mb-12">
            <Logo />
            <Text className="text-4xl text-primary">Movies <Text className="text-accent">DB</Text></Text>
          </View>
          
          <View>
            <TextInput
              className="rounded-full w-80 h-12 mb-9 bg-white/20 bg-opacity-20 text-primary text-center"
              placeholder="Email"
              placeholderTextColor="#0C9F7B"
            />
            <TextInput
              className="rounded-full w-80 h-12 mb-9 bg-white/20 bg-opacity-20 text-primary text-center"
              placeholder="Senha"
              placeholderTextColor="#0C9F7B"
              disableFullscreenUI={true}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              className="rounded-full w-80 h-12 mb-12 py-2 bg-primary"
            >
              <Text
              className="text-white text-xl text-center"
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
            <UserFocus size={40} color="#0C9F7B" weight="regular"/>
            <Text className="w-[160] text-center text-primary mt-2">
              Acesse com a indentificação facial
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
  