import Profile from "../../../models/Profile.model";
import { ContentPLayerInfo, HeaderContent, IconSummoner, SummonerInfo } from "./styles";

function CardInfoProfileLol(props: Profile){

    const iconUrl: string = props.iconUrl;
    const profileName: string = props.name;
    const summonerLevel: number = props.summonerLevel;


  return(
    <ContentPLayerInfo>
              <HeaderContent>
                <IconSummoner src={iconUrl} alt="icon"/>
                <SummonerInfo>
                  <h2>
                    <strong>
                      {profileName}
                    </strong>
                  </h2>
                  <h3>
                    Nivel {summonerLevel} 
                  </h3>
                </SummonerInfo>
            </HeaderContent>
    </ContentPLayerInfo>
  )
}
export default CardInfoProfileLol;