import { Box, HStack, Text, theme, useTheme, Pressable } from "native-base";
import { SvgProps } from "react-native-svg";

import UpSVG from "@assets/icons/up.svg";
import DownSVG from "@assets/icons/down.svg";

export type Status = "up" | "down";

export type FundProps = {
  icon: React.FC<SvgProps>;
  title: string;
  type: Status;
  money: string;
  profitPercentage: number;
};

import { FundCardLineChart } from "@components/Funds/FundCardLineChart";
import { useNavigation } from "@react-navigation/native";

export function FundCard({
  icon: Icon,
  title,
  money,
  type,
  profitPercentage,
}: FundProps) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNavigateToDetail() {
    navigation.navigate("FundDetail");
  }

  return (
    <Pressable
      onPress={handleNavigateToDetail}
      mr={4}
      shadow={"0.5"}
      borderWidth={"0.5"}
      h={"160px"}
      p={"10px"}
      w={"140px"}
      borderColor={"primary.60"}
      borderRadius={"sm"}
    >
      <Icon />
      <Text fontSize={"11px"} fontFamily={"medium"} color="primary.200" mt={2}>
        {title}
      </Text>

      <Box ml={"-50px"}>
        <FundCardLineChart type={type} />
      </Box>

      <HStack mt={4} justifyContent={"space-between"}>
        <Text fontFamily={"medium"} fontSize={"14px"}>
          {money}
        </Text>

        <HStack alignItems={"center"}>
          <Box mr={"3px"}>{type === "up" ? <UpSVG /> : <DownSVG />}</Box>

          <Text
            color={type === "up" ? theme.colors.up : theme.colors.down}
            fontSize={"13px"}
            fontWeight={400}
            fontFamily={"light"}
          >
            {profitPercentage}%
          </Text>
        </HStack>
      </HStack>
    </Pressable>
  );
}
