import { useState } from "react";
import Main from "./Main";
import Navigation from "./Navigation";

export default function App() {
  const [isToggle,setIsToggle]=useState(false);
  const toggle=()=>{
    setIsToggle(!isToggle);
  }
  return (
    <div className="container">
      <Navigation isToggle={isToggle} />
      <Main toggle={toggle} isToggle={isToggle} />
    </div>
  );
}