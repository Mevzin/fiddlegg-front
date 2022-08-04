import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

interface MatchProps {
  win: boolean;
}

export const ContMatchInfo = styled.div`
  width: 875px;
  height: 756px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #403F3F;
  margin-top: 3em;
  border-radius: 14px;
`;

export const DivMatch = styled.div`

`;

export const CardStatus = styled.div<MatchProps>`
  width: 100%;
  background: linear-gradient(to right, ${({win}) => 
    win ? '#6bff543f' : '#ff54543f'
  }, #403F3F); 
  border-radius: 10px;
`;

export const IconChampion = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 20px;
`;

export const IconItens = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  flex: 1;
`;

export const DivMatchs = styled.div`
  max-width: 875px;
  max-height: 731px;
  overflow: scroll;
  overflow-x:hidden;
  &::-webkit-scrollbar {
     width: 7px;
     background-color: #C4C4C4;
  }  
  &::-webkit-scrollbar-thumb {   
  background-color: #403F3F;
  border:1px solid #C4C4C4 ;
  border-radius: 50px 0 50px 0;
  }
`;

export const CardTest = styled.div`
  width: 855px;
  background: '#403F3F';
  color: white;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-bottom: 0.3rem;
`;