import { Icon, Pressable } from "native-base";
import { Input } from "./Input";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

export function InputPassword() {
  const [showPasswordInputEye, setShowPasswordInputEye] = useState(false);

  function handleTogglePassword() {
    setShowPasswordInputEye((old) => !old);
  }

  return (
    <Input
      placeholder="Minimum 8 characters"
      label="Password"
      type={showPasswordInputEye ? "text" : "password"}
      InputRightElement={
        <Pressable onPress={handleTogglePassword}>
          <Icon
            as={
              <MaterialIcons
                name={showPasswordInputEye ? "visibility" : "visibility-off"}
              />
            }
            size={5}
            mr="4"
          />
        </Pressable>
      }
    />
  );
}
