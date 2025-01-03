import React from 'react'
import { useNavigate } from 'react-router-dom'

function SimpleRedirect(props) {
const navigate=useNavigate();
    return (
    <>
        <button onMouseOver={(e)=>{
                    e.currentTarget.innerText=props.semiTitle;
        }}  
        onMouseLeave={(e)=>
        {
            e.currentTarget.innerText=props.title;
        }
        }
        className='bg-blue-500  hover:bg-blue-700 text-white font-bold sm:py-2 sm:px-4 p-1 rounded-full '
         onClick={()=>{
            navigate(props.path);
        }}>{props.title}</button>
    </>
  )
}

export default SimpleRedirect