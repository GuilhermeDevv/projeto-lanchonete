import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import { Cadastro } from "../pages/Cadastro/Cadastro"
import { Home } from "../pages/Home/Home"
import { Recuperar } from "../pages/Recuperar/Recuperar"
import { AlterarSenha } from "../pages/AlterarSenha/AlterarSenha"


export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path='/recuperar' element={<Recuperar />} />
            <Route path='/novaSenha/:url' element={<AlterarSenha />} />
        </Routes>
    );
}

