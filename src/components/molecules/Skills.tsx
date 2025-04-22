

import { useContext, useEffect, useState } from "react";
import profile from "../../mock/profile.json"
import UserPreferencesContext from "../../context/UserPreferencesContext";
import { ProfileData } from "../../models/profile";
import LanguageIcons from "../atoms/LanguageIcons";

const Skills = () => {
    const [profileData, setProfileData] = useState<ProfileData>()
    const UserPreferences = useContext(UserPreferencesContext);

    let languagesArray = profile.languages;

    if (!UserPreferences) throw console.error();

    const { language} = UserPreferences;

    useEffect(() => {
        setProfileData(languagesArray.find(la => la.id === language))
    }, [language])


    return (
        <>
            <div key={profileData?.id}className="flex flex-col items-center justify-center">
                <h1 className='text-2xl font-bold text-white/80 text-center'> Skills</h1>
                <div className="flex flex-row  flex-wrap items-center justify-center 
                    gap-10 w-full mt-7">
                    {
                        profile.programming_languages.map((item)=>{
                            return <div key={item.id}  className="flex flex-col items-center justify-center">
                             <LanguageIcons 
                            icon={item.icon} 
                            name={item.name} 
                            hoverColor={item["main-color"]}
                            isHoverable={item.isHoverable}
                            isRotable={item.isRotable}
                            />
                            <h3 className="text-white/80 text-wrap text-xl">
                                {item.name}
                            </h3>
                            </div>
                            
                           
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default Skills;