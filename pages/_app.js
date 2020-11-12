import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import GlobalStyles from '../style/GlobalStyles';

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

export default App;