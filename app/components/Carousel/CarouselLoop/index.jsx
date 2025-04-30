"use client"

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Uni1 from '@/app/images/Spons/1.jpg'
import Uni2 from '@/app/images/Spons/2.png'
import Uni3 from '@/app/images/Spons/3.png'
import Uni4 from '@/app/images/Spons/4.jpg'
import Uni5 from '@/app/images/Spons/5.png'
import Uni6 from '@/app/images/Spons/6.jpg'
import Uni7 from '@/app/images/Spons/7.jpg'
import Uni8 from '@/app/images/Spons/8.png'
import Uni9 from '@/app/images/Spons/9.png'
import Uni10 from '@/app/images/Spons/10.jpg'
import Uni11 from '@/app/images/Spons/11.jpg'
import Uni12 from '@/app/images/Spons/12.jpg'
import Image from 'next/image';

// Keyframe for scrolling
const scrollL = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;
const scrollR = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Styled Components
const CarouselContainer = styled.div`
    display: flex;
    width: 100%;
    height: 30vh;
    overflow: hidden;
    background: #fff;
    padding: 20px 0;
    align-items: center;
`;

const Slider = styled.div`
    height : auto;
    display: flex;
    gap : 20px;
    width: calc(300px * ${props => props.images.length * 2});
    animation: ${props => props.dir.left ? scrollL : scrollR} 20s linear infinite;

    &:hover {
    animation: ${props => props.dir.left ? scrollL : scrollR} 30s linear infinite;
    }
`;

const Slide = styled.div`
    flex: 0 0 auto;
    display: flex;
    width: 300px;
    height: 200px;
    margin: 0 10px;
    align-items: center;
`;


const images = [
    Uni1,
    Uni2,
    Uni3,
    Uni4,
    Uni5,
    Uni6,
    Uni7,
    Uni8,
    Uni9,
    Uni10,
    Uni11,
    Uni12
];

const CarouselLoop = (props) => {

  return (
    <>
    <CarouselContainer>
      <Slider dir={props} images={images}>
        {/* Duplicate images to create seamless loop */}
        {[...images, ...images].map((src, index) => (
            <Slide key={index}>
            <Image src={src} alt={`Slide ${index}`} />
          </Slide>
        ))}
      </Slider>
      </CarouselContainer>
    </>
  );
};

export default CarouselLoop;