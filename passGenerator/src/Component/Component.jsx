import { useCallback, useState } from 'react'
import './Component.css'



function Component() {
   const[length, setLength] = useState(8)
   const[numberAllowed, setNumberAllowed] = useState(false)
   const[charAllowed, setCharAllowed] = useState(false)
   const[password, setPassword] = useState("")

   const passwordGenerator = useCallback(() =>{
       let pass = " "
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
       if(numberAllowed) str += "0123456789"
       if(charAllowed) str += "!@#$%^&*(){}[]<>?`"
       for(let i=1; i<=length; i++){
           let char = math.floor(math.random()*str.length+1)
           pass += str.charAt(char)
       }
       setPassword(pass) 
   },[length,numberAllowed,charAllowed,setPassword])
   return(
    <>
    <div className="Compt">
        <h1>Password Generator</h1>
        <div className="comptOne">
           <input type="text" value={password} className='ComptOneIn' placeholder='password' readOnly />
           <button className='ComptOneInt'>Copy</button>
        </div>
        <div className="ComptTwo">
            <input type="Range" min={8} max={100} value={length} className='ComptTwoIn' />
            <label>Lenght:{length}</label>
            <input type="checkbox" />
            <label htmlFor="checkbox">NumAllowed</label>
            <input type="checkbox" />
            <label htmlFor="checkbox">CharAllowed</label>
        </div>

    </div>
    </>
   )
}
  

export default Component
