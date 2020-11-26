import React, { useState, useCallback, useEffect } from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { OrderTypeBtnCont, OrderBtn } from './style';
import { LOG_IN } from '../../reducers/user';

const OrderTypeBtn = ({ loginBtnCallback, curPage }) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();

    const clickOrderTypeBtn = useCallback(() => {
        setClicked(true);
    }, []);

    const orderASGuest = useCallback(() => {
        dispatch({
            type : LOG_IN,
            data: {
                userId: 'guest',
                userName: 'guest',
                address: '',
                classification: 'guest'
            }
        });
    },[]);

    useEffect(() => {
        if(curPage===0)
            setClicked(false);
    }, [curPage]);

    return (
        <OrderTypeBtnCont>
            {clicked ?
            <>
            <OrderBtn className="btn-hover" onClick={loginBtnCallback}>
                회원 주문
            </OrderBtn><br />
            <OrderBtn className="btn-hover" onClick={orderASGuest}>
                비회원 주문
            </OrderBtn>
            </>
            :
            <OrderBtn className="btn-hover" onClick={clickOrderTypeBtn}>
                바로 주문하기
            </OrderBtn>}
        </OrderTypeBtnCont>
    );
}

OrderTypeBtn.propTypes = {
    loginBtnCallback: Proptypes.func.isRequired,
    curPage: Proptypes.number.isRequired,
};

export default OrderTypeBtn;