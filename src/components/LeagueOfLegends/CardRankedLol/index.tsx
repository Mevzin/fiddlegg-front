import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { 
  ContEloInfo,
  ContEloStatus,
  EloSummoner
} from "./styles";

import "./styles.css"

import iron from "../../../assets/rankEmblems/Iron.png"
import bronze from "../../../assets/rankEmblems/Bronze.png"
import silver from "../../../assets/rankEmblems/Silver.png"
import gold from "../../../assets/rankEmblems/Gold.png"
import platinum from "../../../assets/rankEmblems/Platinum.png"
import diamond from "../../../assets/rankEmblems/Diamond.png"
import grandmaster from "../../../assets/rankEmblems/Grandmaster.png"
import master from "../../../assets/rankEmblems/Master.png"
import challenger from "../../../assets/rankEmblems/Challenger.png"
import unranked from "../../../assets/rankEmblems/Unranked.png"

import Elo from "../../../models/Elo.model";


function CardEloInfoLol(props: any){

  const ranks = props.ranks;

  return(
    <ContEloInfo>
               {ranks?.map((elos: Elo) => (
                  <ContEloStatus key={elos.leagueId}>
                    <CircularProgressbarWithChildren
                      value={elos.leaguePoints}>
                      {eloValid(elos.tier)}
                      <p>{elos.leaguePoints} PDL</p>
                    </CircularProgressbarWithChildren>
                      <p>{eloTypeFormat(elos.queueType)}</p>
                      <p>{elos.tier}</p>
                      <p>{elos.rank}</p>
                  </ContEloStatus>
              ))}
              {ranks[0] === undefined &&(
                <ContEloStatus>
                  <EloSummoner src={unranked} alt="elo"/>;
                  <p>Sem Ranque</p>
                </ContEloStatus>
              )}
          </ContEloInfo>
  )
}

function eloValid(elo: string){
  switch(elo){
    case "BRONZE":
      return <EloSummoner src={bronze} alt="elo"/>;
    case "IRON":
      return <EloSummoner src={iron} alt="elo"/>;
    case "SILVER":
      return <EloSummoner src={silver} alt="elo"/>;
    case "GOLD":
      return <EloSummoner src={gold} alt="elo"/>;
    case "PLATINUM":
      return <EloSummoner src={platinum} alt="elo"/>;
    case "DIAMOND":
      return <EloSummoner src={diamond} alt="elo"/>;
    case "GRANDMASTER":
      return <EloSummoner src={grandmaster} alt="elo"/>;
    case "MASTER":
      return <EloSummoner src={master} alt="elo"/>;
    case "CHALLENGER":
      return <EloSummoner src={challenger} alt="elo"/>;
  }
}


function eloTypeFormat(eloType: string){
  let elo = eloType;
  eloType = elo.split("_")[0]+" "+elo.split("_")[1];
  return eloType 
}


export default CardEloInfoLol;