import React from 'react';

import { ContentCard, NameCard } from '../OrderForm/style';

const OrderResultCard = ({ orderInfo }) => {
    return (
        <ContentCard style={{flexWrap:'wrap', padding:'20px'}}>
            <div style={{width:'100%', height:'30px'}}>
                <NameCard style={{marginRight:'20px'}}>
                    {orderInfo.userName} 님께서 주문 하셨습니다.
                </NameCard>
            </div>
            <div style={{display:'flex', flexWrap:'wrap', width:'100%', height:'30px'}}>
                <NameCard style={{margin:'0 6px 0 0'}}>
                    {orderInfo.dinnerName}
                </NameCard>
                <NameCard style={{margin: '0 6px'}}>
                    /
                </NameCard>
                <NameCard style={{margin: '0 6px'}}>
                    {orderInfo.dinnerStyle}
                </NameCard>
                <NameCard style={{margin: '0 6px'}}>
                    /
                </NameCard>
                <NameCard style={{margin: '0 6px'}}>
                    {orderInfo.mealNum}인 식사
                </NameCard>
                <NameCard style={{margin: '0 6px'}}>
                    /
                </NameCard>
                <NameCard style={{margin: '0 0 0 6px'}}>
                    {orderInfo.resTime}
                </NameCard>
            </div>
            <div style={{width:'100%', marginTop:'20px'}}>
                <NameCard style={{fontSize: '1rem'}}>
                    배달주소 : {orderInfo.address}
                </NameCard>
            </div>
            <div style={{width:'100%', marginTop:'20px'}}>
                <NameCard style={{fontSize: '1rem', borderBottom:'1px solid #7c7a79'}}>
                    옵션
                </NameCard>
                <NameCard style={{fontSize: '1rem'}}>
                    {orderInfo.options.map(op => {
                        let desc = '';
                        if(op.detail === 'remove') {
                            desc = '삭제';
                        } else if(op.detail.trim() === 'add') {
                            desc = '추가';
                        } else if(op.detail === 'sizeup') {
                            desc = '사이즈업';
                        } else if(op.detail === 'add sizeup') {
                            desc = '추가 & 사이즈업'
                        }
                        return (
                            <div style={{margin:'3px 0'}}>
                            {op.menuName} {desc}
                            </div>
                        );
                    })}
                </NameCard>
            </div>
        </ContentCard>
    );
};

export default OrderResultCard;