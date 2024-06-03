import Tooth from "./Tooth";
import {useEffect, useState} from "react";

export default function TeethFormulaAside({teethData, setInfo, current, setCurrentTooth, teethIcons}) {

    let [topJaw, setTopJaw] = useState({});
    let [bottomJaw, setBottomJaw] = useState({});

    useEffect(() => {
        let top = {}
        let bottom = {}
        for (let i = 11; i <= 28; i++) {
            top[i] = {};
        }
        for (let i = 31; i <= 48; i++) {
            bottom[i] = {};
        }

        setTopJaw(top);
        setBottomJaw(bottom);

    }, [teethData, teethIcons])

    useEffect(() => {
        teethIcons.forEach((tooth) => {
            let currentJaw;
            console.log(topJaw[tooth.id])
            console.log(bottomJaw[tooth.id])
        })
    }, [topJaw, bottomJaw] )

    /* TODO разрулить */

    return (
        <div className="teeth__formula">
            <div className="formula">
                <div className="formula__jaw top">
                   {/* {topJaw.map((tooth) => {
                        console.log(tooth);
                        return <Tooth key={tooth.id} {...tooth} setCurrentTooth={setCurrentTooth} setInfo={setInfo}
                                      current={current}/>
                    })}*/}
                </div>
                <div className="formula__jaw bottom">
                    {/*{bottomJaw.map((tooth) => <Tooth key={tooth.id} {...tooth} setCurrentTooth={setCurrentTooth}
                                                     setInfo={setInfo} current={current}/>)}*/}
                </div>
            </div>
        </div>
    )
}