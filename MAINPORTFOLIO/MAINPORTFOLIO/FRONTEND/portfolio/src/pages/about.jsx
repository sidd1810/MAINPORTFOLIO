import {} from 'react'
import Nav from '../component/nav'
import lala from '../assets/imges/lala.png'
import { Link } from 'react-router-dom'


function About(){
    return(
     <>

      <div className='w-full sm:flex  ' >
       <div className='sm:w-2/3 w-2/2'>
        <img src={lala} alt=""   className='mx-auto lg:w-2/6 lg:mt-auto  sm:w-2/6'/>
       </div>
       <div className='sm:w-2/4 p-10'>
       <div className='grid gap-10'>
        <div>
         <h1 className='text-4xl font-serif'>Hello,I'm Siddharth Vaghela</h1>
         <h2 className='text-2xl'>Web Developer</h2>
         </div>
         <div className='italic'>
         <p>Hi, I'm Siddharth Vaghela, a final-year B.Tech Computer Engineering student, graduating in 2025. Passionate about technology, development, and problem-solving, I thrive on learning new skills and tackling challenges. With a growing interest in marketing and social media, I aim to bridge creativity and tech to drive impactful solutions."</p>
         </div>
         <div className='italic'>
            <p>My hobbies revolve around exploring new skills, solving challenging problems, and staying updated with the latest technological trends."</p>
         </div>
         <div>
        <button className='border rounded-3xl bg-black text-white px-3  font-thin'>GET IN TOUCH</button>
       </div>
       </div>
       
       <div className='gap-1 grid mt-4'>
      
        <h1 className='font-semibold'>contaxt@website.com</h1>
        <div className='flex gap-10 '>
        <i class="bi bi-facebook text-4xl"></i>
        <i class="bi bi-instagram text-4xl"></i>
        <i class="bi bi-twitter text-4xl"></i>
        </div>
       </div>
      
       </div>
      </div>

     </>
    )
}
export default About