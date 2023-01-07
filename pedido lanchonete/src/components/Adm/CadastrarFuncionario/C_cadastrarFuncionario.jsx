import React, { useEffect, useRef, useState } from 'react';
import { ContainerFuncionario, ContentFuncionario, FormFuncionario } from './style';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    nome: yup.string().required("Campo vazio."),
    sexo: yup.string().required('Selecione um gênero.'),
    cpf: yup.string().max(11, 'Algo de errado.').required("Campo vazio."),
    idade: yup.number("teste").min(0, "Idade incorreta.").required('Digite sua idade.'),
    cargo: yup.string().required("Selecione o cargo.")
}).required()

export function C_cadastrarFuncionario() {

    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) })
    const [radio, setRadio] = useState('');

    function teste(dados) {
        console.log(dados)
    }


    return (
        <ContainerFuncionario>
            <ContentFuncionario>
                <h1>Cadastrar funcionários</h1>
                <FormFuncionario onSubmit={handleSubmit(teste)}>
                    <div>
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder='Nome completo'
                            {...register("nome")}
                        />
                        <p>{errors.nome?.message}</p>
                    </div>
                    <label>Sexo</label>
                    <span>
                        <label>Feminino</label>
                        <input
                            type="radio"
                            value="F"
                            {...register("sexo")}
                        />
                        <label>  Masculino</label>
                        <input
                            type="radio"
                            value="M"
                            {...register("sexo")}
                        />
                        <p>{errors.sexo?.message}</p>
                    </span>
                    <div>
                        <label>CPF</label>
                        <input
                            type="text"
                            placeholder='000-000-000.00'
                            {...register("cpf")}
                        />
                         <p>{errors.cpf?.message}</p>
                    </div>
                    <div>
                        <label>IDADE</label>
                        <input
                            type="number"
                            {...register("idade")}
                        />
                         <p>{errors.idade?.message}</p>
                    </div>
                    <div>
                        <label htmlFor='cargo'{...register("cargo")} >Cargo</label>
                        <select name="cargo" id="cargo">
                            <option value="adm">Administrador</option>
                            <option value="caixa">Caixa</option>
                            <option value="garcom">Garçom</option>
                            <option value="entregador">Entregador</option>
                        </select>
                        <p>{errors.cargo?.message}</p>
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </FormFuncionario>
            </ContentFuncionario>
        </ContainerFuncionario>
    );
}

