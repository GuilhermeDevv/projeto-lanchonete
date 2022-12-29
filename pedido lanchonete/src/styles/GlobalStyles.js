import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
    list-style: none;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
}
a{
    text-decoration: none;
    color: white;
}
html{
    font-size: 62.5%;
}

img{
    max-width: 100%;
    display: block;
}
`
export default GlobalStyle