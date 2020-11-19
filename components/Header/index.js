import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, Logo } from './style';

// headerType
// 0: index-first 1: index-second 2: others
const Header = ({ headerType }) => {
    return (
        <HeaderContainer style={{
            height: headerType ? '80px' : '120px',
            backgroundColor: headerType ? '#1B332D' : '',
            transitionDelay: headerType ? '0.4s' : '0.1s',
            borderBottom: headerType===2 ? '1.5px solid #12211D' : '',
            boxShadow: headerType===2 ? '0 0.5px 2px 1px #12211D' : '',
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