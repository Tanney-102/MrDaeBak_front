import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header'
import { Main, LogoutBtn } from './style';
import useWindowSize from '../../hooks/useWindowSize'
import { logoutRequest } from '../../reducers/user';

const UserPage = () => {
    const winSize = useWindowSize();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.user);

    const logout = useCallback(() => {
        localStorage.removeItem('Token');
        dispatch(logoutRequest());
    }, []);

    return (
        <>
        <Header headerType={2} />
        <Main style={{minHeight:winSize[1]}}>
            주문 페이지
        </Main>
        {userInfo.classification !== 'guest' && 
        <div style={{
            position:'fixed',
            top:'111px',
            right:'100px'
        }}>
            환영합니다. {userInfo.userName}님!
        </div>}
        <LogoutBtn className="btn-hover" onClick={logout}>
            {userInfo.classification === 'guest' ? '처음으로' : '로그아웃'}
        </LogoutBtn>
        </>
    );  
};

export default UserPage;