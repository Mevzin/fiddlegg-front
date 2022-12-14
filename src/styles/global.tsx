import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Righteous', cursive;
   }
    body{
    -webkit-font-smoothing: antialiased;  
    }
    body, input, button{
        font: 14px 'Righteous', cursive;
    }
    a{
    text-decoration: none;
    }
    ul{
    list-style: none;
    }
    button{
    cursor: pointer;
    border: none;
    }
    body{
        background-color: #343434;
    }
`;