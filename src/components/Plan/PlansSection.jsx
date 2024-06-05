import PlanSection from "./PlanSection";
import {useEffect, useRef} from "react";
import {register} from 'swiper/element/bundle';
import Estimate from "./Estimate";

export default function PlansSection({data}) {
    const swiperRef = useRef(null);

    useEffect(() => {
        /*register();
        const params = {
            slidesPerView: 'auto',
            spaceBetween: 0
        };

        if (data.items.length > 1) {
            Object.assign(swiperRef.current, params);
            swiperRef.current.initialize();
        }*/
    }, []);

    return (
        <div className='container'>
            <section className="types border-gray" id="plan">

                <div className="section__header">
                    {data.label && <h2>{data.label}</h2>}
                    {data.description && <p className="fs-14 c-gray">{data.description}</p>}
                </div>

                {data.items.length === 1 ?
                    <div className={"row row-" + (data.items.length)}>
                        <PlanSection data={data.items[0]} single={data.items.length === 1} isFirst={true}/>
                    </div>
                    :
                    <div className={"swiper-type type-" + (data.items.length)}>
                        <div className={"swiper-wrapper row row-" + (data.items.length)}>
                            {data.items.map((item, index) => {
                                return (
                                    <PlanSection key={'plan' + index} data={data.items[index]} single={false}
                                                 isFirst={index === 0}/>
                                )
                            })}
                        </div>
                        <div className="swiper-type-scrollbar">
                            <div className="swiper-scrollbar-drag"></div>
                        </div>

                        {/*<swiper-container init="false" ref={swiperRef} class={"swiper-wrapper row row-" + (data.items.length)}>
                            {data.items.map((item, index) => {
                                return (
                                    <swiper-slide key={item.title} class="swiper-slide">
                                        <PlanSection key={'plan'+ index} data={data.items[index]} single={false} isFirst={index === 0}/>
                                    </swiper-slide>
                                )
                            })}
                        </swiper-container>
                        */}
                    </div>
                }
            </section>

            {data.items.map((item) => <Estimate data={item} ></Estimate>)}
        </div>
    )
}