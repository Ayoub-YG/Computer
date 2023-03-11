import React, { useState,useEffect } from "react"; 
 import {theColorTable} from "../constantes"
 import EndScreenScan from "./EndOfScreenScan"
 
 function FullScreen() { 
   const [color, setColor] = useState("#FE0000");
  const [colorIndex, setColorIndex] = useState(0);
useEffect(()=>{
if (colorIndex <= 3){
 let theTimer = setTimeout(()=>{
setColor(theColorTable[colorIndex])
setColorIndex(colorIndex+1)
},3000)
return () => {clearTimeout(theTimer)};
}
}
,[color])
 if (colorIndex === 4 ) { document.exitFullscreen(); return (
 <EndScreenScan/>
 )}
 else
  return ( 
    <div 
      style={{ 
        backgroundColor: color, 
        width: "100vw", 
        height: "100vh", 
      }} 
    > 
    </div> 
  ); 
} 
 
export default FullScreen;