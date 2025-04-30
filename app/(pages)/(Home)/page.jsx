"use client"

import React from "react";

import homeimg4 from "@/app/images/logo/Banner.jpg";

import { FaPeoplePulling } from "react-icons/fa6";
import { GiGiftOfKnowledge, GiGlobe } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";



import {
  AboutCont,
  AboutHead,
  AboutPara,
  CriteriaCont,
  CriteriaContHead,
  CriteriaContIcon,
  CriteriaHead,
  CriteriaList,
  CriteriaSection,
  ExploreCard,
  ExploreCardBtn,
  ExploreCardDesc,
  ExploreCardImage,
  ExploreCardTitle,
  ExploreCont,
  ExploreSection,
  InstituteBtn,
  InstituteBtnCont,
  InstituteCont,
  InstituteHead,
  InstitutePara,
  InstituteSection,
  LECCont,
  LECHead,
  LECPara,
  LECSection,
  RegisterBtn,
  RegisterCont,
  RegisterHead,
  RegisterInputCont,
  RegisterSection,
} from "./homeElements";
import Image from "next/image";
import Carousel from "../../components/Carousel/carouselMain";
import CarouselLoop from "../../components/Carousel/CarouselLoop";
import AccordionGroup from "../../components/Accordion";
import CarouselCircular from "../../components/Carousel/carouselCircular";
import { accordion, carouselSlides, explore } from "../../data";
import { useRouter } from "next/navigation";


const Home = () => {

  const router = useRouter()
  
  

  
  
  return (
    <>
      <Carousel slides={carouselSlides}/>
      {/* <Fullslider/> */}

      <ExploreSection>
        <AboutCont>
          <AboutHead>CHOOSE LEEDS EDUCATION CENTER EXPERIENCES</AboutHead>
          <AboutPara>
            To help international students find the best university in the UK, we have developed a specialised 
            service.
          </AboutPara>
          <AboutPara>
            Whether you're looking to enrol as an undergraduate, graduate, or doctoral student, we're your go-to 
            UK university application partner. We look over your transcripts and discuss your  professional 
            objectives before making a recommendation for a college.
          </AboutPara>
        </AboutCont>
        <ExploreCont>
          {
            explore.map(exp =>{
              return (
                <ExploreCard key={exp.id}>
                  <ExploreCardImage>
                    <Image src={exp.image} alt={exp.title}/>
                  </ExploreCardImage>
                  <ExploreCardTitle>{exp.title}</ExploreCardTitle>
                  <ExploreCardDesc>{exp.desc}</ExploreCardDesc>
                  <ExploreCardBtn>Explore</ExploreCardBtn>
                </ExploreCard>
                
              )
            })
          }
        </ExploreCont>
      </ExploreSection>

      <CarouselLoop/>

      <RegisterSection background={homeimg4.src}>
        <RegisterCont>
          <RegisterHead>Get A Free Registration Now!</RegisterHead>
          <RegisterInputCont>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="number" placeholder="Number" />
          </RegisterInputCont>
          <RegisterBtn>Register Now</RegisterBtn>
        </RegisterCont>
      </RegisterSection>

      <CarouselLoop left/>

      <CriteriaSection>
        <CriteriaHead>Who Can Benefit</CriteriaHead>
        <CriteriaList>
          <CriteriaCont>          
            <CriteriaContIcon>
              <GiGiftOfKnowledge />
            </CriteriaContIcon>
            <CriteriaContHead>People who would like to start their education</CriteriaContHead>
          </CriteriaCont>
          
          <CriteriaCont>
            <CriteriaContIcon>
              <FaPeoplePulling />
            </CriteriaContIcon>
            <CriteriaContHead>People from any age and of any background</CriteriaContHead>
          </CriteriaCont>
          
          <CriteriaCont>
            <CriteriaContIcon>
              <GiGlobe />
            </CriteriaContIcon>
            <CriteriaContHead>Students forn UK/EU and from all over the world</CriteriaContHead>
          </CriteriaCont>
        </CriteriaList>
      </CriteriaSection>

      <LECSection>
        <LECCont>
          <LECHead>WHY CHOOSE US?</LECHead>
          <LECPara>
            We are dedicated to helping you find the perfect educational
            pathway that meets your individual needs. As an authorised
            representative of UK Colleges and Universities, we provide a
            comprehensive consultancy service to guide you through the
            process of selecting and enrolling in the right course. Our goal
            is to ensure that you have the best possible experience on your
            educational journey.
          </LECPara>

          <AccordionGroup items={accordion} />
          
        </LECCont>
        <LECCont>
          <LECHead>WHAT WE OFFER:</LECHead>
          <LECPara>
            You may count on us for personalised assistance throughout
            the application process at any institution or university.
            From helping you choose the perfect college or university,
            to aiding with the application form submission, we have you
            covered.
          </LECPara>
          <LECPara>
            After your application has been submitted, we will take over
            as your personal advisor and keep you apprised of its status
            at every stage. We maintain lines of communication with the
            school on your behalf so that you can be abreast of
            developments at all times.
          </LECPara>
          <LECPara>
            If you need help with your student loans, we're here to give
            it to you.
          </LECPara>
          <LECPara>
            We assist you in completing the financial aid application.
            Our entire staff is committed to providing you with the
            easiest and most streamlined experience possible.
          </LECPara>
          <LECPara>
            You will get the latest information, updates and guidance to
            help you make the right decision.
          </LECPara>
          <LECPara>
            Our individualised guidance assists international students
            in making the most informed course selections possible,
            taking into account their interests, ambitions, and
            background.
          </LECPara>
          <LECPara>
            You can rely on us to ensure that your application to the
            university of your choice is complete, accurate, and filed
            on time. To make sure your application is accepted, we will
            walk you through each step.
          </LECPara>
        </LECCont>
      </LECSection>


      <InstituteSection>

     <CarouselCircular/>
          
          <InstituteCont>
            <InstituteHead>Our Associate Institutions</InstituteHead>
            <InstitutePara>
              At Leeds Education Centre, we take pride in our strong 
              relationships with a wide network of trusted UK colleges 
              and universities. These institutions share our commitment 
              to providing high-quality education and student support. 
              Through our official partnerships, we are able to offer 
              you direct access to a variety of programs and campuses, 
              ensuring you find the perfect academic fit. Whether you're 
              pursuing undergraduate or postgraduate studies, our 
              associated universities are carefully selected to meet 
              diverse needs, offering you both choice and confidence 
              as you take the next step in your educational journey.
            </InstitutePara>
            <InstituteBtnCont>

            <InstituteBtn onClick={() => router.push('/universities')}>
              Explore Universities
              <MdKeyboardDoubleArrowRight />

            </InstituteBtn>
            <InstituteBtn onClick={() => router.push('/colleges')}>
              Explore Colleges
              <MdKeyboardDoubleArrowRight />

            </InstituteBtn>
            </InstituteBtnCont>
          </InstituteCont>

      </InstituteSection>
      {/* <Scrolltotop/> */}
    </>
  );
};

export default Home;
