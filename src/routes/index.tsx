import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { theme } from "../styles/theme";

import { DefaultTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { StateProps } from "src/store/type";
const navigationTheme = DefaultTheme;
navigationTheme.colors.background = theme.colors.primary[10];

export function Routes() {
  const insets = useSafeAreaInsets();

  const { isAuthenticade } = useSelector((state: StateProps) => state.auth);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: theme.colors.primary[10],
      }}
    >
      <NavigationContainer theme={navigationTheme}>
        {!isAuthenticade ? <AuthRoutes /> : <AppRoutes />}
      </NavigationContainer>
    </View>
  );
}
