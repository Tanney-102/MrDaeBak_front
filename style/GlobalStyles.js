import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import theme from './theme';

const GlobalStyles = createGlobalStyle`
    ${reset}
    @import url(fonts.googleapis.com/earlyaccess/jejumyeongjo.css);

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

    .hover-shadow:hover {
        box-shadow:1px 1px 1px 1px #666;
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
            url(/font/Cafe24Oneprettynight.ttf) format('truetype'), 
            url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Cafe24Shiningstar';
        src:
            url('Cafe24Shiningstar.ttf') format('truetype'), 
            url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Shiningstar.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Anton-Regular';
        src:
            url(/font/Anton-Regular.ttf) format('truetype'), 
            url('https://fonts.googleapis.com/css2?family=Anton&display=swap'),
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'FjallaOne-Regular';
        src:
            url(/font/FjallaOne-Regular.ttf) format('truetype'), 
            url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap'),
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'JejuMyeongjo';
        src:
            url(/font/JejuMyeongjo.ttf) format('truetype'), 
            url(/font/JejuMyeongjoOTF.otf) format('opentype'), 
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalStyles;