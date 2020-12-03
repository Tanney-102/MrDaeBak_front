import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import useWindowSize from '../../hooks/useWindowSize';
import { Main, Content, Title, Th, Td, SmallBtn, Input } from './style';
import LoadingPage from '../LoadingPage';


const StockPage = () => {
    const winSize = useWindowSize();
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [tmpData, setTmpData] = useState([]);
    const [updateMode, setUpdateMode] = useState(false);

    const getStockInfo = useCallback( async () => {
        await axios.get('/stock/read')
        .then(res => {
            setData(res.data);
            setLoaded(true);
        })
        .catch(err => {
            setLoaded(true)
            console.error(err);
            alert('데이터를 불러올 수 없습니다. : ' + err);
        });
    }, []);

    const changeMode = useCallback(() => {
        setUpdateMode(true);
        setTmpData(data);
    }, [data]);

    const saveData = useCallback(async () => {
        setLoaded(false);
        setUpdateMode(false);

        await axios.post('/stock/update', data)
        .then(res => {
            getStockInfo();
        })
        .catch(err => {
            setLoaded(true);
            console.error(err);
            alert('오류가 발생했습니다. : ' + err);
        });
    }, [data]);

    const cancelUpdate = useCallback(() => {
        setData(tmpData);
        setUpdateMode(false);
    }, [tmpData]);

    useEffect(() => {
        getStockInfo();
    }, []);

    return (
        <>
        {!loaded ?
        <LoadingPage /> :
        <Main style={{minHeight:winSize[1], overflow:'auto'}}>
            <Content>
                <div style={{display:'flex',alignItems:'flex-end', width:'100%', marginBottom:'30px'}}>
                    <Title>
                        재고 정보
                    </Title>
                    {updateMode
                    ? 
                    <>
                        <SmallBtn className="btn-hover" onClick={saveData}>
                            저장
                        </SmallBtn>
                        <SmallBtn className="btn-hover" onClick={cancelUpdate}>
                            취소
                        </SmallBtn>
                    </>
                    :
                    <SmallBtn className="btn-hover" onClick={changeMode}>
                        수정
                    </SmallBtn>}
                </div>
                <table style={{width:'100%'}}>
                    <thead>
                        <tr style={{display:'flex'}}>
                            <Th style={{width:'30px'}}>No</Th>
                            <Th style={{width:'36%'}}>메뉴 이름</Th>
                            <Th style={{width:'80px'}}>수량</Th>
                            <Th style={{width:'54%'}}>비고</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((v, i) => {
                            return(
                            <tr style={{display:'flex'}} key={v.menu_id}>
                                <Td style={{width:'30px'}}>{i+1}</Td>
                                <Td style={{width:'36%'}}>
                                    {updateMode
                                    ? <Input 
                                            type="text" 
                                            value={v.menu_name}
                                            autoComplete="off" 
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    const newData = [...prevData];
                                                    newData[i] = {
                                                        ...prevData[i],
                                                        menu_name: e.target.value,
                                                    }
                                                    return newData
                                                })}} />
                                    : v.menu_name}
                                </Td>
                                <Td style={{width:'80px'}}>
                                    {updateMode 
                                    ? <Input 
                                            type="number"
                                            value={v.stock}
                                            autoComplete="off"
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    const newData = [...prevData];
                                                    newData[i] = {
                                                        ...prevData[i],
                                                        stock: e.target.value,
                                                    }
                                                    return newData;
                                                })}} />
                                    : v.stock}
                                </Td>
                                <Td style={{width:'54%'}}>
                                    {updateMode
                                    ? <Input 
                                            type="text"
                                            value={v.note}
                                            autoComplete="off"
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    const newData = [...prevData];
                                                    newData[i] = {
                                                        ...prevData[i],
                                                        note: e.target.value,
                                                    }
                                                    return newData;
                                                })}} />
                                    : v.note}
                                </Td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Content>
        </Main>}
        </>
    );
};

export default StockPage;