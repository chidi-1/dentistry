import sprite from "../public/sprite.svg";

export default function Header({data}) {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <div className="clinic">
                            {data.logo && <img className="clinic__logo" src={data.logo} />}
                            {data.name && <span className="clinic__name">{data.name}</span>}
                        </div>
                        <ul className="nav">
                            <li className="nav__el">
                                <a className="nav__link js--page-scroll" href="#current">Текущее состояние</a>
                            </li>
                            <li className="nav__el">
                                <a className="nav__link js--page-scroll" href="#plan">Планы лечения</a>
                            </li>
                            <li className="nav__el">
                                <a className="nav__link js--page-scroll" href="#estimate">Смета по
                                этапам</a>
                            </li>
                            <li className="nav__el">
                                <a className="nav__link js--page-scroll" href="#team">Команда</a>
                            </li>
                            <li className="nav__el">
                                <a className="nav__link js--page-scroll" href="#about">О клинике</a>
                            </li>
                            <li className="nav__el">
                                <a className="nav__link js--page-scroll" href="#help">Памятка</a>
                            </li>
                        </ul>
                        {data.site && <a href={data.site} className="header__user">{data.site}</a>}
                    </div>
                </div>
            </header>
            <ul className="mobile-nav">
                <li className="mobile-nav__el"><a className="mobile-nav__link js--page-scroll" href="#current">
                    <div className="mobile-nav__icon">
                        <svg width="16" height="18">
                            <use xlinkHref={sprite + "#mob-menu-1" } />
                        </svg>
                    </div>
                    <span>Текущее состояние</span></a></li>
                <li className="mobile-nav__el"><a className="mobile-nav__link js--page-scroll" href="#plan">
                    <div className="mobile-nav__icon">
                        <svg width="13" height="16">
                            <use xlinkHref={sprite + "#mob-menu-2"} />
                        </svg>
                    </div>
                    <span>Планы лечения</span></a></li>
                <li className="mobile-nav__el"><a className="mobile-nav__link js--page-scroll" href="#curator">
                    <div className="mobile-nav__icon">
                        <svg width="13" height="15">
                            <use xlinkHref={sprite + "#mob-menu-3"} />
                        </svg>
                    </div>
                    <span>Куратор</span></a></li>
                <li className="mobile-nav__el"><a className="mobile-nav__link js--page-scroll" href="#team">
                    <div className="mobile-nav__icon">
                        <svg width="21" height="15">
                            <use xlinkHref={sprite + "#mob-menu-4"} />
                        </svg>
                    </div>
                    <span>Команда</span></a></li>
                <li className="mobile-nav__el"><a className="mobile-nav__link js--page-scroll" href="#help">
                    <div className="mobile-nav__icon">
                        <svg width="21" height="15">
                            <use xlinkHref={sprite + "#mob-menu-4"} />
                        </svg>
                    </div>
                    <span>Памятка</span></a></li>
            </ul>
        </>
    )
}