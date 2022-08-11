// import React from 'react';
// import {useState} from 'react';
// import DarkModeToggle from "react-dark-mode-toggle";

// export default function Nav() {
//     const [isDarkMode, setIsDarkMode] = useState(() => false);
//     const [mode, setmode] = useState("light");
//     console.log(isDarkMode);

//     // const [mswitch,setmd]=useState("Enable Dark Mode");
//     // const [mtext,setmt]=useState("dark");
//     // const changemode=()=> {
//     //   if

//     // }
//     const handlemode=()=> {
//     if(isDarkMode==="false")
//     {
//       console.log("hello");
//       // setmd("Enable Dark Mode");
//       // setmt("light");
//       document.body.style.backgroundColor="grey";

//     }
//     else{
//       // setmd("Enable Light Mode");
//       // setmt("dark");
//       document.body.style.backgroundColor="white";
//     }
//   }
//   return (
//     <div className='Nav'>
//         <DarkModeToggle
//             onChange={handlemode}
//             checked={isDarkMode}
//             size={80}
//         />
//         {/* <label>{mswitch}</label> */}
//     </div>
//   )
// }

import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar bg-${props.mode}`}>
      <div className="container-fluid">
        <div classNameName='navbar'>
          <div className={`form-check form-switch text-${props.mtext}`}>
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" unchecked/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{props.mswitch}</label>
          </div>
        </div>
  </div>
</nav>
    </div>
  )
}