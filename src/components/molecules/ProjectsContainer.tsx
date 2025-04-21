import { useContext, useEffect, useState } from "react";
import UserPreferencesContext from "../../context/UserPreferencesContext";
import info from "../../mock/site-info.json"
import { siteInfoData } from "../../models/site";
import ProjectCard from "../atoms/ProjectCard";
import Divider from "../atoms/Divider";


const ProjectsContainer = () => {

    const [siteData, setSiteData] = useState<siteInfoData>();
    const UserPreferences = useContext(UserPreferencesContext);

    let languagesArray = info.languages;

    if (!UserPreferences) throw console.error();

    const { language } = UserPreferences;

    useEffect(() => {
        setSiteData(languagesArray.find(la => la.id === language)?.content)
    }, [language])

    return (
        <>
            <div className="w-full space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 text-wrap">{siteData?.portfolio.title}</h2>

                    <p className="text-white/60 text-wrap">
                    {siteData?.portfolio.description}
                    </p>

                    <Divider/>

                    <div className="space-y-6 flex flex-row flex-wrap gap-3 justify-center max-sm:flex-col">
                        {
                            siteData?.portfolio.projects.map((item,index) => <ProjectCard key={index} {...item} />)
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
export default ProjectsContainer;