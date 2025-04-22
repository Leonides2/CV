
export const ThemesColor: Array<{name: string, color: string}> = [
    {
        name: "indigo",
        color: "from-indigo-500/40  to-purple-500/40"
    },
    {
        name: "amber",
        color: " from-amber-700/40 to-yellow-600/40"
    },
    {
        name: "aqua",
        color: "from-teal-600/40 to-sky-500/40"
    }
]


export const GetThemeColor: (mainColor: string | undefined) => string = ( mainColor: string | undefined ) => {

    let color: string | undefined = undefined;

    if(mainColor != undefined) {
        let theme = ThemesColor.find( u => u.name === mainColor);

        if(theme){
            color = theme.color
            return color;
        }
        color = "from-indigo-500/40  to-purple-500/40"
    }else{
        color = "from-indigo-500/40  to-purple-500/40"
    }
    console.log(color)

    return color
}