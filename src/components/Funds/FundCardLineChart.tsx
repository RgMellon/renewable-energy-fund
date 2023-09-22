import { generateFiveRandomNumber } from "@utils/generateFiveRandomNumber";
import { theme } from "native-base";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Status } from "@components/Funds/FundCard";

type Props = {
  type: Status;
};

export function FundCardLineChart({ type = "up" }: Props) {
  return (
    <LineChart
      withHorizontalLabels={false}
      withDots={false}
      withHorizontalLines={false}
      withVerticalLines={false}
      data={{
        labels: [],
        datasets: [
          {
            data: generateFiveRandomNumber(),
          },
        ],
      }}
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: () => (type === "up" ? "#0FDF8F" : "#EE8688"),
        strokeWidth: 2,
      }}
      width={Dimensions.get("window").width * 0.4}
      height={64}
      withShadow={false}
      bezier
    />
  );
}
