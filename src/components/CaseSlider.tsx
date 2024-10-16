import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { StudySlider } from '../constants';
import Casestudy from './Casestudy';

export default () => {
    return (
        <div className="case-studies">
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {StudySlider.map((obj, index) => (
                <SwiperSlide key={index}>
                    <Casestudy
                        key={index}
                        image={obj.image}
                        title={obj.title}
                        description={obj.description}
                    />
                </SwiperSlide>
                
            ))}
        </Swiper>
        </div>
    );
};