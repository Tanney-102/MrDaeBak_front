import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ManagerPage from './ManagerPage';
import UserPage from './UserPage';

const MainPage = ({ loginType }) => {
    return (
        <>
            <Header headerType={2} />
            {loginType === 'manager' 
            ? <ManagerPage />
            : <UserPage />}
        </>
    );
};

MainPage.propTypes = {
    loginType: PropTypes.string.isRequired,
};

export default MainPage;