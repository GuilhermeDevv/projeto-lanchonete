import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { ContainerLogin, ContentAcesso, ContentImg, ContentLogin, Form } from './style';
import { TextoPage } from "../Texto/TextoPage"
import { MdEmail, MdVpnKey } from "react-icons/md"
import imgLogin from "../../assets/imgLogin.png"

const schema = yup.object({
    email: yup.string().required("Campo vazio.").email("E-mail invalido."),
    senha: yup.string().required("campo vazio.")
}).required()

export function C_login() {
    const estilosIcon = { position: 'absolute', margin: "13px 0px 0px 5px", fontSize: "11px" }
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const API_URL = "http://192.168.1.2:8080";

    const navigate = useNavigate();
    function temAcesso({ email, senha }) {

        // VERIFICAR NOVAMENTE INPUT
        if (!email || !senha) {
            throw new Error("Email e senha são obrigatórios");
        }

        axios.defaults.baseURL = API_URL;
        axios.post('/inicio', { email, senha }, { headers: { 'Content-Type': 'application/json' } })
            .then(response => {

                // verificar se a req deu certo
                if (response.status === 200 && response.data.success) {
                    // Navega até a pagina Home
                    navigate("/home", { state: { email } });
                } else {
                    alert("Senha incorreta");
                }
            })
            .catch(err => {
                // plotar no console o erro
                console.error(err);
            });









    }



    return (

        <ContainerLogin>
            <ContentLogin >
                <ContentImg>
                    <img src={imgLogin} alt="boneco" />
                </ContentImg>
                <ContentAcesso>
                    <Form onSubmit={handleSubmit(temAcesso)}>
                        <TextoPage>Login</TextoPage>
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
                            <input type="submit" value="Login" />
                        </div>
                        <Link to="/recuperar">Esqueceu o Usuário/Senha?</Link>
                        <Link to="/cadastro" estilo="link">Criar conta</Link>
                    </Form>

                </ContentAcesso >

            </ContentLogin>
        </ContainerLogin >
    );
}

