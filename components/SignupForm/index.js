import React, { useCallback, useState, useRef } from 'react'
import axios from 'axios';
import styled from 'styled-components';

import useInput from '../../hooks/useInput';
import { Form, InputContainer, Input } from '../LoginForm/style';

const url = 'https://mr-daebak.herokuapp.com'
// const url = 'http://localhost:5000'

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
    const [idChecked, setIdChecked] = useState(false);
    const [nameChecked, setNameChecked] = useState(false);
    const [btnActivation, setBtnActivation] = useState(false);
    const inputRef_id = useRef(null);
    const inputRef_name = useRef(null);
    const inputContRef_id = useRef(null);
    const inputContRef_name = useRef(null);

    const verifyId = useCallback(async () => {
        if(idChecked) return;

        await axios.post(url+'/duplicate_id', {
                user_id : id
            }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            if(res.data.check_id_dup && confirm('사용가능한 아이디입니다. 사용하시겠습니까?')) {
                setIdChecked(true);
                inputRef_id.current.setAttribute('readonly', 'readonly');
                inputRef_id.current.style.backgroundColor = '#dfdfdf'
                inputContRef_id.current.style.backgroundColor = '#dfdfdf'
            } else {
                alert('이미 사용 중인 아이디입니다.');
            }
        })
        .catch(err => console.error(err));
    }, [id, idChecked]);

    const verifyName = useCallback(async () => {
        if(nameChecked) return;

        await axios.post(url+'/duplicate_name', {
            user_name : name
        }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if(res.data.check_name_dup && confirm('사용가능한 이름입니다. 사용하시겠습니까?')) {
            setNameChecked(true);
            inputRef_name.current.setAttribute('readonly', 'readonly');
            inputRef_name.current.style.backgroundColor = '#dfdfdf'
            inputContRef_name.current.style.backgroundColor = '#dfdfdf'
        } else {
            alert('이미 사용 중인 이름입니다.');
        }
    })
    .catch(err => console.error(err));
    }, [name, nameChecked]);
    
    return (
        <Form style={{height:'400px', marginTop:'30px'}} onSubmit={e => { e.preventDefault(); }}>
            <InputContainer style={{width:'70%'}} ref={inputContRef_id}>
                <Input2 ref={inputRef_id} type="text" value={id} placeholder="아이디" autoComplete="off" onChange={onChangeId} />
                <VerifyBtn className="btn-hover" onClick={verifyId}>중복확인</VerifyBtn>
            </InputContainer>
            <InputContainer style={{width:'70%'}} ref={inputContRef_name}>
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