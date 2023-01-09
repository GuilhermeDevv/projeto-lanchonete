import React, { useState, useEffect } from 'react';
import { ContainerCliente, ContentCliente, Nav, Table, Tbody, Thead } from './style';

export function C_funcionario() {
    const users = [
        { id: 1, nome: 'João', email: 'joao@gmail.com', cargo: 'ADMINISTRADOR' },
        { id: 2, nome: 'Maria', email: 'maria@gmail.com', cargo: 'CAIXA' },
        { id: 3, nome: 'Pedro', email: 'pedro@gmail.com', cargo: 'GARÇOM' },
        { id: 4, nome: 'Ana', email: 'ana@gmail.com', cargo: 'ENTREGADOR' }
    ];
    const [linkAtivo, setLinkAtivo] = useState("todos")
    const [procuraPorUser, setProcuraPorUser] = useState('');
    const [dadosPorCargo, setDadosPorCargo] = useState('');

    const filtroDeUsuario = users.filter(user =>
        user.nome.toLowerCase().includes(procuraPorUser.toLowerCase())
    );

    function filtrarPorCargo(cargo) {
        const usuariosComOCargo = users.filter((user) => user.cargo.includes(cargo.toUpperCase()))
        return usuariosComOCargo
    }


    async function setListaFuncionario(cargo) {
        cargo = cargo.toLowerCase()
        setLinkAtivo(cargo)

        if (cargo === "todos") {
            setDadosPorCargo("")
        }
        else {
            console.log(cargo)
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
                                <tr key={user.id}>
                                    <td>{user.nome}</td>
                                    <td>{user.email}</td>
                                    <td>ATIVO</td>
                                    <td>{user.cargo}</td>
                                </tr>
                            )) : filtroDeUsuario.map(user => (
                                < tr key={user.id}>
                                    <td>{user.nome}</td>
                                    <td>{user.email}</td>
                                    <td>ATIVO</td>
                                    <td>{user.cargo}</td>
                                </tr>))
                        }
                    </Tbody>
                </Table>
            </ContentCliente>
        </ContainerCliente >
    );
}

