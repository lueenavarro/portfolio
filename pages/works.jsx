import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import Slide from '../components/Slide';
import Work from '../components/Work';

import styles from './works.module.scss';

const WorksList = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [slideShowImages, setSlideShowImages] = useState([]);
  const [showSlide, setShowSlide] = useState(false);
  const images = [
    '/screenshots/esjs-hardware.jpg',
    '/screenshots/precious-finds.jpg',
    '/screenshots/spinthewheel.jpg',
    '/screenshots/bank.jpg',
  ];

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () => resolve(true);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log('Failed to load images', err));
  });

  const handleOpenSlide = (images) => {
    setSlideShowImages(images);
    setShowSlide(true);
  };

  const handleCloseSlide = () => {
    setShowSlide(false);
  };

  return (
    <Layout>
      <div className={`${styles.works} wrapper`}>
        <div className={styles.worksContainer}>
          {imgsLoaded ? (
            <>
              <h3 className={styles.worksSectionTitle}>Projects</h3>
              <div className={styles.worksList}>
                <Work
                  screenshot={images[0]}
                  title='Edgar SJ Santos Hardware'
                  description='Sales and item tracker'
                  onClick={() =>
                    handleOpenSlide([
                      'esjs/1.jpg',
                      'esjs/2.jpg',
                      'esjs/3.jpg',
                      'esjs/4.jpg',
                      'esjs/5.jpg',
                    ])
                  }
                  role='Full Stack Developer'
                />
                <Work
                  screenshot={images[3]}
                  title=''
                  description='Bank transfer platform used by remittance centers'
                  onClick={() =>
                    handleOpenSlide([images[3], 'bank/2.jpg', 'bank/1.jpg'])
                  }
                  role='Full Stack Developer'
                />
                <Work
                  screenshot={images[1]}
                  title='Precious Finds'
                  description='E-commerce site proof of concept'
                  link='https://preciousfinds.netlify.app'
                  role='Front End Developer'
                />
              </div>
              <br />
              <h3 className={styles.worksSectionTitle}>Playgrounds</h3>
              <div className={styles.worksList}>
                <Work
                  screenshot={images[2]}
                  title='Spin the Wheel'
                  description='A spin wheel for anything under the sun'
                  link='https://spinthewheel.louienavarro.me/'
                />
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
        {showSlide && (
          <Slide images={slideShowImages} onClose={() => handleCloseSlide()} />
        )}
      </div>
    </Layout>
  );
};

export default WorksList;
