import styled from "styled-components";

// Common breakpoints
const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

export const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ExploreSection = styled.div`
  width: 100%;
  height: auto;
  min-height: 95vh;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, black, #01abcc);
  
  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
  }
`;

export const AboutCont = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  
  @media (min-width: ${breakpoints.lg}) {
    width: 30%;
    height: 50%;
    align-items: flex-start;
    gap: 25px;
    margin-bottom: 0;
  }
`;

export const AboutHead = styled.h2`
  font-size: 22px;
  font-family: corbel;
  font-weight: 600;
  color: #01abcc;
  padding: 15px 0;
  text-align: center;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 28px;
    padding: 30px 0;
    text-align: left;
  }
`;

export const AboutPara = styled.p`
  font-size: 16px;
  font-family: corbel;
  font-weight: 500;
  text-align: center;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 18px;
    text-align: left;
  }
`;

export const ExploreCont = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  @media (min-width: ${breakpoints.lg}) {
    width: 50%;
    gap: 30px;
    justify-content: flex-start;
  }
`;

export const ExploreCard = styled.div`
  width: 90%;
  height: auto;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 11px 0px #00000096;
  border-radius: 12px;
  background: #018ba62e;
  transition: all ease-in-out 0.3s;
  padding: 12px;
  margin-bottom: 20px;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  
  &:hover {
    box-shadow: 0 0 19px 6px #00000096;
    transition: all ease-in-out 0.3s;
    transform: scale(1.05);
  }
  
  @media (min-width: ${breakpoints.sm}) {
    width: 80%;
  }
  
  @media (min-width: ${breakpoints.md}) {
    width: 45%;
    margin-bottom: 0;
  }
  
  @media (min-width: ${breakpoints.lg}) {
    width: 450px;
    height: 40vh;
  }
`;

export const ExploreCardImage = styled.div`
  width: 100%;
  height: 20vh;
`;

export const ExploreCardTitle = styled.h4`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: corbel;
  font-weight: 600;
  margin: 10px 0;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`;

export const ExploreCardDesc = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-family: corbel;
  font-weight: 500;
  margin: 10px 0;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 18px;
  }
`;

export const ExploreCardBtn = styled.button`
  text-align: center;
  font-size: 16px;
  font-family: corbel;
  font-weight: 600;
  padding: 5px 20px;
  background: #3b3b3b;
  border: none;
  cursor: pointer;
  margin: 10px 0;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 18px;
  }
`;

export const RegisterSection = styled.div`
  width: 100%;
  height: auto;
  min-height: 60vh;
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  
  @media (min-width: ${breakpoints.md}) {
    height: 60vh;
    background-attachment: fixed;
    padding: 0;
  }
`;

export const RegisterCont = styled.div`
  width: 90%;
  height: auto;
  min-height: 50vh;
  background: #6d6b6b3d;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin: 20px 0;
  
  @media (min-width: ${breakpoints.md}) {
    width: 60%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const RegisterHead = styled.h3`
  font-size: 32px;
  font-family: corbel;
  color: #151a16;
  font-weight: 600;
  color: red;
  text-align: center;
  margin: 15px 0;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 60px;
  }
`;

export const RegisterInputCont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
  
  input {
    width: 100%;
    height: 4vh;
    background: #3b3b3b;
    border: 2px solid #3b3b3b;
    outline: none;
    padding: 0 10px;
    color: #dadee3;
    font-size: 16px;
    transition: all ease-in-out 0.3s;
    
    &:focus {
      background: transparent;
      color: #3b3b3b;
      transition: all ease-in-out 0.3s;
    }
  }
  
  @media (min-width: ${breakpoints.md}) {
    width: 400px;
    
    input {
      font-size: 18px;
    }
  }
`;

export const RegisterBtn = styled.button`
  padding: 10px 20px;
  color: #fff;
  background: #60315f;
  border: 2px solid #60315f;
  font-size: 16px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  margin: 15px 0;
  
  &:hover {
    color: #60315f;
    background: transparent;
    border: 2px solid #60315f;
    transition: all ease-in-out 0.3s;
  }
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 18px;
  }
