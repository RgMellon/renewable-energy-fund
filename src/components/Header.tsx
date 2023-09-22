import { Box, HStack, Text } from "native-base";

import Profile from "@assets/icons/profile.svg";
import Bell from "@assets/icons/bell.svg";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Header() {
  return (
    <HStack justifyContent={"space-between"} alignItems={"center"}>
      <Box borderRadius={"3xl"} bg={"primary.50"} p={2}>
        <Profile />
      </Box>

      <HStack alignItems={"center"}>
        <Text fontSize={"14px"} fontFamily={"heading"} pr={2}>
          Account: $1,457.23
        </Text>
        <AntDesign name={"down"} />
      </HStack>
      <Bell />
    </HStack>
  );
}
