import { AuthTypes } from "./types";

export const login = () => {
  return {
    type: AuthTypes.Login,
  };
};
