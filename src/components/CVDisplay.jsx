import '../styles/cvdisplay.css';

export default function CVDisplay({
    personalInfo, education
}){

    return (
        <div className='resume'>
            <div>{personalInfo.name}</div>
            <div>{personalInfo.email}</div>
            <div>{personalInfo.phone}</div>
            <div>{personalInfo.location}</div>
            <div>{education['school']}</div>
        </div>
    );
}