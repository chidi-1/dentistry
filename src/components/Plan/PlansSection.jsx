import PlanSection from "./PlanSection";
import {useEffect, useRef} from "react";
import {register} from 'swiper/element/bundle';

export default function PlansSection({data}) {
    const swiperRef = useRef(null);

    useEffect(() => {
        register();
        const params = {
            slidesPerView: 'auto',
            spaceBetween: 0
        };

        if (data.plans.length > 1) {
            Object.assign(swiperRef.current, params);
            swiperRef.current.initialize();
        }
    }, []);

    return (
        <div className='container'>
        <section className="types border-gray" id="plan">

                <div className="section__header">
                    <h2>Планы лечения</h2>
                    <p className="fs-14 c-gray">Ниже представлено несколько планов лечения, которые наши специалисты
                        составили для решения проблем в&nbsp;вашем случае.</p></div>

                {data.plans.length === 1 ?
                    <div className={"row row-" + (data.plans.length)}>
                        <PlanSection data={data.plans[0]} single={data.plans.length === 1} isFirst={true}/>
                    </div>
                    :
                    <div className={"swiper-type type-" + (data.plans.length)}>
                        <swiper-container init="false" ref={swiperRef} class={"swiper-wrapper row row-" + (data.plans.length)}>
                            {data.plans.map((item, index) => {
                                return (
                                    <div key={item.title} className="swiper-slide">
                                        <PlanSection data={data.plans[index]} single={false} isFirst={index === 0}/>
                                    </div>
                                )
                            })}
                        </swiper-container>
                        <div className="swiper-type-scrollbar">
                            <div className="swiper-scrollbar-drag"></div>
                        </div>
                    </div>
                }

        </section>
        </div>
    )
}