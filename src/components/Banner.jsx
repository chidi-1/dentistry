import sprite from '../public/sprite.svg'

export default function Banner({data}) {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__text">
                    <p className="banner__presentation">Презентация плана лечения</p>
                    {data.patient && <h1>{data.patient}</h1>}
                    {data.description && <p className='banner__description'>{data.description}</p> }
                    {data.pdf && <a className="button button-blue" href={data.pdf} download>
                        <svg width="16" height="16">
                            <use xlinkHref={sprite + "#icon-download"}></use>
                        </svg>
                        Скачать pdf
                    </a>}
                </div>
            </div>
        </section>
    )
}