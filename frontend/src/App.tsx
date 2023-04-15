import "./App.scss";
import React from "react";
import {Router} from "./router/Routes";
import {AuthContextProvider} from "./context/AuthContext";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {GOOGLE_CLIENT_ID} from "./variables";

const App = () =>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <AuthContextProvider>
            <Router />
        </AuthContextProvider>
    </GoogleOAuthProvider>


export default App;
