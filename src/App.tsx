

import info from "./mock/site-info.json"
import bgImage from "./assets/stone_embedded_tiles_nor_gl_1k.jpg"
import PageSection from "./components/molecules/PageSection"
import LanguageSelector from "./components/molecules/LanguageSelector"
import ProfileDisplayer from "./components/molecules/ProfileDisplayer"
import ContactDisplayer from "./components/molecules/ContactDisplayer"
import { useContext, useEffect, useState } from "react"
import UserPreferencesContext from "./context/UserPreferencesContext"
import { siteInfoData } from "./models/site"


function App() {

  const [siteData, setSiteData] = useState<siteInfoData>();
  const UserPreferences = useContext(UserPreferencesContext);

  let languagesArray = info.languages;

  if (!UserPreferences) throw console.error();

  const { language } = UserPreferences;

  useEffect(() => {
    setSiteData(languagesArray.find(la => la.id === language)?.content)
  }, [language])


  return (
    <div className={`bg-[url(${bgImage})] bg-repeat`}>

      <div className='flex flex-col gap-10 items-center justify-center p-10 
      max-sm:p-0
      h-auto
      min-h-dvh
      bg-fixed bg-cover bg-no-repeat bg-center 
      bg-gradient-to-r 
      from-indigo-500/80 
      to-purple-500/80 
    '>

        <LanguageSelector />


        <div className="grid grid-cols-2 grid-rows-1 items-center justify-center
        bg-white/10 backdrop-blur-[3px] p-10 rounded-lg  w-3/4 min-h-96
        mt-5
        max-md:flex max-md:flex-col max-md:grid-cols-none"
          style={{
            gridTemplateColumns: "1fr 30%",
            gridTemplateRows: "1fr",
          }}
        >
          <ProfileDisplayer />

        </div>

        <PageSection height="24">
          <p className="container mx-auto text-left text-gray-300 mb-5 text-xl">
            {siteData?.about.content}
          </p>
        </PageSection>

        <PageSection>

         <ContactDisplayer/>

        </PageSection>

        <PageSection gridCols="1fr 1fr">
          <h1>
            Hello
          </h1>
        </PageSection>

        <p className="container mx-auto text-center text-gray-300 mb-5">
          {siteData?.about.description}
        </p>
      </ div>
    </div>
  )
}

export default App
