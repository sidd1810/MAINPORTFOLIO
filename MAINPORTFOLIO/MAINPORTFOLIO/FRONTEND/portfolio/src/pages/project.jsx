import React from 'react'
import Nav from '../component/nav'
import code1 from '../assets/imges/nike.png'
import code2 from '../assets/imges/prtflio.jpeg'
import code3 from '../assets/imges/movie.jpeg'
import code4 from '../assets/imges/spotify.jpeg'
import code5 from '../assets/imges/form.jpeg'
import Github from '../component/button/github'
import ImgComponant from '../component/Img Component/ImgComponant'
function Project(){
  
  return(
    <>
    
     <div className='w-full border border-black justify-center items-center  flex flex-wrap gap-5 p-10'>
  <ImgComponant img={code1} title='Nike' desc='The nike ui and use can select the size.The new red and white theme ui base react project.' link="https://github.com/sidd1810/PUMA" ></ImgComponant>
  <ImgComponant img={code2} title='Portfolio1' desc='My first tried portfolio project with database' link="https://github.com/sidd1810/PORTFOLIO1" ></ImgComponant>
  <ImgComponant img={code3} title='Movieticket' desc='the movieticket project to book and explore the movies with authetication' link="https://github.com/sidd1810/movieticket"></ImgComponant>
  <ImgComponant img={code4} title='Spotify' desc='design the spotifyclone with the basic html and css' link="https://github.com/sidd1810/Spotify-Clone"></ImgComponant>
  <ImgComponant img={code5} title='Loginform' desc='designed first basic login with html and css'link="https://github.com/sidd1810/Login_Form" ></ImgComponant>
  
 
   
     </div>
    </>
  )
}

export default Project