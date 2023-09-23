import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashBoard } from "@screens/DashBoard";
import { Terms } from "@screens/Terms";
import { useTheme } from "native-base";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Profile } from "@screens/Profile";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={DashBoard}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={
                !focused ? theme.colors.primary[100] : theme.colors.purple[100]
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Terms}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <MaterialIcons
              name="sync-alt"
              size={size}
              color={
                !focused ? theme.colors.primary[100] : theme.colors.purple[100]
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <AntDesign
              name="github"
              size={size}
              color={
                !focused ? theme.colors.primary[100] : theme.colors.purple[100]
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
