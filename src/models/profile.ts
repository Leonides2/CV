
export type ProfileData = {

        id: string,
        name: string,
        content: {
            name: string,
            title: string,
            avatar: string
        }
}

export type ContactData = {
    title: string,
    description: string,
    email: string,
    "email-label": string,
    phone: string,
    "phone-label": string,
}