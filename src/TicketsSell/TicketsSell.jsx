import styles from './TicketsSell.module.css';
import { useEffect, useState } from 'react';

export const TicketsSell = () => {

    const discountedTicketCost = 600;
    const normalTicketCost = 700;
    const kidTicketCost = 500;
    const groupTicketCost = 'на 100 рублей меньше';


    const forTable1 = {
        event_id: 22,
        event_date: 333,
        total_tickets: 44,
        barcode: 55,
        user_id: 66,
        equal_price: 77,
        created: 88
    }


    const [tableState, setTableState] = useState([{
        event_id: 2,
        event_date: 3,
        total_tickets: 4,
        barcode: 5,
        user_id: 6,
        equal_price: 7,
        created: 8
    }]);
    const [countTickets, setCountTickets] = useState(1);


    const [ticketsInfo, setTicketsInfo] = useState({
        firstTicketType: 'Взрослый',
        firstTicketDate: '',
        firstTicketDirection: 'из A в B',
        firstBackTicketDate: '',
        secondTicketType: 'Взрослый',
        secondTicketDate: '',
        secondTicketDirection: 'из A в B',
        secondBackTicketDate: '',
        thirdTicketType: 'Взрослый',
        thirdTicketDate: '',
        thirdTicketDirection: 'из A в B',
        thirdBackTicketDate: '',
        fourthTicketType: 'Взрослый',
        fourthTicketDate: '',
        fourthTicketDirection: 'из A в B',
        fourthBackTicketDate: '',
        fifthTicketType: 'Взрослый',
        fifthTicketDate: '',
        fifthTicketDirection: 'из A в B',
        fifthBackTicketDate: '',
    });

    const [manyTicketsInfo, setManyTicketsInfo] = useState({
        ticketsType: 'Взрослый',
        ticketsDate: '',
        ticketsDirection: 'из A в B',
        ticketsBackDate: '',
        ticketsCount: 0
    })

    const [manyTicketsCost, setManyTicketsCost] = useState({
        saleManyTicketsCost: 0,
        allManyTicketsCost: 0,
    });

    const [ticketsCost, setTicketCost] = useState({
        firstTicketCost: normalTicketCost,
        secondTicketCost: normalTicketCost,
        thirdTicketCost: normalTicketCost,
        fourthTicketCost: normalTicketCost,
        fifthTicketCost: normalTicketCost
    })

    const backfirstTicketCost = ticketsInfo.firstTicketType === 'Взрослый' ? normalTicketCost : ticketsInfo.firstTicketType === 'Детский' ? kidTicketCost : discountedTicketCost;
    const backSecondTicketCost = ticketsInfo.secondTicketType === 'Взрослый' ? normalTicketCost : ticketsInfo.secondTicketType === 'Детский' ? kidTicketCost : discountedTicketCost;
    const backThirdTicketCost = ticketsInfo.thirdTicketType === 'Взрослый' ? normalTicketCost : ticketsInfo.thirdTicketType === 'Детский' ? kidTicketCost : discountedTicketCost;
    const backFourthTicketCost = ticketsInfo.fourthTicketType === 'Взрослый' ? normalTicketCost : ticketsInfo.fourthTicketType === 'Детский' ? kidTicketCost : discountedTicketCost;
    const backFifthTicketCost = ticketsInfo.fifthTicketType === 'Взрослый' ? normalTicketCost : ticketsInfo.fifthTicketType === 'Детский' ? kidTicketCost : discountedTicketCost;

    useEffect(() => {
        setTicketCost({
            firstTicketCost: ticketsInfo.firstTicketDirection === 'из A в B и обратно в А' ? (backfirstTicketCost * 2 - 200) : backfirstTicketCost,
            secondTicketCost: ticketsInfo.secondTicketDirection === 'из A в B и обратно в А' ? (backSecondTicketCost * 2 - 200) : backSecondTicketCost,
            thirdTicketCost: ticketsInfo.thirdTicketDirection === 'из A в B и обратно в А' ? (backThirdTicketCost * 2 - 200) : backThirdTicketCost,
            fourthTicketCost: ticketsInfo.fourthTicketDirection === 'из A в B и обратно в А' ? (backFourthTicketCost * 2 - 200) : backFourthTicketCost,
            fifthTicketCost: ticketsInfo.fifthTicketDirection === 'из A в B и обратно в А' ? (backFifthTicketCost * 2 - 200) : backFifthTicketCost
        })
    }, [ticketsInfo, backfirstTicketCost, backSecondTicketCost, backThirdTicketCost, backFourthTicketCost, backFifthTicketCost])


    const [totalCost, setTotalCost] = useState({
        totalTicketsCost: '',
        fourTicketCost: '',
        threeTicketCost: '',
        twoTicketCost: '',
    })

    const chooseCountTickets = (e) => {
        setCountTickets(Number(e.target.value))
    }

    const firstChooseTicketType = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            firstTicketType: e.target.value
        })
    }
    const firstChooseDateInput = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            firstTicketDate: e.target.value
        })
    }
    const firstChooseTicketDirection = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            firstTicketDirection: e.target.value
        })
    }
    const firstChooseReturnTicketDate = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            fristBackTicketDate: e.target.value
        })
    }
    const secondChooseTicketType = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            secondTicketType: e.target.value
        })
    }
    const secondChooseDateInput = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            secondTicketDate: e.target.value
        })
    }
    const secondChooseTicketDirection = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            secondTicketDirection: e.target.value
        })
    }
    const secondChooseReturnTicketDate = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            secondBackTicketDate: e.target.value
        })
    }
    const thirdChooseTicketType = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            thirdTicketType: e.target.value
        })
    }
    const thirdChooseDateInput = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            thirdTicketDate: e.target.value
        })
    }
    const thirdChooseTicketDirection = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            thirdTicketDirection: e.target.value
        })
    }
    const thirdChooseReturnTicketDate = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            thirdBackTicketDate: e.target.value
        })
    }
    const fourthChooseTicketType = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            fourthTicketType: e.target.value
        })
    }
    const fourthChooseDateInput = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            fourthTicketDate: e.target.value
        })
    }
    const fourthChooseTicketDirection = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            fourthTicketDirection: e.target.value
        })
    }
    const fourthChooseReturnTicketDate = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            fourthBackTicketDate: e.target.value
        })
    }
    const fifthChooseTicketType = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            fifthTicketType: e.target.value
        })
    }
    const fifthChooseDateInput = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            fifthTicketDate: e.target.value
        })
    }
    const fifthChooseTicketDirection = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            fifthTicketDirection: e.target.value
        })
    }
    const fifthChooseReturnTicketDate = (e) => {
        setTicketsInfo({
            ...ticketsInfo,
            fifthBackTicketDate: e.target.value
        })
    }


    const chooseManyTicketsType = (e) => {
        setManyTicketsInfo({
            ...manyTicketsInfo,
            ticketsType: e.target.value
        })
    }
    const chooseManyTicketsDate = (e) => {
        setManyTicketsInfo({
            ...manyTicketsInfo,
            ticketsDate: e.target.value
        })
    }
    const chooseManyTicketsDirection = (e) => {
        setManyTicketsInfo({
            ...manyTicketsInfo,
            ticketsDirection: e.target.value
        })
    }
    const chooseManyTicketsCount = (e) => {
        setManyTicketsInfo({
            ...manyTicketsInfo,
            ticketsCount: e.target.value
        })
    }

    const chooseBackManyTicketsDate = (e) => {
        setManyTicketsInfo({
            ...manyTicketsInfo,
            ticketsBackDate: e.target.value
        })
    }

    const resultManyTicketsCost = () => {
        let cost = manyTicketsInfo.ticketsType === 'Взрослый' ? normalTicketCost : ticketsInfo.firstTicketType === 'Детский' ? kidTicketCost : discountedTicketCost;
        let normalCost = manyTicketsInfo.ticketsDirection === "из A в B и обратно в А" ? (cost * 2 - 200) * manyTicketsInfo.ticketsCount : cost * manyTicketsInfo.ticketsCount;
        let sum = manyTicketsInfo.ticketsDirection === "из A в B и обратно в А" ? (cost * 2 - 200) : cost ;
        let result = (manyTicketsInfo.ticketsCount > 5) ? ((sum * manyTicketsInfo.ticketsCount) - (manyTicketsInfo.ticketsCount * 100)) : (sum * manyTicketsInfo.ticketsCount);
        setManyTicketsCost({
            allManyTicketsCost: normalCost,
            saleManyTicketsCost: result,
        })
    }
    const resultChoosedTicketCost = () => {
        setTotalCost({
            totalTicketsCost: Object.values(ticketsCost).reduce((el, acc) => el + acc, 0),
            fourTicketCost: Object.values(ticketsCost).slice(0, -1).reduce((el, acc) => el + acc, 0),
            threeTicketCost: Object.values(ticketsCost).slice(0, -2).reduce((el, acc) => el + acc, 0),
            twoTicketCost: Object.values(ticketsCost).slice(0, -3).reduce((el, acc) => el + acc, 0),
        })
    }
    const handleClick = () => {
        setTableState(tableState => [...tableState, forTable1])
    }
    const TicketBuy = ({ changeTicketType, changeTicketDate, changeTicketDirection, ticketDate, ticketType, ticketCost, ticketDirection, backTicketDate, changeBackTicketDate }) => {
        return (
            <div className={styles.ticketBuy}>
                <label htmlFor='ticketType'>Тип билета </label>
                <select id='ticketType' value={ticketType} onChange={changeTicketType}>
                    <option value='Взрослый'>Взрослый</option>
                    <option value='Детский'>Детский</option>
                    <option value='Льготный'>Льготный</option>
                </select>
                <label htmlFor="route">Выберите направление</label>
                <select name="route" id="route" value={ticketDirection} onChange={changeTicketDirection}>
                    <option value="из A в B">из A в B</option>
                    <option value="из B в A">из B в A</option>
                    <option value="из A в B и обратно в А">из A в B и обратно в А</option>
                </select>
                <label htmlFor="time">Выберите время</label>
                {ticketDirection === "из A в B и обратно в А" && (
                    <select name="time" id="time" value={ticketDate} onChange={changeTicketDate}>
                        <option>...</option>
                        <option value="18:00(из A в B)">18:00(из A в B)</option>
                        <option value="18:30(из A в B)">18:30(из A в B)</option>
                        <option value="18:45(из A в B)">18:45(из A в B)</option>
                        <option value="19:00(из A в B)">19:00(из A в B)</option>
                        <option value="19:15(из A в B)">19:15(из A в B)</option>
                    </select>
                )
                }
                {ticketDirection === "из A в B" && (
                    <select name="time" id="time" value={ticketDate} onChange={changeTicketDate}>
                        <option>...</option>
                        <option value="18:00(из A в B)">18:00(из A в B)</option>
                        <option value="18:30(из A в B)">18:30(из A в B)</option>
                        <option value="18:45(из A в B)">18:45(из A в B)</option>
                        <option value="19:00(из A в B)">19:00(из A в B)</option>
                        <option value="19:15(из A в B)">19:15(из A в B)</option>
                        <option value="21:00(из A в B)">21:00(из A в B)</option>
                    </select>
                )}
                {ticketDirection === "из B в A" && (
                    <select name="time" id="time" value={ticketDate} onChange={changeTicketDate}>
                        <option>...</option>
                        <option value="18:30(из B в A)">18:30(из B в A)</option>
                        <option value="18:45(из B в A)">18:45(из B в A)</option>
                        <option value="19:00(из B в A)">19:00(из B в A)</option>
                        <option value="19:15(из B в A)">19:15(из B в A)</option>
                        <option value="19:35(из B в A)">19:35(из B в A)</option>
                        <option value="21:50(из B в A)">21:50(из B в A)</option>
                        <option value="21:55(из B в A)">21:55(из B в A)</option>
                    </select>
                )}


                {ticketDirection === "из A в B и обратно в А" && ticketDate === "18:00(из A в B)" && (
                    <select name="time" id="time" value={backTicketDate} onChange={changeBackTicketDate}>
                        <option>...</option>
                        <option value="19:00(из B в A)">19:00(из B в A)</option>
                        <option value="19:15(из B в A)">19:15(из B в A)</option>
                        <option value="19:35(из B в A)">19:35(из B в A)</option>
                        <option value="21:50(из B в A)">21:50(из B в A)</option>
                        <option value="21:55(из B в A)">21:55(из B в A)</option>
                    </select>
                )
                }
                {ticketDirection === "из A в B и обратно в А" && ticketDate === "18:30(из A в B)" && (
                    <select name="time" id="time" value={backTicketDate} onChange={changeBackTicketDate}>
                        <option>...</option>
                        <option value="19:15(из B в A)">19:15(из B в A)</option>
                        <option value="19:35(из B в A)">19:35(из B в A)</option>
                        <option value="21:50(из B в A)">21:50(из B в A)</option>
                        <option value="21:55(из B в A)">21:55(из B в A)</option>
                    </select>
                )
                }
                {ticketDirection === "из A в B и обратно в А" && ticketDate === "18:45(из A в B)" && (
                    <select name="time" id="time" value={backTicketDate} onChange={changeBackTicketDate}>
                        <option>...</option>
                        <option value="19:35(из B в A)">19:35(из B в A)</option>
                        <option value="21:50(из B в A)">21:50(из B в A)</option>
                        <option value="21:55(из B в A)">21:55(из B в A)</option>
                    </select>
                )
                }
                {ticketDirection === "из A в B и обратно в А" && (ticketDate === "19:00(из A в B)" || ticketDate === "19:15(из A в B)") && (
                    <select name="time" id="time" value={backTicketDate} onChange={changeBackTicketDate}>
                        <option>...</option>
                        <option value="21:50(из B в A)">21:50(из B в A)</option>
                        <option value="21:55(из B в A)">21:55(из B в A)</option>
                    </select>
                )
                }
                <div>Цена билета: {ticketCost}</div>
            </div>
        )
    }

    return (
        <div className={styles.ticketsSell}>
            <div>
                <p>Цена взрослого билета: {normalTicketCost} руб.</p>
                <p>Цена детского билета: {kidTicketCost} руб.</p>
                <p>Цена льготного билета: {discountedTicketCost} руб.</p>
                <p>Цена составного билета: {normalTicketCost * 2 - 200}, {kidTicketCost * 2 - 200} для детей, {discountedTicketCost * 2 - 200} льготный</p>
                <p>Цена группового билета: {groupTicketCost}, начиная от шести билетов</p>
            </div>
            <div className={styles.allTickets}>
                <div className={styles.targetTickets}>
                        <label htmlFor='countTickets'>Количество билетов на разное время в одном заказе</label>
                        <select id={'countTickets'} value={countTickets} onChange={chooseCountTickets} >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    <div> <button onClick={handleClick}>Купить</button></div>
                        {countTickets === 5 && <>
                            <TicketBuy
                                changeTicketType={firstChooseTicketType}
                                changeTicketDate={firstChooseDateInput}
                                ticketType={ticketsInfo.firstTicketType}
                                ticketDate={ticketsInfo.firstTicketDate}
                                ticketCost={ticketsCost.firstTicketCost}
                                ticketDirection={ticketsInfo.firstTicketDirection}
                                changeTicketDirection={firstChooseTicketDirection}
                                changeBackTicketDate={firstChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.firstBackTicketDate}

                            />
                            <TicketBuy
                                changeTicketType={secondChooseTicketType}
                                changeTicketDate={secondChooseDateInput}
                                ticketType={ticketsInfo.secondTicketType}
                                ticketDate={ticketsInfo.secondTicketDate}
                                ticketCost={ticketsCost.secondTicketCost}
                                ticketDirection={ticketsInfo.secondTicketDirection}
                                changeTicketDirection={secondChooseTicketDirection}
                                changeBackTicketDate={secondChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.secondBackTicketDate}
                            />
                            <TicketBuy changeTicketType={thirdChooseTicketType}
                                changeTicketDate={thirdChooseDateInput}
                                ticketType={ticketsInfo.thirdTicketType}
                                ticketDate={ticketsInfo.thirdTicketDate}
                                ticketCost={ticketsCost.thirdTicketCost}
                                ticketDirection={ticketsInfo.thirdTicketDirection}
                                changeTicketDirection={thirdChooseTicketDirection}
                                changeBackTicketDate={thirdChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.thirdBackTicketDate}
                            />
                            <TicketBuy changeTicketType={fourthChooseTicketType}
                                changeTicketDate={fourthChooseDateInput}
                                ticketType={ticketsInfo.fourthTicketType}
                                ticketDate={ticketsInfo.fourthTicketDate}
                                ticketCost={ticketsCost.fourthTicketCost}
                                ticketDirection={ticketsInfo.fourthTicketDirection}
                                changeTicketDirection={fourthChooseTicketDirection}
                                changeBackTicketDate={fourthChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.fourthBackTicketDate}
                            />
                            <TicketBuy changeTicketType={fifthChooseTicketType}
                                changeTicketDate={fifthChooseDateInput}
                                ticketType={ticketsInfo.fifthTicketType}
                                ticketDate={ticketsInfo.fifthTicketDate}
                                ticketCost={ticketsCost.fifthTicketCost}
                                ticketDirection={ticketsInfo.fifthTicketDirection}
                                changeTicketDirection={fifthChooseTicketDirection}
                                changeBackTicketDate={fifthChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.fifthBackTicketDate} />
                            <button onClick={resultChoosedTicketCost}>Посчитать</button>
                            <div>Итого: {totalCost.totalTicketsCost}</div>
                        </>}
                        {countTickets === 4 && <>
                            <TicketBuy changeTicketType={firstChooseTicketType}
                                changeTicketDate={firstChooseDateInput}
                                ticketType={ticketsInfo.firstTicketType}
                                ticketDate={ticketsInfo.firstTicketDate}
                                ticketCost={ticketsCost.firstTicketCost}
                                ticketDirection={ticketsInfo.firstTicketDirection}
                                changeTicketDirection={firstChooseTicketDirection}
                                changeBackTicketDate={firstChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.firstBackTicketDate}
                            />
                            <TicketBuy changeTicketType={secondChooseTicketType}
                                changeTicketDate={secondChooseDateInput}
                                ticketType={ticketsInfo.secondTicketType}
                                ticketDate={ticketsInfo.secondTicketDate}
                                ticketCost={ticketsCost.secondTicketCost}
                                ticketDirection={ticketsInfo.secondTicketDirection}
                                hangeTicketDirection={secondChooseTicketDirection}
                                changeBackTicketDate={secondChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.secondBackTicketDate}
                            />
                            <TicketBuy changeTicketType={thirdChooseTicketType}
                                changeTicketDate={thirdChooseDateInput}
                                ticketType={ticketsInfo.thirdTicketType}
                                ticketDate={ticketsInfo.thirdTicketDate}
                                ticketCost={ticketsCost.thirdTicketCost}
                                ticketDirection={ticketsInfo.thirdTicketDirection}
                                changeTicketDirection={thirdChooseTicketDirection}
                                changeBackTicketDate={thirdChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.thirdBackTicketDate}
                            />
                            <TicketBuy changeTicketType={fourthChooseTicketType}
                                changeTicketDate={fourthChooseDateInput}
                                ticketType={ticketsInfo.fourthTicketType}
                                ticketDate={ticketsInfo.fourthTicketDate}
                                ticketCost={ticketsCost.fourthTicketCost}
                                ticketDirection={ticketsInfo.fourthTicketDirection}
                                changeTicketDirection={fourthChooseTicketDirection}
                                changeBackTicketDate={fourthChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.fourthBackTicketDate}
                            />
                            <button onClick={resultChoosedTicketCost}>Посчитать</button>
                            <div>Итого: {totalCost.fourTicketCost}</div>
                        </>}
                        {countTickets === 3 && <>
                            <TicketBuy changeTicketType={firstChooseTicketType}
                                changeTicketDate={firstChooseDateInput}
                                ticketType={ticketsInfo.firstTicketType}
                                ticketDate={ticketsInfo.firstTicketDate}
                                ticketCost={ticketsCost.firstTicketCost}
                                ticketDirection={ticketsInfo.firstTicketDirection}
                                changeTicketDirection={firstChooseTicketDirection}
                                changeBackTicketDate={firstChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.firstBackTicketDate}
                            />
                            <TicketBuy changeTicketType={secondChooseTicketType}
                                changeTicketDate={secondChooseDateInput}
                                ticketType={ticketsInfo.secondTicketType}
                                ticketDate={ticketsInfo.secondTicketDate}
                                ticketCost={ticketsCost.secondTicketCost}
                                ticketDirection={ticketsInfo.secondTicketDirection}
                                changeTicketDirection={secondChooseTicketDirection}
                                changeBackTicketDate={secondChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.secondBackTicketDate}
                            />
                            <TicketBuy changeTicketType={thirdChooseTicketType}
                                changeTicketDate={thirdChooseDateInput}
                                ticketType={ticketsInfo.thirdTicketType}
                                ticketDate={ticketsInfo.thirdTicketDate}
                                ticketCost={ticketsCost.thirdTicketCost}
                                ticketDirection={ticketsInfo.thirdTicketDirection}
                                changeTicketDirection={thirdChooseTicketDirection}
                                changeBackTicketDate={thirdChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.thirdBackTicketDate}
                            />
                            <button onClick={resultChoosedTicketCost}>Посчитать</button>
                            <div>Итого: {totalCost.threeTicketCost}</div>
                        </>}
                        {countTickets === 2 && <>
                            <TicketBuy changeTicketType={firstChooseTicketType}
                                changeTicketDate={firstChooseDateInput}
                                ticketType={ticketsInfo.firstTicketType}
                                ticketDate={ticketsInfo.firstTicketDate}
                                ticketCost={ticketsCost.firstTicketCost}
                                ticketDirection={ticketsInfo.firstTicketDirection}
                                changeTicketDirection={firstChooseTicketDirection}
                                changeBackTicketDate={firstChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.firstBackTicketDate}
                            />
                            <TicketBuy changeTicketType={secondChooseTicketType}
                                changeTicketDate={secondChooseDateInput}
                                ticketType={ticketsInfo.secondTicketType}
                                ticketDate={ticketsInfo.secondTicketDate}
                                ticketCost={ticketsCost.secondTicketCost}
                                ticketDirection={ticketsInfo.secondTicketDirection}
                                changeTicketDirection={secondChooseTicketDirection}
                                changeBackTicketDate={secondChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.secondBackTicketDate}
                            />
                            <button onClick={resultChoosedTicketCost}>Посчитать</button>
                            <div>Итого: {totalCost.twoTicketCost}</div>
                        </>}
                        {countTickets === 1 && <>
                            <TicketBuy changeTicketType={firstChooseTicketType}
                                changeTicketDate={firstChooseDateInput}
                                ticketType={ticketsInfo.firstTicketType}
                                ticketDate={ticketsInfo.firstTicketDate}
                                ticketCost={ticketsCost.firstTicketCost}
                                ticketDirection={ticketsInfo.firstTicketDirection}
                                changeTicketDirection={firstChooseTicketDirection}
                                changeBackTicketDate={firstChooseReturnTicketDate}
                                backTicketDate={ticketsInfo.firstBackTicketDate}
                            />
                            <button onClick={resultChoosedTicketCost}>Посчитать</button>
                            <div>Итого: {ticketsCost.firstTicketCost}</div>
                        </>}
                </div>
                <div className={styles.manyTickets}>
                    <label htmlFor='ticketType'>Тип билета </label>
                    <select id='ticketType' value={manyTicketsInfo.ticketsType} onChange={chooseManyTicketsType}>
                        <option value='Взрослый'>Взрослый</option>
                        <option value='Детский'>Детский</option>
                        <option value='Льготный'>Льготный</option>
                    </select>
                    <label htmlFor="route">Выберите направление</label>
                    <select name="route" id="route" value={manyTicketsInfo.ticketsDirection} onChange={chooseManyTicketsDirection}>
                        <option value="из A в B">из A в B</option>
                        <option value="из B в A">из B в A</option>
                        <option value="из A в B и обратно в А">из A в B и обратно в А</option>
                    </select>
                    <label htmlor="time">Выберите время</label>
                    {manyTicketsInfo.ticketsDirection === "из A в B и обратно в А" && (
                        <select name="time" id="time" value={manyTicketsInfo.ticketsDate} onChange={chooseManyTicketsDate}>
                            <option>...</option>
                            <option value="18:00(из A в B)">18:00(из A в B)</option>
                            <option value="18:30(из A в B)">18:30(из A в B)</option>
                            <option value="18:45(из A в B)">18:45(из A в B)</option>
                            <option value="19:00(из A в B)">19:00(из A в B)</option>
                            <option value="19:15(из A в B)">19:15(из A в B)</option>
                        </select>
                    )
                    }
                    {manyTicketsInfo.ticketsDirection === "из A в B" && (
                        <select name="time" id="time" value={manyTicketsInfo.ticketsDate} onChange={chooseManyTicketsDate}>
                            <option>...</option>
                            <option value="18:00(из A в B)">18:00(из A в B)</option>
                            <option value="18:30(из A в B)">18:30(из A в B)</option>
                            <option value="18:45(из A в B)">18:45(из A в B)</option>
                            <option value="19:00(из A в B)">19:00(из A в B)</option>
                            <option value="19:15(из A в B)">19:15(из A в B)</option>
                            <option value="21:00(из A в B)">21:00(из A в B)</option>
                        </select>
                    )}
                    {manyTicketsInfo.ticketsDirection === "из B в A" && (
                        <select name="time" id="time" value={manyTicketsInfo.ticketsDate} onChange={chooseManyTicketsDate}>
                            <option>...</option>
                            <option value="18:30(из B в A)">18:30(из B в A)</option>
                            <option value="18:45(из B в A)">18:45(из B в A)</option>
                            <option value="19:00(из B в A)">19:00(из B в A)</option>
                            <option value="19:15(из B в A)">19:15(из B в A)</option>
                            <option value="19:35(из B в A)">19:35(из B в A)</option>
                            <option value="21:50(из B в A)">21:50(из B в A)</option>
                            <option value="21:55(из B в A)">21:55(из B в A)</option>
                        </select>
                    )}


                    {manyTicketsInfo.ticketsDirection === "из A в B и обратно в А" && manyTicketsInfo.ticketsDate === "18:00(из A в B)" && (
                        <select name="time" id="time" value={manyTicketsInfo.ticketsBackDate} onChange={chooseBackManyTicketsDate}>
                            <option>...</option>
                            <option value="19:00(из B в A)">19:00(из B в A)</option>
                            <option value="19:15(из B в A)">19:15(из B в A)</option>
                            <option value="19:35(из B в A)">19:35(из B в A)</option>
                            <option value="21:50(из B в A)">21:50(из B в A)</option>
                            <option value="21:55(из B в A)">21:55(из B в A)</option>
                        </select>
                    )
                    }
                    {manyTicketsInfo.ticketsDirection === "из A в B и обратно в А" && manyTicketsInfo.ticketsDate === "18:30(из A в B)" && (
                        <select name="time" id="time" value={manyTicketsInfo.ticketsBackDate} onChange={chooseBackManyTicketsDate}>
                            <option>...</option>
                            <option value="19:15(из B в A)">19:15(из B в A)</option>
                            <option value="19:35(из B в A)">19:35(из B в A)</option>
                            <option value="21:50(из B в A)">21:50(из B в A)</option>
                            <option value="21:55(из B в A)">21:55(из B в A)</option>
                        </select>
                    )
                    }
                    {manyTicketsInfo.ticketsDirection === "из A в B и обратно в А" && manyTicketsInfo.ticketsDate=== "18:45(из A в B)" && (
                        <select name="time" id="time" value={manyTicketsInfo.ticketsBackDate} onChange={chooseBackManyTicketsDate}>
                            <option>...</option>
                            <option value="19:35(из B в A)">19:35(из B в A)</option>
                            <option value="21:50(из B в A)">21:50(из B в A)</option>
                            <option value="21:55(из B в A)">21:55(из B в A)</option>
                        </select>
                    )
                    }
                    {manyTicketsInfo.ticketsDirection === "из A в B и обратно в А" && (manyTicketsInfo.ticketsDate === "19:00(из A в B)" || manyTicketsInfo.ticketsDate=== "19:15(из A в B)") && (
                        <select name="time" id="time" value={manyTicketsInfo.ticketsBackDate} onChange={chooseBackManyTicketsDate}>
                            <option>...</option>
                            <option value="21:50(из B в A)">21:50(из B в A)</option>
                            <option value="21:55(из B в A)">21:55(из B в A)</option>
                        </select>
                    )
                    }
                    <label htmlFor="num">Количество билетов на одно время и направление</label>
                    <input id="num" onChange={chooseManyTicketsCount} />
                    <button onClick={resultManyTicketsCost}>Посчитать</button>
                    {manyTicketsCost.allManyTicketsCost !== 0 && 
                    <div className={styles.manyTicketsCost}>{manyTicketsCost.saleManyTicketsCost}</div>
                    }
                     {manyTicketsCost.saleManyTicketsCost < manyTicketsCost.allManyTicketsCost && <div className={styles.normalCostOfManyTickets}>
                        {manyTicketsCost.allManyTicketsCost}
                        <div className={styles.lineOfSale}>/</div>
                        </div>}
                </div>
            </div>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>event_id</th>
                            <th>event_date</th>
                            <th>total_tickets</th>
                            <th>barcode</th>
                            <th>user_id</th>
                            <th>equal_price</th>
                            <th>created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableState.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.event_id}</td>
                                <td>{item.total_tickets > 1 ? <span>Подробно</span> : item.event_date}</td>
                                <td>{item.total_tickets}</td>
                                <td>{item.barcode}</td>
                                <td>{item.user_id}</td>
                                <td>{item.equal_price}</td>
                                <td>{item.created}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}