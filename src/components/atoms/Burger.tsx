import { ReactNode, useContext, useState } from "react";
import UserPreferencesContext from "../../context/UserPreferencesContext";

interface BurgerProps {
    children?: ReactNode | ReactNode[];
}


const Burger = ({ children }: BurgerProps) => {

    const [isActive, setIsActive] = useState(false);
    const UserPreferences = useContext(UserPreferencesContext);

    if (!UserPreferences) throw console.error();

    const { blurAmount } = UserPreferences;




    return (
        <>
            <div className={`fixed z-40 flex flex-col gap-3 items-center justify-center 
            bg-white/20
            
            
            
            ${isActive ? 
                `
                w-full h-full right-0 top-0
                transition-all duration-700 ease-in-out
                bg-gray-700/80
                md:size-96
                md:rounded-lg
                md:m-2
                `
                    : 
                `
                size-12 right-5 top-3
                p-4
                transition-all duration-300 ease-in-out
                hover:bg-white/30
                rounded-lg
                cursor-pointer 
                `
            }
            
            `}
                onClick={() => 
                    !isActive ? setIsActive(!isActive) : {}
                }
                style={{
                    backdropFilter: `blur(${blurAmount }px) `,
                    boxShadow: "rgba(255, 255, 255, 0.267) 1px 1px 4px inset"
                }}
            >

                {
                    isActive ? 
                    
                    
                    <div className={`flex flex-col items-center justify-center gap-2 w-full h-full
                    p-2 
                    md:items-start
                    `}
                    >
                        <div className="
                        fixed top-3 right-3 flex items-center justify-center w-10 h-10 bg-white/20 p-2 rounded-lg cursor-pointer 
                        hover:bg-white/30 transition-all duration-300 ease-in-out"
                            onClick={() => setIsActive(!isActive)}
                        >
                            <span className="text-white/80 font-bold">
                                X
                            </span>
                        </div>
                        <div id="burger-content" className={`${isActive ? `opacity-100` : `opacity-0`} transition-opacity duration-700 ease-in-out`}>

                        {children}

                        </div>

                    </div>

                        :

                        <div className="flex flex-col justify-center items-center cursor-pointer group
                            size-7
                        ">
                            <span className="w-full h-1 bg-white rounded-lg transition-all duration-300 ease-in-out group-hover:bg-gray-600"></span>
                            <span className="w-full h-1 bg-white rounded-lg transition-all duration-300 ease-in-out group-hover:bg-gray-600 my-1"></span>
                            <span className="w-full h-1 bg-white rounded-lg transition-all duration-300 ease-in-out group-hover:bg-gray-600"></span>
                        </div>

                }



            </div>

        </>
    )
}

export default Burger