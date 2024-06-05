import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {register} from 'swiper/element/bundle';
import Fancybox from "./Fancybox";
import {IconContext, PhotoContext} from "../App";

export default function MediaSlider({media}) {
    const icons = useContext(IconContext);
    const photos = useContext(PhotoContext);

    const [showSlider, setShowSlider] = useState(false);
    const [mediaData, setMediaData] = useState(() => media);
    const [filterActive, setFilterActive] = useState();
    const [filterData, setFilterData] = useState([])
    const swiperButtonPrev = useRef(null);
    const swiperButtonNext = useRef(null);

    const swiperRef = useRef(null);

    useEffect(() => {
        let filterData = [];
        filterData.push({'Все': media.reduce((counter, item) => counter + item.images.length, 0)})
        media.forEach((item, index) => {
            filterData.push({[item.name]: item.images.length})
        })
        setFilterData(filterData);
    }, [media])

    const changeSlider = useCallback((type) => {
        if (type !== filterActive) {
            setFilterActive(type);
            type === 0 ? setMediaData(media) : setMediaData(media.filter((item, index) => index === type - 1))
        }
    }, [filterActive])

    useEffect(() => {
        register();
        const params = {
            slidesPerView: 'auto',
            navigation: {
                prevEl: swiperButtonPrev.current,
                nextEl: swiperButtonNext.current,
            },
            spaceBetween: 20
        };

        Object.assign(swiperRef.current, params);

        swiperRef.current.initialize();
    }, []);

    return (
        <div className="media swiper-wrap">
            <div className="section__header">
                <div className="media__filter">
                    {filterData.map((item, index) => <button key={'button' + index} onClick={() => changeSlider(index)}
                                                             className={filterActive == index ? 'active' : ''}>{Object.keys(item)[0]} ({Object.values(item)[0]})</button>)}
                </div>
                <div className="buttons-group">
                    <button ref={swiperButtonPrev} className="button-scroll button-prev"></button>
                    <button ref={swiperButtonNext} className="button-scroll button-next"></button>
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
                        <swiper-container init="false" ref={swiperRef} className="swiper-wrapper">
                            {mediaData.map((item) => {
                                return (item.images.map((photo) => {
                                    return (
                                        <swiper-slide key={photo.image} class="swiper-slide">
                                            <div className="media__el">
                                                <a className="media__img"
                                                   data-fancybox="gallery"
                                                   data-caption={photo.label === 'Без названия' ? '' : photo.label}
                                                   data-src={photos[photo.image]}>

                                                    <img src={icons.another[photo.image]}/>
                                                </a>
                                                {photo.label === 'Без названия' ? '' : <span>{photo.label}</span>}
                                            </div>
                                        </swiper-slide>
                                    )
                                }))
                            })}
                        </swiper-container>
                    </Fancybox>
                    <div className="swiper-scrollbar">
                        <div className="swiper-scrollbar-drag"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}