import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore.js';
import axios from 'axios';

import GlobalStyles from '../style/GlobalStyles';

axios.defaults.baseURL = 'https://mr-daebak.herokuapp.com'
// axios.defaults.baseURL = 'http://localhost:5000'

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Mr. DaeBak</title>
            </Head>
            <GlobalStyles />
            <Component />
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);