
const levelConfig: {[key: number]: string} = {
    1 : "2xl",
    2 : "xl"
}


const Title = ({level, text, title}:{level:number, text: string, title:string})=>{


    return(
        <>
            <div className='flex flex-row items-center gap-5  w-1/2 max-w-3/4 '>
                <h1 className={`text-${levelConfig[level]} font-bold text-zinc-200`}> {title}:</h1>
                <h1 className={`text-${levelConfig[level]} font-bold text-zinc-200`}> {text}</h1>
            </div>
        </>
    )
}

export default Title