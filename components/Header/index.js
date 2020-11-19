import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../style/theme';
import { HeaderContainer, Logo } from './style';

const Header = ({ headerType }) => {
    return (
        <HeaderContainer style={{
            height: headerType ? '80px' : '120px',
            // borderBottom: headerType ? '1.5px solid #dfdfdf' : '',
            // backgroundColor: headerType ? '#fff' : '',
            transitionDelay: headerType ? '0.4s' : '0.1s',
            }}>
                <Logo style={{
                    fontSize: headerType ? '1.5rem' : '2.5rem',
                    transitionDelay: headerType ? '0.4s' : '0.1s',
                }}>
                    미스터<span style={{
                        fontSize: headerType ? '2.5rem' : '3.5rem', 
                        transition: 'font-size, color, 0.1s ease',
                        transitionDelay: headerType ? '0.4s' : '0.1s',
                        position:'relative', 
                        top:'-2px'
                        }}>대</span>박
                </Logo>
        </HeaderContainer>
    );
};

Header.propTypes = {
    headerType: PropTypes.number.isRequired,
};

export default Header;