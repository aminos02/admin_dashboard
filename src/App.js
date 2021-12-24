import './App.css';
import Navigation from './Navigation';
import Main from "./Main"
import { useState } from 'react';
function App() {
  const [isToggle,setIsToggle]=useState(false);
  function toggle(){
    setIsToggle(!isToggle);
  }
  return  <div className='container'>
    <Navigation isToggle={isToggle}/>
    <Main toggle={toggle} isToggle={isToggle}/>
  </div>
}

export default App;
