import React, { useContext } from "react";
import UserPreferencesContext from "../../context/UserPreferencesContext";


const BlurAmountSelector = () => {

    const UserPreferences = useContext(UserPreferencesContext);

    if(!UserPreferences) throw console.error();

    const { blurAmount, setBlurAmount } = UserPreferences;

    



    const handleBlurAmount = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setBlurAmount(event.target.value)
        localStorage.setItem("blurAmount", event.target.value)
    }

    return(
        <div className={`flex  flex-wrap gap-3 items-start justify-center w-full
        h-auto p-2 
        flex-col
        rounded-lg
        transition-all duration-300 ease-linear`}
        >
            <p className="text-white"> Seleccione la cantidad de efector blur: </p>
            
            <div className="flex flex-wrap items-center gap-2">
            <input title="blur-selector" type="range" 
            className="appearance-none cursor-pointer bg-white h-1 rounded-lg"
            value={blurAmount} 
            onChange={(event) => handleBlurAmount(event)}
            max={12}
            min={0}
            ></input>
            <p className="text-white">
                {(Math.round(Number(blurAmount)/12 * 100))}%
            </p>
            </div>
        </div>
    )
}
export default BlurAmountSelector;