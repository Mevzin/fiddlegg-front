import React, { useState } from "react";
import {Spinner} from "react-bootstrap";
import { useEffect } from "react";
import { brisaSearch } from "../../services/api";
import {
  Container,
  ContentPLayerInfo,
  ContMatchInfo,
  ContEloInfo,
  SplitLeft,
  SplitRight
} from "./styles";
import { useParams } from 'react-router-dom';
import Profile from "../../models/Profile.model";
import CardInfoProfileLol from "../../components/LeagueOfLegends/CardProfileLol";
import CardEloInfoLol from "../../components/LeagueOfLegends/CardRankedLol";
import CardMatchInfo from "../../components/LeagueOfLegends/CardMatchesLol";
import NavBar from "../../components/NavBar";


export default function Summoner(){
  const [summoner, setSummoner] = useState(Object);
  const [matchs, setMatch] = useState(Object);
  const [ranks, setRanks] = useState(Object);
  const [loading, setLoading] = useState(1);
  const [loadingMatch, setLoadingMatch] = useState(1);
  const [loadingRanks, setLoadingRanks] = useState(1);
  const {nick,locale}:any = useParams();
  const profile:Profile = summoner;


  useEffect(() => {
    async function loadData(nickName: string,){
      await brisaSearch.get(`/summoner/searchUser/${nickName}/${locale}`)
      .then((res: { data: any; }) => {
        setSummoner(res.data);
        loadMatchs(res.data.puuid);
        loadRanks(res.data.id);
        console.log(locale);
      })
      .catch((e: any) => alert(e + " O nome de invocador indicado não encontrado!"))
      setLoading(0);
    }
    async function loadMatchs(puuid: string){
      await brisaSearch.get(`summoner/matchs/${puuid}`)
      .then((res: { data: any; }) => {
        setMatch(res.data)
      })
      .catch((e: any) => alert("Houve um erro ao buscar as partidas!"))
      setLoadingMatch(0);
    }
    async function loadRanks(idUser: string){
      await brisaSearch.get(`summoner/rank/${idUser}`)
      .then((res: { data: any; }) => {
        setRanks(res.data)
      })
      .catch((e: any) => alert("Houve um erro ao buscar as partidas!"))
      setLoadingRanks(0);
    }
    
    loadData(nick);
// eslint-disable-next-line
  },[])
  return(
    <>
      <NavBar />
    <Container>
      <SplitLeft>
      {
        loadingRanks ?
        ( 
          <ContEloInfo>
            <Spinner animation="border" variant="danger"/>
          </ContEloInfo>
        ):(
         <CardEloInfoLol 
         ranks={ranks}/>
        )
      }
        </SplitLeft>
        <SplitRight>
      {
        loading ?
        <ContentPLayerInfo>
          <Spinner animation="border" variant="danger"/>
        </ContentPLayerInfo>
        :
        <CardInfoProfileLol 
        iconUrl = {profile.iconUrl} 
        name = {profile.name}
        summonerLevel = {profile.summonerLevel}/>
      }
      {loadingMatch ?
        (<ContMatchInfo>
          <Spinner animation="border" variant="danger"/>
        </ContMatchInfo>
        ):(
        <CardMatchInfo 
        matchs={matchs} 
        name={profile.name}/>
      )}
      </SplitRight>
    </Container>
    </>
  )
}
