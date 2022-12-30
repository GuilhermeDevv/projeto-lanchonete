import React from 'react';
import { Link } from "react-router-dom"
import { ContainerLogin, ContentAcesso, ContentImg, ContentLogin, Form } from './style';
import { MdEmail, MdVpnKey } from "react-icons/md"

import imgLogin from "../../assets/imgLogin.png"
export function C_login() {
    const estilosIcon = { position: 'absolute', margin: "13px 0px 0px 5px", fontSize: "11px" }
    return (
        <ContainerLogin>
            <ContentLogin >
                <ContentImg>
                    <img src={imgLogin} alt="boneco" />
                </ContentImg>
                <ContentAcesso >
                    <Form>
                        <h1>Login</h1>
                        <div>
                            <MdEmail style={estilosIcon} />
                            <input type="text" placeholder='Email' estilo='input' />
                        </div>
                        <div>
                            <MdVpnKey style={estilosIcon} />
                            <input type="password" placeholder='Senha' estilo='input' />
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

