import { LECPara } from "../(pages)/(Home)/homeElements";
import slide1 from "@/app/images/slide/slide-1.jpg";
import slide2 from "@/app/images/slide/slide-2.jpg";
import slide3 from "@/app/images/slide/slide-3.jpg";
import slide4 from "@/app/images/slide/slide-4.jpg";
import slide5 from "@/app/images/slide/slide-5.jpg";

import homeimg1 from "@/app/images/team/ACADEMICS_smal.jpg";
import homeimg2 from "@/app/images/team/CULTURE_smal.jpg";
import homeimg3 from "@/app/images/team/SPORT_small.jpg";

import uni1 from "@/app/images/universities/01.Sunder-Land.png";
import uni2 from "@/app/images/universities/02.-Trinity-St-David-University.png";
import uni3 from "@/app/images/universities/03.-bedfordshire.png";
import uni4 from "@/app/images/universities/04.-University-of-Roehampton.png";
import uni5 from "@/app/images/universities/05. university_west_of_scotland.png";
import uni6 from "@/app/images/universities/06.-East-London.png";
import uni7 from "@/app/images/universities/07.-Kensington.png";

import clg1 from "@/app/images/universities/kensington_building.jpg";
import clg2 from "@/app/images/universities/lcca.jpg";
import clg3 from "@/app/images/universities/LSE.jpg";
import clg4 from "@/app/images/universities/ukcb.jpg";







export const carouselSlides = [
    {
        url: slide1,
        title: 'Beautiful Landscape',
        description: 'Explore the wonders of nature with our guided tours.'
    },
    {
        url: slide2,
        title: 'City Adventures',
        description: 'Discover the hidden gems of urban landscapes.'
    },
    {
        url: slide3,
        title: 'Waterfront Views',
        description: 'Relax by the water and enjoy breathtaking sunsets.'
    },
    {
        url: slide4,
        title: 'City Adventures',
        description: 'Discover the hidden gems of urban landscapes.'
    },
    {
        url: slide5,
        title: 'Waterfront Views',
        description: 'Relax by the water and enjoy breathtaking sunsets.'
    }
];

export const explore = [
    {
        id: "01",
        title: "ACADEMICS",
        desc: "Eduma University is renowned for encouraging academic excellence & celebrating high achievement",
        image: homeimg1
    }, {
        id: "02",
        title: "SPORT",
        desc: "Sport is enthusiastically celebrated throughout Eduma students compete in the Intercollegiate sports",
        image: homeimg3
    }, {
        id: "03",
        title: "CULTURE",
        desc: "Musicians, Vocalists, Dancing, Performers, Debaters and Dancers can all shine at Eduma University",
        image: homeimg2
    }
]


export const accordion = [
    {
        id: '01',
        title: 'About us',
        content: <p>
            London-based student recruitment agency, Leeds Education Centre,
            was established in 2012. We work to fill the top colleges around
            the globe with talented young people from all walks of life. We
            have successfully recruited national and international students
            in higher education, and we have been certified as a global agent
            by the British Council.
        </p>
    },
    {
        id: '02',
        title: 'How we work',
        content: <p>
            At Leeds Education Centre, we are committed to helping you find
            the right UK College or University to meet your individual needs.
            Our experienced team of authorised representatives are dedicated
            to guiding and supporting you every step of the way, from helping
            you determine which institution is the best fit for you, to
            providing you with the necessary information and assistance for
            a successful application. We are here to make your educational
            journey as stress-free and successful as possible.
        </p>
    },
    {
        id: '03',
        title: 'References',
        content: <p>
            Do you think water moves quickly? Ice should be visible. It
            behaves as though it has a mind. As if it is aware that it once
            killed the world and developed a taste for murder. It took us a
            week to climb out after the avalanche. I'm not sure exactly when
            we started to turn against one another, but I do know that only
            five people survived the slide, while seven of us survived. We
            just took an oath, which I'm now breaking. The other two weren't
            killed by the snow, despite what we had promised. Although deadly,
            nature cannot compare to man in terms of power.
        </p>
    },
    {
        id: '04',
        title: 'Contact us',
        content: <p>
            Do you see? It's interesting. Time travel is what Ted finally
            understood. We're going to inform everyone when we get back. How
            to do it, what the risks are, and how it is possible. The computer
            refers to the spacecraft's encounter with a black hole as a
            "unknown entry event" though, so why is that? Why are they in the
            dark? If they are unaware, we did not inform them. If we kept it
            a secret, it would imply that we never returned. As a result, we
            perish here. merely from a deductive logical standpoint.
        </p>
    }
];


export const universities = [
    {
        id: "01",
        name: "University of Sunderland",
        img: uni1,
        course: [
            "BA (Hons) Business and Management Level",
            "BA (Hons) Business Management (Top Up)",
            "BSc (Hons) Health & Social Care",
            "BA (Hons) Tourism Management",
            "BA (Hons) International Tourism and Hospitality Management– Top up"
        ]
    },
    {
        id: "02",
        name: "University of Wales TSD",
        img: uni2,
        course: [
            "Certificate of Higher Education in Skills for the Workplace",
            "BA Leadership and Management Skills for the workplace",
            "BA(Hons) Business Management",
            "Master of Business Administration (MBA)",
        ]
    },
    {
        id: "03",
        name: "University of Bedfordshire",
        img: uni3,
        course: [
            "Business Management"
        ]
    },
    {
        id: "04",
        name: "University of Roehampton",
        img: uni4,
        course: [
            "BA (Hons) Business Management",
            "BA (Hon's) Business Administration – Top Up",
            "BSc (Hons) Health and Social Care FdA",
            "BA (Hons) Health and Social Care (Top up)",
            "Master of Business Administration (MBA)",
        ]
    },
    {
        id: "05",
        name: "University of The West of Scotland",
        img: uni5,
        course: [
            "BA (Hons) Business",
            "BA (Hons) Integrated Health & Social Care"
        ]
    },
    {
        id: "06",
        name: "University of East London",
        img: uni6,
        course: [
            "BSc (Hons) Business Management"
        ]
    },
    {
        id: "07",
        name: "University of Chester",
        img: uni7,
        course: [
            "BA(Hons) Business Management",
            "LAW ( LLB )",
            "BA (Hons) Marketing Management",
            "Foundation Degrees",
            "Master of Business Administration (MBA)"
        ]
    }
]

export const colleges = [
    {
        id: "01",
        name: "Kensington College of Business",
        img: clg1,
        course: [
            "HNC/HND Business Management",
            "HNC/HND Photography",
            "HNC/HND Computer Game Animation",
            "HNC/HND Graphic Design",
            "HNC/HND Hospitality Management"
        ]
    },
    {
        id: "02",
        name: "London College of Contemporary Arts",
        img: clg2,
        course: [
            "Certificate of Higher Education in Skills for the Workplace",
            "BA Leadership and Management Skills for the workplace",
            "BA(Hons) Business Management",
            "Master of Business Administration (MBA)",
        ]
    },
    {
        id: "03",
        name: "London School of Commerce",
        img: clg3,
        course: [
            "Business and Health Care"
        ]
    },
    {
        id: "04",
        name: "UK College of Business and Computing",
        img: clg4,
        course: [
            "Pearson BTEC Level 5 HND in Business",
            "Pearson BTEC Level 5 HND in Computing",
            "Pearson BTEC Level 5 HND Diploma in Travel and Tourism Management (QCF)",
            "Pearson BTEC Level 5 HND Diploma in Health and Social Care (Management) (QCF)",
        ]
    },
]