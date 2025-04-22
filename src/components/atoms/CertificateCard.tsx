import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { siteInfoData } from "../../models/site";
import UserPreferencesContext from "../../context/UserPreferencesContext";
import info from "../../mock/site-info.json"

interface certcardprops {

    IssuedDate: string,
    institution: string,
    title: string,
    link: string
}


const CertificateCard = (ob: certcardprops) => {

    const dynamicLink = new URL(ob.link, import.meta.url).href;
    const [siteData, setSiteData] = useState<siteInfoData>();
    const UserPreferences = useContext(UserPreferencesContext);

    let languagesArray = info.languages;

    if (!UserPreferences) throw console.error();

    const { language } = UserPreferences;

    useEffect(() => {
        setSiteData(languagesArray.find(la => la.id === language)?.content)
    }, [language])

    return (
        <div className="flex justify-between">
            <div className="border-l-4 border-white/70 pl-4 ">
                <h3 className="font-bold text-lg">{ob.IssuedDate}</h3>
                <p className="text-white/80 font-semibold">{ob.title}</p>
                <p className="text-white/60">{ob.institution}</p>
                <Button text={siteData ? siteData.linkButtonLabel : ""} callback={() => window.open(ob.link.startsWith("/") ? dynamicLink : ob.link)} />
            </div>
        </div>
    )
}
export default CertificateCard;