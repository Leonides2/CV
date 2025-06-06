import { ReactNode, useContext } from "react"
import UserPreferencesContext from "../../context/UserPreferencesContext";

interface PageSectionProps {
    gridCols?: string;
    children: ReactNode;
    height?: string;
}


const PageSection = ({gridCols = "1fr" , children, height = "96"}: PageSectionProps ) => {

    const UserPreferences = useContext(UserPreferencesContext);


    if(!UserPreferences) throw console.error();
    
    const {blurAmount} = UserPreferences;

    return (
        <>
            <div className={`grid items-center justify-center
                bg-white/10 p-10 rounded-lg  w-3/4 min-h-${height}
                max-md:flex max-md:flex-col max-md:grid-cols-none
                max-md:p-4
                
            `} style={{
                gridTemplateColumns: gridCols,
                gridTemplateRows: "1fr",
                backdropFilter: `blur(${blurAmount}px)`,
                boxShadow: 'inset 1px 1px 4px #fff4'
            }}>
                {
                    children
                }
            </div>
        </>
    )

}

export default PageSection