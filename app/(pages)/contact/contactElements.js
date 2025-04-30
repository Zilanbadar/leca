import styled from 'styled-components';

export const Main = styled.div `
    width: 100%;
    height: 80vh;
    background: linear-gradient(90deg, black, #ffffff);    
    display: flex;
    flex-direction : column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
`

export const ContactSectionTitle = styled.h3 `
    width: 100%;
    padding: 30px;
    font-size: 40px;
    font-family: corbel;
    letter-spacing: 8px;
    color : #fff;
`

export const ContactSection = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    gap: 20px;
`

export const ContactCont = styled.div `
    width: 45%;
    height: 60vh;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start
    
`

export const ContactPara = styled.p `
    font-size: 20px;
    color: #7b8183;
    padding: 0 10px;
    font-family: corbel;
    font-weight: 700;
`
    
export const ContactDetails = styled.div `
    display: flex;
    gap: 30px;
    align-items: center;

`

export const ContactText = styled.p `
    font-size: 20px;
    color: #7b8183;
    padding: 0 10px;
    font-family: corbel;
    font-weight: 700;
    display : flex;
    flex-direction : row;
    align-items : center;
    gap : 10px;
    
    svg {
        color : #01abcc;
    }
`

    
export const ContactInput = styled.input `
    width: 400px;
    color: #fff;
    padding: 5px 20px;
    background: none;
    font-family: corbel;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #fff;

    &:focus {
        outline : none;
    }
`

export const ContactInputA = styled.textarea `
    width: 840px;
    color: #fff;
    padding: 10px 10px;
    background: none;
    font-family: corbel;
    font-size: 20px;
    border: none;
    border: 1px solid #fff;

     &:focus {
        outline : none;
    }
`

export const ContactBtn = styled.button `
    padding: 10px 20px;
    font-size: 20px;
    border : none;
    font-family: corbel;
    cursor: pointer;
    transition: all ease-in-out 0.3s;

    &:hover {
        padding: 10px 30px;
        background: rgb(59, 59, 59);
        color: #01abcc;
        font-weight : 600;
        transform: translateX(30px);
        transition: all ease-in-out 0.3s;
        box-shadow: -13px 8px 20px 0px #5a5858;
    
    }
`

export const MapCont = styled.div `
    width : 50%;
    height : 60vh;
`

export const MapFrame = styled.iframe `
    width : 100%;
    height : 100%;
    border : none;
`