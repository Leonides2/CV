import { ReactNode } from "react"

const TextContainer = ({children}:{children: ReactNode}) => {

    return (
        <>
            <div className=" container flex flex-col items-center justify-center
            bg-white/30 p-10 rounded-lg w-full">
                {children}
            </div>
        </>
    )
}

export default TextContainer;