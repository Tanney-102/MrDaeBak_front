import React, { useCallback, useEffect, useState } from 'react';

import LoadingPage from '../LoadingPage';
import OrderResultCard from '../OrderResultCard';
import { Container, NameCard, Title } from '../OrderForm/style';
import Axios from 'axios';

const OrderList = () => {
    const [loaded, setLoaded] = useState(false);
    const [orderInfo, setOrderInfo] = useState(null);
    const [btnAct, setBtnAct] = useState('-1');
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00']

    const onClickList = useCallback((e) => {
        const idx = e.target.dataset.index;
        if(idx === undefined) {
            return;
        }

        if(idx === btnAct) {
            setBtnAct('-1');
        } else {
            setBtnAct(idx);
        }
    }, [btnAct]);

    useEffect(async () => {
        await Axios.get('/reservation')
        .then(res => {
            console.log(res.data);
            setOrderInfo(res.data);
        })
        .then(() => {
            setLoaded(true)
        })
        .catch(err => console.error(err));

        const onDocument = (e) => {
            if(e.target.dataset.index === undefined) {
                setBtnAct('-1');
            }
        };
        document.addEventListener('click', onDocument);

        return () => {
            document.removeEventListener('click', onDocument);
        };
    }, []);

    return(
        <>
        {!loaded ? <LoadingPage /> :
        <Container style={{overflow:'auto', padding:'80px 0'}} onClick={onClickList}>
            <Title>예약 확인</Title>
            <div style={{
                margin:'10px 0 30px 10px',
                alignSelf:'flex-start',
            }}>
                * 예약 시간을 선택해주세요.
            </div>
            {times.map((t, i) => {
                return(
                    <>
                        <NameCard 
                            data-index={i}
                            className={`btn-hover ${parseInt(btnAct) !== i ? 'hover-shadow' : ''}`}
                            style={{
                                width:'99.5%', 
                                height:'50px', 
                                padding:'0 7px',
                                display:'flex',
                                alignItems:'center',
                                borderRadius:'4px',
                            }}>
                            {t}
                        </NameCard>
                        {parseInt(btnAct) === i ? 
                        <>
                        {orderInfo[t].length ? orderInfo[t].map(info => {
                            return <div style={{width:'98%'}}><OrderResultCard orderInfo={info} /></div>
                        }) : 
                        <NameCard style={{margin:'80px 0'}}>
                            예약 내역이 존재하지 않습니다.
                        </NameCard>}
                        <div style={{
                            width:'100%',
                            height:'1px',
                            margin:'100px 0 50px',
                            borderBottom: '2px dashed #6c6a69'
                        }}> </div>
                        </> : ''}
                    </>
                );
            })}
        </Container>}
        </>
    );
};

export default OrderList;