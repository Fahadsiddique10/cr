import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Testislider } from '../constants';
import Testimonials from './Testimonials';

export default () => {
    return (
        <section className='Boxslider'>
            <div className="top-cont">
            <h2 className="main-head">Industries we've <span className="orange">excelled in</span></h2>
            <p className="para top">Our services are tailor-made and we are always striving to surpass your wildest expectations!</p>
            </div>
        <div className="container">
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {Testislider.map((obj, index) => (
                <SwiperSlide key={index}>
                    <Testimonials
                        key={index}
                        icon={obj.icon}
                        title={obj.title}
                        image={obj.image}
                        Rating={obj.Rating}
                        description={obj.description}
                    />
                </SwiperSlide>
            ))}
          
        </Swiper>
        </div>
        </section>
    );
};