import React, { useState } from "react";
import styles from "./Slide.module.scss";
import CloseButton from "./CloseButton";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller } from "swiper";

SwiperCore.use([Navigation, Pagination, Controller]);

const Slide = ({ images, onClose }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperControl, setSwiperControls] = useState({
    activeIndex: 0,
    position: "beginning",
  });

  const handleSlideChange = (slideIndex) => {
    let position = "";
    switch (slideIndex) {
      case 0:
        position = "beginning";
        break;
      case images.length - 1:
        position = "end";
        break;
      default:
        position = null;
    }

    setSwiperControls({ activeIndex: slideIndex, position });
  };

  return (
    <div className={styles.slide}>
      <div className={styles.slideCloseButton}>
        <CloseButton onClick={onClose} />
      </div>
      {swiperControl.position != "beginning" && (
        <div
          className={`${styles.slideArrow} ${styles.slideArrowLeft}`}
          onClick={() => swiperInstance.slidePrev()}
        ></div>
      )}
      <div className={styles.swiper}>
        <Swiper controller={{ control: swiperInstance }}> </Swiper>
        <Swiper
          onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          pagination
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={50}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.swiperImage}>
                <img src={image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {swiperControl.position != "end" && (
        <div
          className={`${styles.slideArrow} ${styles.slideArrowRight}`}
          onClick={() => swiperInstance.slideNext()}
        ></div>
      )}
    </div>
  );
};

export default Slide;
