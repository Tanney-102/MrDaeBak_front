import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import useWindowSize from '../hooks/useWindowSize';
import theme from '../style/theme';

const Main = styled.main`
    overflow-y:hidden;
`;

const Slide = styled.div`
    transition: all 0.5s ease-in-out;
`;

const FirstPage = styled.div`
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

const SecondPage = styled.div`
    width:100%;
    background-color:${theme.backColorLight};

    display:flex;
    justify-content:center;
    align-items:center;
`;

const MainCopy = styled.div`
    font-family: 'Cafe24Oneprettynight', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size:4.5rem;

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

const ScrollGuide = styled.div`
    font-family: 'Cafe24Shiningstar', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size:2rem;
    color:#eee;

    position:absolute;
    left:50%;
    bottom:50px;
    transform: translateX(-50%);
`;

const Home = () => {
    const winSize = useWindowSize();
    const [curPage, setCurPage] = useState(0);
    const [scrollPos, setScrollPos] = useState(0);
    const [scrollDir, setScrollDir] = useState(0);
    const mainRef = useRef(null);
    
    const movePage = () => {
        setScrollDir(scrollPos - document.documentElement.scrollTop < 0 ? 1 : 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', movePage);
    }, []);

    useEffect(() => {
        if(scrollDir^curPage) setCurPage(scrollDir)
    }, [scrollDir]);

    useEffect(() => {
        mainRef.current.style.transform = `translateY(-${curPage}00%)`;
    }, [curPage]);


    return (
        <>
            <Header headerType={curPage} />
            <Main style={{height:winSize[1]*1.01}} onScroll={movePage}>
                <Slide ref={mainRef} style={{height:winSize[1]}}>
                    <FirstPage style={{height:winSize[1]}}>
                        <MainCopy>
                            특별한 날을<br />더욱 특별하게
                        </MainCopy>
                        <ScrollGuide>
                            아래로 스크롤
                            <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:'20px'}} />
                        </ScrollGuide>
                    </FirstPage>
                    <SecondPage style={{height:winSize[1]*1.01}}>
                        <LoginForm />
                    </SecondPage>
                </Slide>
            </Main>
        </>
    );
};

export default Home;