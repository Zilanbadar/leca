import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${props => props.background});
  background-position: center;
  transition: background-image 0.5s ease-in-out;
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  padding: 2rem;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    
    h2 {
      font-size: 1.8rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 3rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;

  &:hover {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.5rem;
  }
`;

export const LeftArrow = styled(Arrow)`
  left: 2rem;
`;

export const RightArrow = styled(Arrow)`
  right: 2rem;
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items : center;
  gap: 0.5rem;
  z-index: 10;
`;

export const Dot = styled.div`
    background: ${props => props.active ? '#01abcc ': '#fff'};
    width: ${props => props.active ? '20px' : '12px'};
    height: ${props => props.active ? "10px" : "6px"};
  cursor: pointer;
  font-size: 2rem;
  transition: width 0.3s ease;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;