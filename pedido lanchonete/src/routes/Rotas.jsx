import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import { Cadastro } from "../pages/Cadastro/Cadastro"
import { Home } from "../pages/Home/Home"
import { Recuperar } from "../pages/Recuperar/Recuperar"
import { AlterarSenha } from "../pages/AlterarSenha/AlterarSenha"
import { Adm } from "../pages/Adm/Adm"
import { C_cadastrarFuncionario } from '../components/Adm/CadastrarFuncionario/C_cadastrarFuncionario';
import { C_funcionario } from '../components/Adm/Funcionarios/C_Funcionarios';
import { C_vendas } from '../components/Adm/Vendas/C_vendas';
import { C_cadastrarProduto } from '../components/Adm/CadastrarProduto/C_cadastrarProduto';


export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path='/recuperar' element={<Recuperar />} />
            <Route path='/novaSenha' element={<Navigate to="/" />} />
            <Route path='/novaSenha/:url' element={<AlterarSenha />} />
            <Route path='/admin' element={<Adm />} >
                <Route path='cadastrarFuncionario' element={<C_cadastrarFuncionario />} />
                <Route path='funcionarios' element={<C_funcionario />} />
                <Route path='vendas' element={< C_vendas />} />
                <Route path='cadastrarProduto' element={< C_cadastrarProduto />} />
            </Route >
        </Routes>
    );
}

