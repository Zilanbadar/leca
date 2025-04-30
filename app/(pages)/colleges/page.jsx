"use client"

import React from 'react';
import { colleges } from '../../data';
import InstituteMenu from '../../components/InstituteMenu';
import { CollegeSectionTitle, Main } from './collegesElements';

// Sample data structure


const Colleges = () => {

  return (
    <Main>
        <CollegeSectionTitle>Our Associate Colleges</CollegeSectionTitle>
        
    <InstituteMenu institute={colleges}/>
    </Main>
  );
};

export default Colleges;