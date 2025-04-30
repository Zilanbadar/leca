import styled from 'styled-components';

export const Main = styled.div `
    position : ${props => props.isstickynav == "true" ? "fixed" : "relative"};
    width : 100%;
    height : 8vh;
    display : flex;
    justify-content : space-around;
    align-items : center;
    z-index : 1000;
    background : #dadee3;
    top : 0;
    transition : 0.3s position ease-in-out;
`

export const NavbarUL = styled.ul `
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    gap: 40px;
`
    
export const NavbarLi = styled.li `
    list-style: none;
    color: #4d4d4d;
    font-family: corbel;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;transition : 0.3s all ease-in-out;

    &:hover {
        transform : scale(1.08,1);
        transition : 0.3s all ease-in-out;
        color : #01abcc;
    }

`

export const NavbarBtn = styled.button `
    padding: 10px 20px;
    font-size: 18px;
    background: #01abcc;
    outline: none;
    border: none;
    cursor: pointer;
    transition : 0.3s all ease-in-out;

    &:hover {
        transform : scale(1.1,1);
        transition : 0.3s all ease-in-out;
        color : #01abcc;
        background : #4d4d4d;
    }
`