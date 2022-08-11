import './App.css';
import React, {useState} from 'react';
import Top from './components/Top';
import Bottom from './components/Bottom';
import Nav from './components/nav';

function App() {

  const [mode,setmode]=useState("light");
  const [mswitch,setmd]=useState("Enable Dark Mode");
  const [mtext,setmt]=useState("dark");
  const [t1text,sett1text]=useState("dark");
  const [t2text,sett2text]=useState("dark");

  const handlemode=()=> {
    if(mode==="light")
    {
      setmode("dark");
      setmd("Enable Light Mode");
      setmt("light");
      document.body.style.backgroundColor="grey";

    }
    else{
      setmode("light");
      setmd("Enable Dark Mode");
      setmt("dark");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <div className="App">
        <Nav mode={mode} mswitch={mswitch} toggle={handlemode} mtext={mtext}/>
        <Top t1c={mtext} t2c={mtext}/>
        <Bottom boxc={mtext}/>
    </div>
  );
}

export default App;
