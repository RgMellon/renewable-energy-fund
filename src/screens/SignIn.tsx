import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Center, Heading, ScrollView } from "native-base";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { InputPassword } from "@components/InputPassword";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/action";
import { Pressable } from "react-native";

export function SignIn() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleSignIn() {
    dispatch(login());
  }

  function handleRedirectToSignUp() {
    navigation.navigate("SignUp");
  }

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
            Login
          </Heading>

          <Input
            label="Login"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <InputPassword />

          <Button title="Login" onPress={handleSignIn} />
        </Center>

        <Center mt={10}>
          <Pressable onPress={handleRedirectToSignUp}>
            <Text color="primary.100" fontSize="sm" mb={3} fontFamily="body">
              Don’t have an account? <Text underline>Sign up</Text> here
            </Text>
          </Pressable>
        </Center>
      </VStack>
    </ScrollView>
  );
}
