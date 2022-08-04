import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

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

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    text-transform: uppercase;
    font-size: 32px;
  }
  @media(max-width: 414px){
      h2 {
        font-size: 18px;
      }
      h3{
        font-size: 14px;
      }
      img{
        width: 70px;
        height: 70px;
      }
    }
    
`;

export const IconSummoner = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid #666666;
  border-radius: 50%;
  margin-right: 20px;
`;

export const SummonerInfo = styled.div`
  color: #fff;
  strong{
    border-bottom: 2px solid #fff;
  }
  h2{
    font-size: 18px;
  }
`;