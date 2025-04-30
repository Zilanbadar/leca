"use client"

import React, { useState, useEffect } from 'react';
import {
    CarouselContainer,
CarouselSlide,
SlideContent,
Arrow,
LeftArrow,
RightArrow,
DotsContainer,
Dot
} from './carouselElements'
import Image from 'next/image';


const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <CarouselContainer>
      <CarouselSlide background={slides[currentIndex].url.src}>
        <SlideContent>
            {/* <Image src={slides[currentIndex].url} alt={slides[currentIndex].title} width={"100%"} height={"100%"}/> */}
          {/* <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p> */}
        </SlideContent>
      </CarouselSlide>
      
      <LeftArrow onClick={goToPrevious}>❮</LeftArrow>
      <RightArrow onClick={goToNext}>❯</RightArrow>
      
      <DotsContainer>
        {slides.map((slide, slideIndex) => (
          <Dot
            key={slideIndex}
            active={slideIndex === currentIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            
          </Dot>
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;