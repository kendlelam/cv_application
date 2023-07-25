import TextInput from "./TextInput"
import '../styles/inputgroup.css'

export default function InputGroup({title, inputArray, handleChange}){
    const inputList = inputArray.map(e=>
        <TextInput key={e} labelName={e} handleChange={handleChange} section={title}/>
    )

    return (
        
        <div className="input-group">
            <h2>{title}</h2>
            {inputList}
        </div>
    )
}