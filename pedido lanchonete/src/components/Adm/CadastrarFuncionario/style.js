import styled from "styled-components";



export const ContainerFuncionario = styled.div`
width: 100%;
padding: 2rem 3rem;

`

export const ContentFuncionario = styled.div`
border: solid 1px black;
border-radius: 10px;
overflow: hidden;
height:80vh;
display: flex;
flex-direction: column;


& h1{
    text-transform: uppercase;
    font-size: 25px;
    color:white;
    text-align: center;
    background-color: #273549;
    padding: 1.5rem 0px;
    width: 100%;
}
`
export const FormFuncionario = styled.form`
margin-top: 2rem;
max-width: 90%;
margin-left: 15px;
display: flex;
flex-direction: column;
align-items: center;



& div {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction:column;
    
    
    & label{
        font-weight: bolder;
        text-transform: uppercase;
    }
    & input{
        padding: 10px;
        width: 220px;
        border: solid 1px gray;
        border-radius: 5px;
        
    }
    & input[type="submit"]{
        color: white;
        font-weight: 900;
        text-transform: uppercase;
        background-color: #273549; 
        height: 38px;
    }
}

& span{
    display: block;
    margin: 1rem 0px;
}

`