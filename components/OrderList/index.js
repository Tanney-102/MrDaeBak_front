import React, { useEffect, useState } from 'react';

import LoadingPage from '../LoadingPage';
import OrderResultCard from '../OrderResultCard';
import { Container, NameCard, FormContainer } from '../OrderForm/style';
import Axios from 'axios';

const OrderList = () => {
    const [loaded, setLoaded] = useState(false);
    const [orderInfo, setOrderInfo] = useState(null);
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00']

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
    }, []);

    return(
        <>
        {!loaded ? <LoadingPage /> :
        <Container style={{overflow:'scroll'}}>
            {times.map(t => {
                return(
                    <>
                        <NameCard style={{alignSelf:'flex-start'}}>
                            {t}
                        </NameCard>
                        {orderInfo[t].length ? orderInfo[t].map(info => {
                            return <OrderResultCard orderInfo={info} />
                        }) : 
                        <NameCard style={{margin:'80px 0'}}>
                            예약 내역이 존재하지 않습니다.
                        </NameCard>
                        }
                        <div style={{
                            width:'100%',
                            height:'1px',
                            margin:'50px 0',
                            borderBottom: '2px dashed #6c6a69'
                        }}> </div>
                    </>
                );
            })}
        </Container>}
        </>
    );
};

export default OrderList;