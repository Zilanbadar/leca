"use client"

import Image from "next/image";
import LogoMain from "@/app/images/logo/LEC.png"
import { Cont, ContactCont, Icon, LogoCont, Main, Para } from "./headerElements";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


const Header = () => {
    return (
        <Main>
            <LogoCont>
                <Image src={LogoMain} width={100} alt="lec-logo"/>
            </LogoCont>
            <ContactCont>
                <Cont>
                    <Icon>
                    <IoIosCall />
                    </Icon>
                    <Para>Call us Today <br/> +44(0)7427125279 <br/> +44(0)7778678938</Para>
                </Cont>
                <Cont>
                    <Icon>
                        <IoLocationSharp />
                    </Icon>
                    <Para>Bangladesh Community <br/> Centre 1st floor, Roundhay Road,<br/> Leeds LS8 5AN</Para>
                </Cont>
            </ContactCont>

        
        </Main>
    )
}

export default Header;