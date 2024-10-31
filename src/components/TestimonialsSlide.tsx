import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Testislider } from '../constants';
import Testimonials from './Testimonials';
import 'swiper/swiper-bundle.css'

export default () => {

    return (
        <section className='Boxslider'>
            <div className="top-cont">
                <h2 className="main-head">Industries we've <span className="orange">excelled in</span></h2>
                <p className="para top">Our services are tailor-made and we are always striving to surpass your wildest expectations!</p>
            </div>
            <div className="container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    autoplay={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        367: { // At 640px width
                            slidesPerView: 1, // Still 1 slide
                        },
                        768: { // At 768px width
                            slidesPerView: 2, // Show 2 slides
                        },
                        1024: { // At 1024px width
                            slidesPerView: 3, // Show 3 slides
                        },
                    }}
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