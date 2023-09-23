import { generateFiveRandomNumber } from "@utils/generateFiveRandomNumber";
import { Box, Button, HStack, Text } from "native-base";
import { useState } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export function FundLineChartDetail() {
  const mock = [
    ...generateFiveRandomNumber(),
    ...generateFiveRandomNumber(),
    ...generateFiveRandomNumber(),
    ...generateFiveRandomNumber(),
    ...generateFiveRandomNumber(),
  ];

  const [data, setData] = useState(mock);

  function handleGenerate() {
    setData(mock);
  }

  return (
    <Box mt="45px">
      <LineChart
        withHorizontalLabels={false}
        withDots={false}
        withHorizontalLines={false}
        withVerticalLines={false}
        data={{
          labels: [],
          datasets: [
            {
              data,
            },
          ],
        }}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          paddingRight: 0,
          paddingTop: 0,
          color: () => "#0FDF8F",
          strokeWidth: 2,
        }}
        width={Dimensions.get("window").width + 100}
        height={160}
        style={{ marginLeft: -100 }}
        withShadow={false}
      />

      <HStack justifyContent={"space-between"}>
        <Button
          variant="ghost"
          size={"sm"}
          bg="primary.10"
          onPress={handleGenerate}
        >
          <Text color="purple.100">1h</Text>
        </Button>

        <Button
          size={"sm"}
          bg="primary.10"
          variant={"ghost"}
          onPress={handleGenerate}
        >
          <Text color="purple.100">1d</Text>
        </Button>

        <Button
          size={"sm"}
          bg="primary.10"
          variant={"ghost"}
          onPress={handleGenerate}
        >
          <Text color="purple.100">1w</Text>
        </Button>
        <Button
          size={"sm"}
          bg="primary.10"
          variant={"ghost"}
          onPress={handleGenerate}
        >
          <Text color="purple.100">1m</Text>
        </Button>
        <Button
          size={"sm"}
          bg="primary.10"
          variant={"ghost"}
          onPress={handleGenerate}
        >
          <Text color="purple.100">1y</Text>
        </Button>

        <Button
          size={"sm"}
          bg="primary.10"
          variant={"ghost"}
          onPress={handleGenerate}
        >
          <Text color="purple.100">All</Text>
        </Button>
      </HStack>
    </Box>
  );
}
