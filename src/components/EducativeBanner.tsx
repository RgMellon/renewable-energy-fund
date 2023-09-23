import { HStack, Text, VStack } from "native-base";

import BusinessSVG from "@assets/icons/business.svg";
export function EducativeBanner() {
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"purple.100"}
      p={"20px"}
      mt={"20px"}
      borderRadius={"lg"}
    >
      <VStack>
        <Text color="primary.10" fontSize="16px" fontFamily={"medium"}>
          Learn more about{"\n"}carbon credit
        </Text>
        <Text mt={2} color="primary.50" fontSize="12px" fontFamily={"light"}>
          Check out our top tips!
        </Text>
      </VStack>

      <BusinessSVG />
    </HStack>
  );
}
