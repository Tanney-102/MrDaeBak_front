import React, { useState, useCallback } from 'react';

import { OrderTypeBtnCont, OrderBtn } from './style';

const OrderTypeBtn = () => {
    const [clicked, setClicked] = useState(false);

    const clickOrderTypeBtn = useCallback(() => {
        setClicked(true);
    }, []);

    return (
        <OrderTypeBtnCont>
            {clicked ?
            <>
            <OrderBtn className="btn-hover">
                회원 주문
            </OrderBtn><br />
            <OrderBtn className="btn-hover">
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

export default OrderTypeBtn;