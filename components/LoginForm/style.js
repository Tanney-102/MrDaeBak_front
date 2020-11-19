import styled from 'styled-components';
import theme from '../../style/theme';

export const Form = styled.form`
    width:70%;
    height:300px;
    max-width:300px;
    background-color: #2c2a29;
    border:1px solid #50520D;
    border-radius:5px;
    box-shadow:0 0 2px 2px #2f2f2f;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`;

export const InputContainer = styled.div`
    width: 60%;
    height: 35px;
    border: 1px solid ${theme.borderColor};
    border-radius:3px;
    background-color: ${theme.backColorLight};
    margin:3px;
`;

export const Input = styled.input`
    width:90%;
    height:100%;
    background-color: ${theme.backColorLight};
    margin-left:3px;
    font-size: 0.7rem;

    &:focus .input-container {
        border: 1px solid red;
    }
`

export const ButtonContainer = styled.div`
    width:60%;
    height:28px;
    margin: 30px 0 20px;

    display:flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: 47%;
    height: 100%;
    border-radius:3px;
    color:#fff;
`;

export const Partition = styled.div`
    width:60%;
    margin-bottom: 30px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const HorizontalLine = styled.div`
    width:37%;
    height:1px;
    background-color:${theme.borderColor};
`;

export const GuestLogin = styled.button`
    font-size:0.8rem;
    color:${theme.fontSkyBlue};
`;