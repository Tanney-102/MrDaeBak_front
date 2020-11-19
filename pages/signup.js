import React from 'react';
import styled from 'styled-components';

import useWindowSize from '../hooks/useWindowSize';
import Header from '../components/Header';
import SignupForm from '../components/SignupForm';

const Main = styled.main`
    width:100%;
    padding: 80px 20px;
    background-color:#eceae9;

    display:flex;
    justify-content:center;
    align-items:center;
`;

const Signup = () => {
    const winSize = useWindowSize();

    return (
        <>
            <Header headerType={2} />
            <Main style={{height:winSize[1]}}>
                <SignupForm />
            </Main>
        </>
    );
}

export default Signup;