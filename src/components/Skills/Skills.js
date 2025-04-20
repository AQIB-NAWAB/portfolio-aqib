import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
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
  SiDocker,
  SiFirebase,
  SiSocketdotio,
  SiPostman,
  SiSwagger,
  SiGraphql,
  SiNginx,
  SiSupabase,
} from "react-icons/si";

import "./Skills.css";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={80} id="color" /> },
  { name: "CSS3", icon: <FaCss3Alt size={80} id="color" /> },
  { name: "JavaScript", icon: <TbBrandJavascript size={80} id="color" /> },
  { name: "TypeScript", icon: <SiTypescript size={80} id="color" /> },
  { name: "React", icon: <FaReact size={80} id="color" /> },
  { name: "Next.js", icon: <SiNextdotjs size={80} id="color" /> },
  { name: "Redux", icon: <SiRedux size={80} id="color" /> },
  { name: "jQuery", icon: <SiJquery size={80} id="color" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={80} id="color" /> },
  { name: "Node.js", icon: <FaNodeJs size={80} id="color" /> },
  { name: "Express.js", icon: <SiExpress size={80} id="color" /> },
  { name: "MongoDB", icon: <SiMongodb size={80} id="color" /> },
  { name: "MySQL", icon: <SiMysql size={80} id="color" /> },
  { name: "Prisma", icon: <SiPrisma size={80} id="color" /> },
  { name: "Firebase", icon: <SiFirebase size={80} id="color" /> },
  { name: "Socket.IO", icon: <SiSocketdotio size={80} id="color" /> },
  { name: "Git", icon: <SiGit size={80} id="color" /> },
  { name: "GitHub", icon: <FaGithub size={80} id="color" /> },
  { name: "Vercel", icon: <SiVercel size={80} id="color" /> },
  { name: "Docker", icon: <SiDocker size={80} id="color" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={80} id="color" /> },
  { name: "AWS", icon: <SiAmazonaws size={80} id="color" /> },
  { name: "Postman", icon: <SiPostman size={80} id="color" /> },
  { name: "Swagger", icon: <SiSwagger size={80} id="color" /> },
  { name: "GraphQL", icon: <SiGraphql size={80} id="color" /> },
  { name: "NGINX", icon: <SiNginx size={80} id="color" /> },
  { name: "Supabase", icon: <SiSupabase size={80} id="color" /> },
  
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title about_skills">Skills</h2>
      <div id="container" className="skills__list">
        {skills.map((skill, index) => (
          <li key={index} className="skills__list-item btn btn--plain">
            {skill.icon}
            <h5>{skill.name}</h5>
          </li>
        ))}
      </div>
    </section>
  );
}

export default Skills;
