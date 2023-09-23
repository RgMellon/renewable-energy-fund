import { EarnInfo } from "@components/EarnInfo";
import { EducativeBanner } from "@components/EducativeBanner";
import { Funds } from "@components/Funds/Index";
import { Header } from "@components/Header";
import { Divider, ScrollView } from "native-base";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feed } from "./Feed";

export function DashBoard() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      p={"20px"}
    >
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
        }}
      >
        <Header />
        <EarnInfo />

        <Divider mt={10} color={"primary.50"} height={0.4} />

        <Funds />

        <EducativeBanner />

        <Feed />
      </View>
    </ScrollView>
  );
}
