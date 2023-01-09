import styled from "styled-components";

export const ContainerCliente = styled.div`
width: 100%;
background-color: white;
border-radius:8px;
padding: 4rem 2rem;
height: calc(100vh - 100px);
overflow-x: hidden;
`
export const ContentCliente = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  input {
    min-width: 217px;
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 5px;
    box-sizing: border-box;
  }
`;

export const Nav = styled.nav`
  width: 60%;
  @media (max-width: 670px){
    width: 100%;
}
  margin: 1rem 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;

  }

  li {
    flex: 1;
    padding: 0.8rem 1rem;
    text-align: center;
    border: 1px solid #273549;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    cursor: pointer;

    &:last-of-type {
      margin-right: 0;
    }

    &.ativo {
      color: white;
      background-color: #273549;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    font-weight: bold;
  }

  th,
  td {
    font-size: 1.2rem;
    padding: 1.5rem;
    text-align: left;
    @media (max-width: 670px){
        font-size: 7px;
        padding: 1.5rem 0.5rem;
    }
  }
 
`;

export const Thead = styled.thead`
  tr {
border-bottom: solid 1px #3d6def;
  }
`;

export const Tbody = styled.tbody`

  tr {
    &:nth-of-type(even) {
      background-color: #f7f9fc;
    }
  }
`;