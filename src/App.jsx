import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactToPrint from 'react-to-print';
import Header from './components/Header'
import InputGroup from './components/InputGroup'
import CVDisplay from './components/CVDisplay'
import './App.css'
import sample from './sample'

function App() {
  let componentRef = useRef(); 

  const [personalInfo, setPersonalInfo] = useState({
    name:'',
    email:'',
    phone:'',
    address:''

  });

  const [education, setEducation] = useState({
    school:'',
    degree:'',
    gpa:'',
    'start date':'',
    'end date':'',
    location:'',

  });

  const [workExperience, setWorkExperience] = useState({
    company:'',
    position:'',
    'start date':'',
    'end date':'',
    location:'',
    description:'',


  });

  const [skills, setSkills] = useState({
    'skill 1':'',
    'skill 2':'',
    'skill 3':'',
    'skill 4':'',
    'skill 5':'',
    'skill 6':'',
  });

  const [activeIndex, setActive] = useState(0)

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
    }  else if (section === "Work Experience"){
      replacement = {
        ...workExperience,
      }
      replacement[keyName] = newVal;
      setWorkExperience(replacement);
    } else if (section === "Relevant Skills"){
      replacement = {
        ...skills,
      }
      replacement[keyName] = newVal;
      setSkills(replacement);
    }
    
  }

  const generateSample = () => {
    setPersonalInfo(sample[0]);
    setEducation(sample[1]);
    setWorkExperience(sample[2]);
    setSkills(sample[3]);
  }

  

  return (
    <>
      <Header generateSample={generateSample}>
        <div>CV Generator</div>
        <div>
        <button className="button sample" onClick={generateSample}>Show Sample</button>
        
        <ReactToPrint 
        trigger={()=>
          <button className="button download">Download as PDF <i className="fa-solid fa-file-arrow-down"></i></button>}
          content={()=>componentRef}
          
          />

         
        </div>

        
      </Header>

      
      <div className="flex">
        <div className="infoCol">
          <InputGroup isActive={activeIndex === 0} setActive={()=>setActive(0)} title="Personal Information" inputArray={Object.keys(personalInfo)} handleChange={handleState} stateObject={personalInfo}/>
          <InputGroup isActive={activeIndex === 1} setActive={()=>setActive(1)} title="Education" inputArray={Object.keys(education)} handleChange={handleState} stateObject={education}/>
          <InputGroup isActive={activeIndex === 2} setActive={()=>setActive(2)} title="Work Experience" inputArray={Object.keys(workExperience)} handleChange={handleState} stateObject={workExperience}/>
          <InputGroup isActive={activeIndex ===3} setActive={()=>setActive(3)} title="Relevant Skills" inputArray={Object.keys(skills)} handleChange={handleState} stateObject={skills}/>
        </div>
        
        <CVDisplay ref={(el) => (componentRef=el)}
          personalInfo={personalInfo} 
          education={education}
          workExperience={workExperience}
          skills={skills}
        />
      </div>
    </>
  )
}






export default App
