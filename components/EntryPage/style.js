import styled from 'styled-components';
import theme from '../../style/theme';

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

export const MainCopy = styled.div`
    font-family: 'Cafe24Oneprettynight', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size:4.5rem;

    width:60%;
    margin:0 auto;
    padding:230px 10px 0;
    color:#eee;
    line-height:1.5;

    @media ${theme.tabletL} {
        width:80%;
        font-size:6vw;
    }

    @media ${theme.mobileL} {
        width:90%;
        font-size:3rem;
    }
`;

export const SecondPage = styled.div`
    width:100%;
    padding: 80px 0;
    background-color:#1B332D;
    
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width:800px) {
        flex-direction:column;
    }
`;

// background: linear-gradient(#cfcfcf 50%, #bfbfbf 50%);
// background-size: 100% 42px;
export const SecondCopyBack = styled.div`
    width:320px;
    height:450px;
    margin:30px;

    background: center no-repeat url('/img/cork.jpeg');
    background-size:100%;
    border-radius:10px;
    box-shadow:5px 5px 7px 7px #0E1A17;

    @media (max-width:800px) {
        display:none;
    }
`;

// width:200px
// height:281.25px;
export const SecondCopy = styled.div`
    width:320px;
    height:450px;
    
    background: top no-repeat url('/img/white_post.png');
    background-size:80%;
    position:relative;
    left:40px;

    @media (max-width:800px) {
        display:none;
    }
`;

export const Massage = styled.div`
    position:absolute;
    left:70px;
    top:60px;
    font-family: 'Cafe24Oneprettynight', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size:1.2rem;
    line-height:1.5;

    @media (max-width:800px) {
        left:43.75px;
        top:37.5px;
        font-size:0.75rem;
        line-height:1.5;
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

// background-color:#2c2a29;
// background-color: ${theme.basicBackColor};
export const ThirdPage = styled.div`
    width:100%;
    padding: 80px 20px;
    background-color:#eceae9;

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const ManagerLoginBtn = styled.button`
    color:#eee;
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size: 1.5rem;
    line-height:2;
    text-shadow:1px 1px 1px ${theme.borderColorLight};

    position: absolute;
    right:15px;
    bottom: 10px;

    &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease;
    };

    @media (max-width:800px) {
        line-heigth:1.5;
        font-size:1rem;
    }
`;