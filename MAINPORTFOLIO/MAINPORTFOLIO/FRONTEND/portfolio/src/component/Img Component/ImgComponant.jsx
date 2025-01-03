import React, { useState } from 'react'

function ImgComponant(props) {
   const [loading,setLoading]=useState(true);
   const handleLoading = ()=>
   {
      setLoading(false);
      
   }
  return (
   
      <div onLoad={handleLoading} className='sm:w-3/12  shadow-lg rounded-2xl grid sm:p-2  sm:gap-5'>
         <div className=''>
         <img src={props.img} alt="" onLoad={handleLoading}  className='rounded-2xl'/>
         {loading && <>Loading..</>}
         </div>
         <div className='grid sm:gap-12 gap-6'>
            <div className='grid  gap-2'>
            <h1 className='text-3xl font-semibold'>{props.title}</h1>
            <p className='italic'>{props.desc}</p>

          </div>
         <div>
            <button className='border border-red-600 px-2 rounded-xl ' onClick={()=>{
               window.open(props.link)
            }} > VIEW GITHUB</button>
         </div>
         </div>
    
       </div>
  )
}

export default ImgComponant