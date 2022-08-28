import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --bg-color: #F8F9FA;
    --subBg-color: #ffffff;
    --title-color: #212529;
    --text-color: #495057;
    --border-style: 1px solid #F1F3F5;
    --shadow-style: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  }
  
  // reset-css
  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    font-size: 0.875rem;
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  div, ul li, ol li, p, span, strong, input, textarea {
    color: var(--text-color);
  }
  // :: 배경색 설정
  body {
    background-color: var(--bg-color);
  }
  ul li, ol li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  // :: 타이틀 폰트 설정
  h3 {
    font-size: 1.3125rem;
    font-weight: 700;
    color: var(--title-color);
    margin-bottom: 0.5rem;
  }
`;

export default GlobalStyle;
