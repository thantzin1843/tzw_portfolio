'use client'
import { createContext ,useState ,useEffect} from "react";


export const ThemeContext = createContext();

export default function ThemeContextProvider ({children}) {
    const getTheme = () =>{
        if(typeof window !== 'undefined'){
            return localStorage.getItem('theme') || 'light';
        }
        
    }
    const [theme,setTheme] = useState(()=>{
        return getTheme();
    });
    const toggleTheme = ()=>{
        const newTheme = theme === 'light'? 'dark' : 'light';
        setTheme(newTheme);
    }

    useEffect(()=>{
        localStorage.setItem('theme', theme);
    },[theme])
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}