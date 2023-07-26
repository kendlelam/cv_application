import TextInput from "./TextInput"
import '../styles/inputgroup.css'
import SplitBar from "./SplitBar"

export default function InputGroup({isActive, setActive, title, inputArray, handleChange, stateObject}){
    const inputList = inputArray.map(e=>
        <TextInput key={e} labelName={e} handleChange={handleChange} section={title} stateObject={stateObject}/>
    )

    return (
        
        <div className="input-group">
            <SplitBar onClick={setActive}>
                <h2>{title}</h2>
                <button className={"expand " + (isActive ? "active" : "")} onClick={setActive}><i className="fa-solid fa-chevron-down"></i></button>
            </SplitBar>
            {isActive && inputList}
        </div>
    )
}

