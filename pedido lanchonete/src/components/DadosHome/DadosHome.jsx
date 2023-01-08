import React from 'react';
import { ContainerInfo, ContentInfo } from "./style"

export function DadosHome() {
    return (
        <ContainerInfo>
            
            <ContentInfo backgroundColor="#96a5a5">
                <h1>Em preparação: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#f07a55">
                <h1>Prontos: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#de8484">
                <h1>Entregues: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#4f7ab9">
                <h1>pedidos: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#37bf86">
                <h1>Rejeitados: 0</h1>
            </ContentInfo>

            <ContentInfo backgroundColor="#2e3e4f">
                <h1>Avaliação: 0</h1>
            </ContentInfo>




        </ContainerInfo >
    );
}

