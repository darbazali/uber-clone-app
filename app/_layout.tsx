import { Stack } from "expo-router"
import "../global.css"

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
    </Stack>
  )
}

export default Layout
