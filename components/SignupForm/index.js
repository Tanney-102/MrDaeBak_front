import React, { useCallback, useState, useRef, useEffect } from 'react'
import axios from 'axios';

import useInput from '../../hooks/useInput';
import { Form, Title, ButtonContainer, Button} from '../LoginForm/style';
import {VerifyBtn, InputContainer2, Input2, Indicator} from './style';

const SignupForm = () => {
    const [id, onChangeId] = useInput('');
    const [name ,onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [password2, onChangePassword2] =useInput('');
    const [idFocus, setIdFocus] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);
    const [pwFocus, setPwFocus] = useState(false);
    const [pw2Focus, setPw2Focus] = useState(false);
    const [idChecked, setIdChecked] = useState(false);
    const [nameChecked, setNameChecked] = useState(false);
    const [validPw, setValidPw] = useState(false);
    const [pwChecked, setPwChecked] = useState(false);
    const [btnActivation, setBtnActivation] = useState(false);
    const inputRef_id = useRef(null);
    const inputRef_name = useRef(null);
    const inputContRef_id = useRef(null);
    const inputContRef_name = useRef(null);
    const formdataRef = useRef(null);

    const verifyId = useCallback(async () => {
        if(idChecked) return;
        if(id.length < 5 || id.length > 15) {
            alert("5~15자의 아이디를 입력해주세요.");
            console.log(id);
            return;
        }

        await axios.post('/duplicate_id', {
                user_id : id
            }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            if(res.data.check_id_dup) {
                if(confirm('사용가능한 아이디입니다. 사용하시겠습니까?')) {
                    setIdChecked(true);
                    inputRef_id.current.setAttribute('readonly', 'readonly');
                    inputRef_id.current.style.backgroundColor = '#dfdfdf'
                    inputContRef_id.current.style.backgroundColor = '#dfdfdf'
                }
            } else {
                alert('이미 사용 중인 아이디입니다.');
            }
        })
        .catch(err => console.error(err));
    }, [id, idChecked]);

    const verifyName = useCallback(async () => {
        if(nameChecked) return;
        if(!name.length) {
            alert("한 글자 이상의 닉네임을 입력해주세요.");
            return;
        }

        await axios.post('/duplicate_name', {
            user_name : name
        }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if(res.data.check_name_dup) {
            if(confirm('사용가능한 닉네임입니다. 사용하시겠습니까?')) {
                setNameChecked(true);
                inputRef_name.current.setAttribute('readonly', 'readonly');
                inputRef_name.current.style.backgroundColor = '#dfdfdf'
                inputContRef_name.current.style.backgroundColor = '#dfdfdf'
            }
        } else {
            alert('이미 사용 중인 닉네임입니다.');
        }
    })
    .catch(err => console.error(err));
    }, [name, nameChecked]);

    const isValidPw = useCallback((e) => {
        onChangePassword(e);

        if(/^[a-zA-Z0-9]{8,15}$/.test(e.target.value)) {
            setValidPw(true);
        } else {
            setValidPw(false);
        }

    }, [password]);

    const verifyPw = useCallback((e) => {
        onChangePassword2(e);

        if(password === e.target.value) {
            setPwChecked(true);
        } else {
            setPwChecked(false);
        }
    }, [password, password2]);

    const submitSignupData = useCallback(async (e) => {
        if(!btnActivation) {
            console.log('false');
            return;
        }

        const data = new FormData(formdataRef.current);
        data.append('check_id_dup', idChecked.toString());
        data.append('check_name_dup', nameChecked.toString());

        await axios.post('/signin_db', data)
        .then(res => {
            alert("가입에 성공했습니다! 로그인해주세요.");
            location.href="/"
        })
        .catch(err => console.error(err));
    }, []);
    
    useEffect(() => {
        if(idChecked && nameChecked && validPw && pwChecked) {
            setBtnActivation(true);
        } else {
            setBtnActivation(false);
        }
    }, [idChecked, nameChecked, validPw, pwChecked]);

    return (
        <Form 
            onSubmit={(e) => {e.preventDefault();}}
            ref={formdataRef}
            name="signup"
            style={{height:'400px', marginTop:'30px'}} 
            >
            <Title style={{width:'70%', fontSize: '1.5rem'}}>정보입력</Title>
            {/* id input */}
            <InputContainer2 ref={inputContRef_id}>
                <Input2 ref={inputRef_id} type="text" value={id} placeholder="아이디" autoComplete="off"
                    name="user_id"
                    onChange={onChangeId} 
                    onFocus={()=>setIdFocus(true)}
                    />
                <VerifyBtn className="btn-hover" onClick={verifyId}>중복확인</VerifyBtn>
            </InputContainer2>
            <Indicator style={{color:idChecked?'':'#B36A59'}}>
                {idChecked ? '사용 가능한 아이디입니다.' : idFocus && '아이디 중복확인을 해주세요'}
            </Indicator>
            {/* name input */}
            <InputContainer2 ref={inputContRef_name}>
                <Input2 ref={inputRef_name} type="text" value={name} placeholder="닉네임" autoComplete="off"
                    name="user_name"
                    onChange={onChangeName} 
                    onFocus={()=>setNameFocus(true)}
                    />
                <VerifyBtn className="btn-hover" onClick={verifyName}>중복확인</VerifyBtn>
            </InputContainer2>
            <Indicator style={{color:nameChecked?'':'#B36A59'}}>
                {nameChecked ? '사용 가능한 닉네임입니다.' : nameFocus && '닉네임 중복확인을 해주세요'}
            </Indicator>
            {/* pw input */}
            <InputContainer2>
                <Input2 type="password" value={password} placeholder="비밀번호" autoComplete="off" 
                    name="user_password"
                    onChange={isValidPw} 
                    onFocus={()=>setPwFocus(true)}
                    />
            </InputContainer2>
            <Indicator style={{color:validPw?'':'#B36A59'}}>
                {validPw ? '사용 가능한 비밀번호입니다.' : pwFocus && '영어 대소문자와 숫자로 이루어진 8~15자의 비밀번호를 사용하세요.'}
            </Indicator>
            {/* pw verify input */}
            <InputContainer2>
                <Input2 type="password" value={password2} placeholder="비밀번호 확인" autoComplete="off" 
                    onChange={verifyPw} 
                    onFocus={()=>setPw2Focus(true)}
                    />
            </InputContainer2>
            <Indicator style={{color:pwChecked?'':'#B36A59'}}>
                {pwChecked ? '비밀번호가 일치합니다.' : pw2Focus && '비밀번호가 일치하지 않습니다.'}
            </Indicator>
            <ButtonContainer style={{width:'70%', justifyContent:'flex-end'}}>
                <Button 
                onClick={submitSignupData}
                className={btnActivation ? "btn-hover" : ""}
                style={{
                    width:'30%',
                    backgroundColor: btnActivation?'#4c4a49':'rgba(76, 74, 73, 0.55)'
                    }}>
                    회원가입
                </Button>
            </ButtonContainer>
        </Form>
    );
};

export default SignupForm;