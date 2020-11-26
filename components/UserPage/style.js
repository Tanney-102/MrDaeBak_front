import styled from 'styled-components';

export const Main = styled.main`
    width:100%;
    background-color:#eceae9;
    position:relative;
    overflow:hidden;
    padding: 80px 20px;

    display:flex;
    justify-content:center;
    align-items:center;
`;

export const LogoutBtn = styled.button`
    width:80px;
    height:30px;
    border:2px solid #3D7365;
    border-radius:10px;
    font-size:0.8rem;
    color:#3D7365;
    
    position:fixed;
    top:100px;
    right:10px;

    display:flex;
    justify-content:center;
    align-items:center;

    &:hover {
        color:#fff;
        background-color:#3D7365;
    }
`;