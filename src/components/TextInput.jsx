export default function TextInput(props) {
    const {labelName, handleChange, section} = props;
    return (
        <div>
            <label htmlFor={labelName}>{labelName + ' '}</label>
            <input type="text" id={labelName} onChange={e=>{
                handleChange(labelName, e.target.value, section);
            }}/>
        </div>
    )
}