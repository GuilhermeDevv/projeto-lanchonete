import React, { useEffect, useRef, useState } from 'react';
import { ContainerFuncionario, ContentFuncionario, FormFuncionario } from './style';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    nome: yup.string().required("Campo vazio."),
    sexo: yup.string().required("").oneOf(["F", "M"]),
    cpf: yup.string().transform((value) => (isNaN(value) ? undefined : value)).max(11, 'Algo de errado.').required("Campo vazio."),
    idade: yup
        .number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .required('Campo vazio.')
        .positive('Idade incorreta.'),
    cargo: yup.string().required("Selecione o cargo.")
}).required()

export function C_cadastrarFuncionario() {

    const { register, trigger, formState: { errors }, handleSubmit } = useForm({ mode: "onChange", resolver: yupResolver(schema) })
    const [radio, setRadio] = useState('F');



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
                            checked={radio === 'F'}
                            onClick ={(event) => setRadio(event.target.value)}
                            type="radio"
                            name='opcaoSexo'
                            value="F"
                            {...register("sexo")}
                        />
                        <label>  Masculino</label>
                        <input
                            checked={radio === 'M'}
                            onClick ={(event) => setRadio(event.target.value)}
                            type="radio"
                            name='opcaoSexo'
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
                            type="text"
                            {...register("idade")}
                        />
                        <p>{errors.idade?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="cargo">Cargo</label>
                        <select name="cargo" id="cargo" {...register("cargo")} >
                            <option value="Administrador">Administrador</option>
                            <option value="Caixa">Caixa</option>
                            <option value="Garçom">Garçom</option>
                            <option value="Entregador" >Entregador</option>
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

