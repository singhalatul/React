import { useState,useEffect } from 'react';
import {ThemeProvider} from './context/Theme.js'
import ThemeButton from './components/ThemeButton/ThemeButton.jsx'; 
import Card from './components/Card/Card.jsx';
// import './App.css'</ThemeButton

function App() {
const [themeMode,setThemeMode] = useState("light");
const darkTheme = ()=>{
  setThemeMode("dark")
}
const lightTheme =()=>{
  setThemeMode("light");
}

//actual change in theme
useEffect(()=>{
  document.querySelector('html').classList.remove("light" , "dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className=" w-full "> 
            <div className="w-full max-w-sm mx-auto flex justify-end ">
              {<ThemeButton />}
            </div>
            <div className="w-full max-w-sm mx-auto bg-purple-700">
                < Card/>
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
