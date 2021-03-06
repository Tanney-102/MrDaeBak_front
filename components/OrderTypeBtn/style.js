import styled from 'styled-components';
import theme from '../../style/theme';

export const OrderTypeBtnCont = styled.div`
    width:400px;
    height:300px;
    margin:0 30px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`;

export const OrderBtn = styled.button`
    color:#eee;
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size: 3.5rem;
    line-height:2;
    text-shadow:1px 1px 1px ${theme.borderColorLight};

    &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease;
    };

    @media (max-width:800px) {
        line-heigth:1.5;
        font-size:2.5rem;
    }
`;