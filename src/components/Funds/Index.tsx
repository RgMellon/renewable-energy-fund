import { Box, FlatList, Text } from "native-base";
import { FundCard } from "@components/Funds/FundCard";
import { fundsMock } from "../../@mocks/fundsMock";

export function Funds() {
  return (
    <Box mt={5}>
      <Text
        fontFamily={"medium"}
        color={"primary.200"}
        fontSize={"18px"}
        mb={8}
      >
        Funds
      </Text>

      <FlatList
        data={fundsMock}
        horizontal
        style={{ marginRight: 10 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginRight: 10,
          paddingRight: 10,
        }}
        renderItem={({ item: fund }) => (
          <FundCard
            icon={fund.icon}
            title={fund.title}
            money={fund.money}
            type={fund.type}
            profitPercentage={fund.profitPercentage}
          />
        )}
      />
    </Box>
  );
}
