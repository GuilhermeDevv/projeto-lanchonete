import styled, { keyframes } from "styled-components";

export const ContainerAdm = styled.div`

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
z-index:1;
position: fixed;
`
export const MenuSite = styled.section`
position: fixed;
z-index: 1;
display: flex;
flex-direction: column;
background-color: #273549;
max-width: 140px;
width: 100%;
max-height:100vh;
height: 100%;
align-items: center;
overflow: hidden;

@media (max-width:670px){
  animation-name:  ${({ animate }) => animate};
  animation-duration: 0.4s;
  animation-fill-mode: both;
  
}
@keyframes close {
from {
  max-width: 140px;
  width: 100%;
}
to {
  max-width: 40px;
  width: 100%;
}
}


@keyframes open {
  from {
    max-width: 40px;
    width: 100%;
  }
  to {
    max-width: 140px;
    width: 100%;
  }
}
& div  {
    width: 100%;
    padding-left: 8px;
    overflow: hidden;
   
   
    & ul li{
      position: relative;
      white-space: nowrap;
      margin-bottom: 10px;
      position: relative;
      color:white;
      & span{
        cursor: pointer;
        position: absolute;
        top: 8px;
      }
    }
    
  }
.linkAtivo{color:#3d6def;}
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
opacity: 0;
display:${({ display }) => display};
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
   
    opacity: 1;
  }
  to {
   
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
export const Logo = styled.img`

background-color: white;
border: solid 2px gray;

`
export const IconOpenAndClose = styled.div`
display: none;
 @media (max-width:670px){

  display: flex;
  justify-content: end;
  position: relative;
}

`

export const MainPage = styled.main`
width: calc(100% - 140px);
min-height:calc(100vh - 60px) ;
height: 100%;
float: right;
@media (max-width:670px){
  width: calc(100% - 40px);
}
min-height: calc(100vh - 60px);
position: relative;
top: 60px;



`

