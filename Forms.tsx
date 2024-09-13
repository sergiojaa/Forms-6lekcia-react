import { useState } from "react"

export default function Forms() {
    
   const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit=(event: { preventDefault: () => void })=>{
    event.preventDefault()
    
}
const handleChange = (event: any) =>{
setUserInfo({
    ...userInfo,
    [event.target.name]: event.target.value,
})
}
  return (
    <div>
        <form 
        style={{display:'flex', flexDirection:'column' }} 
        onSubmit={handleSubmit}
        >
        <label htmlFor="name">
            name
            </label>
        <input 
        className='w-[200px]'
        type="text" 
        id="name"
        name="name"
        onChange={handleChange}
       />
        <label htmlFor="email">
            email
            </label>
        <input 
         className='w-[200px]'
        type="text" 
        id="email"
        name="email"
        onChange={handleChange}
        />
        <label htmlFor="password">
            password
            </label>
            <input 
         className='w-[200px]'
        type="password" 
        id="password"
        name="password"
        onChange={handleChange}
        />
        <button type="submit">
            submit
        </button>
        </form>
      
    </div>
  )
}
