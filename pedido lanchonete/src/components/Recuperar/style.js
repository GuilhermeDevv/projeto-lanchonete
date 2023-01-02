import styled from "styled-components"

export const ContainerRecuperar = styled.main`

    position: relative;
    width: 100%;    
    min-height: 100vh;
    height: 100%;
    background-image: linear-gradient(180deg, #5c3f64 0, #4a2f5e 25%, #321f59 50%, #0a1254 75%, #000550 100%);
`



export const ContentRecuperar = styled.section`
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

@media(max-width:570px){
    width: 0%;
   
}
`



export const ContentAcesso = styled.aside`
  
width: 50%;
height: 80%;
display: flex;
align-items: center;
@media(max-width:570px){
    
        width: 100%;
        display: flex;
        justify-content: center;
    }

`
export const Form = styled.form`
    position: absolute;
    
    width: 100%;
    max-width: 40%;
    @media(max-width:570px){
        max-width: 100%;
        
    
    }

 
    
    & div{
        height:100%;
        
        & input{
            background-color: #e7e7e7;
            height: 3.5rem;
            margin-bottom: 3px;
            width: 100%;
            min-width: 220px;
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
        & span{
            color:red;
            font-size: 12px;
        }
    }
    & a{
        background-color: transparent;
        display: block;
        text-align: center;
        font-size: 12px;
        color:black;
        max-width: 100%;
        &:hover{
            color:blue;
        }
        
    }
    & a[estilo="link"]{
        position: relative;
        width: 100%;
        height: 100%;
        top: 0.5rem;
   
    }



`
