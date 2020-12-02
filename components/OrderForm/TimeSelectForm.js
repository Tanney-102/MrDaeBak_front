import React from 'react';
import { Form } from '../LoginForm/style';

import { FormContainer, NameCard, SubmitBtn,
        TimeBtnContainer } from './style';

const TimeSelectForm = () => {
    return (
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
                <TimeSelectForm>
                    sdfsfd
                </TimeSelectForm>
        </FormContainer>
    )
};

export default TimeSelectForm;