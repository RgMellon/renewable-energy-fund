import { generateFiveRandomNumber } from "@utils/generateFiveRandomNumber";
import {
  HStack,
  ScrollView,
  View,
  Text,
  Box,
  useTheme,
  VStack,
} from "native-base";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import UpSVG from "@assets/icons/up.svg";
import { FundLineChartDetail } from "@components/Funds/FundLineChartDetail";
import { InfoStats } from "@components/InfoStats";

import { infoMocks } from "../@mocks/infoMock";

export function FundDetail() {
  const theme = useTheme();
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
          marginBottom: 100,
        }}
      >
        <HStack justifyContent={"space-between"}>
          <VStack>
            <Text fontFamily={"heading"} fontSize={"20px"}>
              $18.23
            </Text>

            <HStack alignItems={"center"}>
              <Box mr={"3px"}>
                <UpSVG />
              </Box>

              <Text
                color={theme.colors.up}
                fontSize={"13px"}
                fontWeight={400}
                fontFamily={"light"}
              >
                {4.3}%
              </Text>

              <Text ml={1} color={theme.colors.up}>
                ($1.21)
              </Text>
            </HStack>
          </VStack>

          <Text fontSize={"20px"} fontFamily={"heading"}>
            2022
          </Text>
        </HStack>

        <FundLineChartDetail />
        <InfoStats data={infoMocks} />
      </View>
    </ScrollView>
  );
}
