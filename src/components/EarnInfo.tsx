import { Box, HStack, Text } from "native-base";

import CoinSVG from "@assets/icons/coin.svg";
import UpSVG from "@assets/icons/up.svg";

export function EarnInfo() {
  return (
    <HStack justifyContent={"space-between"} mt={"16px"}>
      <Box>
        <Text fontFamily={"body"} fontSize={"12px"}>
          Portfolio
        </Text>

        <HStack alignItems={"flex-end"}>
          <Text fontFamily={"medium"} fontSize={"24px"}>
            $1,245.23
          </Text>

          <HStack ml={2} mb={1}>
            <UpSVG style={{ marginTop: 7 }} />
            <Text
              ml={1}
              fontFamily={"light"}
              color={"green.100"}
              fontSize={"14px"}
            >
              31.82%
            </Text>
          </HStack>
        </HStack>
      </Box>

      <HStack
        alignItems={"center"}
        bg={"purple.50"}
        h={"30px"}
        p={"8px"}
        borderRadius={"lg"}
      >
        <CoinSVG />
        <Text bold ml={1} fontSize={"11px"} color="purple.100">
          Earn Rewards
        </Text>
      </HStack>
    </HStack>
  );
}
