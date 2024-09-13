import { useState } from "react"

export default function ControlledInput() {
    const[name,setName] = useState('')
    
  return (
    <div>
      <input
       type="text"
        name="name"
        value={name}
        onChange={e=> setName(e.target.value)}
        />
        <button onClick={()=>setName('')} >submit</button>
    </div>
  )
}
