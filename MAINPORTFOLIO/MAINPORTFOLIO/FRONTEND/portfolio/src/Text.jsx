import React ,{useEffect,useState} from 'react'


function Text(){
const[kaka,setKaka]=useState(null)
   
const handleSubmit=async(e)=>{
    const result= await fetch ("http://localhost:2000/Test",{
        method:"get",
    })
    const papa=await result.json()
    setKaka(papa)
    console.log(kaka);
    
}

  return(
    <div>
     <button onClick={handleSubmit}>kaka</button>
     <h1></h1>
   
    </div>
  )
}

export default Text