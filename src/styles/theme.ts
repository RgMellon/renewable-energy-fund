import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    up: "#0FDF8F",
    down: "#EE8688",
    primary: {
      10: "#fff",
      50: "#F4F4F4",
      60: "#E6E6E6",
      100: "#A0A0A0",
      200: "#000000",
    },
    green: {
      100: "#0FDF8F",
    },
    purple: {
      50: "#F7EFFF",
      100: "#770FDF",
    },
  },
  sizes: {
    14: 48,
    33: 148,
  },

  fonts: {
    heading: "Sora_700Bold",
    body: "Sora_400Regular",
    medium: "Sora_500Medium",
    light: "Sora_300Light",
  },
});
