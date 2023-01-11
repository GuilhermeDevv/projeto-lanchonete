import React, { useEffect, useRef, useState } from 'react';
import { ContainerFuncionario, ContentFuncionario, FormFuncionario } from './style';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const schema = yup.object({
    nome: yup.string().required("Campo vazio."),
    genero: yup.string().required("").oneOf(["F", "M"]),
    cpf: yup.string().transform((value) => (isNaN(value) ? undefined : value)).max(11, 'Algo de errado.').required("Campo vazio."),
    idade: yup
        .number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .required('Campo vazio.')
        .positive('Idade incorreta.'),
    cargo: yup.string().required("Selecione o cargo."),
    email: yup.string().required('campo vazio.')
}).required()

export function C_cadastrarFuncionario() {

    const { register, trigger, formState: { errors }, handleSubmit } = useForm({ mode: "onChange", resolver: yupResolver(schema) })
    const [radio, setRadio] = useState('F');


    axios.defaults.baseURL = "http://192.168.1.10:8080"
    function cadastro({ cargo, cpf, genero, idade, nome, email }) {
        if (!cargo || !cpf || !genero || !idade || !nome || !email) {
            return
        } else {

            axios.post("/cadastrarFuncionario", {
                cargo,
                cpf,
                genero,
                idade,
                nome,
                email
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(res => { console.log(res) }).catch(err => { console.log(err) })

        }
    }


    return (
        <ContainerFuncionario>
            <ContentFuncionario>
                <h1>Cadastrar funcionários</h1>
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
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder='E-mail'
                            {...register("email")}
                        />
                        <p>{errors.email?.message}</p>
                    </div>
                    <label>Sexo</label>
                    <span>
                        <label>Feminino</label>
                        <input
                            checked={radio === 'F'}
                            onClick={(event) => setRadio(event.target.value)}
                            type="radio"
                            name='opcaoSexo'
                            value="F"
                            {...register("genero")}
                        />
                        <label>  Masculino</label>
                        <input
                            checked={radio === 'M'}
                            onClick={(event) => setRadio(event.target.value)}
                            type="radio"
                            name='opcaoSexo'
                            value="M"
                            {...register("genero")}
                        />
                        <p>{errors.genero?.message}</p>
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

