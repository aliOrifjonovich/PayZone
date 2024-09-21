import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui-theme";
import "./i18n";
import { Provider } from "react-redux";
import { persistor, store } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/http-client";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
const googleClientId = "1041206037611-sa1lj6o6hcjm9ot64sdj2jhl1fmnmvp9.apps.googleusercontent.com";
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Suspense fallback={<div className="suspense">Loading...</div>}>
                <GoogleOAuthProvider clientId={googleClientId}>
                  <App />
                </GoogleOAuthProvider>
              </Suspense>
            </BrowserRouter>
          </QueryClientProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
