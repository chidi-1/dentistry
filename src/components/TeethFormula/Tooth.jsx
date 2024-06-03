export default function Tooth({status, id, type, placement, info, setInfo, current, setCurrentTooth}) {

    return (
        <div onClick ={() => {setInfo(info); setCurrentTooth(id)}} className={"formula__el " + status + (current == id ? ' active' : '')} data-tooth={id}>
            <div className="formula__tooth">
                <div className={"tooth tooth-" + id}></div>
            </div>
            <div className="formula__number">
                <span>{id}</span>
            </div>
        </div>
    )
}