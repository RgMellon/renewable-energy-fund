import { Box, FlatList, HStack, Text, VStack } from "native-base";
import { Stats } from "./Stats";
import { InfoCard } from "./InfoCard";

export type Info = {
  img: string;
  title: string;
  description: string;
};

type Infos = {
  data: Info[];
};

export function InfoStats({ data }: Infos) {
  return (
    <Box mt="30px">
      <Text fontFamily={"heading"} fontSize={"17px"}>
        Info & Stats{" "}
      </Text>

      <HStack>
        <VStack justifyContent="space-between" mt="20px">
          <Stats title="AUM" value="$430.88m" />
          <Stats title="Vintage Range" value="2019 – 2022" />
          <Stats title="Price at Close" value="0.15%" />
        </VStack>

        <VStack ml={"80px"} justifyContent="space-between" mt="20px">
          <Stats title="Issue Date" value="18/04/2022" />
          <Stats title="TER" value="0.15%" />
          <Stats title="Price at Open" value="$17.742" />
        </VStack>
      </HStack>

      <Box mt="30px">
        <Text fontSize={"17px"} fontFamily={"heading"}>
          Fund Breakdown
        </Text>

        <Box mt={6}>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
              <InfoCard
                img={item.img}
                description={item.description}
                title={item.title}
              />
            )}
            keyExtractor={(item) => item.title}
          />
        </Box>
      </Box>
    </Box>
  );
}
