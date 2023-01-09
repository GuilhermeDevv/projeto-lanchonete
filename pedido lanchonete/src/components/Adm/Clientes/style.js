import styled from "styled-components";

export const ContainerCliente = styled.div`
width: 100%;

height: calc(100vh - 100px );
`
export const ContentCliente = styled.div`
& div{
   
    height: 60px;

    & h1{
        text-transform: uppercase;
        padding-top: 15px;
        text-align: center;
    }
    
}
`
export const Nav = styled.nav`
padding-bottom: 2rem;
& ul {
    display: flex;
    gap: 4rem;
    cursor: pointer;
 .ativo {
    color:#3d6def ;
 }
}
`

export const Table = styled.table`

`
export const Thead = styled.thead`


    `
export const Tbody = styled.tbody`
    `