import {createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {

        if(isDark){
    document.body.classList.add("dark");
}
else{
    document.body.classList.remove("dark");
}
    }, [isDark])
    
        const toggleTheme = ()=>{
            setIsDark(!isDark);
        }
        const theme = isDark ? "dark" : "";
        return (
            <ThemeContext.Provider value={[{isDark, theme}, toggleTheme]}>
                {children}
            </ThemeContext.Provider>
        );
};



