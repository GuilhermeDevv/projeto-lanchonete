import React from 'react';
import { ContainerRecuperar, ContentRecuperar, ContentImg, ContentAcesso, Form } from "../Recuperar/style"
import imgLogin from "../../assets/imgLogin.png"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { Link } from "react-router-dom"
import { TextoPage } from "../Texto/TextoPage"
import { MdEmail } from "react-icons/md"
import axios from "axios"
import CryptoJS from 'crypto-js';
import emailjs from 'emailjs-com';
import mongoose from "mongoose"



const schema = yup.object({
    email: yup.string().required("Campo vazio.").email("E-mail invalido."),
}).required()


export function C_recuperar(props) {

    const estilosIcon = { position: 'absolute', margin: "13px 0px 0px 5px", fontSize: "11px" }
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const API_URL = "http://192.168.1.2:8080";

    function recuperarConta({ email }) {
        axios.defaults.baseURL = API_URL
        axios.post("/recuperar", { email }).then(resp => { return console.log(resp) }).catch(err => { console.error(err) })
    }

    return (
        <ContainerRecuperar>
            <ContentRecuperar>
                <ContentImg>
                    <img src={imgLogin} alt="boneco" />
                </ContentImg>
                <ContentAcesso>
                    <Form onSubmit={handleSubmit(recuperarConta)}>
                        <TextoPage>Recuperar</TextoPage>
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
                            <input type="submit" value="Login" />
                        </div>
                        <Link to="/">Já tenho conta</Link>
                        <Link to="/cadastro" estilo="link">Criar conta</Link>
                    </Form>

                </ContentAcesso>

            </ContentRecuperar>
        </ContainerRecuperar>
    );
}

