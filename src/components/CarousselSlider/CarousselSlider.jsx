import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TestimonialCard } from './TestimonialCard';
import { useState } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import "./styles.css"

export function CarousselSlider({ items, delay }){
    const seconds = useState(new Date().getSeconds());
    const milis = useState(new Date().getMilliseconds());
    const size = useWindowSize();
    
    const chunkArray = (arr, size) => {
        return arr.reduce((acc, _, i) => 
            (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
    };

    const groupedItems = chunkArray(items,  size.width <= 690 ? 1 : 2 );

    return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          groupedItems.map((group, index) => (
            <SwiperSlide key={index}>
              {group.map((card) => (
                <TestimonialCard
                  key={`${card.title}-${seconds}-${milis}`}
                  imagePath={card.imagePath}
                  title={card.title}
                  subtitle={card.subtitle}
                  body={card.body}
                />
              ))}
            </SwiperSlide>
          ))
        }
      </Swiper>
    );
}