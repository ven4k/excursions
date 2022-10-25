import styles from './TimeRemaining.module.css';
import cloak from '../../assets/svg/cloak.svg';

export const TimeRemaining = () => {
    return (
        <div className={styles.timeRemaining}>
            <img src={cloak} alt='cloak'/>
            <span> 2 часа</span>
        </div>
    )
}