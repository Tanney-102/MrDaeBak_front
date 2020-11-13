import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import useWindowSize from '../hooks/useWindowSize';
import { Main, Slide, FirstPage, SecondPage, MainCopy, ScrollGuide } from '../style/indexStyle';

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