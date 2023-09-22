import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export function Button({ title, variant = "solid", ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "purple.100"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="purple.50"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "purple.100" : "purple.50",
        color: "primary.200",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "purple.100" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
