import '../styles/cvdisplay.css';
import ResumeSection from './ResumeSection';
import SplitBar from './SplitBar';
export default function CVDisplay({
    personalInfo, education

}){
    
    const personalInfoFilled = hasInfo(personalInfo);
    const educationFilled = hasInfo(education);


    return (
        <div className='resume'>
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
            
            
        </div>
    );
}

function hasInfo(object) {
    for (const key in object) {
        if (object[key] && key!=="name") { //having name doesn't count has filling personalInfo
            return true;
        }
    }
    return false;
    
}