import styled from 'styled-components';
import theme from '../../style/theme';

export const Main = styled.main`
    width:100%;
    background-color:#eceae9;
    position:relative;
    overflow:hidden;
`;

export const PageContainer = styled.div`
    padding: 80px 20px;

    display:flex;
    justify-content:center;
    align-items:center;
`

export const BtnContainer = styled.div`
    max-width:600px;
    height:400px;
    width:90%;
    margin:0 30px;

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

export const MenuBtn = styled.button`
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size: 4.5rem;
    color:#4c4a49;
    line-height:2;
    text-shadow:1.5px 1.5px 2px #4c4a49;

    &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease;
    };

    @media (max-width:800px) {
        line-heigth:1.5;
        font-size:4rem;
    }
`;

export const Slide = styled.div`
    transition: all 0.5s ease-in-out;
    display:flex;
`;

export const BackBtn = styled.button`
    color:#4c4a49;
    font-size:2.5rem;
    padding:0 20px;
    position: absolute;
    top:50%;

    @media ${theme.tabletL} {
        padding:0 5px;
        font-size:2rem;
    }

    @media ${theme.mobileS} {
        font-size:1.5rem;
    }
`;