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
      twitter: string;
      github: string;
      linkedin: string;
    };
    portfolio: {
      title: string;
      description: string;
      projects: Array<{
        name: string;
        description: string;
        link: string;
      }>;
    };
  }