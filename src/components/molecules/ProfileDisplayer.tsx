import { useContext, useEffect, useState } from "react";
import profile from "../../mock/profile.json"
import UserPreferencesContext from "../../context/UserPreferencesContext";
import { ProfileData } from "../../models/profile";
import LanguageIcons from "../atoms/LanguageIcons";

const ProfileDisplayer = () => {
    const [profileData, setProfileData] = useState<ProfileData>()
    const UserPreferences = useContext(UserPreferencesContext);

    let languagesArray = profile.languages;

    if (!UserPreferences) throw console.error();

    const { language } = UserPreferences;

    useEffect(() => {
        setProfileData(languagesArray.find(la => la.id === language))
    }, [language])


    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-2xl font-bold text-zinc-200'> {profileData?.content.name}</h1>
                <h2 className='text-lg font-bold text-zinc-200'> {profileData?.content.title}</h2>

                <div className="flex flex-row  flex-wrap items-center justify-center 
                    gap-10 w-full mt-7">
                    {
                        profile.stack.map((item)=>{
                            return <LanguageIcons key={item.id} 
                            icon={item.icon} 
                            name={item.name} 
                            hoverColor={item["main-color"]}
                            isHoverable={item.isHoverable}
                            isRotable={item.isRotable}
                            />
                        })
                    }
                </div>
            </div>
            

            <div className="container flex items-center justify-center h-full w-full 
                bg-white/90 rounded-lg m-2 p-5">
                <div
                    className=" container w-full h-full  bg-cover bg-no-repeat bg-center rounded-lg max-sm:bg-none "
                    style={{
                        backgroundImage: `linear-gradient(to bottom, transparent 80%, rgba(255,255,255,0.9)), url(${profileData?.content.avatar})`,
                    }}
                ></div>

            </div>
        </>
    )

}

export default ProfileDisplayer;