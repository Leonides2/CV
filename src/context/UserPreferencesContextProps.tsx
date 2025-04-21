interface UserPreferencesContextProps {
    language: string;
    setLanguage: (language: string) => void;
    themeColor: string;
    setThemeColor: (themeColor: string) => void;
    blur: boolean;
    setBlur: (blur: boolean) => void;
    blurAmount: string;
    setBlurAmount: (blurAmount: string) => void;
}
export default UserPreferencesContextProps;