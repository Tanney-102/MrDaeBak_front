import styled from 'styled-components';
import theme from '../../style/theme';

export const Main = styled.main`
    width:100%;
    background-color:#eceae9;

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Content = styled.div`
    width:45%;

    @media ${theme.tabletL} {
        width:80%;
    }

    @media ${theme.mobileL} {
        width:90%;
    }
`;

export const Title = styled.h1`
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size:1.6rem;
    font-weight:bold
    color:#333;
`;

export const Th = styled.th`
    background-color:#dfdfdf;
    border:1px solid #acaaa9;
    height:30px;
    font-size:1rem;
    font-weight:bold;    

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Td = styled.td`
    border:1px solid #acaaa9;
    height:30px;
    font-size:1rem;

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const SmallBtn = styled.button`
    width:40px;
    height:17px;
    border:2px solid #3D7365;
    border-radius:7px;
    font-size:0.7rem;
    color:#3D7365;
    margin-left:10px;

    display:flex;
    justify-content:center;
    align-items:center;

    &:hover {
        color:#fff;
        background-color:#3D7365;
    }
`;

export const Input = styled.input`
    width:90%;
    height:70%;
    background-color:#eceae9;
    border-bottom:1px dashed #3D7365;
`;