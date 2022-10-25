import styles from './AdvancedButton.module.css';
export const AdvancedButton = ({otherBtnStyle}) => {
    const otherStyle = { width: otherBtnStyle !== undefined ? '193px': '165px', borderRadius: otherBtnStyle !== undefined ? '10px' : '20px', fontWeight: otherBtnStyle !== undefined ? '600' : '400'}
    return (
        <div>
            <button className={styles.AdvancedButton} style={otherStyle}>Подробнее</button>
        </div>
    )
}