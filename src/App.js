// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert.js";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
// import Darkmode from './components/Darkmode.js';
import React, {useState} from 'react';

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setalert] = useState(null);
  const showalert = (message,type)=>{
      setalert({
        msg : message ,
        type : type
      })
      setTimeout(()=>{
        setalert(null);
      },2000);
   };
  
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode has been enabled','success');
    };
  }
  return (
    <>
      <Navbar heading="Text-Editor" mode = {mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>
      <Textform heading="Enter your text here" mode = {mode} />
      {/* <Darkmode/> */}
    </>
  );
}

export default App;
