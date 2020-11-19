import React, { useCallback, useState, useRef } from 'react'
import axios from 'axios';
import styled from 'styled-components';

import useInput from '../../hooks/useInput';
import { Form, InputContainer, Input } from '../LoginForm/style';

const url = 'https://mr-daebak.herokuapp.com'

const VerifyBtn = styled.button`
    width: 19%;
    color:#5DB09B;
    font-size:0.8rem;
`;

const Input2 = styled(Input)`
    width:80%;
`;

const SignupForm = () => {
    const [id, onChangeId] = useInput('');
    const [name ,onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [password2, onChangePassword2] =useInput('');
    const [idChecked, setIdChecked] = useState('false');
    const [nameChecked, setNameChecked] = useState('false');
    const [btnActivation, setBtnActivation] = useState(false);
    const inputRef_id = useRef(null);
    const inputRef_name = useRef(null);

    const verifyId = useCallback(async () => {
        await axios.post(url+'/duplicate_id/', {
            'user_id' : id
        })
        .then(res => {
            if(res.check_id_dup && confirm('사용가능한 아이디입니다. 사용하시겠습니까?')) {
                setIdChecked(true);
                inputRef_id.current.setAttribute('readonly', 'readonly');
            } else {
                console.log(res.massage);
            }
        })
        .catch(err => console.error(err));
    }, [id]);

    const verifyName = useCallback(() => {

    }, [name]);
    
    return (
        <Form style={{height:'400px', marginTop:'30px'}} onSubmit={e => { e.preventDefault(); }}>
            <InputContainer style={{width:'70%'}}>
                <Input2 ref={inputRef_id} type="text" value={id} placeholder="아이디" autoComplete="off" onChange={onChangeId} />
                <VerifyBtn className="btn-hover" onClick={verifyId}>중복확인</VerifyBtn>
            </InputContainer>
            <InputContainer style={{width:'70%'}}>
                <Input2 ref={inputRef_name} type="text" value={name} placeholder="닉네임" autoComplete="off" onChange={onChangeName} />
                <VerifyBtn className="btn-hover" onClick={verifyName}>중복확인</VerifyBtn>
            </InputContainer>
            <InputContainer style={{width:'70%'}}>
                <Input2 type="text" value={password} placeholder="비밀번호" autoComplete="off" onChange={onChangePassword} />
            </InputContainer>
            <InputContainer style={{width:'70%'}}>
                <Input2 type="text" value={password2} placeholder="비밀번호 확인" autoComplete="off" onChange={onChangePassword2} />
            </InputContainer>
        </Form>
    );
};

export default SignupForm;