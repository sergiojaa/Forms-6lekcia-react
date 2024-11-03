sssssssimport {  useState } from "react"
export default function Seminari2() {
  const [name,setName] = useState(localStorage.getItem("name"||""))
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
   ) => {
    setName(e.target.value);
    localStorage.setItem(
      "name",
       e.target.value
      );
  };
  const handleClick = ()=>{
    
    setName("")
    localStorage.removeItem('name')
  }
  return (
    <div>
      seminari 2
      {/* <input
       value={name}
        onChange={handleChange}
         /> */}
         <button  onClick={handleClick} >clear</button>
         <select value={name} onChange={handleChange} style={{width:"200px"}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
         </select>
    </div>
  )
}
