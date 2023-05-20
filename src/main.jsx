import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistStor } from "./redux/index";
import App from "./App.jsx";
import UsersProvider from "./components/UsersContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStor}>
        <UsersProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UsersProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// basename = "/goit-react-hw-08-phonebook";
