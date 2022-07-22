import type {NextPage} from 'next'
import Cards from "../components/Cards";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import styles from '../styles/Cards.module.scss'

/**
 * Cards page
 *
 * @constructor
 */
const CardsPage: NextPage = () => {

    const router = useRouter();
    const {card} = router.query;
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        if (card) {
            //@ts-ignore
            const itemPosition = document.getElementById(card) ? (document.getElementById(card).offsetTop - 60) : undefined
            window.scrollTo({
                top: itemPosition,
                behavior: "smooth"
            });
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500) {
            setVisible(true)
        } else if (scrolled <= 500) {
            setVisible(false)
        }
    };

    return (
        <>
            <Cards showCards={true}/>
            <div onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className={styles.scrollUp}>
                <span>&#8593;</span>
            </div>
        </>
    )
}

export default CardsPage