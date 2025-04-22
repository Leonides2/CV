

import info from "./mock/site-info.json"
import bgImage from "./assets/stone_embedded_tiles_nor_gl_1k_ed.jpg"
import PageSection from "./components/molecules/PageSection"
import LanguageSelector from "./components/molecules/LanguageSelector"
import ProfileDisplayer from "./components/molecules/ProfileDisplayer"
import ContactDisplayer from "./components/molecules/ContactDisplayer"
import { useContext, useEffect, useState } from "react"
import UserPreferencesContext from "./context/UserPreferencesContext"
import { siteInfoData } from "./models/site"
import SocialMediaCardsContainer from "./components/molecules/SocialMediaCardsContainer"
import Divider from "./components/atoms/Divider"
import BlurAmountSelector from "./components/molecules/BlurAmountSelector"
import EducationTimeline from "./components/molecules/EducationTimeline"
import ProjectsContainer from "./components/molecules/ProjectsContainer"
import { GetThemeColor } from "./models/const"
import ThemeSelector from "./components/molecules/themeSelector"


function App() {

  const [siteData, setSiteData] = useState<siteInfoData>();
  const UserPreferences = useContext(UserPreferencesContext);

  let languagesArray = info.languages;

  if (!UserPreferences) throw console.error();

  const { language, blurAmount, themeColor } = UserPreferences;

  useEffect(() => {
    setSiteData(languagesArray.find(la => la.id === language)?.content)
  }, [language])


  return (
    <div className={`bg-repeat `}
    style={{
      backgroundImage: `url(${bgImage})`
    }}
    >

      <div className={`flex flex-col gap-10 items-center justify-center p-10 
      max-sm:p-0
      w-full
      h-full
      min-h-dvh
      bg-fixed bg-cover bg-no-repeat bg-center 

      bg-gradient-to-r 
      transition-colors duration-500
      ${ GetThemeColor(themeColor) }`} 
    >

        <LanguageSelector />


        <div className={`grid grid-cols-2 grid-rows-1 items-center justify-center
        bg-white/10 p-10 rounded-lg  w-3/4 min-h-96
        mt-5
        max-md:flex max-md:flex-col max-md:grid-cols-none`}
          style={{
            gridTemplateColumns: "1fr 30%",
            gridTemplateRows: "1fr",
            backdropFilter: `blur(${blurAmount}px)`,
            boxShadow: 'inset 1px 1px 4px #fff4'
          }}
        >
          <ProfileDisplayer />

        </div>

        <PageSection height="24">
          <p className="container mx-auto text-left text-white/80 mb-5 text-xl">
            {siteData?.about.content}
          </p>
        </PageSection>

        <PageSection>
          <EducationTimeline/>
        </PageSection>

        <PageSection>

          <ProjectsContainer/>

        </PageSection>

        <PageSection>

          <SocialMediaCardsContainer />
          <Divider />
          <ContactDisplayer />

        </PageSection>

        

        <PageSection>
          <h2 className="text-2xl font-bold text-white text-center mb-6 text-wrap">{"Theme selector"}</h2>
          <BlurAmountSelector />
          <ThemeSelector/>
        </PageSection>

        <p className="container mx-auto text-center text-white mb-5">
          {siteData?.about.description}
        </p>
      </ div>
    </div>
  )
}

export default App
