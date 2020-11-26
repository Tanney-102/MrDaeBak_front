import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize'

export const Main = styled.main`
    width:100%;
    background-color:#eceae9;

    display:flex;
    justify-content:center;
    align-items:center;
`;

const Logo = styled.div`
    color:#bfbfbf;
    font-weight:bold;
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size: 2.5rem;
    text-shadow:1.5px 1.5px 2px #cfcfcf;
`;

const IndicatorBox = styled.div`
    margin-top:10px;
    width:100%;

    display:flex;
    justify-content:center;
`;

const Indicator = styled.div`
    width:12px;
    height:12px;
    margin:0 15px;
    border-radius:6px;
    background-color:#bfbfbf;
`;

const LoadingPage = () => {
    const winSize = useWindowSize();
    const [dot, setDot] = useState(0);

    useEffect(() => {
        const intv = setInterval(() => {
            setDot(prevDot => {
                return (prevDot+1)%5;
            });
        }, 700);

        return () => {
            clearInterval(intv);
        }
    }, []);

    return(
        <Main style={{height:winSize[1]}}>
            <div>
                <Logo>
                    미스터
                    <span style={{
                        fontSize:'3.5rem',
                        position:'relative', 
                        top:'-2px'
                        }}>대</span>박
                </Logo>
                <IndicatorBox>
                    <Indicator style={{visibility:dot<1?'hidden':''}} />
                    <Indicator style={{visibility:dot<2?'hidden':''}} />
                    <Indicator style={{visibility:dot<3?'hidden':''}} />
                    <Indicator style={{visibility:dot<4?'hidden':''}} />
                </IndicatorBox>
            </div>
        </Main>
    );
};

export default LoadingPage;