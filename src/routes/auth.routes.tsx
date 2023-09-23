import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

import { HeaderNavigation } from "@components/HeaderNavigation";
import { Terms } from "@screens/Terms";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitle: "",
        }}
      />

      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          header: () => <HeaderNavigation />,
        }}
      />

      <Screen
        name="Terms"
        component={Terms}
        options={{
          header: () => <HeaderNavigation />,
        }}
      />
    </Navigator>
  );
}
