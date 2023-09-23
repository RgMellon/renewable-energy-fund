import { generateFiveRandomNumber } from "@utils/generateFiveRandomNumber";
import { Box } from "native-base";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export function FundLineChartDetail() {
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
              data: [
                ...generateFiveRandomNumber(),
                ...generateFiveRandomNumber(),
                ...generateFiveRandomNumber(),
                ...generateFiveRandomNumber(),
                ...generateFiveRandomNumber(),
              ],
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
    </Box>
  );
}
