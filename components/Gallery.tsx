import Image from "next/image";
import {useRouter} from "next/router";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import s from "../styles/gallery.module.scss";
import SwiperCore, {Navigation, Pagination} from "swiper";

const docs = ['gallery/1.png', 'gallery/1.png', 'gallery/1.png', 'gallery/1.png', 'gallery/1.png', 'gallery/1.png',
    'gallery/1.png', 'gallery/1.png', 'gallery/1.png', 'gallery/1.png']

SwiperCore.use([Navigation, Pagination])

/**
 * Галерея картинок
 *
 * @constructor
 */
const Gallery = () => {

    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(1)

    return (
        <>
            <h1 style={{color: "white"}}>Галерея</h1>
            <div style={{height: '600px'}}></div>
        </>
        /*<div className={s.container + (router.pathname.includes('gallery') ? ` ${s.container__page}` : '')}>
            <h1 className={s.title}>Галерея</h1>
            <div className={s.carouselWrapper}>
                <a className={s.prev}
                   style={{cursor: currentSlide <= docs.length && currentSlide != 1 ? 'pointer' : 'default'}}>
                    <Image
                        src={`/prev-${currentSlide <= docs.length && currentSlide != 1 ? 'active' : 'disable'}.png`}
                        alt="" width={"100px"} height={"50px"}/>
                </a>
                <Swiper slidesPerView={1} spaceBetween={0} initialSlide={currentSlide}
                        loop={false}
                        observer={true} observeParents={true}
                        pagination={false}
                        onSlideChange={(e) => {
                            setCurrentSlide((window.innerWidth >= 1024 ? e.activeIndex : (e.activeIndex + 1)))
                        }}
                        navigation={{
                            nextEl: `.${s.next}`,
                            prevEl: `.${s.prev}`
                        }}
                        centeredSlides={true} centeredSlidesBounds={true}
                        className={s.carousel}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50
                            }
                        }}>
                    <SwiperSlide className={s.mobileHide}>
                    </SwiperSlide>
                    {
                        docs.map((d, i) => {
                            return (
                                <SwiperSlide key={i} className={s.carousel__item}>
                                    <div className={s.carousel__item__zoom}>
                                        <img src={`/${d}`} alt=""/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <SwiperSlide className={s.mobileHide}>
                    </SwiperSlide>
                </Swiper>
                <style jsx global>
                    {
                        `
                       .${s.carousel} .swiper-slide-active .${s.carousel__item__zoom} {
                           transform: scale(1);
                       }
                    `
                    }
                </style>
                <a className={s.next}
                   style={{cursor: currentSlide < docs.length ? 'pointer' : 'default'}}>
                    <Image src={`/next-${currentSlide < docs.length ? 'active' : 'disable'}.png`} alt=""
                           width={"100px"} height={"50px"}/>
                </a>
                <h3 className={s.number}>{(currentSlide) + '/' + docs.length}</h3>
            </div>
        </div>*/
    )
}

export default Gallery
