import { useContext, useEffect, useState } from "react";
import UserPreferencesContext from "../../context/UserPreferencesContext";
import info from "../../mock/site-info.json"
import { siteInfoData } from "../../models/site";
import EducationCard from "../atoms/EducationCard";
import ExperienceCard from "../atoms/ExperienceCard";
import CertificateCard from "../atoms/CertificateCard";


const EducationTimeline = () => {

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
            <div className="md:w-2/3 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Educación</h2>

                    <div className="space-y-6">
                        {
                            siteData?.education.map((item,index) => <EducationCard key={index} {...item} />)
                        }
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Experiencia</h2>

                    <div className="space-y-6">
                        {
                            siteData?.experience.map((item,index) => <ExperienceCard key={index}{...item} />)
                        }
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Certificaciones</h2>
                    <div className="space-y-6">
                        {
                            siteData?.["titles-certifications"].map((item,index) => <CertificateCard key={index} {...item} />)
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
export default EducationTimeline;