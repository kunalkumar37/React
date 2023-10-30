import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//hooks- usestate is a hook to render the ui of the react. there is a sync of the ui of the react.

function App() {

  //let counter=5;
  // if we want to change the value every where there is counter they gonna change it. that is hook in react.

  let [counter,setCounter]=useState(15);

  const addValue=()=>{
    //console.log("value added",Math.random());
    counter=counter+1;
    if(counter>20){
      setCounter(20);

    }
    else{
    setCounter(counter);
    }
    //setCounter(counter+1);
  }

  const removevalue=()=>{
    counter=counter-1;
    if(counter<0){
      setCounter(0);

    }
    else{
      setCounter(counter);
    }
    

  }
  return(
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >add value</button>

      <br>
      </br>
      <button
      onClick={removevalue}
      >decrease value</button>
      {/* kisi bhi button pe agar run karwana haintoh onclick method likh sakat hu */}

    </>
  )
}

export default App
