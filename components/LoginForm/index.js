import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

import theme from '../../style/theme';
import useInput from '../../hooks/useInput';
import { Form, InputContainer, Input, ButtonContainer, Button, Partition, HorizontalLine, GuestLogin } from './style'; 

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [btnActivation, setBtnActivation] = useState(false);

    useEffect(() => {
        if(id != '' && password.length > 5) {
            setBtnActivation(true);
        } else {
            setBtnActivation(false);
        }
    }, [id, password]);

    return (
        <Form onSubmit={e => { e.preventDefault(); }}>
            <InputContainer className="input-container">
                <Input type="text" value={id} placeholder="아이디" autoComplete="off" onChange={onChangeId} />
            </InputContainer>
            <InputContainer className="input-container">
                <Input type="password" value={password} placeholder="비밀번호" autoComplete="off" onChange={onChangePassword} />
            </InputContainer>
            <ButtonContainer>
                <Button className="btn-hover" style={{backgroundColor: btnActivation?'#4c4a49':'rgba(76, 74, 73, 0.55)'}}>
                    로그인
                </Button>
                <Button className="btn-hover">
                    <Link href="/signup"><a>    
                        회원가입
                    </a></Link>
                </Button>
            </ButtonContainer>
            <Partition>
                <HorizontalLine />
                <span style={{fontSize: '0.9rem', color: theme.fontGray}}>또는</span>
                <HorizontalLine />
            </Partition>
            <GuestLogin className="btn-hover" type="button">비회원으로 주문하기</GuestLogin>
        </Form>
    );
};

export default LoginForm;