import styled from 'styled-components';

export const Layout = styled.div`
    position:fixed;
    top:0;
    left:0;
    z-index:1;

    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.4);

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Close = styled.button`
    position:fixed;
    top:10px;
    right:20px;
    z-index:3;

    color:#dfdfdf;
    font-size:40px;
`;