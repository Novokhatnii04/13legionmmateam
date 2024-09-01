import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import SliderImages from "./galleryimajes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./gallery.module.css";
import TitleSection from "../../../components/titlesection/titlesection";

const Gallery = () => {
  const pagination = {
    clickable: true,
    renderBullet: function () {
      return `<span class="${styles.swiper_pagination}" />`;
    },
  };

  return (
    <div id="gallery" style={{ width: "100%", height: "100%" }}>
      <TitleSection text="WE ARE FIGHT FAMILY" />
      <section className={styles.gallery}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: `.${styles.swiper_button_next}`,
            prevEl: `.${styles.swiper_button_prev}`,
          }}
          pagination={pagination}
          scrollbar={{ draggable: false }}
        >
          {SliderImages.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <div
                style={{ backgroundImage: `url(${image})` }}
                className={styles.gallery_image}
              />
            </SwiperSlide>
          ))}
          <div
            className={`${styles.swiper_button_next} swiper-button-next`}
          ></div>
          <div
            className={`${styles.swiper_button_prev} swiper-button-prev`}
          ></div>
        </Swiper>
      </section>
    </div>
  );
};

export default Gallery;
