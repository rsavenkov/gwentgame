import {Scrollbar} from "react-scrollbars-custom";
import styles from '../styles/UpcomingTournaments.module.scss'
import Image from "next/image";
import {useRouter} from "next/router";

/**
 * Ближайшие турниры
 *
 * @constructor
 */
const Calendar = () => {

    const router = useRouter();

    return (
        <>
            <h1 className={styles.title}>Ближайшие турниры</h1>
            <div className={styles.tournaments}>
                {!router.pathname.includes("calendar") ?
                    <Scrollbar style={{height: 320}} className={styles.scroll} maximalThumbSize={70}>
                        <Table/>
                    </Scrollbar>
                    :
                    <Table/>
                }
            </div>
        </>
    )
}

export default Calendar

interface Event {
    date: string,
    name: string,
    img: string,
}

const events: Array<Event> = [
    {date: 'сентябрь', name: 'qualification #1', img: 'gwent-qualification.png'},
    {date: 'октябрь', name: 'qualification #2', img: 'gwent-qualification.png'},
    {date: 'ноябрь', name: 'qualification #3', img: 'gwent-qualification.png'},
    {date: 'ноябрь', name: 'moscow open #1 2022', img: 'gwent-open.png'},
]

/**
 * Event table
 *
 * @constructor
 */
const Table = () => {

    return (
        <table>
            <tbody>
            {
                events.map((e, i) => {
                    return (
                        <tr key={i}>
                            <td style={{borderRight: '1px solid #E0E0E0'}}>
                                {e.date}
                            </td>
                            <td>
                                <div>
                                    <Image src={`/${e.img}`} alt="" width={"49px"} height={"60px"}/>
                                    <span>{e.name}</span>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
