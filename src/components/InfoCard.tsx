import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Image,
  Heading,
  Text,
  Stack,
} from "native-base";
import { Info } from "./InfoStats";

export function InfoCard({ description, img, title }: Info) {
  return (
    <Box
      mr={6}
      width={"220px"}
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.100"
      borderWidth="1"
    >
      <Box>
        <AspectRatio w="100%" ratio={8 / 4}>
          <Image source={{ uri: img }} alt={img} />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Text size="medium" fontSize={"14px"} ml="-1">
            {title}
          </Text>
        </Stack>
        <Text size="medium" fontSize={"13px"}>
          {description}
        </Text>

        <Text color="coolGray.600" underline fontWeight="400">
          read more
        </Text>
      </Stack>
    </Box>
  );
}
