

// import About from './About';            
// import { useState } from 'react';
 import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
 import TextForm from './TextForm';
 import React, { useState } from 'react';
 

function App() {
  const[mode, setMode] = useState('light');  //Wherther dark mode is enabled or not
  const[alert, setAlert] = useState({msg: " ",type: " "});

 const showAlert =(message, type)=>{
  setAlert({
     msg:message,
     type: type
   })
  }

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode ('dark');
   document.body.style.backgroundColor = '#042743';
   showAlert("Dark mode has been enabled","success");
   }
   else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
   }
  }



  return (
    
  <> 
  <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} /> 
   <Alert alert={alert}/>  

  <div className="container my-3">
  <TextForm heading="Enter The Text to analyze below" mode={mode} />
  
    {/* <About/> */}
  
  
  </div>
 </>

  
  );
}

export default App;
