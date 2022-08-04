import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import Player from "../../../models/Player.model";
import { CardTest, ContMatchInfo, DivMatch, CardStatus, DivMatchs, IconChampion, IconItens } from "./styles";


function CardMatchInfo(props: any){
  const matchs = props.matchs
  const name = props.name
  const dragonURLItens = "http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/"

  return(
    <ContMatchInfo>
            <DivMatchs>
                  {matchs?.map((partida: any) => (
                  <CardTest key={partida.info.gameId}>
                  {partida.info.participants?.map((participante: Player) => (
                        <DivMatch key={participante.summonerName}>                        
                        {participante.summonerName === name && (
                          <CardStatus win={participante.win}>
                           <Card.Body key={participante.summonerName}>
                              <Card.Title key={participante.championId}>{participante.championName}</Card.Title>
                              <OverlayTrigger
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                  <Tooltip id={`tooltip-bottom`}>
                                    {participante.championName}
                                  </Tooltip>
                                }
                              >
                                <IconChampion 
                                src={process.env.REACT_APP_LOL_CHAMPION_ICONS+participante.championName+".png"}
                                alt={participante.championName}
                                />
                              </OverlayTrigger>
                              <IconItens 
                              src={dragonURLItens+participante.item0+".png"}/>
                              <IconItens 
                              src={dragonURLItens+participante.item1+".png"}/>
                              <IconItens 
                              src={dragonURLItens+participante.item2+".png"}/>
                              <IconItens 
                              src={dragonURLItens+participante.item3+".png"}/>
                              <IconItens 
                              src={dragonURLItens+participante.item4+".png"}/>
                              <IconItens 
                              src={dragonURLItens+participante.item5+".png"}/>
                              <IconItens 
                              src={dragonURLItens+participante.item6+".png"}/>
                              <div style={{display:"flex", marginTop:"10px", alignItems:"center"}}>
                                <Card.Text style={{textAlign:'center', marginBottom:"0px", marginLeft:"1em"}}>
                                  <span>K/D/A </span>
                                  <span>{participante.kills}/{participante.assists}/{participante.deaths}</span><br/>
                                  <span>AMA {calcAmA(participante.kills, participante.assists, participante.deaths)}</span>
                                </Card.Text>
                                <Card.Text style={{textAlign:'center', marginLeft:"1em",  marginBottom:"0px"}}>
                                  <span>{participante.totalMinionsKilled + participante.neutralMinionsKilled} Cs</span><br/>
                                  <span>{calcMatchTime(partida.info.gameDuration)}</span>
                                </Card.Text>
                                <Card.Text style={{textAlign:'center', marginLeft:"1em",  marginBottom:"0px"}}>
                                  <span>{calcCsMinute(partida.info.gameDuration, participante.totalMinionsKilled + participante.neutralMinionsKilled)}<br/> Cs/min</span><br/>
                                </Card.Text>
                              </div>
                            </Card.Body>
                          </CardStatus>
                        )}
                        </DivMatch>
                      ))}
                    
                    </CardTest>
                  ))}
            </DivMatchs>
        </ContMatchInfo>
  )
}


function calcAmA(kills: number, assits: number, deaths:number){
  let result : string;
  result = ((kills + assits)/deaths).toFixed(2);
  return result
}

function calcMatchTime(time: number){
  var d = new Date(1000*Math.round(time/1000)); // round to nearest second
  function pad(i: any) { 
    return ('0'+i).slice(-2); 
  }
  var str = pad(d.getUTCMinutes()) + 'min ' + pad(d.getUTCSeconds()) + "sec";
  return str;
}

function calcCsMinute(time: number, cs: number){
  var d = new Date(1000*Math.round(time/1000)); // round to nearest second
  function pad(i: any) { 
    return ('0'+i).slice(-2); 
  }
  var min: any = pad(d.getUTCSeconds())

  var mediaCs = cs / min
  return mediaCs.toFixed(2);
}

export default CardMatchInfo;