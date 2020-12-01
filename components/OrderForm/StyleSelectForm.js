import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import { FormContainer, ContentCard, NameCard, 
        SelectBtn, SubmitBtn, Desc } from './style';
import { setDinnerStyle } from '../../reducers/order';

const StyleSelectForm = () => {
    const [selectedIdx, setSelectedIdx] = useState('');
    const { special } = useSelector(state => state.order);
    const dispatch = useDispatch();

    const selectStyle = useCallback((e) => {
        const idx = e.target.dataset.btnIndex;

        if(idx !== undefined) {
            setSelectedIdx(idx);
        }
    }, []);

    const setStyleInfo = useCallback(() => {
        const styles = ['Simple', 'Grand', 'Deluxe'];
        dispatch(setDinnerStyle(styles[parseInt(selectedIdx)-1], special));
    }, [selectedIdx]);

    return (
        <FormContainer onClick={selectStyle}>
            {(special==='true') &&
                <div style={{
                    width:'100%',
                    position:'relative',
                    top: '-20px'
                }}>
                    * 선택하신 메뉴는 Grand와 Deluxe 스타일로만 제공됩니다.
                </div>
            }
            {(special==='false') && 
            <ContentCard style={{boxShadow:selectedIdx==='1'?'0 0 4px 3px #9Dd3c5':''}}>
                <div style={{display:'flex'}}>
                    <NameCard 
                        style={{
                            borderBottom:selectedIdx==='1'?'1px dashed #8c8a89':'',
                            width:'70px',
                            }}>
                        Simple
                    </NameCard>
                    <Desc 
                        className="btn-hover"
                        data-text="상자 접시와 플라스틱 잔, 냅칸이 플라스틱 쟁반에 제공됩니다."
                        >
                            <FontAwesomeIcon icon={faQuestionCircle} />
                    </Desc>
                </div>
                <SelectBtn className="btn-hover" data-btn-index="1">
                    선택<br />(+ 0)
                </SelectBtn>
            </ContentCard>
            }
            <ContentCard style={{boxShadow:selectedIdx==='2'?'0 0 4px 3px #9Dd3c5':''}}>
                <div style={{display:'flex'}}>
                    <NameCard 
                        style={{borderBottom:selectedIdx==='2'?'1px dashed #8c8a89':'',
                        width:'70px',
                        }}>
                        Grand
                    </NameCard>
                    <Desc
                        className="btn-hover"
                        data-text="도자기 접시와 잔, 흰색 면 냅킨이 나무 쟁반에 제공됩니다."
                        >
                            <FontAwesomeIcon icon={faQuestionCircle} />
                    </Desc>
                </div>
                <SelectBtn className="btn-hover" data-btn-index="2">
                    선택<br />{(special === 'true') ? '(+ 0)' : '(+ 4,000)'}
                </SelectBtn>
            </ContentCard>
            <ContentCard style={{boxShadow:selectedIdx==='3'?'0 0 4px 3px #9Dd3c5':''}}>
                <div style={{display:'flex'}}>
                    <NameCard 
                        style={{
                            borderBottom:selectedIdx==='3'?'1px dashed #8c8a89':'',
                            width:'70px',
                            }}>
                        Deluxe
                    </NameCard>
                    <Desc 
                        className="btn-hover"
                        data-text="도자기 접시와 컵, 유리 와인잔, 린넨 넵킨이 은쟁반에 제공되며 작은 꽃병도 함께 배달됩니다."
                        >
                            <FontAwesomeIcon icon={faQuestionCircle} />
                    </Desc>
                </div>
                <SelectBtn className="btn-hover" data-btn-index="3">
                    선택<br />{(special === 'true') ? '(+3,000)' : '(+ 7,000)'}
                </SelectBtn>
            </ContentCard>
            <SubmitBtn className="btn-hover" onClick={setStyleInfo}>
                다음
            </SubmitBtn>
        </FormContainer>
    );
};  

export default StyleSelectForm;