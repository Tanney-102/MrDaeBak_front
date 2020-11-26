import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainPage from '../components/MainPage';
import EntryPage from '../components/EntryPage';
import LoadingPage from '../components/LoadingPage';
import { verifyLoginState } from '../reducers/user';
import { faAcquisitionsIncorporated } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const { isLoggedIn, userInfo } = useSelector(state => state.user);
    const [ loaded, setLoaded ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        verifyLoginState().then(res => {
            dispatch(res);
        })
        .then(() => {            
            setLoaded(true);
        });
    }, []);

    return (
        <>
        {loaded
        ? (isLoggedIn
            ? <MainPage loginType={userInfo.classification} />
            : <EntryPage />)
        : <LoadingPage/>}
        </>
    );
};

export default Home;