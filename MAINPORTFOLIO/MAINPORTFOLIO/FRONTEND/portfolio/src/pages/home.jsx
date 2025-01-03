import {React, useContext} from 'react'
import myimage from '../assets/imges/sidd.jpeg'
import s1 from '../assets/imges/insta.jpg'
import s2 from '../assets/imges/twit.png'
import s3 from '../assets/imges/x.jpg'
import s4 from '../assets/imges/face.png'
import city from '../assets/imges/city.jpg'
import Nav from '../component/nav'
import { useNavigate } from 'react-router-dom'
import CollectionBtn from '../component/button/CollectionBtn'
import Github from '../component/button/github'
import { screen } from '../context/screen'








function Home() {
  const naviGate=useNavigate()
  const  {sm}=useContext(screen)
  return (
    <>
   
   
    <div className='w-full grid sm:flex p-3 gap-5'>
     <div className='sm:w-2/4  grid gap-8  w-full'>
      <Github title="AVAILABLE FOR WORK" ></Github>
      <div className='sm:text-8xl text-4xl  font-bold '>
        Hi,I'm a WEB designer
      </div>
      <div className=' font-light italic text-pretty'>
        <p>i am passout student of batch 2025 ,i just upgrade my skill at the webdevlopment . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia.</p>
      </div>
      <div className='flex  w-2/3 gap-5 '>
       
       <button
       onClick={()=>{
        naviGate("/contact")
       }}
       className='shadow my-auto p-4 rounded-xl bg-black text-white hover:text-2xl duration-1000'>Contact us</button>
       <button
         onClick={()=>{
          naviGate("/about")
         }}
       className='shadow my-auto p-4 rounded-xl  bg-black text-white hover:text-2xl duration-1000'>About me</button>
       
      </div>
     </div>
     <div className='sm:w-2/4  grid content-center sm:gap-20 '>
       <div className=' flex w-100 gap-4 '>
         <div className='grid sm:gap-20 p-10 w-2/4  rounded-3xl duration-500  shadow-black  shadow-sm  ' >
         {!sm&& <img src={city} alt="" className='absolute z-0 w-2/12  rounded-2xl  translate-y-16 shadow-2xl shadow-black h-1/3 object-fill object-top ' />}
            <div className='z-10'>
          <h1 className='sm:text-3xl font-serif '>SIDDHARTH</h1>
          <h1 className='font-thin hover:text-2xl duration-1000'>ahmdabad,india</h1>
          </div>
          <div className='grid  content-center gap-2 z-10'>
          <button className='border border-black my-auto  sm:w-2/3 rounded-full bg-slate-400  font-medium  duration-1000 '>UI expert</button>
          <button className='border border-black my-auto sm:w-2/4   rounded-full bg-slate-200 text-blue-900 font-medium  duration-1000'>upgrading skills</button>
          </div>
         </div>
         <div className='w-2/4 hover:shadow-2xl duration-1000 hover:shadow-black rounded-3xl'> 
        
        <img src={myimage}  alt="" className='rounded-3xl border border-black'/>
         </div>
       </div>
       <div className='flex  gap-4  overflow-hidden'>
        <div className='grid px-10 bg-slate-400   rounded-2xl  hover:shadow-slate-900 duration-1000 headingFont text-gray-800'>
          
          <h1 className='text-3xl  '> the most recent word with</h1>
          <h1 className='font-thin'>INDUS UNIVERSITY</h1>

        </div>
        <CollectionBtn></CollectionBtn>
         
       
        </div>
       
     </div>
    
    </div>
    </>
  )
}

export default Home