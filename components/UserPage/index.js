import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Main, LogoutBtn, BtnContainer } from './style';
import { logoutRequest } from '../../reducers/user';
import useWindowSize from '../../hooks/useWindowSize'
import Header from '../Header'
import OrderForm from '../OrderForm';

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
            <BtnContainer>
                {userInfo.classification !== 'guest' && 
                <div style={{
                    marginRight:'15px',
                    position:'relative',
                    top:'2px',
                    }}>
                    환영합니다. {userInfo.userName}님!
                </div>}
                <LogoutBtn className="btn-hover" onClick={logout}>
                    {userInfo.classification === 'guest' ? '처음으로' : '로그아웃'}
                </LogoutBtn>
            </BtnContainer>
            <OrderForm />
        </Main>
        
        </>
    );  
};

export default UserPage;