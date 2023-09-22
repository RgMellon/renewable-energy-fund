import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  Text,
} from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
  label?: string;
};

export function Input({
  errorMessage = null,
  isInvalid,
  label,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <Text fontSize={"11px"} bold color={"primary.100"} mb={2}>
        {label}
      </Text>
      <NativeBaseInput
        bg="primary.50"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="sm"
        color="primary.200"
        fontFamily="body"
        placeholderTextColor="primary.100"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bgColor: "primary.50",
          borderWidth: 1,
          borderColor: "purple.100",
        }}
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
