import { NativeBaseProvider, Box } from "native-base";
import { theme } from "./src/styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import {
  useFonts,
  Sora_100Thin,
  Sora_300Light,
  Sora_400Regular,
  Sora_500Medium,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import { Loading } from "@components/Loading";

import store from "./src/store";
import { Provider } from "react-redux";
import { Routes } from "./src/routes";

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
      <Provider store={store}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
          {fontsLoaded ? <Routes /> : <Loading />}
        </SafeAreaProvider>
      </Provider>
    </NativeBaseProvider>
  );
}
