
import Button from "./Button";

interface projectcardprops {
    image :string;
    name: string;
    description: string;
    link: string;
}


const ProjectCard = (ob: projectcardprops) => {

    const dynamicLink = new URL(ob.link, import.meta.url).href;

    return (
        <div className="flex flex-col justify-center rounded-lg bg-white/20 w-1/3 max-lg:w-full"
            style={/*{
                height: "460px",
                width: "400px"
            }*/ undefined}
        >
            <div className="overflow-clip w-full">
            <img className="rounded-t-lg" alt={`${ob.name + " img"} `} src={ob.image}
            />
            </div>
            <div className="h-full p-5 flex flex-col">
                <h3 className=" text-white  font-bold text-lg text-wrap">{ob.name}</h3>
                <p className="text-white/80 font-semibold text-wrap text-ellipsis">{ob.description}</p>
                <a className="text-white/60 text-wrap wrap-break-word">{ob.link}</a>
                <Button text="Click Here" callback={() => window.open(ob.link.startsWith("/") ? dynamicLink : ob.link)} />
            </div>
        </div>
    )
}
export default ProjectCard;