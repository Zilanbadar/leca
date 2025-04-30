import styled from "styled-components";

export const Main = styled.div `
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
`

export const FooterCont = styled.div`
    width: 100%;
    height: 50vh;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterDetail = styled.div `
    width: 40%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 22px;
`

export const FooterTitle = styled.a `
    font-size: 40px;
    font-family: corbel;
    letter-spacing: 3px;
    color: #01abcc;
    font-weight: 600;
`

export const FooterHead = styled.h4 `
    font-size: 25px;
    font-weight: 600;
    font-family: corbel;
`

export const FooterPara = styled.p `
    font-size: 18px;
    color: #5f5f5f;
    font-weight: 400;
    font-family: monospace;
`

export const FooterSpan = styled.span `
    width: 70%;
    font-size: 20px;
    color: #b9b9b9;
    font-weight: 700;
    font-family: corbel;
`

export const FooterLink = styled.div `
    width: 20%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 35px;
`

export const FooterLinkUl = styled.ul `
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const FooterLinkLi = styled.li `
    list-style: none;
    font-size: 20px;
    font-family: corbel;
    color : #6c6c6c;
    cursor : pointer;
    transition : all ease-in-out 0.3s;

    &:hover {
        color : #01abcc;
        font-weight: 700;
        transition : all ease-in-out 0.3s;
    }
`

export const FooterSubscribe = styled.div `
    width: 25%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap : 35px;
`

export const FooterInputCont = styled.div `

`

export const FooterInput = styled.input `
outline: none;
    border: none;
    width: 300px;
    padding: 10px 20px;
    background: #373737;
    color: #01abcc;
    font-size: 18px;
    font-weight: 500;
    font-family: corbel;
`

export const FooterBtn = styled.button `
    padding: 10px 11px;
    outline: none;
    border: none;
    font-size: 18px;
    font-family: corbel;
    background: #01abcc;
    font-weight: 700;
    cursor: pointer;

`

export const CopyrightCont = styled.div `
    width : 100%;
    height : 10vh;
    display : flex;
    justify-content : center;
    align-items : center;
    background : #121212;
`

export const CopyrightText = styled.p `
    width : 90%;    
    font-size: 18px;
    color: #8d8d8d;
    font-family: corbel;
    text-align : end;
`

export const CopyrightSpan = styled.span `
    color: #b5b4b4;
    font-weight: 600;
`
