import { createContext } from "react"
type ThemeType = {
    mode : string,
    lang : string
}
 const ThemeContext = createContext<Partial<ThemeType>>({});
 export const ThemeProvider = ThemeContext.Provider;
 export const ThemeConsumer = ThemeContext.Consumer;