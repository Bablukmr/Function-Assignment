import './Students_form.css'
import React, { useState } from 'react'

export default function Students() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [age,setAge]=useState("")
  const [university,setUniversity]=useState("")
  const [value,setValue]=useState([])
    const handleSubmit=(e)=>{
        e.preventDefault()
        setValue([...value,{name,email,age,university}])
        setName('')
        setEmail('')
        setAge('')
        setUniversity('')
    }
  return (
    <div className='form_section'>
        <div className="input_section">
            <form onSubmit={handleSubmit}>
 <div><span>Name :</span> <input required type='text' value={name} onChange={(e)=>setName(e.target.value)}/></div>
<div><span>Email :</span> <input value={email} type='email' onChange={(e)=>setEmail(e.target.value)}/></div>
<div><span>Age :</span> <input type='number' value={age}  onChange={(e)=>setAge(e.target.value)}/></div>
 <div style={{marginLeft:"-2.2rem"}}><span>University :</span><input type='text' value={university} onChange={(e)=>setUniversity(e.target.value)}/></div>
<button>Submit</button>
</form>
        </div>
        <div className="list_section">
        <table >
  <tr className='heder_table'>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>University</th>
  </tr>
  {value.map((item,id)=>
  <tr className='td_table' key={id}>
  <td>{item.name}</td>
  <td>{item.email}</td>
  <td>{item.age}</td>
  <td style={{marginLeft:"-4.2rem"}}>{item.university}</td>
  </tr>
  )}
</table>
        </div>
    </div>
  )
}
