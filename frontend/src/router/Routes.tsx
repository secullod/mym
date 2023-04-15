import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {RoutesPaths} from "./constants";
import {useAuthContext} from "../hooks/useAuthContext";
import {Home, LoginForm, Header, RegisterForm} from "../components";

export const Router = () => {
    const {user} = useAuthContext()

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={RoutesPaths.MAIN}
                       element={!!user ? <Home /> : <Navigate to={RoutesPaths.LOGIN} />} />
                <Route path={RoutesPaths.LOGIN}
                       element={!user ? <LoginForm /> : <Navigate to={RoutesPaths.MAIN} />} />
                <Route path={RoutesPaths.SIGNUP}
                       element={!user ? <RegisterForm /> : <Navigate to={RoutesPaths.MAIN} />} />
            </Routes>
        </BrowserRouter>)
}

