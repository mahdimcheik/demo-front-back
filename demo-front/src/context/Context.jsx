import { createContext, useContext } from "react";
import { useState } from "react";

const DemoContext = createContext();

function DemoContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <DemoContext.Provider value={{ theme, setTheme }}>
      {children}
    </DemoContext.Provider>
  )
}

export default DemoContextProvider;
export const UseTheme = () => useContext(DemoContext);