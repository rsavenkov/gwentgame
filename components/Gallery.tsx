import Image from "next/image";
import {useRouter} from "next/router";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import s from "../styles/gallery.module.scss";
import SwiperCore, {Navigation, Pagination} from "swiper";

const pics = ['qualification-1/pic1.jpg', 'qualification-1/pic2.jpg', 'qualification-1/pic3.jpg', 'qualification-1/pic4.jpg']

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
        <div className={s.container + (router.pathname.includes('gallery') ? ` ${s.container__page}` : '')}>
            <h1 className={s.title}>24 сентября 2022</h1>
            <div className={s.carouselWrapper}>
                <a className={s.prev}
                   style={{cursor: currentSlide <= pics.length && currentSlide != 1 ? 'pointer' : 'default'}}>
                    <Image
                        src={`/prev-${currentSlide <= pics.length && currentSlide != 1 ? 'active' : 'disable'}.png`}
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
                        pics.map((d, i) => {
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
                       .swiper-slide {
                            margin: auto;
                        }
                    `
                    }
                </style>
                <a className={s.next}
                   style={{cursor: currentSlide < pics.length ? 'pointer' : 'default'}}>
                    <Image src={`/next-${currentSlide < pics.length ? 'active' : 'disable'}.png`} alt=""
                           width={"100px"} height={"50px"}/>
                </a>
                <h3 className={s.number}>{(currentSlide) + '/' + pics.length}</h3>
            </div>
        </div>
    )
}

export default Gallery
