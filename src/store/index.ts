import { createStore, Store } from "redux";

import { AuthState } from "./auth/types";

import rootReducer from "./rootReducer";

export interface ApplicationState {
  auth: AuthState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
