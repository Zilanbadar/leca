"use client"

import { ContactBtn, ContactCont, ContactDetails, ContactInput, ContactInputA, ContactPara, ContactSection, ContactSectionTitle, ContactText, Main, MapCont, MapFrame } from "./contactElements";
import { MdEmail, MdPhone } from "react-icons/md";


const Contact = () => {
    return (
        <Main>
            <ContactSectionTitle>Contact Us</ContactSectionTitle>
            <ContactSection>
                <ContactCont>
                    <ContactPara>Feel free to use the form or drop us an email. Old-fashioned phone call works too!</ContactPara>
                    <ContactDetails>
                        <ContactText>
                            <MdPhone /> +44(0)7427125279, +44(0)7778678938
                        </ContactText>
                        <ContactText>
                            <MdEmail /> miah@leedseducationcentre.co.uk
                        </ContactText>
                    </ContactDetails>
                    <ContactInput type="text" placeholder="Your Name"/>
                    <ContactInput type="number" placeholder="Your Phone"/>
                    <ContactInput type="email" placeholder="Your Email"/>
                    <ContactInput type="text" placeholder="Subject"/>
                    <ContactInputA placeholder="Please leave a message here!" rows={8}/>
                    <ContactBtn>Submit</ContactBtn>

                </ContactCont>
                <MapCont>
                    <MapFrame
                    src="https://www.google.com/maps/embed?pb=!4v1745790159511!6m8!1m7!1spHbIUycOPrc9usizkWDPtQ!2m2!1d53.81494602032745!2d-1.519182216327724!3f328.4550070137036!4f6.790861414277131!5f0.7820865974627469"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </MapCont>
            </ContactSection>
        </Main>
    )
}

export default Contact;