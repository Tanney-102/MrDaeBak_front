import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header';
import LoginForm from '../LoginForm';
import OrderTypeBtn from '../OrderTypeBtn';
import useWindowSize from '../../hooks/useWindowSize';
import { Main, Slide, FirstPage, SecondPage, ThirdPage,
        MainCopy, ScrollGuide, SecondCopy, Massage,
        SecondCopyBack, ManagerLoginBtn } from './style';

const MainPage = () => {
    const winSize = useWindowSize();
    const [curPage, setCurPage] = useState(0);
    const [scrollPos, setScrollPos] = useState(0);
    const [scrollDir, setScrollDir] = useState(0);
    const [loginType, setLoginType] = useState('');
    const mainRef = useRef(null);
    
    // down : 1
    const movePage = useCallback(() => {
        setScrollDir(scrollPos - document.documentElement.scrollTop < 0 ? 1 : 0);
        setScrollPos(document.documentElement.scrollTop);
    }, []);

    const moveToLoginPage = useCallback(() => {
        setLoginType('member');
        setCurPage(2);
    }, []);

    const moveToMLoginPage = useCallback(() => {
        setLoginType('manager');
        setCurPage(2);
    }, []);

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
                                <Massage>
                                    여보!<br />
                                    우리 오늘 저녁에<br />
                                    미스터 대박 어때요?<br />
                                    당신 취향대로<br />
                                    주문해줘요~
                                </Massage>
                            </SecondCopy>
                        </SecondCopyBack>
                        <OrderTypeBtn loginBtnCallback={moveToLoginPage} curPage={curPage} />
                        <ManagerLoginBtn className="btn-hover" onClick={moveToMLoginPage}>사장님으로 로그인 하기</ManagerLoginBtn>
                    </SecondPage>
                    <ThirdPage style={{height:winSize[1]*1.01}}>
                        <LoginForm loginFormType={loginType} />
                    </ThirdPage>
                </Slide>
            </Main>
        </>
    );
};

export default MainPage;