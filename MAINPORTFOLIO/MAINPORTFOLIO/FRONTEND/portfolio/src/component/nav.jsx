import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import RedirectBtn from './button/RedirectBtn'
import GoToBtn from './button/GoToBtn'
import pic from '../assets/imges/suv.png'
import { screen } from '../context/screen'
import SimpleRedirect from './button/SimpleRedirect'




function Nav(){
  const naviGate=useNavigate()
  const {sm}=useContext(screen)
  
    return(
        <nav className='w-full  flex p-5 rounded-3xl border justify-between'>   
        <div className=' my-auto '>
         <img src={pic} alt="" className='sm:w-96 w-32 object-cover'/>
        </div>
        <div className='flex gap-5'>
      {!sm &&   
      <>
       <RedirectBtn title="HOME" semiTitle="Home Page" 
           path={"/"}
         ></RedirectBtn>
          <RedirectBtn title="ABOUT" semiTitle="About ME" 
          path={"/about"}
         ></RedirectBtn>
          <RedirectBtn title="CONTACT" semiTitle="Reach Me" 
           path={"/contact"}
         ></RedirectBtn>
           <RedirectBtn title="PROJECT" semiTitle="MY WORK" 
           path={"/project"}
         ></RedirectBtn>
         </>}
         {sm &&
         <>
         <SimpleRedirect title='Home' semiTitle='Home Page' path='/'></SimpleRedirect>
         <SimpleRedirect title='About' semiTitle='My Self' path='/about'></SimpleRedirect>
         <SimpleRedirect title='Projets' semiTitle='Mine Works' path='/project'></SimpleRedirect>
         <SimpleRedirect title='Contact' semiTitle='Hire Me' path='/contact'></SimpleRedirect>

         </>

         }
        
        
        </div>
       

      { !sm && 
        <div className='flex float-end'>
        <GoToBtn title="book a call" path="/contact"></GoToBtn>
      </div>
      }
       </nav>
    )
}
export default Nav