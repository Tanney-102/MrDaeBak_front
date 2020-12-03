import React, { useState, useCallback, useEffect } from 'react';
import { Form } from '../LoginForm/style';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

import { FormContainer, NameCard, SubmitBtn,
        TimeBtnContainer, TimeBtn, Sub } from './style';
import LoadingPage from '../LoadingPage';
import { setReservTime } from '../../reducers/order';

const TimeSelectForm = () => {
    const [loaded, setLoaded] = useState(false);
    const [orderedNum, setOrderedNum] = useState([]);
    const [orderable, setOrderable] = useState([]);
    const [btnAct, setBtnAct] = useState(-1);
    const dispatch = useDispatch();
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00'];

    const submitTimeInfo = useCallback(() => {
        if(btnAct === -1) {
            alert('예약 시간을 선택해주세요.');
            return;
        }

        dispatch(setReservTime(times[btnAct]));
    }, [btnAct]);

    useEffect(async () => {
        const _orderable = await Axios.get('/orderstate?req=orderedNum')
        .then(res => {
            console.log(res.data);
            const _nums = times.map(t => res.data[t]);
            const _orderable = times.map((t, i) => {
                return (_nums[i] < 5) && (parseInt(t.split(':')[0]) - 1 > (new Date()).getHours());
            });

            _orderable[2] = true;
            _orderable[3] = true;
            _orderable[4] = true;
            console.log(_nums);
            setOrderedNum(_nums);
            setOrderable(_orderable);
            setLoaded(true)

            return _orderable
        })
        .catch(err => console.error(err))

        const actBtn = (e) => {
            let idx = e.target.dataset.index;

            if(idx === undefined) {
                setBtnAct(-1);
                return;
            }

            idx = parseInt(idx);
            if(_orderable[idx]) {
                setBtnAct(idx);
            }
        }

        document.addEventListener('click', actBtn);

        return () => {
            document.removeEventListener('click', actBtn);
        }
    }, []);

    return (
        <>
        {!loaded ? <LoadingPage /> :
        <FormContainer style={{width:'100%'}}>
            <div style={{
                    width:'100%',
                    position:'relative',
                    top: '-40px'
                }}>
                    * 한 타임에 다섯 팀까지만 받습니다.
                    <br />
                    <br />
                    * 배달 시간으로부터 한 시간 전까지만 주문이 가능합니다.
                </div>
                <TimeBtnContainer>
                    {orderedNum.map((num, i) => {
                        return (
                        <TimeBtn 
                            className="btn-hover" 
                            data-index={i}
                            style={{
                                backgroundColor:orderable[i]?(btnAct===i?'#3D7365':''):'',
                                boxShadow:orderable[i]?(btnAct===i?'1px 1px 2px 1px #3d3335':''):'',
                                borderColor:orderable[i]?'':'#9f9f9f',
                            }}>
                            <NameCard style={{color:orderable[i]?(btnAct===i?'#eee':''):'#9f9f9f'}} data-index={i}>
                                {times[i]}
                            </NameCard>
                            <div style={{color:orderable[i]?(btnAct===i?'#eee':'#8c8a89'):'#9f9f9f'}} data-index={i}>
                                {`${num} / 5`}
                            </div>
                        </TimeBtn>
                        )
                    })}
                </TimeBtnContainer>
                <SubmitBtn className="btn-hover" onClick={submitTimeInfo}>
                    다음
                </SubmitBtn>
        </FormContainer>}
        </>
    )
};

export default TimeSelectForm;