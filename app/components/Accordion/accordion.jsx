import React from 'react';
import styled from 'styled-components';

// Define breakpoints
const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

const AccordionSection = styled.div`
  border-bottom: 1px solid #01abcc;
  margin: 15px 0;
  
  @media (min-width: ${breakpoints.md}) {
    margin: 20px 0;
  }
`;

const AccordionTitle = styled.button`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  text-align: left;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background: rgba(1, 171, 204, 0.2);
  }
  
  &::after {
    content: '+';
    font-size: 1.2rem;
    transition: transform 0.3s ease;
    transform: ${({ isopenc }) => isopenc ? 'rotate(45deg)' : 'none'};
  }
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 1rem;
    padding: 1rem;
    
    &:hover {
      background: rgba(1, 171, 204, 0.3);
    }
  }
`;

const AccordionContent = styled.div`
  max-height: ${({ isopenc }) => (isopenc ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: ${({ isopenc }) => (isopenc ? '1rem' : '0 1rem')};
  background-color: #212121;
  font-size: 16px;
  font-family: corbel;
  letter-spacing: 1px;
  color: #7b7b7b;
  line-height: 1.6;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 1.8;
  }
`;

const Accordion = ({ id, title, children, isOpen, onToggle }) => {
  return (
    <AccordionSection>
      <AccordionTitle 
        onClick={() => onToggle(id)}
        isopenc={isOpen}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        {title}
      </AccordionTitle>
      <AccordionContent 
        isopenc={isOpen}
        id={`accordion-content-${id}`}
        role="region"
      >
        {children}
      </AccordionContent>
    </AccordionSection>
  );
};

export default Accordion;