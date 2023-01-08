import styled from "styled-components";



export const ContainerInfo = styled.div`
display: flex;
justify-content: center;

flex-wrap: wrap;
width:100%;

`
export const ContentInfo = styled.section`
display: flex;
cursor: pointer;
align-items: center;
padding-left: 1rem;
background-color: ${({ backgroundColor }) => backgroundColor};
max-width:250px;
width: 100%;
min-height: 50px;
height: 100%;
margin: 10px;
    & h1{
    font-size: 14px;
    text-transform: uppercase;
    color: white;

    }
`