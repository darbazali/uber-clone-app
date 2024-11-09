import { Text, TouchableOpacity, View } from "react-native"

const Home = () => {
  const handleSignUp = () => {
    alert("Sign Up")
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl color-red">Home</Text>
      <TouchableOpacity className="mt-4" onPress={handleSignUp}>
        <Text className="font-bold color-blue-400">Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
