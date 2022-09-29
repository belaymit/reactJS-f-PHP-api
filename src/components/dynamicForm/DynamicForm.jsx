import React from 'react'
import "./dynamicForm.css"

const DynamicForm = (props) => {
    const {name,inputID, inputType, dataset, placeHolder, label} = props;
  return (
    <div className="controled-formInput">
        <label>{label}</label>
          <input type={inputType} id={inputID} placeholder={placeHolder} dataset={dataset} name={name}/>
    </div>
  )
}

export default DynamicForm