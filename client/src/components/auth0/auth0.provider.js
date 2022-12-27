import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-5d5ymf3i4ft87aa4.us.auth0.com"
    clientId="1sgHxkHuJENHHXNZxkGYWB65AKkLPZfb"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);