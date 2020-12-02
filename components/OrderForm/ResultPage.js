import React from 'react';
import { useSelector } from 'react-redux';

import { FormContainer, ContentCard, NameCard } from './style';
import OrderResultCard from '../OrderResultCard'

const ResultPage = () => {
    const { dinnerName, dinnerStyle, option, mealNum, address, time } = useSelector(state => state.order);
    const { userInfo } = useSelector(state => state.user);

    const orderInfo = {
        dinnerName,
        dinnerStyle,
        mealNum,
        userName: userInfo.userName,
        address,
        paymentInfo: '',
        options: [...option],
        resTime: time,
    }

    return (
        <FormContainer>
            <NameCard style={{alignSelf: 'flex-start'}}>주문내역</NameCard>
            <OrderResultCard orderInfo={orderInfo} />
        </FormContainer>
    );
};

export default ResultPage;