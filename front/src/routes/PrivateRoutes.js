import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../components/JS/Home";
import { Login } from "../components/JS/Login";
import { Register } from "../components/JS/Register";
import  AddItem  from "../components/JS/AddItem";
import { ListParkings } from "../components/JS/ListParkings";

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/additem" element={<AddItem />} />
            <Route exact path="/listparkings" element={<ListParkings />} />
            <Route exact path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
    }