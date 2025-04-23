
export type ProfileData = {

        id: string,
        name: string,
        content: {
            name: string,
            title: string,
            avatar: string
        }
        cv: string,
         "cv-download-label":string
}

export type ContactData = {
    title: string,
    description: string,
    email: string,
    "email-label": string,
    phone: string,
    "phone-label": string,
}