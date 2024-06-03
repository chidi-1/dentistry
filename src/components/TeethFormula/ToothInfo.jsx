export default function ToothInfo ({info, title}) {

    return (
        <div className="vg-10">
            {Number.isInteger(+title) ? <span className="teeth-number">{title}</span> : <h6>{title}</h6>}
            <div className="vg-15">
                {info.state.length ?
                <div className="vg-5">
                    <h6>Состояние:</h6>
                    <ul className="text-list fs-14">
                        {info.state.map((el) => <li key={el}>{el}</li>)}
                    </ul>
                </div> : ''
                }
                {info.troubles.length ?
                    <div className="vg-5">
                        <h6>Проблемы:</h6>
                        <ul className="text-list fs-14">
                            {info.troubles.map((el) => <li key={el}>{el}</li>)}
                        </ul>
                    </div> : ''
                }
                {info.doctor.length ?
                    <div className="vg-5">
                        <h6>Комментарий врача:</h6>
                        {info.doctor.map((el) => <p key={el} className="c-gray fs-14">{el}</p>)}
                    </div> : ''
                }
            </div>
        </div>
    )
}