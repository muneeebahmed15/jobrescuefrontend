import { Input } from 'antd'
import React from 'react'

const InputField = ({label, placeholder, type, name, value, onChange, from, readOnly, updation}) => {
  return (

    <div className={`col-6 px-2 mt-2 ${from === "col-3" ? "col-md-4" : "col-md-6"}`}>
    <label className='form-label'>{label}</label>
    <Input placeholder= {placeholder} className={!updation ? "border-0" : "" } type= {type} name= {name} value= {value} onChange={onChange} readOnly={from === "empDet" && readOnly} size='large' />
    </div>

  )
}

export default InputField