import React from 'react';
import Proptypes from 'prop-types';

import { Layout, Close } from './style';

const PopupLayout = ({ children, disp, closeCallback }) => {
    return (
        <Layout style={{display: disp?'flex':'none'}}>
            <Close className="btn-hover" onClick={closeCallback}>&times;</Close>
            {children}
        </Layout>
    );
};

PopupLayout.propTypes = {
    children: Proptypes.node.isRequired,
    disp: Proptypes.bool.isRequired,
    closeCallback: Proptypes.func.isRequired,
};

export default PopupLayout;