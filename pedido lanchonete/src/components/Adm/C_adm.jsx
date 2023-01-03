import React, { useState } from 'react';
import { ContainerAdm, ContentAdm, NomeSite, Header, User, OptionUser } from "./style"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

export function C_adm() {


    const [icon, setIcon] = useState(true)


    return (
        <ContainerAdm>
            <ContentAdm>
                <Header>
                    <NomeSite>
                        Lanche Feliz
                    </NomeSite>
                    <User onClick={() => { setIcon(!icon) }}>
                        <span>
                            Guilherme {icon ? <IoIosArrowDown style={{ verticalAlign: "middle" }} /> : <IoIosArrowUp style={{ verticalAlign: "middle" }} />}
                        </span>
                        <OptionUser animate={icon ? "fadeInUp" : "fadeInDown"} >
                            <ul >
                                <li >
                                    <span >Pedidos</span>
                                </li>
                                <li >

                                    <span >Financias</span>
                                </li>
                                <li >

                                    <span >Contas</span>
                                </li>
                                <li >

                                    <span >Sair</span>
                                </li>
                            </ul>

                        </OptionUser >



                    </User>
                </Header>

            </ContentAdm>
        </ContainerAdm >
    );
}

