import React, { useState } from 'react';
import { ContainerAdm, ContentAdm, MenuSite, Header, User, OptionUser, Logo, IconOpenAndClose, MainPage } from "./style"
import { IoIosArrowDown, IoIosArrowUp, IoIosHome, IoMdAddCircle, IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { HiUser } from "react-icons/hi"
import { GiCardboardBoxClosed } from "react-icons/gi"
import { BsCashCoin, BsFillCartFill, BsTable } from "react-icons/bs"
import { FcSalesPerformance } from "react-icons/fc"
import logo from "../../assets/logo.png"
import { Outlet, Link } from 'react-router-dom';
import { DadosHome } from "../DadosHome/DadosHome"


export function C_adm() {
    const url = window.location.pathname
    const [selectedLink, setSelectedLink] = useState(url);
    const [icon, setIcon] = useState(true)
    const [iconLeft, setIconLeft] = useState(false)
    const styleIconLeft = { fontSize: "25px", color: "#606875", marginRight: "7px" }
    const styleIconOpenAndClose = { fontSize: "25px", color: "white", background: '#2fc4ba', borderRadius: "50%" }


    return (
        < ContainerAdm >
            <ContentAdm>
                <Header>
                    <User >
                        <span onClick={() => { setIcon(!icon) }}>
                            Guilherme {icon ? <IoIosArrowDown style={{ verticalAlign: "middle" }} /> : <IoIosArrowUp style={{ verticalAlign: "middle" }} />}
                        </span>
                        <OptionUser animate={icon ? "fadeInUp" : "fadeInDown"} display={icon ? "none" : "block"}>
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
                                    onClick={() => setSelectedLink('/admin')} >
                                    <Link to="/admin" className={selectedLink === '/admin' ? 'linkAtivo' : ''}>INICIO </Link>
                                </span >
                            </li>
                            <li>
                                <IoMdAddCircle style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span
                                    onClick={() => setSelectedLink('/admin/cadastrarFuncionario')}>
                                    <Link to="/admin/cadastrarFuncionario" className={selectedLink === '/admin/cadastrarFuncionario' ? 'linkAtivo' : ''}>CAD. FUNCIONÁRIO </Link>
                                </span >
                            </li>
                            <li>
                                <HiUser style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span
                                    onClick={() => setSelectedLink('/admin/funcionarios')} >
                                    <Link to="/admin/funcionarios" className={selectedLink === '/admin/funcionarios' ? 'linkAtivo' : ''}>FUNCIONARIOS</Link>
                                </span >
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
                                <span onClick={() => setSelectedLink('/admin/vendas')} >
                                    <Link to="/admin/vendas" className={selectedLink === '/admin/vendas' ? 'linkAtivo' : ''}>VENDAS</Link>
                                </span>
                            </li>
                            <li>
                                <BsTable style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                                <span

                                    onClick={() => setSelectedLink('/admin/cadastrarProduto')} >
                                    <Link className={selectedLink === '/admin/cadastrarProduto' ? 'linkAtivo' : ''} to="/admin/cadastrarProduto">CAD. PRODUDO</Link>
                            </span>
                        </li>
                        <li>
                            <GiCardboardBoxClosed style={styleIconLeft} onClick={() => { setIconLeft(true) }} />
                            <span
                                className={selectedLink === 'estoque' ? 'linkAtivo' : ''}
                                onClick={() => setSelectedLink('estoque')} >ESTOQUE</span>
                        </li>
                    </ul>
                </div>

            </MenuSite>
            <MainPage>
                {selectedLink == "/admin" ? <DadosHome /> : ""}
                <Outlet />
            </MainPage>
        </ContentAdm>
        </ContainerAdm >
    );
}

