import { createContext, useReducer,useContext } from "react"

// type ThemeType = {
    // mode : string,
    // lang : string
// }

type ActionType = {
    type : string
}

const themeReducer = (state : any,
     action : ActionType) => {
    console.log('HELLO ' + action.type);
    switch (action.type) {
      case "light":
          state.mode = "light"
        return state;
      case "dark":
        state.mode = "dark"
        return state;
      default:
        return state;
    }
  };
  

 export const ThemeContext = createContext<Partial<any>>({});
 let initialState = {
    mode : 'dark',
    lang: 'EN',
  }


 export function ThemeProvider(props:any) {
    const [state, dispatch] = useReducer(themeReducer, initialState);
  
    return <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</ThemeContext.Provider>;
  }

 export const ThemeConsumer = ThemeContext.Consumer;

 
export default function SwitchButton() {
    debugger
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.mode;
  
    const onClick = () => {
        debugger
      if (darkMode === "dark") {
        theme.dispatch({ type: "light" });
      } else {
        theme.dispatch({ type: "dark" });
      }
    };
  
    return (
      <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
          {darkMode}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    );
  }
  