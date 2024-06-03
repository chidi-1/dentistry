import TeethFormulaTop from "./TeethFormula/TeethFormulaTop";
import TeethFormulaAside from "./TeethFormula/TeethFormulaAside";
import MediaSlider from "./MediaSlider";
import {useEffect, useState} from "react";
import ToothInfo from "./TeethFormula/ToothInfo";
import sprite from '../public/sprite.svg'

export default function CurrentSection({data}) {

    const [info, setInfo] = useState();
    const [currentTooth, setCurrentTooth] = useState();
    let teethData = [];
    let teethIcons = [];

    useEffect(() => {
        teethData = data.teethDescription;
        teethIcons = data.sideTeeth;
    }, [data])

    return (
        <div className='container'>
            <section className="current border-gray" id="current">
                <div className="section__header">
                    {data.label && <h2>{data.label}</h2>}
                    {data.description && <p className='fs-14 c-gray'>{data.description}</p>}
                </div>
                <div className="border-gray-l">
                    <div className="teeth">
                        <div className="teeth__visual tabs">
                            <div className="teeth__header">
                                <h3>Зубная формула пациента</h3>
                                {data.topTeeth.length > 1 &&
                                <ul className="tabs__caption">
                                    <li className="active">Вид сбоку</li>
                                    <li>Вид сверху</li>
                                </ul>
                                }
                            </div>
                            <div className="teeth__content" id="teeth__content">
                                <div className="teeth__scheme">
                                    {data.sideTeeth.length > 1 && <div className="tabs__content">
                                        <TeethFormulaAside setCurrentTooth={setCurrentTooth} current={currentTooth}
                                                           setInfo={setInfo} teethData={teethData} teethIcons={data.sideTeeth}/>
                                    </div>
                                    }
                                    {data.topTeeth.length > 1 && <div className="tabs__content">
                                        <TeethFormulaTop/>
                                    </div>}
                                    <div className="teeth__position">
                                        <div className="jaw js--tooth-tab" data-tooth="top">
                                            <svg width="42" height="48">
                                                <use xlinkHref={sprite + "#jaw-top"}/>
                                            </svg>
                                            <span>ВЧ</span></div>
                                        <div className="oral js--tooth-tab" data-tooth="oral"><span>Полость рта</span>
                                        </div>
                                        <div className="jaw js--tooth-tab" data-tooth="bottom">
                                            <svg width="42" height="48">
                                                <use xlinkHref={sprite + "#jaw-bottom"}/>
                                            </svg>
                                            <span>НЧ</span>
                                        </div>
                                    </div>
                                    <div className="teeth__legend">
                                        <ul className="legend">
                                            <li className="legend__el">
                                                <div className="legend__icon healthy"></div>
                                                <span className="legend__text">Здоровые</span></li>
                                            <li className="legend__el">
                                                <div className="legend__icon actual"></div>
                                                <span className="legend__text">Текущее состояние</span></li>
                                            <li className="legend__el">
                                                <div className="legend__icon trouble"></div>
                                                <span className="legend__text">Проблемные</span></li>
                                            <li className="legend__el">
                                                <div className="legend__icon treated"></div>
                                                <span className="legend__text">Леченые</span></li>
                                            <li className="legend__el">
                                                <div className="legend__icon issue"></div>
                                                <span className="legend__text">Спорные</span></li>
                                            <li className="legend__el">
                                                <div className="legend__icon absence"></div>
                                                <span className="legend__text">Отсутствующие</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teeth__info">
                            <div className="teeth__header"><h4>Информация о&nbsp;зубе</h4></div>
                            <div className="teeth__content">
                                <div className="active">
                                    {info && <ToothInfo info={info} title={currentTooth}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MediaSlider media={data.media}/>
            </section>
        </div>
    )
}