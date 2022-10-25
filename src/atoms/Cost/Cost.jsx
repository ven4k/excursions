import styles from './Cost.module.css';

export const Cost = ({ticketCost, ticketPierCost}) => {
    return (
        <div className={styles.cost}>
            <div className={styles.ticket}>{ticketCost} &#8381;</div>
            <div className={styles.ticketPier}>{ticketPierCost} &#8381; на причале</div>
        </div>
    )
}