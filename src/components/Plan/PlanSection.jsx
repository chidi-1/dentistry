import sprite from "../../public/sprite.svg";
import * as PropTypes from "prop-types";
import MainSlider from "../MainSlider";

export default function PlanSection({single, isFirst, data}) {
    return (
        <div className={"type " + (!single ? 'alternative' : '')}>
            <div className="type__header">
                <div className="title">
                    <h3>{data.title}</h3>
                </div>
                {isFirst ? <span className="type__priority type__priority-main">Основной</span> :
                    <span className="type__priority type__priority-alternative">Альтернативный</span>}

            </div>
            <div className="type__content">
                <div className="type__info">
                    <div className="type__params">
                        <p className="type__description">Восстановление зубов одной
                            челюсти за&nbsp;счёт 4&nbsp;имплантов. Состоит из&nbsp;2&nbsp;этапов: установка
                            имплантов и&nbsp;фиксация несъёмной ортопедической конструкции.
                        </p>
                        <ul className="params">
                            <li className="param">
                                <div className="param__icon">
                                    <svg width="15" height="15">
                                        <use xlinkHref={sprite + "#icon-time"}/>
                                    </svg>
                                </div>
                                <div className="param__text">
                                    <span>Срок лечения <strong>8 месяцев (февраль 2024 года)</strong></span>
                                </div>
                            </li>
                            <li className="param">
                                <div className="param__icon">
                                    <svg width="15" height="16">
                                        <use xlinkHref={sprite + "#icon-attantion"}/>
                                    </svg>
                                </div>
                                <div className="param__text">
                                    <span>Срок актуальности плана <strong>2 недели</strong></span></div>
                            </li>
                        </ul>
                        <div className="type__price">
                            <svg width="19" height="18">
                                <use xlinkHref={sprite + "#icon-money"}/>
                            </svg>
                            <span>Стоимость <strong>от 618 000 рублей</strong></span></div>
                        {single && variant}
                    </div>
                    <a className="type__img" data-fancybox="type" data-src="/public/img--type-1.jpg">
                        <picture>
                            <source type="img/jpg"
                                    srcSet="../../public/img--type-1-Bv30UyUD.jpg 1x, ../../public/img--type-1@2x-BK6EZQ2r.jpg 2x"/>
                            <source type="img/webp"
                                    srcSet="../../public/img--type-1-CEZejpn6.webp 1x, ../../public/img--type-1@2x-w76rCMU0.webp 2x"/>
                            <img
                                srcSet="../../public/img--type-1-Bv30UyUD.jpg 1x, ../../public/img--type-1@2x-BK6EZQ2r.jpg 2x"
                                alt="Фотография"/>
                        </picture>
                    </a>
                </div>
                {!single &&
                <div className='variants'>
                    <MainSlider title='Варианты' space='15'>
                    </MainSlider>
                </div>
                }
                <a className="button button-blue js--change-plan" href="#estimate1">Подробнее</a>
            </div>
        </div>
    )
}