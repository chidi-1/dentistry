import {IconContext} from "../../App";
import {useContext} from "react";

export default function Tooth({defaultIcon, iconId, info, id, setInfo, current, setCurrentTooth}) {
    const icons = useContext(IconContext);

    return (
        <div onClick ={() => {setInfo(info); setCurrentTooth(id)}} className={"formula__el " + (current == id ? ' active' : '')} data-tooth={id}>
            <div className="formula__tooth">
                <img src={defaultIcon && iconId ? icons.defaultTeeth[iconId] : icons.teeth[iconId]} />
            </div>
            <div className="formula__number">
                <span>{id}</span>
            </div>
        </div>
    )
}