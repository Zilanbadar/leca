"use client"

import { Main, EUSectionTitle, EUSection, RequirementSection, GuidanceSection, SectionTitle, RequirementUl, RequirementLi, ApplyBtn, GuidanceUl, GuidanceLi } from "./homeEUElements"

const HomeEU =() => {
    return (
        <Main>
            <EUSectionTitle>Home / EU Students</EUSectionTitle>
            <EUSection>
                <RequirementSection>
                    <SectionTitle title="entry">Entry Requirements :</SectionTitle>
                    <RequirementUl>
                        <RequirementLi>Passport</RequirementLi>
                        <RequirementLi>Proof of Address</RequirementLi>
                        <RequirementLi>English B2</RequirementLi>
                        <RequirementLi>Relevant Qualification or Work experience</RequirementLi>
                        <RequirementLi>CV</RequirementLi>
                        <RequirementLi>Personal statement</RequirementLi>
                    </RequirementUl>
                    <ApplyBtn>Apply Now</ApplyBtn>

                </RequirementSection>
                <GuidanceSection>
                    <SectionTitle title='guide'>Guidance : </SectionTitle>
                    <GuidanceUl>
                        <GuidanceLi>
                            We give proper advice and guidance before application from 
                            choosing the colleges or universities to fill up and submission the 
                            application form.
                        </GuidanceLi>
                        <GuidanceLi>
                            After submitting the application, we work as a bridge between the 
                            educational institutions and students to keep update about their 
                            application.
                        </GuidanceLi>
                        <GuidanceLi>
                            We advise & assist you regarding your student finance.

                        </GuidanceLi>
                        <GuidanceLi>
                            We help you to fill up the application form for the finance.

                        </GuidanceLi>
                        <GuidanceLi>
                            We have the latest information with updates and guidance to all 
                            queries enabling them to make the right choice.

                        </GuidanceLi>
                        <GuidanceLi>
                            We give proper counselling which if need be becomes one to one in 
                            assisting students selecting the appropriate courses in line with 
                            their career aspirations, affordability and prior qualifications 
                            plus future needs for the international students.

                        </GuidanceLi>
                        <GuidanceLi>
                            We guide you for the submission of error free plus correct application 
                            for admission to the educational institution of your choice.

                        </GuidanceLi>
                    </GuidanceUl>

                </GuidanceSection>
            </EUSection>
        </Main>
    )
}

export default HomeEU;