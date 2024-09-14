import { SetStateAction, useState } from "react"
export default function Seminari2() {
  const [name,setName] = useState(localStorage.getItem("name"||""))
  const  handleChange= (e: { target: { value: SetStateAction<string> } })=>{
      setName(e.target.value);
      localStorage.setItem("name", e.target.value)
  }
  return (
    <div>
      seminari 2
      <input
       value={name}
        onChange={handleChange}
         />
    </div>
  )
}
