import React, { useState, useEffect } from 'react';
import axios from "axios"
import { ContainerVendas, ContentVendas, Nav, Table, Tbody, Thead } from './style';

export function C_vendas() {
    const [allvendas, setAllVendas] = useState([
        { _id: 1, nome: 'gl', nPedido: "gl@gmail.com", status: 'EM ANDAMENTO', valor: "10$" },
        { _id: 2, nome: 'buru', nPedido: "buru@gmail.com", status: 'Concluido!', valor: "0$" }]
    );
    const [nome, setNome] = useState('')

    const filtroDePedido = allvendas.filter(pedidos =>
        pedidos.nome.toLowerCase().includes(nome.toLowerCase())

    );
    useEffect(() => {
        axios.defaults.baseURL = 'http://192.168.1.4:8080'
        axios.get("/listarVendas", { params: { nPedido: 1 }, headers: "Content-Type: application/json" }).then((data) => { console.log(data) });
    }, []);
    return (
        <ContainerVendas>
            <ContentVendas>
                <div>
                    <h1>Vendas</h1>
                    <input
                        type="text"
                        placeholder="Pesquisa por nome..."
                        value={nome}
                        onChange={event => setNome(event.target.value)}

                    />
                </div>

                <Table>
                    <Thead>
                        <tr>
                            <th>Cliente</th>
                            <th>n° do Pedido</th>
                            <th>Status</th>
                            <th>Valor</th>
                        </tr>
                    </Thead>
                    <Tbody>
                        {
                            filtroDePedido.map(({ _id, nome, nPedido, status, valor }) => (
                                < tr key={_id}>
                                    <td>{nome}</td>
                                    <td>{nPedido}</td>
                                    <td>{status}</td>
                                    <td>{valor}</td>
                                </tr>))
                        }

                    </Tbody>
                </Table>
            </ContentVendas>
        </ContainerVendas >
    );
}

