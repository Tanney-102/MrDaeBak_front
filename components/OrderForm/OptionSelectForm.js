import React, { useState ,useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import { FormContainer, ContentCard, OptionLi, NameCard, Title, SizeUpBtn, SubmitBtn } from './style';
import { optionsDummy } from './dummy';
import LoadingPage from '../LoadingPage';
import { setDinnerOption } from '../../reducers/order';



const OptionSelectForm = ({ dinnerId }) => {
    const [originalOpt, setOriginalOpt] = useState(null);
    const [optionList, setOptionList] = useState({});
    const [extraBtnAct, setExtraBtnAct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    const getOpList = useCallback(async () => {
        const options = await axios.get(`/options?dinnerId=${dinnerId}`)
            .then(res => res.data)
            .catch(err => console.error(err));
        return options;
    }, []);

    const sizeup = useCallback((idx) => {
        setExtraBtnAct(prev => {
            const newState = [...prev];
            newState[idx] ^= 1;

            return newState;
        });
    }, []);

    const removeOption = useCallback((idx) => {
        const opList = [];
        optionList.options.forEach(v => {
            const tmp = {...v};
            opList.push(tmp);
        });

        const extList = [];
        optionList.extra.forEach(v => {
            const tmp = {...v};
            extList.push(tmp);
        });

        extList.push({
            menuId: opList[idx].menuId,
            menuName: opList[idx].menuName,
            normalPrice: opList[idx].normalPrice,
            extraPrice: opList[idx].extraPrice,
        });

        for(let i = idx+1; i < opList.length; i++) {
            opList[i-1] = opList[i];
        }
        opList.pop();

        const btnAct = [...extraBtnAct];
        for(let i = idx+1; i < btnAct.length; i++) {
            btnAct[i-1] = btnAct[i];
        }
        btnAct.pop();

        setOptionList(prev => {
            return {
                options: opList,
                extra: extList,
            }
        });

        setExtraBtnAct(btnAct);
    }, [optionList, extraBtnAct]);

    const onClickOptionCard = useCallback((e) => {
        const sizeupBtnIdx = e.target.dataset.sizeupBtn;
        const minusIconIdx = e.target.dataset.minusIcon;

        if(sizeupBtnIdx !== undefined) {
            sizeup(parseInt(sizeupBtnIdx));
        } else if(minusIconIdx!== undefined) {
            removeOption(parseInt(minusIconIdx));
        }
    }, [optionList, extraBtnAct]);

    ////
    const onClickExtraCard = useCallback((e) => {
        let idx = e.target.dataset.plusIcon;
        if(idx === undefined) {
            return;
        }

        idx = parseInt(idx);

        const opList = [];
        optionList.options.forEach(v => {
            const tmp = {...v};
            opList.push(tmp);
        });

        const extList = [];
        optionList.extra.forEach(v => {
            const tmp = {...v};
            console.log(tmp);
            extList.push(tmp);
        });
        console.log(extList[idx]);
        opList.push({
            ...extList[idx],
            size: 1,
            measure: '',
        });

        console.log(opList);

        for(let i = idx+1; i < extList.length; i++) {
            extList[i-1] = extList[i];
        }
        extList.pop();

        setOptionList(prev => {
            return {
                options: opList,
                extra: extList,
            }
        });

        setExtraBtnAct(prev => {
            const newState = [...prev];
            newState.push(0);
            return newState;
        });

    }, [optionList, extraBtnAct]);

    ////
    const setOptionInfo = useCallback(() => {
        const data = [];

        optionList.options.forEach((v, i) => {
            let detail = '';
            let price = 0
            if(!originalOpt.has(v.menuId)) {
                detail += 'add ';
                price += v.normalPrice;
            }
            if(extraBtnAct[i]) {
                detail += 'sizeup';
                if(v.measure === '') {
                    price += v.extraPrice - v.normalPrice;
                } else {
                    let small = 0;
                    if(v.measure === 'cup' || v.measure === 'glass' || v.measure === 'piece') {
                        small = 1;
                    }
                    price += (Math.ceil(v.size * 1.5) - v.size) * (small ? v.normalPrice : v.extraPrice);
                }    
            }

            if(detail !== '') {
                const tmp = {
                    menuId: v.menuId,
                    detail,
                    price,
                };
                data.push(tmp);
            }
        });

        optionList.extra.forEach(v => {
            if(originalOpt.has(v.menuId)) {
                data.push({
                    menuId: v.menuId,
                    detail: 'remove',
                    price: -(v.normalPrice - 1000),
                });
            }
        });

        dispatch(setDinnerOption(data));
    }, [originalOpt, optionList, extraBtnAct]);

    ////
    useEffect(async () => {
        getOpList()
        .then(res => {
            const origin = new Set();
            res.options.forEach(v => {
                origin.add(v.menuId);
            });

            setOptionList(res);
            setExtraBtnAct(Array(res.options.length).fill(0));
            setOriginalOpt(origin);
        })
        .then(() => setLoaded(true));
    }, []);

    return (
        <>
        {loaded ?
        <FormContainer>
            <ContentCard 
                onClick={onClickOptionCard}
                style={{
                    flexWrap:'wrap', 
                    padding:'30px 0 20px',
                    justifyContent:'center',
                    }}>
                <Title style={{
                    fontSize:'1.4rem',
                    width:'90%',
                }}>
                    옵션
                </Title>
                {optionList.options.map((option, i) => {
                    // console.log(option);
                    return (
                        <OptionLi key={option.menuName + i}>
                            <div style={{display:'flex'}}>
                                <NameCard style={{marginRight:'10px'}}>
                                    {option.menuName}
                                </NameCard>
                                <div style={{
                                    fontSize:"0.9rem",
                                    color:"#9c9a99"
                                }}>
                                    {option.measure === '' 
                                    ? (extraBtnAct[i] ? 'extra' : 'normal')
                                    : Math.ceil(parseInt(option.size) * (extraBtnAct[i] ? 1.5 : 1)) + option.measure
                                    }
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <SizeUpBtn 
                                    style={{
                                        backgroundColor: extraBtnAct[i] ? '#3D7365' : '',
                                        color: extraBtnAct[i] ? '#eee' : '',
                                    }}
                                    className="btn-hover" 
                                    data-sizeup-btn={i}
                                    >
                                        size up
                                    </SizeUpBtn>
                                    {option.measure === '' &&
                                    <button 
                                        data-minus-icon={i}
                                        className="btn-hover">
                                        <FontAwesomeIcon 
                                            data-minus-icon={i}
                                            className="btn-hover"
                                            icon={faMinusCircle} 
                                            style={{
                                                color:'red',
                                                fontSize:'0.9rem',
                                        }} />
                                    </button>}
                            </div>
                        </OptionLi>
                    );
                })}
            </ContentCard>
            <ContentCard 
                onClick={onClickExtraCard}
                style={{
                    borderStyle:'dashed',
                    flexWrap:'wrap', 
                    padding:'30px 0 20px',
                    justifyContent:'center',
                    }}>
                <Title style={{
                        fontSize:'1.4rem',
                        width:'90%',
                    }}>
                    추가하기
                </Title>
                {optionList.extra.map((list, i) => {
                    // console.log(list);
                    return (
                        <OptionLi key={list.menuName+i}>
                            <NameCard>
                                {list.menuName}
                            </NameCard>
                            <button 
                                data-minus-icon={i}
                                className="btn-hover"
                                >
                                <FontAwesomeIcon 
                                        data-plus-icon={i}
                                        className="btn-hover"
                                        icon={faPlusCircle} 
                                        style={{
                                            color:'green',
                                            fontSize:'0.9rem',
                                        }}
                                        />
                            </button>
                        </OptionLi>
                    );
                })}
            </ContentCard>
            <SubmitBtn className="btn-hover" onClick={setOptionInfo}>
                다음
            </SubmitBtn>
        </FormContainer> :
        <LoadingPage />}
        </>
    );
};

export default OptionSelectForm