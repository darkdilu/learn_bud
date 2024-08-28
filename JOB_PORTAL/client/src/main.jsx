import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SocketContextProvider } from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={
          "150409323146-kn9gp14o5jjl7q9sbi5gcatggka03smu.apps.googleusercontent.com"
        }
      >
        <App />

        <ToastContainer position="top-center" />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
