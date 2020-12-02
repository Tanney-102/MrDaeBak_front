import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, Sub, BackBtn } from './style';
import { backToDinner, backToStyle, backToOption, backToTimeSel } from '../../reducers/order';
import DinnerSelectForm from './DinnerSelectForm';
import StyleSelectForm from './StyleSelectForm';
import OptionSelectForm from './OptionSelectForm';
import OrderInfoForm from './OrderInfoForm';
import TimeSelectForm from './TimeSelectForm';

const switchSubTitle = (step) => {
    switch(step) {
        case 1:
            return 'Dinner';
        case 2:
            return 'Style';
        case 3:
            return 'Options';
        case 4:
            return 'Time';
        case 5:
            return 'Info'
        default:
            return '';
    }
};

const switchSelectForm = (step, dinnerId) => {
    switch(step) {
        case 1:
            return <DinnerSelectForm />;
        case 2:
            return <StyleSelectForm />;
        case 3:
            return <OptionSelectForm dinnerId={dinnerId} />;
        case 4:
            return <TimeSelectForm />;
        case 5:
            return <OrderInfoForm />
        default:
            return '';
    }
};

const OrderForm = () => {
    const { step, dinnerId } = useSelector(state => state.order);
    const dispatch = useDispatch();

    const onClickBackBtn = useCallback(() => {
        switch(step) {
            case 2:
                dispatch(backToDinner());
                break;
            case 3:
                dispatch(backToStyle());
                break;
            case 4:
                dispatch(backToOption());
                break;
            case 5:
                dispatch(backToTimeSel());
            default:
                break;
        }
    }, [step]);

    return (
        <Container>
            <Title>
                주문하기
                <Sub>{switchSubTitle(step)}</Sub>
                {(step > 1 && step < 5) && <BackBtn className="btn-hover" onClick={onClickBackBtn}>뒤로</BackBtn>}
            </Title>
            {switchSelectForm(step, dinnerId)}
        </Container>
    );
};

export default OrderForm;