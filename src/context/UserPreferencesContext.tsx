import { createContext } from "react";
import UserPreferencesContextProps from "./UserPreferencesContextProps";


const UserPreferencesContext = createContext<UserPreferencesContextProps | undefined>(undefined);

export default UserPreferencesContext;