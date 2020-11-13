import styled from 'styled-components';
import theme from './theme';

export const Main = styled.main`
    overflow-y:hidden;
`;

export const Slide = styled.div`
    transition: all 0.5s ease-in-out;
`;

export const FirstPage = styled.div`
    width:100%;

    background: no-repeat url("/img/main_back_img.jpg");
    background-size:100%;
    opacity: 0.7;
    position:relative;

    @media (max-width:1305px) {
        background-size:cover;
        background-position:center;
    }
`;

export const SecondPage = styled.div`
    width:100%;
    background-color:${theme.backColorLight};

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const MainCopy = styled.div`
    font-family: 'Cafe24Oneprettynight', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size:6vw;

    width:60%;
    margin:0 auto;
    padding:230px 10px 0;
    color:#eee;
    line-height:1.5;

    @media ${theme.tabletL} {
        width:80%;
    }

    @media ${theme.mobileL} {
        width:90%;
    }
`;

export const ScrollGuide = styled.div`
    font-family: 'Cafe24Shiningstar', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size:2rem;
    color:#eee;

    position:absolute;
    left:50%;
    bottom:50px;
    transform: translateX(-50%);
`;