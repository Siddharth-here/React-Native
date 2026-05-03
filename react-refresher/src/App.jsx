//component
//usestate

import { useState } from "react";
const App =()=> {
  
  const [darkmode, setDarkmode] = useState(false)

  function onToggleTheme() {
    setDarkmode(!darkmode)
    console.log(darkmode);
    
  }

  return (
    <div style={{
        height: "100vh",
        backgroundColor: darkmode ? "#121212": "#ffff"
    }}>
        <button onClick={onToggleTheme}>Toggle</button>
    </div>
  )
}

export default App;
