import '../styles/cvdisplay.css';
import React from 'react';
import ResumeSection from './ResumeSection';
import SplitBar from './SplitBar';


const CVDisplay = React.forwardRef((props, ref) => {
    
    const {personalInfo, education, workExperience, skills} = props
    const personalInfoFilled = hasInfo(personalInfo);
    const educationFilled = hasInfo(education);
    const workExperienceFilled = hasInfo(workExperience);
    const skillsFilled = hasInfo(skills);
    const skillsArray = [...Object.values(skills)]

    return (
        <div ref={ref} className='resume'>
            <div className="resume-title">{personalInfo.name}</div>
            {
                personalInfoFilled && 
                <ResumeSection title="Personal Information">
                {personalInfo.email !== "" && <div>{'Email: ' + personalInfo.email}</div>}
                {personalInfo.phone !== "" && <div>{'Phone Number: ' + personalInfo.phone}</div>}
                {personalInfo.address !== "" && <div>{'Address: ' +  personalInfo.address}</div>}
                </ResumeSection>
            }
            {
                educationFilled && 
                <ResumeSection title="Education">
                <SplitBar>
                {education.school !== "" && <div className="bold">{education.school}</div>}
                <div className="flex-row">
                {(education['start date'] !== "" || education['end date'] !== "") && <div>{education['start date'] + ' - ' + education['end date']}</div>}
                </div>
                </SplitBar>
                
                {education.degree !== "" && <div>{education.degree}</div>}
                {education.gpa !== "" && <div>{'GPA: ' + education.gpa}</div>}
                
                {education.location !== "" && <div>{'Location: ' + education.location}</div>}

                </ResumeSection>
            }
            {
                workExperienceFilled && 
                <ResumeSection title="Work Experience">
                <SplitBar>
                {workExperience.company !== "" && <div className="bold">{workExperience.company}</div>}
                <div className="flex-row">
                {(workExperience['start date'] !== "" || workExperience['end date'] !== "") && <div>{workExperience['start date'] + ' - ' + workExperience['end date']}</div>}
                </div>
                </SplitBar>
                
                {workExperience.position !== "" && <div>{workExperience.position}</div>}

                
                {workExperience.location !== "" && <div>{'Location: ' + workExperience.location}</div>}
                {workExperience.description !== "" && <div>{workExperience.description}</div>}

                </ResumeSection>
            }

            {
                skillsFilled && 
                <ResumeSection title="Relevant Skills">
                    <ul className="skillList">
                        {skillsArray.map(e=>{
                            if (e !== ""){
                                return <li key={e}>{e}</li>    
                            }
                        } 
                        )}
                    </ul>
                </ResumeSection>

            }
            
            
        </div>
        
            
    );
});

CVDisplay.displayName = "CVDisplay";

function hasInfo(object) {
    for (const key in object) {
        if (object[key] && key!=="name") { //having name doesn't count has filling personalInfo
            return true;
        }
    }
    return false;
    
}

export default CVDisplay;