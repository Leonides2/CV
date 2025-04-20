

const Button = ({ callback, text }: {callback: ()=>void, text : string}) => {

    return (
        <button onClick={callback} className="bg-white/10 backdrop-blur-[3px] p-10 hover:bg-white/50 text-white font-bold py-2 px-4 rounded
            mt-4 mb-4 transition-all duration-300 ease-in-out">
            {text}
        </button>
    )
}

export default Button;
