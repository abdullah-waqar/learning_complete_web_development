import { createContext, useContext ,useState } from "react";

const themeContext = createContext()

export function ThemeProvider({children})
{
    const [isDark , setIsDark] = useState(false)

    function toggleDarkMode()
    {
        setIsDark(!isDark)
    }

    return <themeContext.Provider value={{isDark, toggleDarkMode}}>
        {children}
    </themeContext.Provider>
}

export function useDark()
{
    return useContext(themeContext)
}

