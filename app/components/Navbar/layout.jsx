"use client"

import { useEffect, useState } from "react";
import { Main, NavbarBtn, NavbarLi, NavbarUL } from "./navbarElements";
import Link from "next/link";

const Navbar = () =>{
    const [isStickyNav, setIsStickyNav] = useState("false");
  const stickyHeight = 900; // Scroll height at which navbar becomes sticky

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > stickyHeight) {
        setIsStickyNav("true");
      } else {
        setIsStickyNav("false");
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stickyHeight]);
    return (
        <Main isstickynav={isStickyNav}>
        <NavbarUL>
            <NavbarLi><Link href={'/'}>HOME</Link></NavbarLi>
            <NavbarLi><Link href={'/about'}>ABOUT</Link></NavbarLi>
            <NavbarLi><Link href={'/universities'}>OUR ASSOCIATE UNIVERSITIES</Link></NavbarLi>
            <NavbarLi><Link href={'/colleges'}>OUR ASSOCIATE COLLEGES</Link></NavbarLi>
            <NavbarLi><Link href={'/home-eu'}>HOME/EU STUDENTS</Link></NavbarLi>
            <NavbarLi><Link href={'/contact'}>CONTACT</Link></NavbarLi>
        </NavbarUL>

        <NavbarBtn>Book Now</NavbarBtn>
        </Main>
    )
}

export default Navbar;