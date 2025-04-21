
interface excardprops {


    startDate: string,
    endDate: string,
    institution: string,
    title: string,
    description: string,
    technologies: Array<string>


}


const ExperienceCard = (ob: excardprops) => {

    return (
        <div className="border-l-4 border-white/70 pl-4">
            <h3 className="font-bold text-lg">{ob.startDate} - {ob.endDate}</h3>
            <p className="text-white/80 font-semibold">{ob.title}</p>
            <p className="text-white/60">{ob.institution}</p>
            <p className="text-white/60">{ob.description}</p>
            <div className="flex flex-row  flex-wrap gap-x-2 gap-y-1">
                {
                    ob.technologies.map((item, index)=>{
                        return( 
                        <div key={index}  className="text-white rounded-lg p-2 text-xs bg-white/20 hover:bg-white/30"> 
                            {item}
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ExperienceCard;