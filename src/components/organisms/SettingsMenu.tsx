import { useState, useEffect } from "react";
import Burger from "../atoms/Burger";
import BlurAmountSelector from "../molecules/BlurAmountSelector";
import LanguageSelector from "../molecules/LanguageSelector";
import ThemeSelector from "../molecules/ThemeSelector";


const SettingsMenu = () =>{

    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

    
    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <>
            {innerWidth > 768 ? 
                <>
                    <LanguageSelector/>
                    <Burger>
                        
                        <BlurAmountSelector/>
                        <ThemeSelector/>
                    </Burger>
                </>
            : 
            <>
                <Burger>
                    <LanguageSelector _isActive={true}/>
                    <BlurAmountSelector/>
                    <ThemeSelector/>
                </Burger>
            </>  
            
            }
        </>
    )
}

export default SettingsMenu;