export default function ToothInfo({info, title}) {
    let returnedInfo='';

    if(Object.keys(info).length > 0) {

        let titleText = '';
        if(Number.isInteger(+title)) {
            titleText = title;
        }
        else {
            switch (title) {
                case 'top':
                    titleText = 'Верхняя челюсть'
                    break;
                case 'oral':
                    titleText = 'Полость рта'
                    break;
                case 'bottom':
                    titleText = 'Нижняя челюсть'
                    break;
            }
        }

        returnedInfo = <div className="vg-10">
            {Number.isInteger(+title) ? <span className="teeth-number">{titleText}</span> : <h6>{titleText}</h6>}
            <div className="vg-15">

                {info.conditions && info.conditions.length ?
                    <div className="vg-5">
                        <h6>Состояние:</h6>
                        <ul className="text-list fs-14">
                            {info.conditions.map((el, index) => <li key={'conditions'+index}>{el.label}</li>)}
                        </ul>
                    </div> : ''
                }
                {info.problems && info.problems.length ?
                    <div className="vg-5">
                        <h6>Проблемы:</h6>
                        <ul className="text-list fs-14">
                            {info.problems.map((el, index) => <li key={'problems'+index}>{el.label}</li>)}
                        </ul>
                    </div> : ''
                }
                {info.comment && info.comment.length ?
                    <div className="vg-5">
                        <h6>Комментарий врача:</h6>
                        {info.comment.map((el, index) => <p key={'comment'+index} className="c-gray fs-14">{el.label}</p>)}
                    </div> : ''
                }
            </div>
        </div>
    }
    else {
        returnedInfo = <div className="vg-10">
            {Number.isInteger(+title) ? <span className="teeth-number">{title}</span> : <h6>{title}</h6>}
            <div className="vg-5">
                <h6>Состояние:</h6>
                <ul className="text-list fs-14">
                    <li>Зуб здоров</li>
                </ul>
            </div>
        </div>
    }

    return (
        returnedInfo
    )
}