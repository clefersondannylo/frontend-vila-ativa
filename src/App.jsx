import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { RoutesComponent } from "./routes";
import { persistor, store } from "./store";

import "bulma/css/bulma.min.css";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Toaster />
          <RoutesComponent />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
