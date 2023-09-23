import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FundDetail } from "@screens/FundDetail";
import { MyTabs } from "./bottom.routes";
import { HeaderNavigation } from "@components/HeaderNavigation";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        options={{
          headerShown: false,
        }}
        name="DashBoard"
        component={MyTabs}
      />

      <Screen
        name="FundDetail"
        options={{
          header: () => <HeaderNavigation />,
        }}
        component={FundDetail}
      />
    </Navigator>
  );
}
