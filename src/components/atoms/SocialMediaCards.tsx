

const SocialMediaCard = ({ icon, name , link }: { icon: string, name: string, link: string}) => {

    return (
        <>
            <div title={name} className={`bg-radial from-white/0 from-10 to-white/0 to-70% rounded-full
            hover:scale-110
            justify-center
            flex
            flex-col
            transition-all 
            duration-500 
            ease-in-out`}

                style={{
                    animationDuration: `2.8s`
                }}

                onClick={
                    () => window.open(link)
                }
            >
                <img alt={`${name} icon`} src={icon} className="aspect-square h-16" />
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold text-zinc-200">
                        {name}
                    </h3>
                </div>
            </div>

        </>
    )
}

export default SocialMediaCard;