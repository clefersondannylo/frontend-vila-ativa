import { persistReducer } from "redux-persist/";
import storage from "redux-persist/lib/storage";

export default (reducers) => {
  return persistReducer(
    {
      key: "Gerenciador de associação",
      storage,
      whitelist: ["auth", "user"],
    },
    reducers
  );
};
