
interface TitleProps {
    level: "xl" | "2xl",
    text? : string,
    title?: string,
    isPair?: boolean
}


const Title = ({level, text = "Placeholder", title, isPair = true}: TitleProps)=>{


    return(
        <>
            <div className={`container flex flex-row items-center  text-wrap ${ isPair ? `gap-5` : `justify-center`} mb-5 w-1/2 max-w-3/4 `}>
                
                <h1 className={`text-${level} font-bold text-zinc-200`}> 
                    {title + `${isPair ? ": " : ""}`}
                </h1>
                {
                    isPair ? <h1 className={`text-${level} font-bold text-zinc-200 text-wrap`}> {text} </h1> : <></>
                }
            </div>
        </>
    )
}

export default Title