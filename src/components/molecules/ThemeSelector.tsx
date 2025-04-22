

import { useContext } from "react";
import UserPreferencesContext from "../../context/UserPreferencesContext";
import Divider from "../atoms/Divider";
import { ThemesColor } from "../../models/const";


const ThemeSelector = () => {

    const UserPreferences = useContext(UserPreferencesContext);

    if (!UserPreferences) throw console.error();

    const { setThemeColor } = UserPreferences;

    const handleTheme = (theme: string) => {
        setThemeColor(theme);
        localStorage.setItem("themeColor", theme);

    }

    return (
        <>
            <div className="w-full space-y-8">
                <section>
                   
                    <Divider />
                    <div className="space-y-6 flex flex-row flex-wrap gap-3 justify-center max-sm:flex-col max-sm:gap-1">
                        {
                            ThemesColor.map((item, index) => {
                                return (
                                    <div key={index + item.name} className="flex flex-col gap-2 max-sm:gap-1 justify-center items-center size-fit max-sm:w-full">
                                    <div  className="flex flex-col justify-center items-center rounded-lg bg-white/20 size-20 max-sm:w-full
                                        p-4
                                        hover:bg-white/40
                                        transition-colors duration-300
                                    ">
                                        <div className={`overflow-clip bg-fixed bg-cover bg-no-repeat bg-center 
                                            bg-gradient-to-r rounded-lg size-full
                                            ${item.color} 
                                            cursor-pointer`}
                                            onClick={() => handleTheme(item.name)}
                                        >
                                        </div>
                                       
                                    </div>
                                        <div className="h-full p-5 flex justify-center">
                                            <p className="text-white/80 font-semibold text-wrap text-ellipsis">{item.name.toLocaleUpperCase("es")}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
export default ThemeSelector;