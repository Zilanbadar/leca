"use client"

import React, { useState } from 'react';
import { ContentArea, CourseCont, CourseItem, CoursesList, CoursesTitle, Main, InstituteLi, InstituteName, InstituteUL,  PanelSection, CriteriaLink } from './instituteMenuElements';
import Image from 'next/image';
import Link from 'next/link';

// Sample data structure


const InstituteMenu = ({institute}) => {
  const [selectedInstitute, setSelectedInstitute] = useState(institute[0]);

  console.log(institute)

  return (
    <Main>
        
        <PanelSection>
      <InstituteUL>
        {institute.map((ins) => (
            <InstituteLi
            key={ins.name}
            onClick={() => setSelectedInstitute(ins)}
            active={selectedInstitute.name === ins.name}
            >
            {ins.name}
          </InstituteLi>
        ))}
      </InstituteUL>
        <CriteriaLink><Link href={'/home-eu'}>Learn about entry requirements</Link></CriteriaLink>
    </PanelSection>
      
      <ContentArea>
        <CoursesTitle>Available Courses:
            
        </CoursesTitle>
        <CourseCont>
            
            <CoursesList>
                {selectedInstitute.course.map((course) => (
                    <CourseItem key={course}>{course}</CourseItem>
                ))}
            </CoursesList>
            <Image src={selectedInstitute.img} alt={selectedInstitute.name}/>
        </CourseCont>
        
        <InstituteName>{selectedInstitute.name}</InstituteName>
      </ContentArea>
    </Main>
  );
};

export default InstituteMenu;

