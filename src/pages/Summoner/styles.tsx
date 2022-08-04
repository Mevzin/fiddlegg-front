
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = styled.div`
  margin-top: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const SplitLeft = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 25%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 25px;
  padding-left: 1em;
  left: 0;
`;

export const SplitRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 75%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 25em;
  padding-left: 4em;
  right: 0;
`;

export const ReturnHome = styled.div`
  cursor: pointer;
  float: left;
  margin-top: 20px;
  span{
    size: 24px;
    color: #fff;
  }
`;

export const ContentPLayerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #403F3F;
  padding: 20px;
  width: 865px;
  height: 108px;
  border-radius: 14px;
`;

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

export const CircleDiv = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  label {
    font-size: 14px;
  }
  label strong {
    font-size: 20px;
  }
`;

export const WinsLabel = styled.span`
  color: #6CFF54;
`;

export const LossesLabel = styled.span`
  color: #d7385e;
`;