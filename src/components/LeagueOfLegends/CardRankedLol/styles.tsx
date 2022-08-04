import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContEloInfo = styled.div`
  width: 352px;
  height: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: #403F3F;
  margin-top: 3em;
  border-radius: 14px;
`;

export const ContEloStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #403F3F;
  margin-left: 1em;
  margin-right: 1em;
  p{
    margin-bottom: -0.01em;
    color: #fff
  }
`;

export const EloSummoner = styled.img`
  width: 84px;
  height: 84px;
`;