import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }

  :root{
    --ods1-color: #dc8f5c;
    --ods2-color: #9aaf85;
    --ods3-color: #b9afc7;
    --ods4-color: #91c6c0;
    --ods5-color: #d7b65e;

    --padMob: 1rem;
    --ods-cardSize: 12rem;

    @media (min-width: 600px){
      --ods-cardSize: 20vmax;
    }
  }

  body{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    ::-webkit-scrollbar{
        display: none;
    };
  }
`;
