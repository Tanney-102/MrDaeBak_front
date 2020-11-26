import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import useWindowSize from '../../hooks/useWindowSize';
import { Main, BtnContainer, MenuBtn, Slide, PageContainer, BackBtn } from './style';
import StockPage from '../StockPage';
import LoadingPage from '../LoadingPage';

const ManagerPage = () => {
    const winSize = useWindowSize();
    const [curPage, setCurPage] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const slideRef = useRef(null);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        if(loaded) {
            slideRef.current.style.transform = `translateX(-${curPage*100/3}%)`;
            slideRef.current.style.transition = 'all 0.5s ease-in-out'
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
        </Main>
    );
};

export default ManagerPage;