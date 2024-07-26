import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
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
import Githubcalendar from "react-github-calendar";

import "./Skills.css";

function Skills() {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title about_skills">Skills</h2>

      <div id="container" className="skills__list">
        <li className="skills__list-item btn btn--plain">
          <FaHtml5 size={80} id="color" />
          <h5> HTML5</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <FaCss3Alt size={80} id="color" />
          <h5> CSS3</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <SiTailwindcss size={80} id="color" />
          <h5>Tailwind</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <TbBrandJavascript size={80} id="color" />
          <h5> JavaScript</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <SiTypescript size={80} id="color" />
          <h5> TypeScript</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <FaReact size={80} id="color" />
          <h5> React</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <SiNextdotjs size={80} id="color" />
          <h5> Next</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <SiMongodb size={80} id="color" />
          <h5>MongoDB</h5>
        </li>
        <li className="skills__list-item btn btn--plain">
          <SiPrisma size={80} id="color" />
          <h5>Prisma</h5>
        </li>



        <li className="skills__list-item btn btn--plain">
          <SiMysql size={80} id="color" />
          <h5>MySQL</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <SiExpress size={80} id="color" />
          <h5>Express</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <FaNodeJs size={80} id="color" />
          <h5>NodeJs</h5>
        </li>

     

        <li className="skills__list-item btn btn--plain">
          <SiGit size={80} id="color" />
          <h5>Git</h5>
        </li>
        <li className="skills__list-item btn btn--plain">
          <FaGithub size={80} id="color" />
          <h5>GitHub</h5>
        </li>

       

        <li className="skills__list-item btn btn--plain">
          <SiVercel size={80} id="color" />
          <h5>Vercel</h5>
        </li>

        <li className="skills__list-item btn btn--plain">
          <SiDocker size={80} id="color" />
          <h5>Docker</h5>
        </li>

        <li className="skills_list-item btn btn--plain">
          <SiKubernetes size={80} id="color" />
          <h5>Kubernetes</h5>
        </li>
        <li className="skills_list-item btn btn--plain">
          <SiAmazonaws size={80} id="color" />
          <h5>AWS</h5>
        </li>


      </div>

      <div id="gitstatus">
        <h2 className="section__title">
          Days I <span className="about_skills"> Coded</span>
        </h2>
        <Githubcalendar
          username="AQIB-NAWAB"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          color="#2978b5"
          year={2024}
        />
      </div>
    </section>
  );
}

export default Skills;
