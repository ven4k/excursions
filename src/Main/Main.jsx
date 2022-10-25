import excursionPreview from '../assets/png/excursionPreview.png';
import excursionSpb from '../assets/png/excursionSpb.png';
import music from '../assets/png/music.png';
import { AdvancedButton } from '../atoms/AdvancedButton/AdvancedButton';
import { ExcursionName } from '../atoms/ExcursionName/ExcursionName';
import { InfoList } from '../atoms/InfoList/InfoList';
import { TimeButton } from '../atoms/TimeButton/TimeButton';
import { TimeRemaining } from '../atoms/TimeRemaining/TimeRemaining';
import { Cost } from '../atoms/Cost/Cost';
import {TicketsSell} from '../TicketsSell/TicketsSell';
import styles from './Main.module.css';

export const Main = () => {
    return (
        <main>
            <div className={styles.firstBlock}>
                <div className={styles.firstPart}>
                    <img src={excursionPreview} alt='excursion preview' />
                    <div className={styles.newItem}>НОВИНКА</div>
                </div>
                <div className={styles.secondPart}>
                    <ExcursionName excursionNameContent={`Обзорная экскурсия по рекам и каналам 
с остановками Hop on Hop Off 2020`} />
                    <TimeRemaining />
                    <div className={styles.infoListBlock}><InfoList /></div>
                    <div className={styles.timeButtonsBlock}>
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'12:00'} selected />
                        <TimeButton buttonContent={'12:00'} />
                        
                    </div>
                    <div className={styles.advancedButtonBlock}>
                        <Cost ticketCost={'900'} ticketPierCost={'1200'}/>
                        <AdvancedButton />
                    </div>
                </div>
            </div>
            <div className={styles.secondBlock}>
            <div className={styles.firstPart}>
                    <img src={excursionSpb} alt='excursion spb' />
                    <div className={styles.allYear}>КРУГЛЫЙ ГОД</div>
                </div>
            <div className={styles.secondPart}>
                    <ExcursionName excursionNameContent={`Обзорная экскурсия по рекам и каналам 
с остановками Hop on Hop Off 2020`} />
                    <TimeRemaining />
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
                    <img src={music} alt='music' />
                </div>
            <div className={styles.secondPart}>
                    <ExcursionName excursionNameContent={`Обзорная экскурсия по рекам и каналам 
с остановками Hop on Hop Off 2020`}/>
                    <TimeRemaining />
                    <div className={styles.infoListBlock}><InfoList /></div>
                    <div className={styles.timeButtonsSecondBlock}>
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'12:00'} />
                        <TimeButton buttonContent={'ещё...'} />
                    </div>
                    <div className={styles.advancedButtonBlock}>
                        <Cost ticketCost={'900'} ticketPierCost={'1200'}/>
                        <AdvancedButton />
                    </div>
                </div>
            </div>
            <TicketsSell />
        </main>
    )
}