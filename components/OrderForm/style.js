import styled from 'styled-components';
import theme from '../../style/theme';
import { InputContainer } from '../LoginForm/style';

export const Container = styled.div`
    width:76%;
    min-height:400px;
    margin-top:40px;

    display: flex;
    flex-direction:column;
    align-items:center;
`;

export const Title = styled.h1`
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size:2rem;
    font-weight:bold
    color:#333;

    width:100%;
    border-bottom: 1px solid #bfbfbf;
    padding-bottom: 10px;
    margin-bottom: 10px;
    position:relative;
`;

export const Sub = styled.span`
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size:1.3rem;
    color:#aaa;
    display:inline-block;
    margin-left:15px;
`;

export const FormContainer = styled.div`
    width:80%;
    display:flex;
    margin-top:50px;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;

    @media ${theme.mobileL} {
        width:100%;
    }
`;

// #3D7365 
// rgba(61, 115, 101, 0.7)
export const ContentCard = styled.div`
    width:100%;
    min-height:80px;
    margin: 20px 0;
    padding-left:20px;
    border: 1px solid #3D7365;
    border-radius:10px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const NameCard = styled.div`
    color:#4c4a49;
    font-size:1.5rem;
    font-weight:bold;
    padding: 3px 0;

    @media ${theme.mobileL} {
        font-size:1.3rem;
    }

    @media ${theme.mobileS} {
        font-size:1rem;
    }
`;

export const SelectBtn = styled.button`
    width:100px;
    height:80px;
    border-radius: 0 10px 10px 0;
    background-color: #3D7365;
    color:#eee;
    font-size:0.8rem;
    line-height:1.5;

    @media ${theme.mobileL} {
        width:80px;
    }
`;

export const ToggleBtn = styled.button`
    color:#8c8a89;
    font-size:0.7rem;
    position:relative;
    top:2px;
`;

export const Drop = styled.div`
    width: 150px;
    box-shadow: 1px 1px 1px 1px #bfbfbf;
    padding:15px 10px;
    border-radius:3px;
    background-color:#f3f1f0;

    font-size:0.8rem;
    color:#6c6a69;
    line-height:1.3;

    position:absolute;
    top:25px;
    left:-20px;
`;

export const BackBtn = styled.button`
    width:70px;
    height:25px;
    border:2px solid #3D7365;
    border-radius:10px;
    font-size:0.9rem;
    color:#3D7365;
    font-size:0.8rem;
    position:absolute;
    bottom:10px;
    right:0;
    
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover {
        color:#fff;
        background-color:#3D7365;
    }
`;

export const SubmitBtn = styled.button`
    width:100px;
    height:40px;
    margin-top:30px;
    border:2px solid #3D7365;
    border-radius:10px;
    font-size:0.9rem;
    color:#3D7365;
    
    align-self:flex-end;
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover {
        color:#fff;
        background-color:#3D7365;
    }
`;

export const Desc = styled.div`
    color: #3D7365;
    font-size:1rem;
    position:relative;
    top:8px;
    left:10px;

    &:hover::after{
        content: attr(data-text);

        box-shadow: 1px 1px 1px 1px #bfbfbf;
        display:inline-block;
        width:500px;
        padding:15px 10px;
        border-radius:3px;
        background-color:#f3f1f0;
        color:#8c8a89;
        font-size:0.8rem;

        position: absolute;
        top: 25px;
        left: 0;
    }
`;

export const SoldOut = styled.div`
    color:red;
    font-size:0.9rem;
    height:80px;
    padding:10px;

    display:flex;
    align-items:center;
`

export const OptionLi = styled.div`
    width:90%;
    height:40px;
    margin: 10px 0;
    position:relative;

    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const SizeUpBtn = styled.button`
    width:48px;
    height:23px;
    border:2px solid #3D7365;
    border-radius:10px;
    font-size:0.9rem;
    color:#3D7365;
    font-size:0.6rem;
    position:absolute;
    top:8px;
    right:25px;

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const TimeBtnContainer = styled.div`
    width:100%;
    max-width: 1200px;
    height:200px;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.tabletS} {
        flex-direction: column;
        height:500px;
    }
`;

export const TimeBtn = styled.button`
    width: 17%;   
    max-width:150px;
    height:80px;
    border: 2px solid #3D7365;
    border-radius:10px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media ${theme.tabletS} {
        width: 100%;
        max-width:350px;
        justify-content:space-between;
        flex-direction: row;
        padding: 0 10px;
    }
`;

export const InfoContainer = styled.div`
    width:100%;
    max-width:700px;
    padding:0 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.input`
    display:inline-block;
    width:85%;
    height: 25px;
    border:1px solid #8c8a89;
    border-radius: 5px;

    @media ${theme.tabletS} {
        width:80%;
    }

    @media ${theme.mobileL} {
        width:75%;
    }

    @media ${theme.mobileS} {
        width:65%;
    }
`;

export const MealNum = styled.div`
    width:85%;

    @media ${theme.tabletS} {
        width:80%;
    }

    @media ${theme.mobileL} {
        width:75%;
    }

    @media ${theme.mobileS} {
        width:65%;
    }
`;