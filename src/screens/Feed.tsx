import { Box, FlatList, VStack } from "native-base";

export function Feed() {
  return (
    <FlatList
      data={[0, 1, 3]}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={() => (
        <Box
          mr={"20px"}
          borderWidth="1"
          borderColor={"primary.10"}
          mt="20px"
          borderRadius="md"
          bg="primary.50"
          width={"170px"}
          height={"200px"}
        >
          <Box px="4" pt="4">
            Why should you invest here?
          </Box>
        </Box>
      )}
    />
  );
}
