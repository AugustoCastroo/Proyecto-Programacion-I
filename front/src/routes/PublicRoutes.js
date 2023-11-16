import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Login } from "../components/JS/Login";
import { Register } from "../components/JS/Register";
import { Home } from "../components/JS/Home";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
    }