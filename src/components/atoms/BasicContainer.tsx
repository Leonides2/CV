import { ReactNode } from "react";

const BasicContainer = ({children}:{children: ReactNode}) =>{

    return(
    <>
         <div className='container flex flex-col items-center justify-center'>
            {children}
        </div>
    </>
    )
}

export default BasicContainer;