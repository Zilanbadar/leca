import { universities } from "@/app/data";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

// Breakpoints
const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

// Carousel Container
const CarouselContainer = styled.div`
  position: relative;
  width: 50%;
  max-width: 1200px;
  height: 40vh;
  min-height: 400px;
  margin: 0 auto;
  padding: 20px;
  overflow: hidden;

  @media (min-width: ${breakpoints.md}) {
    padding: 40px 20px;
    min-height: 500px;
  }

  @media (min-width: ${breakpoints.lg}) {
    min-height: 70vh;
  }
`;

// Circular Track
const CircularTrack = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.radius * 2}px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

// Carousel Item
const CarouselItem = styled.div`
  position: absolute;
  width: ${(props) => (props.active ? props.activeSize : props.inactiveSize)}px;
  height: ${(props) => (props.active ? props.activeSize * 0.75 : props.inactiveSize * 0.75)}px;
  background: none;
  border: ${(props) => (props.active ? '8px' : '4px')} solid #3f3e3e;
  border-radius: 8px;
  box-shadow: ${(props) => 
    props.active ? '0 10px 30px 11px rgba(255, 255, 255, 0.5)' : '0 5px 15px 5px rgba(255, 255, 255, 0.3)'};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%)
    rotate(${(props) => props.rotate}deg)
    translate(${(props) => props.radius}px)
    rotate(${(props) => -props.rotate}deg);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  z-index: ${(props) => (props.active ? 2 : 1)};

  @media (max-width: ${breakpoints.sm}) {
    border-width: ${(props) => (props.active ? '6px' : '3px')};
  }
`;

// Navigation Buttons
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: #01cff7;
  border: none;
  font-size: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    opacity: 1;
  }

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 3rem;

    &:first-child {
      left: 20px;
    }

    &:last-child {
      right: 20px;
    }
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 1rem;
  color: #01abcc;
  background: rgba(0, 0, 0, 0.7);
  padding: 8px;
  margin: 0;
  z-index: 3;

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.2rem;
    bottom: 30px;
  }
`;

const CarouselCircular = () => {
  const [rotation, setRotation] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const totalItems = universities.length;
  const angle = 360 / totalItems;

  // Calculate container width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Calculate responsive sizes based on container width
  const getSizes = () => {
    if (!containerWidth) return { active: 300, inactive: 150, radius: 200 };

    const baseSize = Math.min(containerWidth * 0.8, 600);
    
    return {
      active: Math.max(baseSize * 0.7, 200),
      inactive: Math.max(baseSize * 0.3, 100),
      radius: Math.max(baseSize * 0.4, 150)
    };
  };

  const { active: activeSize, inactive: inactiveSize, radius } = getSizes();

  const handleNext = () => {
    setRotation((prev) => prev - angle);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + angle);
  };

  const activeIndex = ((Math.round(-rotation / angle) % totalItems) + totalItems) % totalItems;
  const activeUniversity = universities[activeIndex];

  return (
    <CarouselContainer ref={containerRef}>
      <CircularTrack radius={radius}>
        {universities.map((item, index) => {
          const rotate = index * angle + rotation;
          const isActive = Math.abs(rotate % 360) < angle / 2;
          
          return (
            <CarouselItem
              key={item.id}
              active={isActive}
              rotate={rotate}
              radius={radius}
              activeSize={activeSize}
              inactiveSize={inactiveSize}
            >
              <CardContainer>
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  width={isActive ? 500 : 250}
                  height={isActive ? 375 : 187.5}
                  priority={isActive}
                />
                {/* {isActive && <Title>{item.name}</Title>} */}
              </CardContainer>
            </CarouselItem>
          );
        })}
      </CircularTrack>

      <NavButton onClick={handlePrev} aria-label="Previous">
        <IoMdArrowDropleftCircle />
      </NavButton>
      <NavButton onClick={handleNext} aria-label="Next">
        <IoMdArrowDroprightCircle />
      </NavButton>
    </CarouselContainer>
  );
};

export default CarouselCircular;