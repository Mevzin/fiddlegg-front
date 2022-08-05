import { Navbar } from "react-bootstrap";
import { NavBarModify, Logo, TextLogo, ImgButtom, ButtonLink, FormModify} from "./styles";
import { useState } from "react";
import logo from "../../assets/logo.png"
import searchButton from "../../assets/outline_search_white_24dp.png"

export default function NavBar() {
  const [summonerReS, SetSummonerRes] = useState("");
  const [locale, SetLocale] = useState("")

  let disabledButton: boolean = true;

  const options =[
    {
      label:"Região",
      value:"null",
    },
    {
      label: "BR",
      value: "br1",
    },
    {
      label: "NA",
      value: "na1",
    },
    {
      label: "EUN",
      value: "eun1",
    },
    {
      label: "EUW",
      value: "euw1",
    },
    {
      label: "JP",
      value: "jp1",
    },
    {
      label: "KR",
      value: "kr",
    },
    {
      label: "LA 1",
      value: "la1",
    },
    {
      label: "LA 2",
      value: "la2",
    },
    {
      label: "OC",
      value: "oc1",
    },
    {
      label: "TR",
      value: "tr1",
    },
    {
      label: "RU",
      value: "ru",
    },    
  ]


  if((summonerReS !== "") && (locale !== "")){
    disabledButton = false
  }

  document.addEventListener('keydown', function(e) {
    if(summonerReS !== ""){
      if(e.key === "Enter"){
        document.getElementById("searchSummoner")?.click();
      }
    }
  });

  return (
    <NavBarModify fixed="top">
      <Logo src={logo} alt="Diddle.gg" />
      <TextLogo href="/">FIDDLE.GG</TextLogo>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <FormModify action={`/summoner/${summonerReS}/${locale}`} className="d-flex">
          <input
            placeholder="Nome de invocador"
            value={summonerReS}
            onChange={(e) => SetSummonerRes(e.target.value)}>
          </input>
          <select placeholder="Selecione uma região" onChange={(e) => SetLocale(e.target.value)}>
           {options.map((option) => (
             <option key={option.value} value={option.value}>{option.label}</option>
           ))}
          </select>
          <ButtonLink
            type="submit"
            id="searchSummoner"
            disabled={disabledButton}>
            <ImgButtom src={searchButton} />
          </ButtonLink>
        </FormModify>
      </Navbar.Collapse>
    </NavBarModify>
  )
}