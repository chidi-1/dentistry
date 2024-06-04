import TeethFormulaTop from "./TeethFormula/TeethFormulaTop";
import TeethFormulaAside from "./TeethFormula/TeethFormulaAside";
import MediaSlider from "./MediaSlider";
import {useContext, useEffect, useState} from "react";
import ToothInfo from "./TeethFormula/ToothInfo";
import sprite from '../public/sprite.svg'
import {IconContext} from "../App";

export default function CurrentSection({data}) {

    const icons = useContext(IconContext);
    const [info, setInfo] = useState();
    const [currentTooth, setCurrentTooth] = useState();
    let [topJaw, setTopJaw] = useState({});
    let [bottomJaw, setBottomJaw] = useState({});
    let [oral, setOral] = useState({});

    useEffect(() => {
        // переделка данных зубов по ключу
        let teethDataKeyObject = {};
        let teethIconsKeyObject = {};
        data.teethDescription.forEach((item) => {
            teethDataKeyObject[item.id] = item;
        })
        data.sideTeeth.forEach((item) => {
            teethIconsKeyObject[item.id] = item;
        })

        // данные для отдельного зуба - проверка иконки + формирование информации
        let top = {}
        let bottom = {}
        let oral = {}
        for (let i = 11; i <= 28; i++) {
            if (i < 19 || i >= 21) {
                if ((teethIconsKeyObject[i])) {
                    top[i] = {
                        'defaultIcon': false,
                        'iconId': teethIconsKeyObject[i].image,
                        'info': teethDataKeyObject[i]
                    };
                } else {
                    top[i] = {'defaultIcon': true, 'iconId': i, 'info': {}};
                }
            }
        }

        for (let i = 31; i <= 48; i++) {
            if (i < 39 || i >= 41) {
                if ((teethIconsKeyObject[i])) {
                    bottom[i] = {
                        'defaultIcon': false,
                        'iconId': teethIconsKeyObject[i].image,
                        'info': teethDataKeyObject[i]
                    };
                } else {
                    bottom[i] = {'defaultIcon': true, 'iconId': i, 'info': {}};
                }
            }
        }

        if(teethDataKeyObject.top){
            oral['top'] = {
                'defaultIcon': false,
                'iconId': teethIconsKeyObject.top.image,
                'info': teethDataKeyObject.top
            };
        }
        if(teethDataKeyObject.middle){
            oral['top'] = {
                'defaultIcon': false,
                'iconId': teethIconsKeyObject.middle.image,
                'info': teethDataKeyObject.middle
            };
        }
        if(teethDataKeyObject.bottom){
            oral['top'] = {
                'defaultIcon': false,
                'iconId': teethIconsKeyObject.bottom.image,
                'info': teethDataKeyObject.bottom
            };
        }

        setTopJaw(top);
        setBottomJaw(bottom);
        setOral(oral);

    }, [data.teethDescription, data.sideTeeth])

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
                                        <TeethFormulaAside setCurrentTooth={setCurrentTooth} current={currentTooth} setInfo={setInfo} topJaw={topJaw} bottomJaw={bottomJaw}/>
                                    </div>
                                    }
                                    {data.topTeeth.length > 1 && <div className="tabs__content">
                                        <TeethFormulaTop/>
                                    </div>}
                                    <div className="teeth__position">
                                        {oral.top && <div onClick ={() => {setInfo(oral.top.info); setCurrentTooth('top')}} className={"jaw" + (currentTooth == 'top' ? ' active' : '')}>
                                            <img src={oral.top.defaultIcon && oral.top.iconId ? icons.defaultTeeth[oral.top.iconId] : icons.teeth[oral.top.iconId]} />
                                            <span>ВЧ</span>
                                        </div>}
                                        {oral.middle && <div className="jaw js--tooth-tab" data-tooth="top">
                                            <img src={oral.middle.defaultIcon && oral.middle.iconId ? icons.defaultTeeth[oral.middle.iconId] : icons.teeth[oral.middle.iconId]} />
                                            <span>Полость рта</span>
                                        </div>}
                                        {oral.middle && <div className="jaw js--tooth-tab" data-tooth="top">
                                            <img src={oral.bottom.defaultIcon && oral.bottom.iconId ? icons.defaultTeeth[oral.bottom.iconId] : icons.teeth[oral.bottom.iconId]} />
                                            <span>НЧ</span>
                                        </div>}
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
                <MediaSlider media={data.categories}/>
            </section>
        </div>
    )
}