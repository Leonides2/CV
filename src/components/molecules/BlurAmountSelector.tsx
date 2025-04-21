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
        <div className={`flex  flex-wrap gap-3 items-center justify-center w-full
        h-auto bg-white/10 p-2 
        rounded-lg
        transition-all duration-300 ease-linear`}
            style={{
                backdropFilter: `blur(${blurAmount}px)`,
            }}
        >
            <label htmlFor="blur-selector" className="text-white"> Seleccione la cantidad de efector blur: </label>
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
    )
}
export default BlurAmountSelector;