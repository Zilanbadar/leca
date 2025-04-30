import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { ChevronLeft, ChevronRight } from 'react-feather';


const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateX(${props => props.translateValue}px);
`;

const MainCard = styled.div`
  flex: 0 0 60%;
  padding: 20px;
  transition: all 0.4s ease;
  transform: ${props => props.active ? 'scale(1.1)' : 'scale(0.8)'};
  opacity: ${props => props.active ? 1 : 0.6};
  filter: blur(${props => props.active ? 0 : '2px'});
`;

const CardContent = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 420px;
  box-shadow: 0 0 20px 4px #242525;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Category = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #4a90e2;
  background: rgba(74, 144, 226, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
  margin: 15px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  color: #0a2540;
  margin: 0 20px 16px;
  line-height: 1.4;
`;

const ReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  color: #4a90e2;
  font-weight: 500;
  text-decoration: none;
  margin: 20px;
  transition: all 0.3s ease;

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #2a6db5;
    svg {
      transform: translateX(3px);
    }
  }
`;

const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #c1c1c1;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgb(0 0 0);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 0.3s ease;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  &:first-child {
    left: 20px;
  }

  &:last-child {
    right: 20px;
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "Omnichannel Customer Support",
    category: "Customer Experience",
    image: "../../assets/images/download.jpeg"
  },
  {
    id: 2,
    title: "Enterprise Knowledge Management",
    category: "Knowledge Base",
    image: "https://source.unsplash.com/random/800x600?knowledge"
  },
  {
    id: 3,
    title: "AI-Powered Self-Service",
    category: "Automation",
    image: "https://source.unsplash.com/random/800x600?ai"
  },
  {
    id: 4,
    title: "Customer Feedback Analysis",
    category: "Analytics",
    image: "https://source.unsplash.com/random/800x600?analytics"
  },
];

// Create infinite loop array
const cardWidth = 1200 * 0.6; // 60% of container width

const CarouselLinear = (data) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    
    const clonedItems = [...blogPosts, blogPosts[0]];


  const handleNext = () => {
    if (!transitionEnabled) return;
    setActiveIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (!transitionEnabled) return;
    setActiveIndex(prev => prev - 1);
  };

  useEffect(() => {
    // Handle infinite loop transitions
    if (activeIndex === clonedItems.length - 1) {
      setTransitionEnabled(false);
      setActiveIndex(0);
      setTimeout(() => setTransitionEnabled(true), 10);
    }
    if (activeIndex === -1) {
      setTransitionEnabled(false);
      setActiveIndex(clonedItems.length - 2);
      setTimeout(() => setTransitionEnabled(true), 10);
    }
  }, [activeIndex]);

  return (
    <CarouselContainer>
      <CarouselTrack 
        translateValue={-activeIndex * cardWidth}
        style={{ transition: transitionEnabled ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none' }}
      >
        {clonedItems.map((item, index) => (
          <MainCard key={index} active={index === activeIndex}>
            <CardContent>
              <CardImage src='../../assets/images/1.jpg' alt={item.title} />
              <Category>{item.category}</Category>
              <CardTitle>{item.title}</CardTitle>
              <ReadMore href="#">
                Read More
                {/* <ChevronRight size={18} /> */}
              </ReadMore>
            </CardContent>
          </MainCard>
        ))}
      </CarouselTrack>

      <NavButton onClick={handlePrev}>
        {/* <ChevronLeft size={24} /> */}
      </NavButton>
      <NavButton onClick={handleNext}>
        {/* <ChevronRight size={24} /> */}
      </NavButton>
    </CarouselContainer>
  );
};

export default CarouselLinear;