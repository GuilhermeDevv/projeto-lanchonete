import React from 'react';
import { ContainerSenha, ContentSenha, ContentImg, ContentAcesso, Form } from "./style"
import imgLogin from "../../assets/imgLogin.png"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { TextoPage } from "../Texto/TextoPage"
import { MdVpnKey } from "react-icons/md"
import axios from "axios"
import { useParams } from 'react-router-dom';


const schema = yup.object({
    senha: yup.string().required("campo vazio."),
    confirmar_senha: yup.string().oneOf([null, yup.ref('senha')], 'Senha incompatíveis')
}).required()

export function C_alterarSenha(props) {
    const estilosIcon = { position: 'absolute', margin: "13px 0px 0px 5px", fontSize: "11px" }
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const API_URL = "http://192.168.1.2:8080";

    const { url } = useParams()

    function req({ senha }) {
        axios.defaults.baseURL = API_URL
        axios.post("/novaSenha", { url, senha }).then(res => { console.log(res) }).catch(err => { console.log(err.response.data) })
    }
    return (
        <ContainerSenha>
            <ContentSenha>
                <ContentImg>
                    <img src={imgLogin} alt="boneco" />
                </ContentImg>
                <ContentAcesso>
                    <Form onSubmit={handleSubmit(req)}>
                        <TextoPage>Nova senha</TextoPage>
                        <div>
                            {/* icone do input */}
                            <MdVpnKey style={estilosIcon} />
                            <input
                                type="password"
                                placeholder='Nova senha'
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
                            <input type="submit" value="Mudar senha" />
                        </div>
                    </Form>
                </ContentAcesso>
            </ContentSenha>
        </ContainerSenha>
    );
}

