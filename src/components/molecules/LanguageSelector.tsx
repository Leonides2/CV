import { useContext, useEffect, useState } from "react";
import UserPreferencesContext from "../../context/UserPreferencesContext";
import languages from "../../mock/languages.json"
import { LanguageData } from "../../models/languages";


const LanguageSelector = () => {
    const [isActive, setIsActive] = useState(false);
    const [languageData, setLanguageData] = useState<LanguageData>()
    const UserPreferences = useContext(UserPreferencesContext);

    let languagesArray: LanguageData[] = languages.content;


    if(!UserPreferences) throw console.error();
    
    const {language, setLanguage, blurAmount} = UserPreferences;


    useEffect(()=>{
        setLanguageData(languagesArray.find(la =>  la.code === language))
    }, [language])


    const handleLanguage = ( event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value)
        localStorage.setItem("language", event.target.value)

    }

    return (
        <div className={`sticky right-5 bottom-3 z-20 flex gap-3 items-center justify-center ${isActive ? `w-fit` :`w-24`} 
        h-auto bg-white/10 
        p-2 
        rounded-lg
        transition-all duration-300 ease-linear
        max-sm:right-2 max-sm:bottom-2
        `}
        style={{
            backdropFilter: `blur(${blurAmount}px)`,
        }}
        >
            <div className={`flex items-center justify-center gap-2 w-16 h-16 bg-white/10 
                p-2 rounded-lg cursor-pointer hover:bg-white/20 transition-all duration-300 ease-in-out`}
                onClick={() => setIsActive(!isActive)}
                style={{
                    backdropFilter: `blur(${blurAmount}px)`,
                }}
                >
                <span className="text-gray-700 font-bold">
                    {
                        languageData?.code.toUpperCase()
                    }
                </span>
                <img src={languageData?.flag} className="w-[20px]"/>
            </div>
            {isActive ? <div className={`flex items-center z-10 justify-center w-64 h-16 bg-white/10 p-2 
                            rounded-lg`}
                            style={{
                                backdropFilter: `blur(${blurAmount}px)`,
                            }}
                            >
                <label htmlFor="language" className="text-gray-700 font-bold mr-2">
                    {`${languageData?.["selector-text"]}:`}    
                </label>
 
                <select className={`text-gray-700 pt-2 pb-2 pr-4 pl-4 rounded bg-white/60 border-none`} 
                    style={{
                        backdropFilter: `blur(${blurAmount}px)`,
                    }}
                    
                    value={language} onChange={(event) => handleLanguage(event)}>
                    {

                        languagesArray.map((item) => {

                            return(
                                <option key={item.id} value={item.code}
                                    className="bg-white border-none "
                                >
                                    {item.name}
                                </option>
                            )
                        })
                    }
                </select>

                <div>

                </div>
            </div> :

                <>
                </>
                }
            
        </div>
    );

}

export default LanguageSelector;