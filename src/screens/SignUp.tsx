import {
  VStack,
  Text,
  Center,
  Heading,
  ScrollView,
  Checkbox,
  Box,
  Pressable,
  theme,
  useToast,
} from "native-base";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { InputPassword } from "@components/InputPassword";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function SignUp() {
  const toast = useToast();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  function handleClickCheck() {
    setAcceptedTerms((old) => !old);
  }

  const navigation = useNavigation();

  function handleBackToLogin() {
    navigation.navigate("SignIn");
  }

  function handleNavigateToTerms() {
    navigation.navigate("Terms");
  }

  function handleCreateAccount() {
    toast.show({
      render: () => {
        return (
          <Box bg="up" px="2" py="1" rounded="sm" mb={5}>
            <Text color="primary.10">Registred with sucess</Text>
          </Box>
        );
      },
    });

    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={6} pb={16}>
        <Center my={8} />

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
            <Checkbox
              isChecked={acceptedTerms}
              defaultIsChecked
              colorScheme="primary"
              value={"terms"}
              onChange={handleClickCheck}
            >
              <Text mt={4} color={"primary.100"}>
                I am over 18 years of age and I have read and agree to the{" "}
                <Text onPress={handleNavigateToTerms} color={"primary.200"}>
                  Terms of Service
                </Text>{" "}
                and <Text color={"primary.200"}>Privacy policy.</Text>
              </Text>
            </Checkbox>
          </Box>

          <Button
            title="Create account"
            onPress={handleCreateAccount}
            isDisabled={!acceptedTerms}
            _disabled={{
              bg: theme.colors.gray[400],
            }}
          />
        </Center>

        <Center mt={10}>
          <Pressable onPress={handleBackToLogin}>
            <Text color="primary.100" fontSize="sm" mb={3} fontFamily="body">
              Already have an account?{" "}
              <Text underline color={"primary.200"}>
                Log in Here
              </Text>
            </Text>
          </Pressable>
        </Center>
      </VStack>
    </ScrollView>
  );
}
