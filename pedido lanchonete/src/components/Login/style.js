import { MdEmail } from "react-icons/md";
import styled from "styled-components";

export const ContainerLogin = styled.main`
    position: relative;
    width: 100%;    
    min-height: 100vh;
    height: 100%;
    background-image: linear-gradient(180deg, #5c3f64 0, #4a2f5e 25%, #321f59 50%, #0a1254 75%, #000550 100%);`
export const ContentLogin = styled.section`
//centralizar o content no centro da tela
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;


    background-color: white;
    width: 100%;
    max-width:90vh;
    height: 100%;
    max-height: 70vh;
    border-radius: 8px;
    overflow: hidden;
`
export const ContentImg = styled.aside`


width: 50%;
height: 100%;

& img{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    width: 260px;
}

`

export const ContentAcesso = styled.aside`

width: 50%;
height: 80%;
display: flex;
align-items: center;


`
export const Form = styled.form`
    position: absolute;
    width: 100%;
    max-width: 40%;

  & h1{
    color: black;
    font-weight: 700;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 3px;
  
    
    
  }
    
    & div{
        & input{
            background-color: #e7e7e7;
            height: 3.5rem;
            margin-bottom: 3px;
            width: 100%;
            border-radius: 10px;
        }
        & input[estilo='input'] {
            padding-left: 25px;
        }
        & input[type='submit']{
            color:white;
            background-color:  #6eb454;
            &:hover{
                transform: scale(1.01);
            }
        }
        
    }
    & a{
        background-color: transparent;
        display: block;
        text-align: center;
        font-size: 12px;
        color:black;
        max-width: 100%;
        
    }

`
