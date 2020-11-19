import styled from 'styled-components';
import theme from '../../style/theme';

export const HeaderContainer = styled.header`
    width:100%;
    height:120px;
    padding: 0 20px;

    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:1;
`;

export const Logo = styled.h1`
    width:60%;
    height:100%;
    margin:0 auto;
    color:#eee;
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size: 2.5rem;
    text-shadow:1px 1px 1px ${theme.borderColorLight};
    
    display:flex;
    flex-wrap:wrap;
    align-items:center;

    transition: font-size, color, 0.1s ease;

    @media ${theme.tabletL} {
        width:80%;
    }

    @media ${theme.mobileL} {
        width:90%;
    }
`;