import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import useWindowSize from '../../hooks/useWindowSize';
import { Main, BtnContainer, MenuBtn, Slide, PageContainer, BackBtn } from './style';
import { LogoutBtn } from '../UserPage/style';
import StockPage from '../StockPage';
import LoadingPage from '../LoadingPage';
import { logoutRequest } from '../../reducers/user';

const ManagerPage = () => {
    const winSize = useWindowSize();
    const [curPage, setCurPage] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const slideRef = useRef(null);
    const dispatch = useDispatch();

    const logout = useCallback(() => {
        localStorage.removeItem('Token');
        dispatch(logoutRequest());
    }, []);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        if(loaded) {
            slideRef.current.style.transform = `translateX(-${curPage*100/3}%)`;
        }
    }, [curPage, loaded]);

    return (
        !loaded
        ? <LoadingPage />
        : 
        <Main style={{height:winSize[1]}}>
            <Slide ref={slideRef} style={{width:winSize[0]*3}}>
                <PageContainer style={{width:winSize[0], height:winSize[1]}}>
                    <StockPage />
                </PageContainer>
                <PageContainer style={{width:winSize[0], height:winSize[1]}}>
                    <BtnContainer>
                        <MenuBtn className="btn-hover" onClick={()=>setCurPage(2)}>
                            주문 확인
                        </MenuBtn>
                        <MenuBtn className="btn-hover" onClick={()=>setCurPage(0)}>
                            재고 관리
                        </MenuBtn>
                    </BtnContainer>
                </PageContainer>
                <PageContainer style={{width:winSize[0], height:winSize[1]}}>
                    주문 확인 페이지
                </PageContainer>
            </Slide>
            <BackBtn
                onClick={()=>setCurPage(1)}
                className="btn-hover"
                style={{
                    display:curPage===0?'':'none',
                    right:'0'
                    }}>
                <FontAwesomeIcon icon={faChevronRight} />
            </BackBtn>
            <BackBtn 
                onClick={()=>setCurPage(1)}
                className="btn-hover"
                style={{
                    display:curPage===2?'':'none',
                    left:'0',
                    }}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </BackBtn>
            <LogoutBtn 
                className="btn-hover" 
                onClick={logout}
                style={{
                  position:'fixed',
                  top:'100px',
                  right:'20px'  
                }}>
                로그아웃
            </LogoutBtn>
        </Main>
    );
};

export default ManagerPage;