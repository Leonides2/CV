import { useContext, useEffect, useState } from "react";
import BasicContainer from "../atoms/BasicContainer";
import Button from "../atoms/Button";
import TextContainer from "../atoms/TextContainer";
import Title from "../atoms/Title";
import { ContactData } from "../../models/profile";
import UserPreferencesContext from "../../context/UserPreferencesContext";
import info from "../../mock/site-info.json"

const ContactDisplayer = () => {

    const [contactData, setContactData] = useState<ContactData>()
    const UserPreferences = useContext(UserPreferencesContext);

    let languagesArray = info.languages;

    if (!UserPreferences) throw console.error();

    const { language } = UserPreferences;

    useEffect(() => {
        setContactData(languagesArray.find(la => la.id === language)?.content.contact);
    }, [language])

    return (
        <>
            <BasicContainer>

                <h1 className='text-2xl font-bold text-zinc-200 mb-5'> {contactData?.title}</h1>

                <TextContainer>
                    <Title level={2} title={`${contactData?.["email-label"]}`} text={contactData ? contactData.email : ""} />
                    <Title level={2} title={`${contactData?.["phone-label"]}`} text={contactData? contactData.phone : ""} />

                    <Button callback={() => { window.open(`mailto:${contactData?.email}`, "_blank") }}
                        text="Enviame un correo"
                    />

                </TextContainer>

            </BasicContainer>
        </>
    )
}

export default ContactDisplayer;