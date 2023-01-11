import React, { useState, useEffect } from 'react';
import axios from "axios"
import { ContainerCliente, ContentCliente, Nav, Table, Tbody, Thead } from './style';

export function C_funcionario() {
    const [linkAtivo, setLinkAtivo] = useState("todos")
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.defaults.baseURL = 'http://192.168.1.10:8080'
        axios.get("/listarFuncionario", { headers: "Content-Type: application/json" }).then(({ data }) => { setUsers(data) });

    }, [linkAtivo]);
    const [procuraPorUser, setProcuraPorUser] = useState('');
    const [dadosPorCargo, setDadosPorCargo] = useState('');

    const filtroDeUsuario = users.filter(user =>
        user.nome.toLowerCase().includes(procuraPorUser.toLowerCase())
    );

    function filtrarPorCargo(cargo) {
        
        const usuariosComOCargo = users.filter((user) => user.cargo.toUpperCase().includes(cargo.toUpperCase()))
        return usuariosComOCargo
    }


    async function setListaFuncionario(cargo) {
        cargo = cargo.toLowerCase()
        setLinkAtivo(cargo)

        if (cargo === "todos") {
            setDadosPorCargo("")
        }
        else {
            const value = await filtrarPorCargo(cargo)
            setDadosPorCargo(value)
            setProcuraPorUser("")

        }
    }



    return (
        <ContainerCliente>
            <ContentCliente>
                <div>
                    <h1>Funcionarios</h1>
                    <input
                        type="text"
                        placeholder="Pesquisar usuários..."
                        value={procuraPorUser}
                        onChange={event => setProcuraPorUser(event.target.value)}

                    />
                </div>
                <Nav>
                    <ul>
                        <li onClick={(cargo) => { setListaFuncionario(cargo.target.innerText) }} className={linkAtivo == 'todos' ? "ativo" : ""}>TODOS</li>
                        <li onClick={(cargo) => { setListaFuncionario(cargo.target.innerText) }} className={linkAtivo == 'administrador' ? "ativo" : ""}>ADMINISTRADOR</li>
                        <li onClick={(cargo) => { setListaFuncionario(cargo.target.innerText) }} className={linkAtivo == 'caixa' ? "ativo" : ""}>CAIXA</li>
                        <li onClick={(cargo) => { setListaFuncionario(cargo.target.innerText) }} className={linkAtivo == 'garçom' ? "ativo" : ""}>GARÇOM</li>
                        <li onClick={(cargo) => { setListaFuncionario(cargo.target.innerText) }} className={linkAtivo == 'entregador' ? "ativo" : ""}>ENTREGADOR</li>
                    </ul>
                </Nav>
                <Table>
                    <Thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Status</th>
                            <th>Cargo</th>
                        </tr>
                    </Thead>
                    <Tbody>
                        {
                            dadosPorCargo ? dadosPorCargo.map(user => (
                                <tr key={user._id}>
                                    <td>{user.nome}</td>
                                    <td>{user.email}</td>
                                    <td>ATIVO</td>
                                    <td>{user.cargo.toUpperCase()}</td>
                                </tr>
                            )) : filtroDeUsuario.map(user => (
                                < tr key={user._id}>
                                    <td>{user.nome}</td>
                                    <td>{user.email}</td>
                                    <td>ATIVO</td>
                                    <td>{user.cargo.toUpperCase()}</td>
                                </tr>))
                        }

                    </Tbody>
                </Table>
            </ContentCliente>
        </ContainerCliente >
    );
}

