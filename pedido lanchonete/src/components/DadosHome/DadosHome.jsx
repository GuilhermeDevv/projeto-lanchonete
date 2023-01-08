import React from 'react';
import { ContainerInfo, ContentInfo } from "./style"

export function DadosHome() {
    return (
        <ContainerInfo>

            <ContentInfo backgroundColor="#96a5a5">
                <h1>Pedidos: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#f07a55">
                <h1>Funcionarios: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#de8484">
                <h1>Clientes: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#4f7ab9">
                <h1>faturamento: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#37bf86">
                <h1>produtos: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#2e3e4f">
                <h1>vendas: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="red">
                <h1>avaliações: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="black">
                <h1>estoque: vazio</h1>
            </ContentInfo>
        </ContainerInfo >
    );
}

