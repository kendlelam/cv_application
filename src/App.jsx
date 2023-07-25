import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import InputGroup from './components/InputGroup'
import CVDisplay from './components/CVDisplay'
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name:'',
    email:'',
    phone:'',
    location:''

  });

  const [education, setEducation] = useState({
    school:'',
    degree:'',
    'start date':'',
    'end date':'',
    location:'',

  });

  function handleState(keyName, newVal, section) {
    let replacement;
    if (section === "Personal Information") {
      replacement = {
        ...personalInfo,
      }
      replacement[keyName] = newVal;
      setPersonalInfo(replacement);
    } else if (section === "Education") {
      replacement = {
        ...education,
      }
      replacement[keyName] = newVal;
      setEducation(replacement);
    }    
    
  }

  

  return (
    <>
      <Header />
      
      <div className="flex">
        <div className="infoCol">
          <InputGroup title="Personal Information" inputArray={Object.keys(personalInfo)} handleChange={handleState}/>
          <InputGroup title="Education" inputArray={Object.keys(education)} handleChange={handleState}/>
        </div>
        
        <CVDisplay 
        personalInfo={personalInfo} 
        education={education}
        />
      </div>
    </>
  )
}



export default App
