import React, { useEffect, useRef, useState } from 'react';
import { ContainerFuncionario, ContentFuncionario, FormFuncionario } from './style';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const schema = yup.object({
    nome: yup.string().required("Digite o nome do produto."),
    preco: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required('Digite o valor do produto.'),
    url: yup.string().required('digite a url da imagem do produto'),
    categoria: yup.string().required("Selecione a categoria."),
}).required()

export function C_cadastrarProduto() {

    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onChange", resolver: yupResolver(schema) })


    axios.defaults.baseURL = "http://192.168.1.10:8080"
    function cadastro({ url, categoria, nome, preco }) {
        if (!url || !categoria || !nome || !preco) {
            return
        } else {
            console.log({ url, categoria, nome, preco })
            // axios.post("/cadastrarProduto", {
            //     nome
            // }, {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }
            // ).then(res => { console.log(res) }).catch(err => { console.log(err) })

        }
    }


    return (
        <ContainerFuncionario>
            <ContentFuncionario>
                <h1>Cadastrar produto</h1>
                <FormFuncionario onSubmit={handleSubmit(cadastro)}>
                    <div>
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder='Nome completo'
                            {...register("nome")}
                        />
                        <p>{errors.nome?.message}</p>
                    </div>
                    <div>
                        <label>Preço</label>
                        <input
                            type="text"
                            placeholder='Preço'
                            {...register("preco")}
                        />
                        <p>{errors.preco?.message}</p>
                    </div>
                    <div>
                        <label>imagem</label>
                        <input
                            type="text"
                            placeholder='URL DO PRODUTO.'
                            {...register("url")}
                        />
                        <p>{errors.url?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="categoria">CATEGORIA</label>
                        <select name="categoria" id="categoria" {...register("categoria")} >
                            <option value="comer">Comer</option>
                            <option value="beber">Beber</option>
                        </select>
                        <p>{errors.categoria?.message}</p>
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </FormFuncionario>
            </ContentFuncionario>
        </ContainerFuncionario>
    );
}

