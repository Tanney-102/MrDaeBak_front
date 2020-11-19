import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import OrderTypeBtn from '../components/OrderTypeBtn';
import useWindowSize from '../hooks/useWindowSize';
import { Main, Slide, FirstPage, SecondPage, MainCopy, ScrollGuide, SecondCopy, SecondCopyBack } from '../style/indexStyle';

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
        console.log('page loaded');
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
                        <SecondCopyBack>
                            <SecondCopy>
                                <div style={{
                                    position:'absolute',
                                    left:'70px',
                                    top:'60px'
                                }}>
                                    여보!<br />
                                    우리 오늘 저녁에<br />
                                    미스터 대박 어때요?<br />
                                    당신 취향대로<br />
                                    주문해줘요~
                                </div>
                            </SecondCopy>
                        </SecondCopyBack>
                        <OrderTypeBtn/>
                    </SecondPage>
                </Slide>
            </Main>
        </>
    );
};

export default Home;