import { NativeBaseProvider, Box } from "native-base";
import { theme } from "./src/styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { SignIn } from "@screens/SignIn";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <SignIn />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
