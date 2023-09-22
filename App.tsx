import { NativeBaseProvider, Box } from "native-base";
import { theme } from "./src/styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { DashBoard } from "@screens/DashBoard";
import {
  useFonts,
  Sora_100Thin,
  Sora_300Light,
  Sora_400Regular,
  Sora_500Medium,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_100Thin,
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_700Bold,
  });

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        {fontsLoaded ? <DashBoard /> : <Loading />}
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
