import { Text, VStack } from "native-base";

type Props = {
  title: string;
  value: string;
};

export function Stats({ title, value }: Props) {
  return (
    <VStack mt="10px">
      <Text fontFamily={"medium"} color="primary.100" fontSize={"14px"}>
        {title}
      </Text>
      <Text fontFamily={"medium"} color="primary.200" fontSize={"14px"}>
        {value}
      </Text>
    </VStack>
  );
}
