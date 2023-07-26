import '../styles/textinput.css'

export default function TextInput(props) {
    const {labelName, handleChange, section, stateObject} = props;
    
    if (labelName === "description"){
        return (
            <div>
            <label htmlFor={labelName}>{titleCase(labelName) + ' '}</label>
            <div>
            <textarea rows="5" id={labelName} onChange={e=>{
                handleChange(labelName, e.target.value, section);
            }} value={stateObject[labelName]}/>
            </div>
            

            </div>
        )
    }

    return (
        <div>
            <label htmlFor={labelName}>{titleCase(labelName) + ' '}</label>
            <input type="text" id={labelName} onChange={e=>{
                handleChange(labelName, e.target.value, section);
            }} value={stateObject[labelName]}/>
        </div>
    )
}

function titleCase(s){

    const str = s.split(' ')
    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');

    return str;
}