import {createContext, useEffect, useState} from 'react'
import reactLogo from './public/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header";
import Banner from "./components/Banner";
import CurrentSection from "./components/CurrentSection";
import PlansSection from "./components/Plan/PlansSection";

export const DataContext = createContext(null);
export const IconContext = createContext(null);
const components = {
    about: Banner,
    condition: CurrentSection,
    plans: PlansSection,
};

function App({data, icons}) {
    //console.log(icons)

    const [globalData, setGlobalData] = useState(data)
    const [count, setCount] = useState(0)

    let scrollWindow = () => {
        if (window.scrollY > 200) {
            //console.log(1)
        } else {
            //console.log(2)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollWindow);
        return () => {
            window.removeEventListener('scroll', scrollWindow)
        };
    }, [])  /* TODO вынести в отдельный компонент */

    return (
        <>
            <DataContext.Provider value={globalData}>
                <IconContext.Provider value={icons}>
                    <Header data={globalData.filter((block) => block.block === 'about')[0]}/>
                    <main>
                        {globalData.map((block) => {
                            if (block.block === 'about') {
                                let Section = components[block.block];
                                return <Section key={block.block} data={block}/>
                            }
                            if (block.block === 'condition') {
                                let Section = components[block.block];
                                return <Section key={block.block} data={block}/>
                            }
                        })}
                    </main>
                </IconContext.Provider>
            </DataContext.Provider>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
        </>
    )
}

export default App
