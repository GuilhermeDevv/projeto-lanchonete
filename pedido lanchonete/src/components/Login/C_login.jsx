import React from 'react';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { Link } from "react-router-dom"
import { ContainerLogin, ContentAcesso, ContentImg, ContentLogin, Form } from './style';
import { MdEmail, MdVpnKey } from "react-icons/md"
import imgLogin from "../../assets/imgLogin.png"

const schema = yup.object({
    email: yup.string().required("Campo vazio.").email("E-mail invalido."),
    senha: yup.string().required("campo vazio.")
}).required()

export function C_login() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const estilosIcon = { position: 'absolute', margin: "13px 0px 0px 5px", fontSize: "11px" }

    return (
        <ContainerLogin>
            <ContentLogin >
                <ContentImg>
                    <img src={imgLogin} alt="boneco" />
                </ContentImg>
                <ContentAcesso>
                    <Form onSubmit={handleSubmit(() => { console.log('teste') })}>
                        <h1>Login</h1>
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
                    </Form>
                </ContentAcesso >
            </ContentLogin>
        </ContainerLogin >
    );
}

