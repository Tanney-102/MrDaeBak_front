import React from 'react';

import Header from '../Header'
import { Main } from './style';
import useWindowSize from '../../hooks/useWindowSize'

const UserPage = () => {
    const winSize = useWindowSize();

    return (
        <>
        <Header headerType={2} />
        <Main style={{minHeight:winSize[1]}}>
            주문 페이지
        </Main>
        </>
    );  
};

export default UserPage;