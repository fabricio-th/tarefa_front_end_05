import './App.css';
import React, { useState } from 'react';
import SignupForm from './SignupForm';



const App = () => {

    const [mode, setMode] = useState({
      label: "Modo Claro",
      class: ""
    })

    const alternate = () => {
        if(mode.label === "Modo Escuro")
          setMode({
            label:"Modo Claro",
            btnClass: "",
            class: ""
          })
        else
          setMode({
            label:"Modo Escuro",
            btnClass: "btn-white-mode",
            class: "white-mode"
          })
    }


  
    return (
      <div className="App">
      <header className = { "App-header " + mode.class }>

        <SignupForm  
          mode= { alternate }
          label= { mode.label }
          btnClass={ mode.btnClass }
        />

      
      </header>
    </div>
    );
}



export default App;
