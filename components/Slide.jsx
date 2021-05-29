import React, { useEffect, useRef, useState } from "react";
import styles from "./Slide.module.scss";
import CloseButton from "./CloseButton";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Controller,
  Keyboard,
  Navigation,
  Pagination,
  Zoom,
} from "swiper";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

SwiperCore.use([Controller, Keyboard, Navigation, Pagination, Zoom]);

const Slide = ({ images, onClose }) => {
  const slideContainer = useRef(null);

  useEffect(() => {
    disableBodyScroll(slideContainer.current);
  }, []);

  useEffect(() => {
    const escFunc = (event) => {
      const escapeKeyCode = 27;
      if (event.keyCode === escapeKeyCode) onThisComponentClose();
    };

    document.addEventListener("keydown", escFunc, false);
    return () => document.removeEventListener("keydown", escFunc, false);
  }, []);

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

  const onThisComponentClose = () => {
    enableBodyScroll(slideContainer.current);
    clearAllBodyScrollLocks();
    onClose();
  };

  return (
    <div className={styles.slide} ref={slideContainer}>
      <div className={styles.slideCloseButton}>
        <CloseButton onClick={onThisComponentClose} />
      </div>

      <div className={styles.slideArrowContainer}>
        {swiperControl.position != "beginning" && (
          <div
            className={`${styles.slideArrow} ${styles.slideArrowLeft}`}
            onClick={() => swiperInstance.slidePrev()}
          ></div>
        )}
      </div>

      <div className={styles.swiper}>
        <Swiper controller={{ control: swiperInstance }}> </Swiper>
        <Swiper
          onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={50}
          keyboard
          pagination
          zoom
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

      <div className={styles.slideArrowContainer}>
        {swiperControl.position != "end" && (
          <div
            className={`${styles.slideArrow} ${styles.slideArrowRight}`}
            onClick={() => swiperInstance.slideNext()}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Slide;
