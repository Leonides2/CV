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
  education:{ 
  label: string,
  content:Array<{
    startDate: string,
    endDate: string,
    institution: string,
    title: string,
    description: string
  }>};

  experience: {
    label: string,
    content:
    Array<{
      startDate: string,
      endDate: string,
      institution: string,
      title: string,
      description: string,
      technologies: Array<string>
    }>
  },
  "titles-certifications": {
    label: string,
    content: Array<
    {
      IssuedDate: string,
      institution: string,
      title: string,
      link: string
    }>}
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
  linkButtonLabel: string,
  emailButtonLabel: string
}

export interface SocialMediaData {
  name: string,
  icon: string,
  link: string,
  description: string,
}