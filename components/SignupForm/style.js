import styled from 'styled-components';
import theme from '../../style/theme';
import { InputContainer, Input } from '../LoginForm/style';

export const VerifyBtn = styled.button`
    width: 19%;
    color:#5DB09B;
    font-size:0.7rem;

    @media ${theme.mobileL} {
        font-size:0.6rem;
        width:23%
    }
`;

export const InputContainer2 = styled(InputContainer)`
    width:70%;

    @media ${theme.mobileL} {
        width:85%
    }

    @media ${theme.mobileS} {
        width:95%
            
`;

export const Input2 = styled(Input)`
    width:80%;

    @media ${theme.mobileL} {
        width:76%
    }    
`;

export const Indicator = styled.div`
    width: 70%;
    height:15px;
    padding: 0 4px;
    color:#5DB09B;
    font-size:0.7rem;

    display:flex;
    align-items:center;
`;