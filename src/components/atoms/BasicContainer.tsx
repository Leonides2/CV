import { ReactNode } from "react";

interface BasicContainerProps {

    children: ReactNode,
    flexDirection?: "col" | "row",
    gap?: string

}


const BasicContainer = ({ flexDirection = "col", gap = "0", children}: BasicContainerProps) =>{

    return(
    <>
         <div className={`container flex flex-${flexDirection} items-center justify-center`}
            style={{gap: `${gap}px`}}
         >
            {children}
        </div>
    </>
    )
}

export default BasicContainer;