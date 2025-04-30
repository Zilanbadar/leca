"use client"

import React, { useState } from 'react';
import { universities } from '../../data';
import {Main,UniversitySectionTitle } from './universitiesElements';
import InstituteMenu from '../../components/InstituteMenu';

// Sample data structure


const Universities = () => {

  return (
    <Main>
        <UniversitySectionTitle>Our Associate Universities</UniversitySectionTitle>
        
    <InstituteMenu institute={universities}/>
    </Main>
  );
};

export default Universities;

