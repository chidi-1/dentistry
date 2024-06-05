import sprite from "../../public/sprite.svg";
import * as PropTypes from "prop-types";
import MainSlider from "../MainSlider";
import {useContext} from "react";
import {IconContext, PhotoContext} from "../../App";
import Fancybox from "../Fancybox";

export default function PlanSection({single, isFirst, data}) {
    const icons = useContext(IconContext);
    const photos = useContext(PhotoContext);

    return (
        <div className={"type " + (!single ? 'alternative' : '')}>
            <div className="type__header">
                <div className="title">
                    <h3>{data.label}</h3>
                </div>
                {isFirst ? <span className="type__priority type__priority-main">Основной</span> :
                    <span className="type__priority type__priority-alternative">Альтернативный</span>}
            </div>
            <div className="type__content">
                <div className="type__info">
                    <div className="type__params">
                        {data.description && <p className="type__description">{data.description}</p>}
                        <ul className="params">
                            {data.period &&
                            <li className="param">
                                <div className="param__icon">
                                    <svg width="15" height="15">
                                        <use xlinkHref={sprite + "#icon-time"}/>
                                    </svg>
                                </div>
                                <div className="param__text">
                                    <span>Срок лечения <strong>{data.period}</strong></span>
                                </div>
                            </li>
                            }
                            {data.term &&
                            <li className="param">
                                <div className="param__icon">
                                    <svg width="15" height="16">
                                        <use xlinkHref={sprite + "#icon-attantion"}/>
                                    </svg>
                                </div>
                                <div className="param__text">
                                    <span>Срок актуальности плана <strong>{data.term}</strong></span></div>
                            </li>
                            }
                        </ul>
                        {data.price &&
                        <div className="type__price">
                            <svg width="19" height="18">
                                <use xlinkHref={sprite + "#icon-money"}/>
                            </svg>
                            <span>Стоимость <strong>от {data.price} рублей</strong></span></div>
                        }
                        {/*{single && variant}*/}
                    </div>
                    {data.image &&
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
                        <a className="type__img" data-fancybox="type" data-src={photos[data.image]}>
                            <img src={icons.another[data.image]}/>
                        </a>
                    </Fancybox>
                    }
                </div>
                {/*{!single &&
                <div className='variants'>
                    <MainSlider title='Варианты' space='15'>
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
                    </MainSlider>
                </div>
                }*/}
                <a className="button button-blue js--change-plan" href="#estimate1">Подробнее</a>
            </div>
        </div>
    )
}