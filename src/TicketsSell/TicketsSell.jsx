import styles from './TicketsSell.module.css';
import { useState } from 'react';

export const TicketsSell = () => {



    const chooseTicketType = 'Выберите тип билета';
    const chooseTicketDirection = 'Выберите направление';
    const chooseTicketDate = 'Выберите время';
    const chooseBackTicketDate = 'Выберите время обратного пути';
    const DATE_TIME = ['18:00', '18:30', '18:45', '19:00', '19:15', '21:00'];
    const BACK_DATE_TIME = ['18:30', '18:45', '19:00', '19:15', '19:35', '21:50', '21:55'];
    const DIRECTIONS = [
        { id: 1, value: 'из A в B', text: 'из A в B' },
        { id: 2, value: 'из B в A', text: 'из B в A' },
        { id: 3, value: 'из A в B и обратно в А', text: 'из A в B и обратно в А' }
    ];
    const TICKET_TYPE = [
        { id: 4, value: 'Взрослый', text: 'Взрослый' },
        { id: 5, value: 'Детский', text: 'Детский' },
        { id: 6, value: 'Льготный', text: 'Льготный' },
    ]






    const GET_BASE_TICKET = () => ({
        id: Math.ceil(Math.random() * 100000),
        direction: '',
        type: '',
        date: '',
        backDate: '',
        cost: ''
    });



    const [tickets, setTickets] = useState(() => [GET_BASE_TICKET()]);

    const COST = ['500', '600', '700', '1200'];
    const [totalCost, setTotalCost] = useState([]);
    const allCost = totalCost.reduce((el, acc) => el + acc, 0);


    const [tableState, setTableState] = useState([])

    const onChangeTicket = ({ target }) => {
        const id = Number(target.dataset.id);
        const key = target.name;
        const newTikcets = tickets.map((item) => {
            if (item.id !== id) return item;
            return {
                ...item,
                [key]: (target.value !== chooseTicketType && target.value !== chooseTicketDate && target.value !== chooseTicketDirection && target.value !== chooseBackTicketDate) ? target.value : '',
            };
        });
        setTickets(newTikcets);
    };

    const onChangeTicketNumber = ({ target }) => {
        const number = Number(target.value);
        let newTickets;
        if (number > tickets.length) {
            newTickets = [...tickets];
            for (let i = newTickets.length; i < number; i += 1) {
                newTickets.push(GET_BASE_TICKET());
            }
        } else {
            newTickets = tickets.slice(0, number);
        }
        setTickets(newTickets);
    };

    const handleClick = ({ target }) => {
        const key = target.name;
        const costForTickets = tickets.map(item => {
            if (item.type === 'Взрослый') return { ...item, [key]: (item.direction === "из A в B и обратно в А") ? COST[3] : COST[2] }
            else if (item.type === 'Детский') {
                return { ...item, [key]: (item.direction === "из A в B и обратно в А") ? (COST[0] * 2 - 200) : COST[0] }
            } else if (item.type === 'Льготный') {
                return { ...item, [key]: (item.direction === "из A в B и обратно в А") ? (COST[1] * 2 - 200) : COST[1] }
            } else {
                return item
            }
        })
        setTickets(costForTickets)
        const allCostTickets = costForTickets.map(item => Number(item.cost))
        setTotalCost(allCostTickets)
    }

    const handleClickBuy = () => {
        const ticketsTableID = [];

        tickets.map(item => {
            for (let i = ticketsTableID.length; i < tickets.length; i++) {
                ticketsTableID.push(item.id + Math.ceil(Math.random() * 1000));
            }
            setTableState([...tableState,
            {
                event_id: Math.ceil(Math.random() * 1000),
                event_date: item.date,
                event_back_date: item.backDate,
                total_tickets: tickets.length,
                barcode_order: Math.ceil(Math.random() * 10000000),
                barcode_ticket: ticketsTableID.map(el => <span key={el.index}>{el}</span>),
                user_id: Math.ceil(Math.random() * 10000),
                equal_price: allCost,
                created: new Date().toLocaleString(),
                ticket_adult_quantity: tickets.filter(el => el.type === 'Взрослый').length,
                ticket_adult_price: 700,
                ticket_kid_quantity: tickets.filter(el => el.type === 'Детский').length,
                ticket_kid_price: 500,
                ticket_discont_quantity: tickets.filter(el => el.type === 'Льготный').length,
                ticket_discont_price: 600,
                ticket_dual_quantity: (item.direction === "из A в B и обратно в А").length,
                ticket_dual_price: '1200 В, 1000 Л, 800Д',

            }
            ])
        })
    }
    const showAdvancedTable = () => {
        document.querySelector('#addStyle').style.visibility = 'visible';
    }
    const hideAdvancedTable = () => {
        document.querySelector('#addStyle').style.visibility = 'hidden';
    }
    const thTable = ['id', 'event_id', 'event_date', 'total_tickets', 'barcode_order', 'user_id', 'equal_price', 'created']
    const thHiddenTable = ['id', 'event_id', 'event_date', 'event_back_date', 'total_tickets', 'ticket_adult_quantity', 'ticket_adult_price', 'ticket_kid_quantity', 'ticket_kid_price', 'ticket_discont_quantity', 'ticket_discont_price', 'ticket_dual_quantity', 'ticket_dual_price', 'equal_price', 'barcode_ticket']
    return (
        <div>
            <div>
                Ticket Number&nbsp;
                <input type='number' max={100} onChange={onChangeTicketNumber} />
            </div>
            <div>
                {tickets.map((ticket) => (
                    <div key={ticket.id}>
                        <select
                            name="type"
                            data-id={ticket.id}
                            onChange={onChangeTicket}
                            value={ticket.type}
                        >

                            <option>{chooseTicketType}</option>
                            {TICKET_TYPE.map(item => (
                                <option
                                    key={item.id}
                                    value={item.value}
                                >
                                    {item.text}
                                </option>
                            ))}
                        </select>
                        <select
                            name="direction"
                            data-id={ticket.id}
                            onChange={onChangeTicket}
                            value={ticket.direction}
                        >
                            <option>{chooseTicketDirection}</option>
                            {DIRECTIONS.map((item) => (
                                <option
                                    key={item.id}
                                    value={item.value}
                                >
                                    {item.text}
                                </option>
                            ))}
                        </select>
                        <select name="date" data-id={ticket.id} onChange={onChangeTicket} value={ticket.date}>
                            <option>{chooseTicketDate}</option>
                            {DATE_TIME.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        {ticket.direction === DIRECTIONS[2].value && (
                            <select
                                name="backDate"
                                data-id={ticket.id}
                                onChange={onChangeTicket}
                                value={ticket.backDate}>

                                <option>{chooseBackTicketDate}</option>
                                {ticket.date === DATE_TIME[0] && BACK_DATE_TIME.slice(2).map(item => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                                {ticket.date === DATE_TIME[1] && BACK_DATE_TIME.slice(3).map(item => (
                                    <option key={item} value={item} >
                                        {item}
                                    </option>
                                ))}
                                {ticket.date === DATE_TIME[2] && BACK_DATE_TIME.slice(4).map(item => (
                                    <option key={item} value={item} >
                                        {item}
                                    </option>
                                ))}
                                {(ticket.date === DATE_TIME[3] || ticket.date === DATE_TIME[4] || ticket.date === DATE_TIME[5]) && (BACK_DATE_TIME.slice(5).map(item => (
                                    <option key={item} value={item} >
                                        {item}
                                    </option>
                                )))}
                            </select>
                        )}
                    </div>

                ))}
                <div className={styles.tickets}>
                    {tickets.map((ticket) => (
                        <div className={styles.currTicket} key={ticket.id}>
                            <div>{ticket.type && <div> Тип: {ticket.type}</div>}</div>
                            <div>{ticket.direction && <div> Направление: {ticket.direction}</div>}</div>
                            <div>{ticket.date && <div> Время: {ticket.date}</div>}</div>
                            <div>{ticket.backDate && <div> Обратное время: {ticket.backDate}</div>}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <div>Время поездки 50 минут</div>
                    <button name="cost" disabled={tickets.find(el=> (el.type !== '' && el.date !== '' && el.direction !== '' ? false : true))} onClick={handleClick}>Посчитать</button>
                    <div> Итого: {allCost !== 0 && allCost}</div>
                </div>
                <div><button disabled={!allCost} onClick={handleClickBuy}>Купить</button></div>
            </div>
            <div className={styles.tableBlock}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {thTable.map((el, index) => (
                                <th key={Date.now() + index*2}>{el}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableState.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.event_id}</td>
                                <td>{item.total_tickets > 1 ? <button onClick={showAdvancedTable}>Подробно</button> : item.event_date}</td>
                                <td>{item.total_tickets}</td>
                                <td>{item.barcode_order}</td>
                                <td>{item.user_id}</td>
                                <td>{item.equal_price}</td>
                                <td>{item.created}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table className={styles.hiddenTable} id='addStyle'>
                    <thead>
                        <tr>
                            <th className={styles.closeAdvancedBtn} onClick={hideAdvancedTable}>X</th>
                        </tr>
                        <tr>
                            {thHiddenTable.map((el, index) => (
                                <th key={Date.now() + index}>{el}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableState.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.event_date}</td>
                                <td>{item.event_back_date ? item.event_back_date : '----'}</td>
                                <td>{item.total_tickets}</td>
                                <td>{item.ticket_adult_quantity}</td>
                                <td>{item.ticket_adult_price}</td>
                                <td>{item.ticket_kid_quantity}</td>
                                <td>{item.ticket_kid_price}</td>
                                <td>{item.ticket_discont_quantity ? item.ticket_discont_quantity : '----'}</td>
                                <td>{item.ticket_discont_price}</td>
                                <td>{item.ticket_dual_quantity ? item.ticket_dual_quantity : '----'}</td>
                                <td>{item.ticket_dual_price}</td>
                                <td>{item.equal_price}</td>
                                <td className={styles.lastTd}>{item.barcode_ticket}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>



    );
}