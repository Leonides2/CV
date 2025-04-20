interface UserPreferencesContextProps {
    language: string;
    setLanguage: (language: string) => void;
    themeColor: string;
    setThemeColor: (themeColor: string) => void;
    blur: boolean;
    setBlur: (blur: boolean) => void;
    blurAmount: number;
    setBlurAmount: (blurAmount: number) => void;
}
export default UserPreferencesContextProps;