import styles from './TimeButton.module.css';

export const TimeButton = ({buttonContent, selected}) => {
    const otherStyle = { color: selected !== undefined ? 'white': 'black', background: selected !== undefined ? '#6BA6FF' : '#C5DCFF', boxShadow: selected !== undefined ? '0px 2px 4px rgba(0, 0, 0, 0.25)' : 'none'}
    return <button className={styles.timeButton} style={otherStyle}>{buttonContent}</button>
}