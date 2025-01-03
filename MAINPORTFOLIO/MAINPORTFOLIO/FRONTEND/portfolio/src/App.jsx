import { lazy, Suspense, useContext, useEffect, useState } from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Project from './pages/project.jsx'
import Contact from './pages/contact.jsx'
import {Routes,Route} from 'react-router-dom'
import Nav from './component/nav.jsx'
import { ToastContainer, toast } from 'react-toastify';

import { screen } from './context/screen.jsx'



function App() {
  const {result}=useContext(screen);
  useEffect(()=>
{ 
   if(result?.name){
    toast.success(`Wellcome Dear, ${result?.name} Request Sended`, {
      position: toast?.POSITION?.TOP_RIGHT,
      autoClose: 5000,
    });
   }
    
},[result]);
  const [count, setCount] = useState(0)
    const LazyComponent=lazy(()=>import('./pages/project.jsx'));
    
  return (
    <>
    <ToastContainer></ToastContainer>
    <Nav></Nav>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/project"} element={<Suspense fallback={<div>Loading Project...</div>}>
        <LazyComponent />
      </Suspense>} />
      <Route path={"/contact"} element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
