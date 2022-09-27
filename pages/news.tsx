import type {NextPage} from 'next'
import Image from "next/image";
import styles from '../styles/News.module.scss'

/**
 * Страница с новостями
 *
 * @constructor
 */
const News: NextPage = () => {
    return (
        <div className={styles.news}>
            <Image src={`/qualification_1.jpg`} alt="" width={"640px"} height={"640px"}/>
        </div>
    )
}

export default News
