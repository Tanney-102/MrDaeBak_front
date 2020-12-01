import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import theme from '../../style/theme';
import useInput from '../../hooks/useInput';
import { Form, Title, InputContainer, Input, ButtonContainer, Button, Partition, HorizontalLine, GuestLogin } from './style'; 
import { loginRequest, LOG_IN } from '../../reducers/user';

const LoginForm = ({ loginFormType }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [btnActivation, setBtnActivation] = useState(false);
    const loginFormRef = useRef();
    const dispatch = useDispatch();

    const orderASGuest = useCallback(() => {
        dispatch({ 
            type : LOG_IN,
            data : {
                userId: 'guest',
                userName: 'guest',
                classification: 'guest'
            }
        });
    },[]);

    const login = useCallback(() => {
        if(!btnActivation) return;

        const form = new FormData(loginFormRef.current);
        form.append('login_type', loginFormType);
        
        loginRequest(form).then(res => {
            dispatch(res);
        });
    }, [btnActivation]);

    const fakeManager = useCallback(() => {
        dispatch({ 
            type : LOG_IN,
            data : {
                userId: 'guest',
                userName: 'guest',
                classification: 'manager'
            }
        });
    },[]);

    useEffect(() => {
        if(id != '' && password.length > 5) {
            setBtnActivation(true);
        } else {
            setBtnActivation(false);
        }
    }, [id, password]);

    return (
        <Form ref={loginFormRef} onSubmit={e => { e.preventDefault(); }}>
            <Title>{loginFormType==='member' ? '회원 로그인' : '관리자 로그인'}</Title>
            <InputContainer className="input-container">
                <Input type="text" name="user_id" value={id} placeholder="아이디" autoComplete="off" onChange={onChangeId} />
            </InputContainer>
            <InputContainer className="input-container">
                <Input type="password" name="user_password" value={password} placeholder="비밀번호" autoComplete="off" onChange={onChangePassword} />
            </InputContainer>
            <ButtonContainer style={{justifyContent:loginFormType==='manager'?'flex-end':''}}>
                <Button 
                    className={btnActivation ? "btn-hover" : ""} 
                    style={{backgroundColor: btnActivation?'#4c4a49':'rgba(76, 74, 73, 0.55)'}}
                    onClick={login}
                    >
                    로그인
                </Button>
                {loginFormType === 'member' && <Button className="btn-hover">
                    <Link href="/signup"><a>    
                        회원가입
                    </a></Link>
                </Button>}
            </ButtonContainer>
            {loginFormType === 'member' && 
            <>
            <Partition>
                <HorizontalLine />
                <span style={{fontSize: '0.9rem', color: theme.fontGray}}>또는</span>
                <HorizontalLine />
            </Partition>
            <GuestLogin className="btn-hover" type="button" onClick={orderASGuest}>비회원으로 주문하기</GuestLogin>
            </>}
            {loginFormType === 'manager' && 
                <GuestLogin className="btn-hover" type="button" onClick={fakeManager}>
                    사장님 페이지 둘러보기
                </GuestLogin>
            }
        </Form>
    );
};

LoginForm.propTypes = {
    loginFormType: PropTypes.string.isRequired,
};

export default LoginForm;