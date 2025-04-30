import styled from 'styled-components';

export const Main = styled.div `
    width : 100%;
    height : 80vh;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : center;
    background: linear-gradient(270deg, #ffffff, #01abcc);
    gap: 30px;
`

export const EUSectionTitle = styled.h3 `
    width: 100%;
    padding: 30px;
    font-size: 40px;
    font-family: corbel;
    letter-spacing: 8px;
`

export const EUSection = styled.div `
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;  
`

export const SectionTitle = styled.h4 `
    font-size: 24px;
    color: ${props => props.title == "guide" ? "#01abcc" : "#4e4e4e"} ;
    padding: ${props => props.title == "guide" ? "20px 20px" : "20px 0"} ;
    font-family: corbel;
    font-weight: 600;
`

export const RequirementSection = styled.div `
    width : 50%; 
    height : 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
`

export const RequirementUl = styled.ul `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: square;
`

export const RequirementLi = styled.li `
    font-size: 20px;
    font-family: corbel;
    color: #575757;
    font-weight: 600;
`

export const ApplyBtn = styled.button `
    padding: 10px 20px;
    background: #fff;
    border: none;
    color: #01abcc;
    font-weight: 700;
    font-size: 20px;
    font-family: corbel;
    cursor : pointer;
    transition : all ease-in-out 0.3s;

    &:hover {
        background : #4f5253;
        color : #fff;
        box-shadow: 1px 7px 32px 20px rgb(202 202 202 / 60%);
        transition : all ease-in-out 0.3s;
        padding : 10px 30px;
    }
`

export const GuidanceSection = styled.div `
    width : 50%; 
    height : 60vh;
    display: flex;
    align-items : center;
    flex-direction: column;
    gap: 30px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    transition : background ease-in-out 0.3s;
    cursor: help;


    &:hover {
        transition : background ease-in-out 0.3s;
        background : rgb(0 0 0 / 74%);
        box-shadow: 13px 18px 32px 0 rgb(3 3 7 / 80%);
    }
`

export const GuidanceUl = styled.ul `
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: square;
`

export const GuidanceLi = styled.li `
    font-size: 20px;
    font-family: corbel;
    color: #01abcc;
    font-weight: 600;
`