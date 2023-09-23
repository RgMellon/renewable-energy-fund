import { Reducer } from "redux";
import { AuthState, AuthTypes } from "./types";

const INITIAL_STATE: AuthState = {
  isAuthenticade: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.Login:
      return {
        ...state,
        isAuthenticade: true,
      };

    default:
      return state;
  }
};

export default reducer;
