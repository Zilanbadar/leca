"use client"

import React from "react";
import {
    Main,
  FooterCont,
  FooterDetail,
  FooterLink,
  FooterSubscribe,
  FooterTitle,
  FooterHead,
  FooterPara,
  FooterSpan,
  FooterLinks,
  FooterLinkUl,
  FooterLinkLi,
  FooterInputCont,
  FooterInput,
  FooterBtn,
  CopyrightCont,
  CopyrightText,
  CopyrightSpan,
} from "./footerElements";
import Link from "next/link";

const Footer = () => {
  return (
    <Main>
      <FooterCont>
            <FooterDetail>
                <FooterTitle href="/">LEEDS EDUCATION CENTRE</FooterTitle>
                <FooterSpan>
                    Bangladesh Community Centre 1st floor, Roundhay Road, Leeds LS8
                    5AN
                </FooterSpan>
                <FooterSpan>Phone :
                    <FooterPara>
                        +44(0)7427125279 <br/> +44(0)7778678938
                    </FooterPara>
                </FooterSpan>
                <FooterSpan>Email :
                    <FooterPara>
                        miah@leedseducationcentre.co.uk
                    </FooterPara>                
                </FooterSpan>

            </FooterDetail>
            <FooterLink>
                <FooterHead>Useful Links</FooterHead>
                <FooterLinkUl>
                    <FooterLinkLi><Link href={'/'}>Home</Link></FooterLinkLi>
                    <FooterLinkLi><Link href={'/universities'}>Associate Universities</Link></FooterLinkLi>
                    <FooterLinkLi><Link href={'/colleges'}>Associate Colleges</Link></FooterLinkLi>
                    <FooterLinkLi><Link href={'/home-eu'}>Home/EU students</Link></FooterLinkLi>
                    <FooterLinkLi><Link href={'/terms-of-service'}>Terms of service</Link></FooterLinkLi>
                    <FooterLinkLi><Link href={'/privacy-policy'}>Privacy policy</Link></FooterLinkLi>
                </FooterLinkUl>
            </FooterLink>
            <FooterSubscribe>
                <FooterHead>Join Our Newsletter</FooterHead>
                <FooterPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dolor!</FooterPara>
                <FooterInputCont>
                    <FooterInput type="email" />
                    <FooterBtn>Subscribe</FooterBtn>
                </FooterInputCont>
            </FooterSubscribe>
      </FooterCont>
      <CopyrightCont>
        <CopyrightText>
        © {new Date().getFullYear() + " "} 
            <CopyrightSpan>
            Leeds Education Centre Limited
            </CopyrightSpan>. All rights reserved.
        </CopyrightText>
      </CopyrightCont>
    </Main>
  );
};

export default Footer;
