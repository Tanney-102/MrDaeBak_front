import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { FormContainer, ContentCard, InfoContainer, NameCard, Input, MealNum, SubmitBtn } from './style';
import useInput from '../../hooks/useInput';
import { goToResult } from '../../reducers/order';

const OrderInfoForm = () => {
    const [paymentInfo, onChangePaymentInfo] = useInput('');
    const [address, setAddress] = useState('');
    const [mealNum, setMealNum] = useState('0');
    const [pay, setPay] = useState(0);
    const selectRef = useRef(null);
    const dispatch = useDispatch();
    const { dinnerId, dinnerName, dinnerStyle, option,
            special, price, stylePrice, optionPrice, time } = useSelector(state => state.order);
    const { userInfo, isLoggedIn } = useSelector(state => state.user);

    const onChangeAddress = useCallback((e) => {
        setAddress(e.target.value);
    }, []);

    const onChangeMealNum = useCallback((e) => {
        setMealNum(e.target.value);
    }, []);

    const submitOrder = useCallback(async () => {
        if(address === '') {
            alert('주소를 입력해주세요.');
            return;
        } else if(paymentInfo === '') {
            alert('카드 정보를 입력해주세요.');
            return;
        } else if(parseInt(mealNum) === 0) {
            alert('식사 인원을 선택해주세요.');
            return;
        }

        const orderInfo = {
            userId: userInfo.userId,
            mealNum: parseInt(mealNum),
            resTime: time,
            address,
            paymentInfo,
            dinnerInfo: {
                dinnerId,
                dinnerName,
                dinnerStyle,
                options: [...option],
            }
        }

        await axios.post('/order', orderInfo)
            .then(res => {
                if(res.data.success === 'success') {
                    dispatch(goToResult(mealNum, address));
                } else {
                    alert('주문에 실패했습니다.')
                }
            })
            .catch(err => console.error(err));
    }, [address, paymentInfo, mealNum]);

    const getRecentAddress = useCallback(() => {
        console.log(userInfo.address);
        if(userInfo.address === '') {
            alert('최근 주소가 존재하지 않습니다.');
            return;
        } else {
            setAddress(userInfo.address);
        }
    }, []);

    useEffect(() =>{
        if(special === 'true') {
            setMealNum('2');
            selectRef.current.setAttribute('disabled', 'disabled');
        }   
    }, []);

    useEffect(() => {
        if(special === 'true') {
            setPay(price+stylePrice+optionPrice);
        } else {
            setPay((price+stylePrice+optionPrice)*parseInt(mealNum));
        }
    }, [mealNum])

    return (
        <FormContainer>
            <ContentCard style={{flexDirection:'column', padding:'50px 0'}}>
                <InfoContainer style={{margin:'15px 0', position:'relative'}}>
                    <NameCard style={{fontSize: '1.3rem'}}>주소</NameCard>
                    <Input type="text" value={address} onChange={onChangeAddress} />
                    <div 
                        className="btn-hover" 
                        onClick={getRecentAddress}
                        style={{
                            fontSize:'0.8rem',
                            position:'absolute',
                            top: '-20px',
                            right: '15px',
                    }}>
                        최근 주소 가져오기
                    </div>
                </InfoContainer>
                <InfoContainer style={{margin:'15px 0'}}>
                    <NameCard style={{fontSize: '1.3rem'}}>카드번호</NameCard>
                    <Input type="text" value={paymentInfo} onChange={onChangePaymentInfo} />
                </InfoContainer>
                <InfoContainer style={{margin:'15px 0'}}>
                    <NameCard style={{fontSize: '1.3rem'}}>식사 인원</NameCard>
                    <MealNum>
                        <select 
                            ref={selectRef}
                            value={mealNum} 
                            onChange={onChangeMealNum} 
                            style={{
                                width: '60px',
                                height: '25px'
                            }}>
                            <option value="0">선택</option>
                            <option value="1">1인</option>
                            <option value="2">2인</option>
                            <option value="3">3인</option>
                            <option value="4">4인</option>
                        </select>
                    </MealNum>
                </InfoContainer>
                {(special === 'true') &&
                <div>* 해당 메뉴는 2인 주문만 가능합니다</div>}
                <InfoContainer style={{
                    margin:'15px 0', 
                    borderTop:'1px solid #acaaa9',
                    justifyContent: 'flex-end',
                    padding: '30px 20px 0',
                    }}>
                        <NameCard>
                            {userInfo.classification === 'vip' 
                            ? <del>결제 예정 금액 : {pay}원</del>
                            : <>결제 예정 금액 : {pay}원</>}
                            {userInfo.classification === 'vip' &&
                            <>
                            <br />
                            <br />
                            VIP 할인 적용 : <span style={{color: 'red'}}>{pay*(85/100)}</span>원
                            </>}
                        </NameCard>
                </InfoContainer>
            </ContentCard>
            <SubmitBtn className="btn-hover" onClick={submitOrder}>주문하기</SubmitBtn>
        </FormContainer>
    );
};

export default OrderInfoForm;