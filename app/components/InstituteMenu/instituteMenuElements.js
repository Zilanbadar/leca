import styled from 'styled-components';


export const Main = styled.div `
    width: 98%;
    height: auto;
    display : flex;
    flex-direction : row;
    justify-content: space-evenly;
    align-items : flex-start;
`


export const PanelSection = styled.div `
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const InstituteUL = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const InstituteLi = styled.li`
      padding: 15px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: corbel;
    font-size: 20px;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#01abcc' : '#ffffff'};

  &:hover {
    color: #01abcc;
    transition: all 0.3s ease;
  }
`;


export const CriteriaLink = styled.h4 `
    border-bottom: 1px solid;
    color: #aeaeb1;
    cursor: pointer;
    font-family: corbel;
    transition : all ease-in-out 0.3s;

    &:hover {
        color : #21df9f;
        transition : all ease-in-out 0.3s;
    }
`

export const ContentArea = styled.div`
  width: 70%;
  padding: 20px;
`;

export const InstituteName = styled.h2`
  margin-top: 0;
  color: #01abcc;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
`;

export const CoursesTitle = styled.h3`
    color: #555;
    margin-bottom: 15px;
`;


export const CourseCont = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;


    img {
        height: 450px;
        width: 700px;
        box-shadow: 12px 18px 20px 5px #333b45;
    }
`

export const CoursesList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
`;

export const CourseItem = styled.li`
    width : fit-content;
    // border : 1px solid #fff;
    padding: 10px 15px;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
    background-color: #01abcc;
    transform: translateY(-2px);
    transition: all 0.2s ease;
    }
`

