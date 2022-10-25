import styles from './MobileMain.module.css';
import spbBig from '../assets/png/spbBig.png';
import spbSmall from '../assets/png/spbSmall.png';
import { AdvancedButton } from '../atoms/AdvancedButton/AdvancedButton';
import { ExcursionName } from '../atoms/ExcursionName/ExcursionName';
import { InfoList } from '../atoms/InfoList/InfoList';
import { TimeButton } from '../atoms/TimeButton/TimeButton';
import { TimeRemaining } from '../atoms/TimeRemaining/TimeRemaining';
import { Cost } from '../atoms/Cost/Cost';

export const MobileMain = () => {
    return (
        <main className={styles.mobileMain}>
            <div className={styles.secondBlock}>
                <div className={styles.firstPart}>
                    <img src={spbSmall} alt='spbSmall' />
                    <div className={styles.newItem}>НОВИНКА</div>
                </div>
                <div className={styles.secondPart}>
                    <TimeRemaining />
                    <ExcursionName excursionNameContent={`АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019`}/>
                    <div className={styles.infoListBlock}><InfoList /></div>
                    <div className={styles.timeButtonsSecondBlock}>
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'12:00'} />
                    </div>
                    <div className={styles.advancedButtonBlock}>
                        <Cost ticketCost={'900'} ticketPierCost={'1200'}/>
                        <AdvancedButton />
                    </div>
                </div>
            </div>
            <div className={styles.thirdBlock}>
                <div className={styles.firstPart}>
                    <img src={spbBig} alt='spbBig' />
                    <div className={styles.secondNewItem}>НОВИНКА</div>
                </div>
                <div className={styles.secondPart}>
                    <ExcursionName excursionNameContent={`АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019`}/>
                    <TimeRemaining />
                    <div className={styles.infoListBlock}><InfoList /></div>
                    <div className={styles.timeButtonsSecondBlock}>
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'ещё...'} />
                    </div>
                    <div className={styles.advancedButtonBlock}>
                        <Cost ticketCost={'2900'} ticketPierCost={'1200'}/>
                        <AdvancedButton otherBtnStyle/>
                    </div>
                </div>
            </div>
        </main>
    )
}