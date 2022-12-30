import React from 'react';
import axios from "axios"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { Link } from 'react-router-dom'
import { ContainerCadastro, ContentAcesso, ContentImg, ContentCadastro, Form } from './style';
import { TextoPage } from "../Texto/TextoPage"
import { MdEmail, MdVpnKey,MdSupervisedUserCircle } from "react-icons/md"
import imgLogin from "../../assets/imgLogin.png"




const schema = yup.object({
    nome: yup.string().required("Digite seu nome"),
    email: yup.string().required("Campo vazio.").email("E-mail invalido."),
    senha: yup.string().required("campo vazio."),
    confirmar_senha: yup.string().oneOf([null, yup.ref('senha')], 'Senha incompatíveis')

}).required()

function criarUsuario({ nome, senha, email }) {
    axios.defaults.baseURL = "http://127.0.0.1:8080"
    axios.post("/criarUsuario", {
        nome,
        senha,
        email
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => { console.log(response) }).catch(err => { console.log(err) })
}


export function C_cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const estilosIcon = { position: 'absolute', margin: "13px 0px 0px 5px", fontSize: "11px" }

    return (
        <ContainerCadastro>
            <ContentCadastro>
                <ContentImg>
                    <img src={imgLogin} alt="boneco" />
                </ContentImg>
                <ContentAcesso>
                    <Form onSubmit={handleSubmit(criarUsuario)}>
                        <TextoPage>Registro</TextoPage>
                        <div>
                            {/* icone do input */}
                            <MdSupervisedUserCircle style={estilosIcon} />

                            <input
                                type="text"
                                placeholder='Nome'
                                estilo='input'
                                {...register("nome")}
                            />
                            <span>{errors.nome?.message}</span>
                        </div>
                        <div>
                            {/* icone do input */}
                            <MdEmail style={estilosIcon} />

                            <input
                                type="text"
                                placeholder='Email'
                                estilo='input'
                                {...register("email")}
                            />
                            <span>{errors.email?.message}</span>
                        </div>
                        <div>
                            {/* icone do input */}
                            <MdVpnKey style={estilosIcon} />

                            <input
                                type="password"
                                placeholder='Senha'
                                estilo='input'
                                {...register("senha")}
                            />
                            <span>{errors.senha?.message}</span>
                        </div>
                        <div>
                            {/* icone do input */}
                            <MdVpnKey style={estilosIcon} />

                            <input
                                type="password"
                                placeholder='Confirme a senha'
                                estilo='input'
                                {...register("confirmar_senha")}
                            />
                            <span>{errors.confirmar_senha?.message}</span>
                        </div>
                        <div>
                            <input type="submit" value="Registrar" />
                        </div>
                        <Link to="/">Já tenho cadastro</Link>
                    </Form>
                </ContentAcesso >
            </ContentCadastro>
        </ContainerCadastro >
    );
}

