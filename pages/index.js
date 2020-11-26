import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MainPage from '../components/MainPage';
import EntryPage from '../components/EntryPage';
import LoadingPage from '../components/LoadingPage';

const Home = () => {
    const { isLoggedIn, userInfo } = useSelector(state => state.user);
    const [ loaded, setLoaded ] = useState(true);

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