import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'

import { FormContainer, ContentCard, NameCard, 
        SelectBtn, ToggleBtn, Drop, SubmitBtn, SoldOut } from './style';
import { setDinnerName } from '../../reducers/order';
import LoadingPage from '../LoadingPage';

const getDinnerState = async () => {
    const dinnerState = await axios.get('/orderstate')
        .then(res => res.data)
        .catch(err => console.error(err))

    return dinnerState;
};

const DinnerSelectForm = () => {
    const [loaded, setLoaded] = useState(false);
    const [dinnerList, setDinnerList] = useState([]);
    const [selectedIdx, setSelectedIdx] = useState(-1);
    const [detailBtnAct, setDetailBtnAct] = useState([]);
    const dispatch = useDispatch();

    const selectDinner = useCallback((e) => {
        const btnIdx = e.target.dataset.btnIndex;
        const detailIdx = e.target.dataset.detailIndex;

        if(btnIdx !== undefined) {
            if(dinnerList[btnIdx].orderable === 'false') {
                return;
            }
            setSelectedIdx(btnIdx);
        } else if(detailIdx !== undefined) {
            setDetailBtnAct((prev) => {
                const newState = Array(dinnerList.length).fill(0);
                newState[detailIdx] = prev[detailIdx] ^ 1;

                return newState;
            });
        }
    }, [dinnerList]);

    const setDinnerInfo = () => {
        if(selectedIdx === -1) {
            alert('디너를 선택해주세요');
            return;
        }

        const info = dinnerList[selectedIdx];

        dispatch(setDinnerName(info));
    };

    useEffect(() => {
        let len = 0;

        getDinnerState()
        .then(res => {
            setDinnerList(res)
            setDetailBtnAct(Array(res.length).fill(0));

            len = res.length;            
        })
        .then(() => setLoaded(true));

        const deactDetailBtn = (e) => {
            if(e.target.dataset.detailIndex === undefined) {
                setDetailBtnAct(Array(len).fill(0));
            }
        }

        document.addEventListener('click', deactDetailBtn);

        return () => {
            document.removeEventListener('click', deactDetailBtn);
        }
    }, []);

    return (
        <>
        {!loaded ? <LoadingPage />:
        <FormContainer onClick={selectDinner}>
            {dinnerList.map((content, i) => {
                return (
                <ContentCard 
                    key={content.dinnerName + i}
                    style={{
                        boxShadow:parseInt(selectedIdx)===i?'0 0 4px 3px #9Dd3c5':'',
                        borderColor:content.orderable==='false'?'#c4c2c1':'',
                    }}
                    >
                    <div style={{display:'flex'}}>
                        <NameCard style={{
                                borderBottom:parseInt(selectedIdx)===i?'1px dashed #8c8a89':'',
                                color:content.orderable==='false'?'#c4c2c1':'',
                            }}>
                            {content.dinnerName}
                        </NameCard>
                        {content.orderable === 'true' &&
                        <ToggleBtn className="btn-hover" data-detail-index={i}>
                            {detailBtnAct[i] ? '접기' : '상세정보'}
                        </ToggleBtn>
                        }
                        <div style={{position:'relative', zIndex:'3'}}>
                            {detailBtnAct[i] ? <Drop>
                                가격 : {content.price}원
                                <br />
                                메뉴 구성:
                                <br />
                                <ul>
                                {content.details.map(menu => {
                                    return (
                                        <li key={menu.menuName}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {menu.menuName}&nbsp;&nbsp;
                                            {menu.measure !== '' &&
                                            <>
                                            {menu.size}&nbsp;
                                            {menu.measure}
                                            </>}
                                        </li>
                                    );
                                })}
                                </ul>
                            </Drop> : ''}
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        {content.orderable === 'false' &&
                            <SoldOut>sold out</SoldOut>
                            }
                        <SelectBtn 
                            className="btn-hover" 
                            data-btn-index={i}
                            style={{backgroundColor:content.orderable==='false'?'#c4c2c1':''}}
                            >
                            선택
                        </SelectBtn>
                    </div>
                </ContentCard>
                );
            })}
            <SubmitBtn className="btn-hover" onClick={setDinnerInfo}>
                다음
            </SubmitBtn>
        </FormContainer>}
        </>
    );
}

export default DinnerSelectForm;