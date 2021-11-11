import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --primary: #EB2A44;
        --primary-50: #F596A3;
        --gray-100: #505C6E;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;
        
        
    }
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    }
    
    body{}
`;
