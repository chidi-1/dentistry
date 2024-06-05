import sprite from "../../public/sprite.svg";

export default function Estimate({data}) {
    return (
        <section className='estimate border-gray'>
            <div className='estimate__type'>
                <div className="estimate__header">
                    <h2>{data.label}</h2>
                    <ul className="params">
                        {data.period &&
                        <li className="param">
                            <div className="param__icon">
                                <svg width="15" height="15">
                                    <use xlinkHref={sprite + "#icon-time"}/>
                                </svg>
                            </div>
                            <div className="param__text">{data.period}</div>
                        </li>
                        }
                        {data.term &&
                        <li className="param">
                            <div className="param__icon">
                                <svg width="15" height="16">
                                    <use xlinkHref={sprite + "#icon-attantion"}/>
                                </svg>
                            </div>
                            <div className="param__text">{data.term}</div>
                        </li>
                        }
                        {data.price &&
                        <li className="param">
                            <div className="param__icon">
                                <svg width="19" height="18">
                                    <use xlinkHref={sprite + "#icon-money"}/>
                                </svg>
                            </div>
                            <div className="param__text">от {data.price} рублей</div>
                        </li>
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}