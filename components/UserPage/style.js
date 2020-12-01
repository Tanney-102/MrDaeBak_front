import styled from 'styled-components';

export const Main = styled.main`
    width:100%;
    background-color:#eceae9;
    overflow:hidden;
    padding: 80px 0;

    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;

export const LogoutBtn = styled.button`
    width:80px;
    height:30px;
    border:2px solid #3D7365;
    border-radius:10px;
    font-size:0.8rem;
    color:#3D7365;
    
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover {
        color:#fff;
        background-color:#3D7365;
    }
`;

export const BtnContainer = styled.div`
    width:100%;
    height:60px;
    padding: 0 20px;

    display:flex;
    justify-content: flex-end;
    align-items:center;
`;