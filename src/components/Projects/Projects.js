import {FaReact,FaNode} from "react-icons/fa"
import {SiCss3,SiHtml5} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"
import {TbBrandNextjs} from "react-icons/tb"

import {
  SiMongodb,
  SiRedux,
  SiExpress,
  SiPrisma,
  SiVercel,
  SiJquery,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiGit,
  SiTypescript,
  SiKubernetes,
  SiAmazonaws,
  SiDocker
  
} from "react-icons/si";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//import assets
import Rpreview1 from '../assets/Resort-p1.jpg'
import Rpreview2 from '../assets/Resort-p2.jpg'
import Rpreview3 from '../assets/Resort-p3.jpg'

import Tpreview1 from '../assets/todo-p1.jpeg'
import Tpreview2 from '../assets/todo-p2.jpeg'
import Tpreview3 from '../assets/todo-p3.jpeg'

import Epreview1 from '../assets/exercise-p1.jpg'
import Epreview2 from '../assets/exercise-p2.jpg'
import Epreview3 from '../assets/exercise-p3.jpg'



import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'


function Projects()
{
  


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title about_project' >Projects</h2>

{/* <-------------------------------------------------1 start-------------------------------------------> */}

    <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
         <SplideSlide>
           <img src={"/projects/banner.png"} alt="Image 2"/>
           </SplideSlide>

            <SplideSlide>
             <img src={"/projects/rbteausahome.png"} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={"/projects/chat.png"} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={"/projects/drinks.png"} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={"/projects/locations.png"} alt="Image 2"/>
           </SplideSlide>

           

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">
          R&B TEAUSA 
        </h3>

        <p className='project__description'>
        RBteausa, a renowned tea company with over <b> 1500  franchises </b> across the globe , approached us with a unique challenge Their existing website lacked essential features for updating menus, adding new locations to the map, and establishing effective communication channels between the admin and franchises. In response, we crafted a comprehensive web application with a host of user-friendly features
       </p>
       

   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
            <SiHtml5 size={40} />
             <IoLogoJavascript size={40} />
            <SiCss3 size={40}/>
            <FaReact size={50}/>
          </li>
      
        </ul>


   
   


      <div id='b'>
       <a href="https://rbteausa.com/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


    
     </div>

  
  </div> 


  </div>

{/* <-------------------------------------------------1 end-------------------------------------------> */}




{/* <-------------------------------------------------2 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={"/projects/xvisionhome.png"} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={"/projects/xproducts.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/xcard.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/xcart.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/xorder.png"} alt="Image 2"/>
           </SplideSlide>
        </Splide>
</div>

<div>

  <h3 className="about_project">X-ONE VISION</h3>

  <p className='project__description'>
  X-One.Vision is a leading UK-based business card company dedicated to providing high-quality printing solutions for professionals and businesses alike. As a proud contributor to their full-stack website, I played a key role in enhancing the user experience by implementing essential features such as Stripe checkout and cart functionalities, along with custom email logic.
  
    </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiTailwindcss size={40}/>
      <SiPrisma size={40}/>
      <FaNode size={40}/>
      <TbBrandNextjs size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://x-one.vision/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>    
     </div>


</div> 


</div>

{/* <-------------------------------------------------2 end-------------------------------------------> */}



{/* <-------------------------------------------------3 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={"/projects/gameHome.png"} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={"/projects/gamePartner.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/gameVideo.png"} alt="Image 2"/>
           </SplideSlide>

        </Splide>
</div>

<div>

  <h3 className="about_project">Siege Builders - Clash of Clans Portfolio Site </h3>

  <p className='project__description'>
  For the gaming company Siege Builders, I crafted a sleek portfolio website seamlessly aligned with the theme of their flagship game, Clash of Clans. The design encapsulates the essence of the game, creating a visually immersive experience for visitors. This concise and dynamic website serves as a perfect showcase for Siege Builders' gaming prowess.  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://dancing-babka-f6e2a6.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


    
     </div>


</div> 


</div>

{/* <-------------------------------------------------3 end-------------------------------------------> */}



<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={"/projects/bookingHome.png"} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={"/projects/bookingAbout.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/bookingDates.png"} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={"/projects/bookingOffer.png"} alt="Image 2"/>
           </SplideSlide>




        </Splide>
</div>

<div>

  <h3 className="about_project">Agriturismo Santommaso website for bookings using Guesty API  </h3>

  <p className='project__description'>
  Agriturismo San Tommaso, an Italian resort booking company, faced client dissatisfaction due to the lack of a platform showcasing their offerings To remedy this, we created a website using the Guesty API, offering the following key features:
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://booking.agriturismo-santommaso.com/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


    
     </div>


</div> 


</div>






{/* -------------------------------------- 4th start -------------------------------------- */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={"/projects/hpvsHome.png"} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={"/projects/hpvsChoose.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/hpvsDashboard.png"} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={"/projects/hpvsabout.png"} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={"/projects/hpvswhatwedo.png"} alt="Image 2"/>
           </SplideSlide>






        </Splide>
</div>

<div>

  <h3 className="about_project">HPVS Cargo logistic website </h3>

  <p className='project__description'>
  HPVS Cargo, a leading logistics company, required a website that would effectively communicate their services to potential clients. In response, we crafted a dynamic and visually appealing website that showcases HPVS Cargo's services and expertise. The website features a user-friendly design, making it easy for visitors to navigate and learn more about HPVS Cargo's offerings.

  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://hpvs.vercel.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


    
     </div>


</div> 


</div>





{/* -------------------------------------- 4th end -------------------------------------- */}




{/* -------------------------------------- 5th start -------------------------------------- */}


<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={"/projects/toolHome.png"} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={"/projects/toolCal.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/toolChart.png"} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={"/projects/toolChart2.png"} alt="Image 2"/>
           </SplideSlide>






        </Splide>
</div>

<div>

  <h3 className="about_project">Trakha Budget Calculator Tool  </h3>

  <p className='project__description'>
  Trakha, a leading financial services company, required a budget calculator tool that would help their clients manage their finances more effectively. In response, we developed a comprehensive budget calculator tool that enables users to input their income and expenses, calculate their budget, and track their spending. The tool features a user-friendly design, making it easy for clients to manage their finances effectively.

  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://trakha-app.vercel.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


    
     </div>


</div> 


</div>

{/* -------------------------------------- 5th end  -------------------------------------- */}



{/* -------------------------------------- 6th start  -------------------------------------- */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={"/projects/dental_1.png"} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={"/projects/dental_2.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/dental_3.png"} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={"/projects/dental_4.png"} alt="Image 2"/>
           </SplideSlide>






        </Splide>
</div>

<div>

  <h3 className="about_project">Dental Strivers LMS  </h3>

  <p className='project__description'>
  Dental Strivers is a leading dental education company that offers online courses for dental professionals. In response to their need for a comprehensive learning management system (LMS), we developed a dynamic and user-friendly platform that enables students to access course materials, complete assignments, and track their progress. The LMS features a sleek and intuitive design, making it easy for students to navigate and engage with course content.

  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://dentalstrivers.ca/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


    
     </div>


</div> 


</div>



{/* -------------------------------------- 6th end  -------------------------------------- */}




{/*---------------------------------- 7th start ------------------------------------------- */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={"/projects/data_1.png"} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={"/projects/data_2.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/data_3.png"} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={"/projects/data_4.png"} alt="Image 2"/>
           </SplideSlide>






        </Splide>
</div>

<div>

  <h3 className="about_project">Data Analyze Site  </h3>

  <p className='project__description'>
  A site for stores to sells their products and store them more efficiently using the data bundling & data forecasting .

They will upload csv according a specific standard to use features of data bundling and product forecasting
In result there will be table for data modeling and data forecasting about products with charts
It will help stores to take right decisions and store their products efficiently

  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://data-analyze-site.vercel.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


    
     </div>


</div> 


</div>



{/*---------------------------------- 7th end ------------------------------------------- */}



{/*---------------------------------- 8th start ------------------------------------------- */}


<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={"/projects/map_1.png"} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={"/projects/map_2.png"} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={"/projects/map_3.png"} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={"/projects/map_4.png"} alt="Image 2"/>
           </SplideSlide>






        </Splide>
</div>

<div>

  <h3 className="about_project">Map for Costco Store  </h3>

  <p className='project__description'>
  The company was having trouble because their delivery team took too long to find store locations. To fix this, I created a platform. Now, delivery people can easily search for locations, and admins can manage them effortlessly. This makes the whole process smoother and faster for everyone involved.
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://map-eosin.vercel.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


    
     </div>


</div> 


</div>


{/*---------------------------------- 8th end ------------------------------------------- */}
    </section>
  )
}

export default Projects
