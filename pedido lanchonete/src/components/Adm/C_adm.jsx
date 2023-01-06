import React, { useState } from 'react';
import { ContainerAdm, ContentAdm, MenuSite, Header, User, OptionUser, Logo, IconOpenAndClose, MainPage } from "./style"
import { IoIosArrowDown, IoIosArrowUp, IoIosHome, IoMdAddCircle, IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { HiUser } from "react-icons/hi"
import { BsCashCoin, BsFillCartFill, BsTable } from "react-icons/bs"
import { FcSalesPerformance } from "react-icons/fc"
import logo from "../../assets/logo.png"
import { Outlet, Link } from 'react-router-dom';


export function C_adm() {

    const [selectedLink, setSelectedLink] = useState('inicio');
    const [icon, setIcon] = useState(true)
    const [iconLeft, setIconLeft] = useState(false)
    const styleIconLeft = { fontSize: "25px", color: "#606875", marginRight: "7px" }
    const styleIconOpenAndClose = { fontSize: "25px", color: "white", background: '#2fc4ba', borderRadius: "50%" }
    return (

        <ContainerAdm>
            <ContentAdm>
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
                <MenuSite animate={iconLeft ? "open" : "close"} >
                    <Logo src={logo} />
                    <div>
                        <IconOpenAndClose onClick={() => { setIconLeft(!iconLeft) }}>
                            {!iconLeft ? <IoIosArrowForward style={styleIconOpenAndClose} /> : <IoIosArrowBack style={styleIconOpenAndClose} />}
                        </IconOpenAndClose>
                        <ul>
                            <li>
                                <IoIosHome style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span
                                    onClick={() => setSelectedLink('inicio')} >
                                    <Link to="/admin" className={selectedLink === 'inicio' ? 'linkAtivo' : ''}>INICIO </Link>
                                </span >
                            </li>
                            <li>
                                <IoMdAddCircle style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span
                                    onClick={() => setSelectedLink('cadFuncionario')}>
                                    <Link to="/admin/cadastrarFuncionario" className={selectedLink === 'cadFuncionario' ? 'linkAtivo' : ''}>CAD. FUNCIONÁRIO </Link>
                                </span >
                            </li>
                            <li>
                                <HiUser style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span
                                    className={selectedLink === 'cliente' ? 'linkAtivo' : ''}
                                    onClick={() => setSelectedLink('cliente')} >CLIENTES</span >
                            </li>
                            <li>
                                <BsCashCoin style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span className={selectedLink === 'faturamento' ? 'linkAtivo' : ''}
                                    onClick={() => setSelectedLink('faturamento')} >FATURAMENTO</span>
                            </li>
                            <li>
                                <BsFillCartFill style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span
                                    className={selectedLink === 'produto' ? 'linkAtivo' : ''}
                                    onClick={() => setSelectedLink('produto')} >PRODUTOS</span>
                            </li>
                            <li>
                                <FcSalesPerformance style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span
                                    className={selectedLink === 'vendas' ? 'linkAtivo' : ''}
                                    onClick={() => setSelectedLink('vendas')} >VENDAS</span>
                            </li>
                            <li>
                                <BsTable style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span
                                    className={selectedLink === 'pedido' ? 'linkAtivo' : ''}
                                    onClick={() => setSelectedLink('pedido')} >PEDIDOS</span>
                            </li>
                        </ul>

                    </div>

                </MenuSite>
                <MainPage>
                    <Outlet />
                </MainPage>
            </ContentAdm>
        </ContainerAdm >
    );
}