`;

export const CriteriaSection = styled.div`
  width: 100%;
  height: auto;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: linear-gradient(0deg, #0a0a0a, #01abcc);
  padding: 30px 0;
`;

export const CriteriaHead = styled.h2`
  font-size: 30px;
  font-family: corbel;
  font-weight: 600;
  color: #3b3b3b;
  padding: 15px 0;
  text-align: center;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 40px;
    padding: 30px 0;
  }
`;

export const CriteriaList = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    height: 40vh;
    width: 60%;
    gap: 0;
  }
`;

export const CriteriaCont = styled.div`
  width: 90%;
  height: auto;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all ease-in-out 0.3s;
  
  &:hover {
    transition: all ease-in-out 0.3s;
    transform: scale(1.1);
  }
  
  @media (min-width: ${breakpoints.md}) {
    width: 30%;
    height: 80%;
    min-height: auto;
    
    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const CriteriaContIcon = styled.div`
  font-size: 80px;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 140px;
  }
`;

export const CriteriaContHead = styled.h4`
  font-size: 18px;
  font-family: corbel;
  font-weight: 600;
  color: #01abcc;
  text-align: center;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`;

export const LECSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  background: #0a0a0a;
  padding: 30px 0;
  
  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    height: 100vh;
    align-items: flex-start;
    padding: 0;
  }
`;

export const LECCont = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (min-width: ${breakpoints.lg}) {
    width: 40%;
  }
`;

export const LECHead = styled.h4`
  font-size: 24px;
  font-family: corbel;
  font-weight: 600;
  text-align: center;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 30px;
    text-align: left;
  }
`;

export const LECPara = styled.p`
  font-size: 16px;
  font-family: corbel;
  letter-spacing: 1px;
  color: #7b7b7b;
  line-height: 1.6;
  text-align: center;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 1.8;
    text-align: left;
  }
`;

export const InstituteSection = styled.div`
  width: 100%;
  height: auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(180deg, #0a0a0a, #fff);
  padding: 30px 0;
  
  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    height: 80vh;
    padding: 0;
  }
`;

export const InstituteCont = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
  
  @media (min-width: ${breakpoints.lg}) {
    width: 45%;
    height: 60vh;
    justify-content: space-evenly;
    margin: 0;
  }
`;

export const InstituteHead = styled.h3`
  color: #fff;
  font-size: 30px;
  font-family: corbel;
  letter-spacing: 2px;
  text-align: center;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 40px;
    letter-spacing: 5px;
  }
`;

export const InstitutePara = styled.p`
  text-align: center;
  font-size: 16px;
  font-family: corbel;
  letter-spacing: 0.5px;
  color: #d5d5d5;
  line-height: 1.6;
  
  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 1.8;
  }
`;

export const InstituteBtnCont = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  gap: 20px;
  border: none;
  width: 100%;
  align-items: center;
  
  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const InstituteBtn = styled.button`
  padding: 8px 16px;
  border: 3px solid #6b6b6b;
  background: none;
  color: #5d5d5d;
  font-size: 16px;
  font-family: corbel;
  font-weight: 700;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  width: 90%;
  justify-content: center;
  
  &:hover {
    transform: translateY(-10%) scale(1.1);
    box-shadow: 0 8px 20px 4px #272829a3;
    border: 3px solid #01abcc;
    color: #4f4f4f;
    background: #01abcc;
    transition: all ease-in-out 0.3s;
    gap: 10px;
  }
  
  @media (min-width: ${breakpoints.sm}) {
    width: auto;
    
    &:hover {
      transform: translateY(-10%) scale(1.1);
    }
  }
  
  @media (min-width: ${breakpoints.md}) {
    padding: 10px 20px;
    font-size: 18px;
  }
`;