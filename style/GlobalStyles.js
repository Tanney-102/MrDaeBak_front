import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import theme from './theme';

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing:border-box;
        font-family:'나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
        -ms-overflow-style: none;
    }

    *::-webkit-scrollbar {
        display:none;
    }

    body, main {
        margin:0;
        padding:0; 
    }
    
    a {
        color: inherit; 
        font-size:inherit;
        font-weight:inherit;
        text-decoration: none; 
        line-height: 1;
    }
    
    button {
        background-color:rgba(0, 0, 0, 0);
        border:0;
    }
    
    button, input:focus { outline:none; }
    
    .btn-hover:hover {
        cursor:pointer;
    }

    input {
        border:0;
    }

    input::placeholder { 
        color: ${theme.fontGray}; 
    }

    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Cafe24Oneprettynight';
        src:
            url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Cafe24Shiningstar';
        src:
            url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Shiningstar.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalStyles;