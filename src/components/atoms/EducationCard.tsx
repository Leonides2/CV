
interface educardprops {

    startDate: string,
    endDate: string,
    institution: string,
    title: string,
    description: string

}


const EducationCard = (ob: educardprops) => {

    return (
        <div className="border-l-4 border-white/70 pl-4">
            <h3 className="font-bold text-lg">{ob.startDate} - {ob.endDate}</h3>
            <p className="text-white/80 font-semibold">{ob.title}</p>
            <p className="text-white/60">{ob.institution}</p>
            <p className="text-white/60">{ob.description}</p>
        </div>
    )
}
export default EducationCard;