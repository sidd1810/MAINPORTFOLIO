import React from 'react'
import Form from '../component/form/form'

function Contact() {
  return(
    <>
   
     <div className='w-full grid sm:flex p-3 gap-5 '>
     <div className='sm:w-2/4   grid  w-full mx-auto gap-4 p-10 '>
      <div className='sm:text-7xl text-4xl  font-bold'>
  Let's chat.
      </div>
      <div className='sm:text-6xl text-4xl  font-bold'>
  Tell me about your self.
      </div>
      <div className=' font-mono italic text-pretty'>
       <h1 className='text-2xl '>lets create something together</h1>
      </div>
      <div className='flex gap-2'>
      <div className=''>
      <i class="bi bi-envelope text-4xl"></i>
      </div>
      <div className='' >
      <h1>mail me at</h1>
      <a href='https://www.google.com/search?q=gmail+login&sca_esv=c53d5fb6c0eb33ca&rlz=1C1YTUH_enOM1026OM1026&sxsrf=ADLYWILM7-Ea64j9a1OMCBZlmbxbqI5SZQ%3A1735824173'>siddhu.vaghela2001@gmail.com</a>
      </div>
      </div>
      </div>
     <div className='sm:w-2/6 mt-5'>
       <Form></Form>
       
     </div>
    
    </div>
    </>
  )
}

export default Contact