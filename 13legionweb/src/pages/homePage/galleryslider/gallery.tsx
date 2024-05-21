import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './gallery.module.css'; // Adjust the path to your actual CSS file
import sliderImg1 from "../../../assets/images/slider/imageclub1.png";
import sliderImg2 from "../../../assets/images/slider/imageclub2.png";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${sliderImg1})` }}
            className={styles.gallery_image}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${sliderImg2})` }}
            className={styles.gallery_image}
          />
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </section>
  );
};

export default Gallery;
