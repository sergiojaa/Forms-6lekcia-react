import { SetStateAction, useState } from "react"
export default function Seminari2() {
  const [name,setName] = useState(localStorage.getItem("name"||""))
  const  handleChange= (e: { target: { value: SetStateAction<string> } })=>{
      setName(e.target.value);
      localStorage.setItem("name", e.target.value)
  }
  const handleClick = ()=>{
    setName("")
    localStorage.removeItem('name')
  }
  return (
    <div>
      seminari 2
      <input
       value={name}
        onChange={handleChange}
         />
         <button onClick={handleClick} >clear</button>
    </div>
  )
}
