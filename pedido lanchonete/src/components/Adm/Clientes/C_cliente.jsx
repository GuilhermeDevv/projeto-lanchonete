import React, { useState } from 'react';
import { ContainerCliente, ContentCliente, Nav, Table, Tbody, Thead } from './style';

export function C_cliente() {
    const users = [
        { id: 1, nome: 'João', email: 'joao@gmail.com', cargo: 'ADMINISTRADOR' },
        { id: 2, nome: 'Maria', email: 'maria@gmail.com', cargo: 'CAIXA' },
        { id: 3, nome: 'Pedro', email: 'pedro@gmail.com', cargo: 'GARÇOM' },
        { id: 4, nome: 'Ana', email: 'ana@gmail.com', cargo: 'ENTREGADOR' }
    ];

    const [procuraPorUser, setProcuraPorUser] = useState('');
    const filtroDeUsuario = users.filter(user =>
        user.email.toLowerCase().includes(procuraPorUser.toLowerCase())
    );

    return (
        <ContainerCliente>
            <ContentCliente>
                <div>
                    <h1>Lista de Funcionarios</h1>
                    <input
                        type="text"
                        placeholder="Pesquisar usuários..."
                        value={procuraPorUser}
                        onChange={event => setProcuraPorUser(event.target.value)}
                    />
                </div>
                <Nav>
                    <ul>
                        <li className='ativo'>TODOS</li>
                        <li>ADMININSTRADOR</li>
                        <li>CAIXA</li>
                        <li>GARÇOM</li>
                        <li>ENTREGADOR</li>
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
                        {filtroDeUsuario.map(user => (
                            <tr key={user.id}>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>ATIVO</td>
                                <td>{user.cargo}</td>
                            </tr>
                        ))}
                    </Tbody>
                </Table>
            </ContentCliente>
        </ContainerCliente>
    );
}

