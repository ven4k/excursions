import styles from './ExcursionName.module.css';
export const ExcursionName = ({excursionNameContent}) => {
    return <h4 className={styles.ExcursionName}>{excursionNameContent}</h4>
}