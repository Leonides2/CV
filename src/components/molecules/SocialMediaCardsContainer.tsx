import { useContext, useEffect, useState } from "react";
import { SocialMediaData } from "../../models/site";
import UserPreferencesContext from "../../context/UserPreferencesContext";
import info from "../../mock/site-info.json"
import BasicContainer from "../atoms/BasicContainer";
import SocialMediaCard from "../atoms/SocialMediaCards";

const SocialMediaCardsContainer =() =>{
    const [SocialMediaData, setSocialMediaData] = useState<SocialMediaData[]>()
    const UserPreferences = useContext(UserPreferencesContext);

    let languagesArray = info.languages;

    if (!UserPreferences) throw console.error();

    const { language } = UserPreferences;

    if(!languagesArray) return <h1>Error</h1>

    useEffect(() => {
        setSocialMediaData(languagesArray.find(la => la.id === language)?.content.social.accounts);
    }, [language])

    return(
    <>
        <BasicContainer key={1}>
            <h1 className='text-2xl font-bold text-zinc-200 text-center mt-4 mb-4'> {languagesArray.find(la => la.id === language)?.content.social.title}</h1>
        </BasicContainer>
        <BasicContainer key={2} flexDirection="row" gap="30">

            {SocialMediaData?.map((item,index)=>{
                return <SocialMediaCard key={item.name + index} icon={item.icon} name={item.name} link={item.link}/>
            })}

        </BasicContainer>
    </>
    )

}

export default SocialMediaCardsContainer;