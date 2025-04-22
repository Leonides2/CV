import { useContext, useEffect, useState } from "react";
import profile from "../../mock/profile.json"
import UserPreferencesContext from "../../context/UserPreferencesContext";
import { ProfileData } from "../../models/profile";
import download from "../../assets/download-svg.png"
import LanguageIcons from "../atoms/LanguageIcons";

const ProfileDisplayer = () => {
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
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-2xl font-bold text-white/80 text-center'> {profileData?.content.name}</h1>
                <h2 className='text-lg font-bold text-white/80'> {profileData?.content.title}</h2>

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
            

            <div className="flex items-center justify-center overflow-clip aspect-square rounded-full size-fit
                bg-white/90 m-2 max-sm:mt-10">
                <img
                    className="container rounded-full z-10 max-sm:bg-none size-52 max-sm:size-36"
                    src={profileData?.content.avatar}
                />

            </div>

            <div className="fixed left-2 bottom-2 flex items-center justify-center overflow-clip aspect-square rounded-lg size-fit
                bg-white/20 m-2 p-3 transition-colors duration-300 cursor-pointer hover:bg-white/40"
            onClick={()=>{
                let link = document.createElement('a');
                link.setAttribute('href', './CV Spanish.pdf')
                document.body.append(link);

                link.click();

                document.body.removeChild(link);
            }}>
                <img src={download} className="size-5"></img>
            </div>
        </>
    )

}

export default ProfileDisplayer;