import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  html {
    font-size: 62.5%; /* Now 10px = 1rem! */
  }

  body {
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: ${(props) => props?.theme?.color?.bg};
  }

  footer {
    font-size: 13px;
    font-size: 1.3rem;
  }

  footer small {
    font-size: 10px;
    font-size: 1rem;
  }

  *, *:before, *:after { box-sizing: border-box; -moz-box-sizing: border-box; image-rendering: -webkit-optimize-contrast;}

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline; -webkit-text-size-adjust: 100%;}

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {display: block;}
  body {line-height: 1;}
  ul, ol{list-style: none;}
  blockquote, q {quotes: none;}
  blockquote:before, blockquote:after,
  q:before, q:after {content: '';content: none;}
  table {border-collapse: collapse;border-spacing: 0;}
  button, html input[type=button], input[type=reset], input[type=submit] { -webkit-appearance: button; cursor: pointer; }
  input:not([type='radio']):not([type='checkbox']), textarea, select{-webkit-appearance: none;}
  mark {background-color: transparent;font-weight: bold;color: inherit;}

  h1{
    color: ${(props) => props?.theme?.color?.font?.primary};
    font-size: 2.8rem;
    font-weight: bold;
  }

  h1, h3, h4, h5, p, span {
    font-family: 'Montserrat', sans-serif;
  }

  h2{
    font-family: 'Montserrat', sans-serif;
    font-size: 2.0rem;
  }

  h3{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.4rem;
  }

  p{
    font-size: 1.6rem;
  }
  
`;

export default GlobalStyle;