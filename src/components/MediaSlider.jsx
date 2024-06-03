import {useCallback, useEffect, useRef, useState} from "react";
import {register} from 'swiper/element/bundle';
import Fancybox from "./Fancybox";

export default function MediaSlider({media}) {
    const [showSlider, setShowSlider] = useState(false);
    const [mediaData, setMediaData] = useState(() => media);
    const [filterActive, setFilterActive] = useState();
    const swiperButtonPrev = useRef(null);
    const swiperButtonNext = useRef(null);

    const swiperRef = useRef(null);

    const changeSlider = useCallback((type) => {
        setFilterActive(type)
        type.length ? setMediaData(mediaData.filter((item) => item.type == type)) : setMediaData(mediaData);
    }, [media])

    useEffect(() => {
/*        register();
        const params = {
            slidesPerView: 'auto',
            navigation: {
                prevEl: swiperButtonPrev.current,
                nextEl: swiperButtonNext.current,
            },
            spaceBetween: 20
        };

        Object.assign(swiperRef.current, params);

        swiperRef.current.initialize();*/
    }, []);

    return (
        <div className="media swiper-wrap">
            <div className="section__header">
                <div className="media__filter">
                    <button onClick={() => changeSlider('')} className={!filterActive ? 'active' : ''}>Все (10)</button>
                    <button onClick={() => changeSlider('3d')} className={filterActive == '3d' ? 'active' : ''}>3D
                        сканирование (1)
                    </button>
                    <button onClick={() => changeSlider('photo')}
                            className={filterActive == 'photo' ? 'active' : ''}>Фото улыбки (3)
                    </button>
                    <button onClick={() => changeSlider('illustration')}
                            className={filterActive == 'illustration' ? 'active' : ''}>Иллюстрации (1)
                    </button>
                    <button onClick={() => changeSlider('xray')}
                            className={filterActive == 'xray' ? 'active' : ''}>Рентген (5)
                    </button>
                </div>
                <div className="buttons-group">
                    {/*<button ref={swiperButtonPrev} className="button-scroll button-prev"></button>
                    <button ref={swiperButtonNext} className="button-scroll button-next"></button>*/}
                </div>
            </div>
            <div className="media__scroll-wrap">
                <div className="media__content" data-offset="20">
                    <Fancybox
                        options={{
                            contentClick: "iterateZoom",
                            Images: {
                                Panzoom: {
                                    maxScale: 2,
                                },
                            },
                        }}
                    >
                        {/*<swiper-container init="false" ref={swiperRef} class="swiper-wrapper">
                            {
                                mediaData.map((item) => {
                                    return (
                                        <swiper-slide key={item.img} class="swiper-slide">
                                            <div className="media__el" data-filter="3d">
                                                <a className="media__img"
                                                   data-fancybox="gallery"
                                                   data-caption={item.text}
                                                   data-src={item.img}>

                                                    <img src={item.img}/>
                                                </a>
                                                <span>{item.text}</span>
                                            </div>
                                        </swiper-slide>
                                    )
                                })
                            }
                        </swiper-container>*/}
                    </Fancybox>
                    <div className="swiper-scrollbar">
                        <div className="swiper-scrollbar-drag"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}