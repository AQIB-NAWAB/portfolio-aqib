import "./Home.css"
import Typewriter from "typewriter-effect";
import { Email, Phone } from '@material-ui/icons'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Home()
{

    return(

        <section className="section home center">
         <h1>
          Hi, I am <span className='about__name '>Muhammad Aqib</span>
        </h1>
    
      <h2 className="typer"> 
        <Typewriter options={{strings:["A Full Stack Software Developer", "A Problem Solver","Curious to learn new things"],
        autoStart:true,loop:true,deleteSpeed:50}}/>
      </h2> 


        <p id="des">Adaptable and responsible web developer capable of problem solving , writing production ready code, and working in a fast-paced environment. I have experience working with
         React.Js on the front-end and NodeJs, Express.Js, and MongoDB on the back-end.</p>
  
 
       <section id="social">
         <a href="https://github.com/AQIB-NAWAB" target="_blank" aria-label='github' className='link link--icon'> <GitHubIcon /> </a>
         
         <a href="https://www.linkedin.com/in/aqib-nawab-66723b252/" target="_blank" aria-label='linkedin' className='link link--icon'> <LinkedInIcon /> </a>
         
         <a href='mailto:aqibnawab1100@gmail.com' aria-label="email" className='link link--icon'> <Email/> </a>

         <a href='tel:+923084556535' aria-label="phone" className='link link--icon'> <Phone/> </a>
    
      </section>
     
   
         <a href="https://drive.google.com/file/d/1u7xC8hbdPrYhvwI2Ky_ipp7LWKZZ_VOj/view?usp=sharing" target="_blank" id="resumeButton">
            <span type='button' className='btn btn--outline'> Download Resume </span>
          </a>
   
    </section>)
}

export default Home