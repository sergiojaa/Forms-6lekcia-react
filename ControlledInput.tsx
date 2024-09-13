import { useState } from "react"

export default function ControlledInput() {
    const[name,setName] = useState('')
  return (
    <div>
      <input
       type="text"
        name="name"
        
        />
    </div>
  )
}
