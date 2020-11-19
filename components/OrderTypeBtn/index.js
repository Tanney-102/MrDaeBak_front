import React, { useState, useCallback } from 'react';
import Proptypes from 'prop-types';
import Link from 'next/link';

import { OrderTypeBtnCont, OrderBtn } from './style';

const OrderTypeBtn = ({ loginBtnCallback }) => {
    const [clicked, setClicked] = useState(false);

    const clickOrderTypeBtn = useCallback(() => {
        setClicked(true);
    }, []);

    const orderASGuest = useCallback(() => {

    },[]);

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
};

export default OrderTypeBtn;