import styles from './InfoList.module.css';

export const InfoList = () => {
    return (
        <ul className={styles.infoList}>
            <li className={styles.firstLi}>Билет на целый день</li>
            <li className={styles.secondLi}>Неограниченное число катаний</li>
            <li className={styles.thirdLi}>6 остановок у главных достопримечательностей</li>
            <li className={styles.fourthLi}>Ближайший рейс сегодня</li>
        </ul>
    )
}