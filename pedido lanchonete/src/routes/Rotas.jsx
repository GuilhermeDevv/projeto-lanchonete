import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import React from 'react';

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
}

