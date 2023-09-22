// import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  Checkbox,
  Box,
} from "native-base";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { InputPassword } from "@components/InputPassword";

export function SignUp() {
  function handleBackToLogin() {}

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={6} pb={16}>
        <Center my={24} />

        <Center>
          <Heading
            color="primary.200"
            fontSize="xl"
            mb={6}
            fontFamily="heading"
          >
            Create your account
          </Heading>

          <Input
            label="First Name"
            placeholder="Your first name"
            autoCapitalize="none"
          />

          <Input
            label="Last Name"
            placeholder="Your last name"
            autoCapitalize="none"
          />

          <Input
            label="Email"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <InputPassword />

          <Box px={2} pb={6} mr={4}>
            <Checkbox isChecked={false} colorScheme="primary" value={""}>
              <Text mt={4} color={"primary.100"}>
                I am over 18 years of age and I have read and agree to the{" "}
                <Text color={"primary.200"}>Terms of Service</Text> and{" "}
                <Text color={"primary.200"}>Privacy policy.</Text>
              </Text>
            </Checkbox>
          </Box>

          <Button title="Create account" />
        </Center>

        <Center mt={10}>
          <Text color="primary.100" fontSize="sm" mb={3} fontFamily="body">
            Already have an account?{" "}
            <Text underline color={"primary.200"}>
              Log in Here
            </Text>
          </Text>
        </Center>
      </VStack>
    </ScrollView>
  );
}
