import { Loading } from "@components/Loading";
import { Box } from "native-base";
import { useState } from "react";

import { WebView } from "react-native-webview";

export const Profile = () => {
  return (
    <Box flex={1}>
      <WebView
        source={{ uri: "https://github.com/rgMellon" }}
        style={{ flex: 1 }}
      />
    </Box>
  );
};
