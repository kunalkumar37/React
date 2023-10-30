import { useState,useCallback,useEffect, useRef } from 'react'
import './App.css'

function App() {
  
   const [length,setlength]=useState(8);
   const [numberallowed, setnumberallowed]=useState(false);
   const [charallowed, setcharallowed]=useState(false);
   const [password,setPassword]=useState("");

  //ref hook
  const passwordRef=useRef(null);






    const passwordgenerator= useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberallowed) str+="0123456789"
      if(charallowed) str+= "!@#$%^&*()_+-={}[]|\:;"
      for(let i=1;i<=length;i++){
        let char =Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
        setPassword(pass);
      }
    },[length,numberallowed,charallowed,setPassword])

    const copypasswordtoclipboard=useCallback(()=>{
      passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0,9); this is range upto which we can select.


//usecallback is use to memorize the same code that is running. it is use to optimize the code.

      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
      passwordgenerator()
    }, [length, numberallowed,charallowed,passwordgenerator])
    
// useeffect is used when the window reload. 







  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button 
      onClick={copypasswordtoclipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
     </div>


     <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}
          />
        <label>length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultValue={numberallowed}
            id="numberInput"
            onChange={()=>{
              setnumberallowed((prev)=>!prev);

            }}
          />
          <label htmlFor='numberinput'>Number</label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input
            type="checkbox"
            defaultValue={charallowed}
            id="charinput"
            onClick={()=>{
              setcharallowed((prev)=>!prev)
            }}
          
          />
          <label htmlFor="charinput">character</label>

        </div>
      </div>
    </>
  )
}

export default App
