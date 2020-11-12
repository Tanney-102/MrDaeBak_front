import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../style/theme';

const HeaderContainer = styled.header`
    width:100%;
    height:120px;
    padding: 0 20px;

    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:1;
`;

const Logo = styled.h1`
    width:60%;
    height:100%;
    margin:0 auto;
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size: 2.5rem;
    text-shadow:1px 1px 1px ${theme.borderColorLight};
    
    display:flex;
    flex-wrap:wrap;
    align-items:center;

    transition: font-size, color, 0.1s ease;

    @media ${theme.tabletL} {
        width:80%;
    }

    @media ${theme.mobileL} {
        width:90%;
    }
`;

const Header = ({ headerType }) => {
    return (
        <HeaderContainer style={{
            height: headerType ? '80px' : '120px',
            // borderBottom: headerType ? '1.5px solid #dfdfdf' : '',
            // backgroundColor: headerType ? '#fff' : '',
            transitionDelay: headerType ? '0.4s' : '0.1s',
            }}>
                <Logo style={{
                    color: headerType ? theme.fontDarkGray : '#eee',
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