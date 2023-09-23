import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DashBoard } from "@screens/DashBoard";
import { FundDetail } from "@screens/FundDetail";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="DashBoard" component={DashBoard} />

      <Screen name="FundDetail" component={FundDetail} />
    </Navigator>
  );
}
