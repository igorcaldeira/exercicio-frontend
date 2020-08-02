import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1{
    color: ${(props) => props?.theme?.color?.font?.primary};
    font-size: 2.8rem;
    font-weight: bold;
  }

  h1, h2, h3, h4, h5, p, span, a {
    font-family: 'Montserrat', sans-serif;
  }

  h2{
    font-size: 26px;
    color: ${(props) => props?.theme?.color?.font?.secondary};
    font-weight: 400;
  }

  h3{
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props?.theme?.color?.font?.primary};
  }

  h4{
      font-size: 16px;
    font-weight: bold;
    color: ${(props) => props?.theme?.color?.font?.secondary};
    margin-bottom: ${(props) => props?.theme?.gap?.sm};
  }

  h5{
      font-size: 14px;
    color: ${(props) => props?.theme?.color?.font?.secondary};
    margin-bottom: ${(props) => props?.theme?.gap?.sm};
  }

  p {
    color: #1E1E20;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    margin-bottom: ${(props) => props?.theme?.gap?.sm};
  }
`;

export default GlobalStyle;
