import { ContactData } from "./profile";

export interface siteInfoData {
  about: {
    content: string;
    description: string;
  };
  contact: ContactData;
  social: {
    title: string;
    description: string;
    accounts: Array<SocialMediaData>;
  };
  education: Array<{
    startDate: string,
    endDate: string,
    institution: string,
    title: string,
    description: string
  }>;

  experience: Array<
    {
      startDate: string,
      endDate: string,
      institution: string,
      title: string,
      description: string,
      technologies: Array<string>
    }>,
  "titles-certifications": Array<
    {
      IssuedDate: string,
      institution: string,
      title: string,
      link: string
    }>
  portfolio: {
    title: string;
    description: string;
    projects: Array<{
      image:string;
      name: string;
      description: string;
      link: string;
    }>;
  };
}

export interface SocialMediaData {
  name: string,
  icon: string,
  link: string,
  description: string,
}