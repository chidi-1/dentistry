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
                    <swiper-slide class="swiper-slide">
                        <div className="variant">
                            <span className="variant__title">На системе AstraTech (Швеция)</span>
                            <div className="variant__param"><span
                                className="name">Общая сумма</span><span className="value">749 000 рублей</span>
                            </div>
                            <div className="variant__param"><span
                                className="name">Сумма со скидкой 15%</span><span
                                className="value">637 000 рублей</span></div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div className="variant">
                            <span className="variant__title">На системе AstraTech (Швеция)</span>
                            <div className="variant__param"><span
                                className="name">Общая сумма</span><span className="value">749 000 рублей</span>
                            </div>
                            <div className="variant__param"><span
                                className="name">Сумма со скидкой 15%</span><span
                                className="value">637 000 рублей</span></div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div className="variant">
                            <span className="variant__title">На системе AstraTech (Швеция)</span>
                            <div className="variant__param"><span
                                className="name">Общая сумма</span><span className="value">749 000 рублей</span>
                            </div>
                            <div className="variant__param"><span
                                className="name">Сумма со скидкой 15%</span><span
                                className="value">637 000 рублей</span></div>
                        </div>
                    </swiper-slide>
                </swiper-container>
                <div className="swiper-scrollbar">
                    <div className="swiper-scrollbar-drag"></div>
                </div>
            </div>
        </div>
    )
}