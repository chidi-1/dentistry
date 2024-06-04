import Tooth from "./Tooth";
import {useEffect, useState} from "react";

export default function TeethFormulaAside({topJaw, bottomJaw, setInfo, current, setCurrentTooth}) {


    /* TODO разрулить */

    return (
        <div className="teeth__formula">
            <div className="formula">
                <div className="formula__jaw top">
                    {Object.entries(topJaw).map(([key, value]) => <Tooth key={key} {...value}
                                                                         id={key}
                                                                         setCurrentTooth={setCurrentTooth}
                                                                         setInfo={setInfo}
                                                                         current={current}/>)}
                </div>
                <div className="formula__jaw bottom">
                    {Object.entries(bottomJaw).map(([key, value]) => <Tooth key={key} {...value}
                                                                            id={key}
                                                                            setCurrentTooth={setCurrentTooth}
                                                                            setInfo={setInfo}
                                                                            current={current}/>)}
                </div>
            </div>
        </div>
    )
}