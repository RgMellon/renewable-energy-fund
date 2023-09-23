import { Box, Button, Divider, Pressable } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useNavigation } from "@react-navigation/native";

export function HeaderNavigation() {
  const navigation = useNavigation();

  return (
    <Box>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        ml={"20px"}
        mb="20px"
      >
        <MaterialIcons size={20} name="arrow-back" />
      </Pressable>
      <Divider />
    </Box>
  );
}
