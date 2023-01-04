import React, { useState } from 'react';
import { ContainerAdm, ContentAdm, MenuSite, Header, User, OptionUser, Logo, IconOpenAndClose } from "./style"
import { IoIosArrowDown, IoIosArrowUp, IoIosHome, IoMdAddCircle, IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { HiUser } from "react-icons/hi"
import { BsCashCoin, BsFillCartFill, BsTable } from "react-icons/bs"
import { FcSalesPerformance } from "react-icons/fc"
import logo from "../../assets/logo.png"


export function C_adm() {


    const [icon, setIcon] = useState(true)
    const [iconLeft, setIconLeft] = useState(false)
    const styleIconLeft = { fontSize: "25px", color: "#606875", marginRight: "7px" }
    const styleIconOpenAndClose = { fontSize: "25px", color: "white", background: '#2fc4ba', borderRadius: "50%" }
    return (

        <ContainerAdm>
            <ContentAdm>
                <MenuSite animate={iconLeft ? "open" : "close"} >
                    <Logo src={logo} />
                    <div>
                        <IconOpenAndClose onClick={() => { setIconLeft(!iconLeft) }}>
                            {!iconLeft ? <IoIosArrowForward style={styleIconOpenAndClose} /> : <IoIosArrowBack style={styleIconOpenAndClose} />}
                        </IconOpenAndClose>
                        <ul>
                            <li>
                                <IoIosHome style={styleIconLeft} onClick={() => { setIconLeft(!iconLeft) }}/>
                                <span>INICIO</span >
                            </li>
                            <li>
                                <IoMdAddCircle style={styleIconLeft} onClick={() => { setIconLeft(!iconLeft) }}/>
                                <span>CAD. FUNCIONÁRIO</span >
                            </li>
                            <li>
                                <HiUser style={styleIconLeft} onClick={() => { setIconLeft(!iconLeft) }}/>
                                <span>CLIENTES</span >
                            </li>
                            <li>
                                <BsCashCoin style={styleIconLeft} onClick={() => { setIconLeft(!iconLeft) }}/>
                                <span>FATURAMENTO</span>
                            </li>
                            <li>
                                <BsFillCartFill style={styleIconLeft} onClick={() => { setIconLeft(!iconLeft) }}/>
                                <span>PRODUTOS</span>
                            </li>
                            <li>
                                <FcSalesPerformance style={styleIconLeft} onClick={() => { setIconLeft(!iconLeft) }}/>
                                <span>VENDAS</span>
                            </li>
                            <li>
                                <BsTable style={styleIconLeft} onClick={() => { setIconLeft(!iconLeft) }}/>
                                <span>PEDIDOS</span>
                            </li>
                        </ul>

                    </div>

                </MenuSite>

                <Header>
                    <User >
                        <span onClick={() => { setIcon(!icon) }}>
                            Guilherme {icon ? <IoIosArrowDown style={{ verticalAlign: "middle" }} /> : <IoIosArrowUp style={{ verticalAlign: "middle" }} />}
                        </span>
                        <OptionUser animate={icon ? "fadeInUp" : "fadeInDown"} >
                            <ul>
                                <li >

                                    <span>Configuração</span>
                                </li>
                                <li >

                                    <span>Sair</span>
                                </li>
                            </ul>
                        </OptionUser >
                    </User>
                </Header>

            </ContentAdm>
        </ContainerAdm >
    );
}

