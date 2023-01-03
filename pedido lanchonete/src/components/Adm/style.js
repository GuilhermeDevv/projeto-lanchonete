import styled from "styled-components";

export const ContainerAdm = styled.div`
background-color: #eef1f6;
width: 100%;
height: 100%;
min-height: 100vh;
`
export const ContentAdm = styled.div`
width: 100%;



`
export const Header = styled.header`
display: flex;
background-color: white;
width: 100%;
height: 6rem;
position: fixed;
`
export const NomeSite = styled.h1`
display: inline;
background-color: #20c2bd;
max-width: 160px;
width: 100%;
height: 6rem;
color: white;
font-size: clamp(1.5rem,2rem,4.2rem);
text-align: center;
padding-top: 15px;


`
export const User = styled.div`

width: 100%;
display: flex;
align-items: center;
justify-content: end;
cursor: pointer;
    & span{
        color: #aab8c2;
        margin-right: 1rem;
        font-size: 16px;
        text-transform: capitalize;
        
        
        
       
    }

`
export const OptionUser = styled.section`
position: absolute;
top: 60px;
min-width: 180px;
min-height: 220px;
display: block;
opacity: 0;
animation-name:  ${({ animate }) => animate};
animation-duration: 0.4s;
animation-fill-mode: both;



    & ul {
    position: relative;
    width: 230px;
    overflow-y: auto;
    max-height: 295px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 

    & li{

    display: flex;
    height: 55px;
    cursor: pointer;
    padding: 0 16px;
    border-radius: 8px;
    align-items: center;
    background: #fff;
    text-align: center;
    &:hover::before{
        content: "";
        position: absolute;
        left: 0;
        height: 25px;
        width: 3px;
        background: #3d6def
        
        }
     & span{
      
        
        width: 100%;
        &:hover{color: #3d6def}
     }
    }
}
@keyframes fadeInUp {
  from {
    transform: translate3d(0, 30px, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }
}

@keyframes fadeInDown {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 20px, 0);
    opacity: 1;
  }
}

`

