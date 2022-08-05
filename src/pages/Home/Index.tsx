import React from "react";
import { useState } from "react";
import { Container, Header, ContainerInner, Img, ButtonLink } from "./styles";
import logo from "../../assets/logo.png";

export default function Home() {
  const [summoner, SetSummoner] = useState("");
  const [locale, SetLocale] = useState("");

  let disabledButton: boolean = true;


  const options = [
    {
      label: "Região",
      value: "null",
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

  document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
      document.getElementById("searchSummoner")?.click();
    }
  });

  if ((summoner !== "") && (locale !== "")) {
    disabledButton = false
  }

  return (
    <Container>
      <ContainerInner>
        <Header>
          <Img src={logo} alt="logo" />
          <span>
            <strong>
              FIDDLE.GG
            </strong>
          </span>
        </Header>
        <form action={`/summoner/${summoner}/${locale}`}>
          <input
            placeholder="Nome de invocador"
            value={summoner}
            onChange={(e) => SetSummoner(e.target.value)}>
          </input>
          <select placeholder="Selecione uma região" onChange={(e) => SetLocale(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <ButtonLink
            disabled={disabledButton}
            type="submit"
            id="searchSummoner"
          >
            Buscar
          </ButtonLink>
        </form>
      </ContainerInner>
    </Container>
  )
}