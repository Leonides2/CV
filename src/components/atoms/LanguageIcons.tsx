

const LanguageIcons = ({ icon, name, hoverColor, isHoverable, isRotable }: { icon: string, name: string, hoverColor: string, isHoverable: boolean, isRotable: boolean }) => {


    return (
        <>
            <div title={name} className={`bg-radial from-white/0 from-10 to-white/0 to-70% rounded-full
                ${isRotable ? `animate-spin ` : `animate-pulse`}
                hover:scale-110
                transition-all 
                duration-500 
                ease-in-out`}
                style={{
                    
                    backgroundImage: isHoverable ? 
                    `radial-gradient(circle, ${hoverColor} 1%, transparent 70%)` : `radial-gradient(circle, transparent 100%, transparent 70%)`,
                    animationDuration: `${isRotable ? "15s" : "2.8s"}`
                }}
            >
                <img alt={`${name} icon`} src={icon} className="aspect-square h-16" />
            </div>
        </>
    )
}

export default LanguageIcons;