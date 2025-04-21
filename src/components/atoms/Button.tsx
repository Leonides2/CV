import { useContext } from "react";
import UserPreferencesContext from "../../context/UserPreferencesContext";


const Button = ({ callback, text }: {callback: ()=>void, text : string}) => {
    const UserPreferences = useContext(UserPreferencesContext);

    if (!UserPreferences) throw console.error();

    const {blurAmount } = UserPreferences;

    return (
        <button onClick={callback} className={`bg-white/10 backdrop-blur-[${blurAmount}px] p-10 hover:bg-white/50 text-white font-bold py-2 px-4 rounded
            mt-4 mb-4 transition-all duration-300 ease-in-out`}>
            {text}
        </button>
    )
}

export default Button;
