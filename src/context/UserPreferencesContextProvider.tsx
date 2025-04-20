import { ReactNode, useEffect, useState } from "react";
import UserPreferencesContext from "./UserPreferencesContext";


const UserPreferencesProvider = ({ children } : {children: ReactNode}) => {
    
    const [language, setLanguage] = useState<string>("es");
    const [themeColor, setThemeColor] = useState<string>("blue");
    const [blur, setBlur] = useState<boolean>(false);
    const [blurAmount, setBlurAmount] = useState<number>(0);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        const storedThemeColor = localStorage.getItem("themeColor");
        const storedBlur = localStorage.getItem("blur");
        const storedBlurAmount = localStorage.getItem("blurAmount");

        if (storedLanguage) setLanguage(storedLanguage);
        if (storedThemeColor) setThemeColor(storedThemeColor);
        if (storedBlur) setBlur(storedBlur === "true");
        if (storedBlurAmount) setBlurAmount(Number(storedBlurAmount));
    }, []);


  
    return (
      <UserPreferencesContext.Provider value={{ language, setLanguage, themeColor, setThemeColor, blur, setBlur, blurAmount, setBlurAmount}}>
        {children}
      </UserPreferencesContext.Provider>
    );
  };

  export default UserPreferencesProvider;