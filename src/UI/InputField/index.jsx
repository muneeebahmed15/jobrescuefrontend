import { Input } from 'antd'
import React from 'react'

const InputField = ({label, placeholder, type, name, value, onChange, from, readOnly}) => {
  return (
    <div className="col-md-6 px-2 mt-2">
    <label className='form-label'>{label}</label>
  <Input placeholder= {placeholder} type= {type} name= {name} value= {value} onChange={onChange} readOnly={from === "empDet" && readOnly} size='large' />
  </div>
  )
}

export default InputField