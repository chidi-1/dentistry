import {useEffect, useRef} from "react";
import { register } from 'swiper/element/bundle';

export default function MainSlider({children, title, space}) {
    const swiperButtonPrev = useRef(null);
    const swiperButtonNext = useRef(null);

    const swiperRef = useRef(null);

    useEffect(() => {
        register();
        const params = {
            slidesPerView: 'auto',
            navigation: {
                prevEl: swiperButtonPrev.current,
                nextEl: swiperButtonNext.current,
            },
            spaceBetween: space
        };

        Object.assign(swiperRef.current, params);

        swiperRef.current.initialize();
    }, []);

    return (
        <div className="swiper-wrap">
            <div className="slider__header">
                <span className="title">{title}</span>
                <div className="buttons-group">
                    <button ref={swiperButtonPrev} className="button-scroll button-prev"></button>
                    <button ref={swiperButtonNext} className="button-scroll button-next"></button>
                </div>
            </div>
            <div className="slider__content swiper">
                <swiper-container init="false" ref={swiperRef} class="swiper-wrapper">
                    {children}
                </swiper-container>
                <div className="swiper-scrollbar">
                    <div className="swiper-scrollbar-drag"></div>
                </div>
            </div>
        </div>
    )
}