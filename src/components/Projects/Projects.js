// Imports
import { FaReact, FaNode } from "react-icons/fa";
import { SiCss3, SiHtml5, SiMongodb, SiPrisma, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import '../ProjectContainer/ProjectContainer.css';
import './Projects.css';

const projects = [
   {
    title: "QuickStart AI",
    description: `QuickStart AI is a platform that allow users to create and manage their own AI chatbots. The platform is designed to be user-friendly, allowing users to easily create and customize their chatbots without any coding knowledge.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveLink: "https://quickstartai.com/",
    images: [
      "/projects/q1.png",
      "/projects/q2.png",
      "/projects/q3.png",
      "/projects/q4.png",
      "/projects/q5.png",
      "/projects/q6.png"
    ]
  },
  {
    title: "R&B TEAUSA",
    description: `RBteausa, a renowned tea company with over 1500 franchises across the globe, approached us with a unique challenge. Their existing website lacked essential features for updating menus, adding new locations to the map, and establishing effective communication channels between the admin and franchises. In response, we crafted a comprehensive web application with a host of user-friendly features.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: FaReact },
    ],
    liveLink: "https://rbteausa.com/",
    images: [
      "/projects/banner.png",
      "/projects/rbteausahome.png",
      "/projects/chat.png",
      "/projects/drinks.png",
      "/projects/locations.png",
    ],
  },
  {
    title: "X-ONE VISION",
    description: `X-One.Vision is a leading UK-based business card company dedicated to providing high-quality printing solutions for professionals and businesses alike. As a proud contributor to their full-stack website, I played a key role in enhancing the user experience by implementing essential features such as Stripe checkout and cart functionalities, along with custom email logic.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Prisma", icon: SiPrisma },
      { name: "Node.js", icon: FaNode },
      { name: "Next.js", icon: TbBrandNextjs },
    ],
    liveLink: "https://x-one.vision/",
    images: [
      "/projects/xvisionhome.png",
      "/projects/xproducts.png",
      "/projects/xcard.png",
      "/projects/xcart.png",
      "/projects/xorder.png",
    ],
  },
  {
    title: "Siege Builders - Clash of Clans Portfolio Site",
    description: `For the gaming company Siege Builders, I crafted a sleek portfolio website seamlessly aligned with the theme of their flagship game, Clash of Clans. The design encapsulates the essence of the game, creating a visually immersive experience for visitors. This concise and dynamic website serves as a perfect showcase for Siege Builders' gaming prowess.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveLink: "https://dancing-babka-f6e2a6.netlify.app/",
    images: [
      "/projects/gameHome.png",
      "/projects/gamePartner.png",
      "/projects/gameVideo.png",
    ],
  },
  {
    title: "Agriturismo Santommaso",
    description: `Agriturismo San Tommaso, an Italian resort booking company, faced client dissatisfaction due to the lack of a platform showcasing their offerings. To remedy this, we created a website using the Guesty API, offering customer-friendly booking flows and dynamic availability calendars.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveLink: "https://booking.agriturismo-santommaso.com/",
    images: [
      "/projects/bookingHome.png",
      "/projects/bookingAbout.png",
      "/projects/bookingDates.png",
      "/projects/bookingOffer.png",
    ],
  },
  {
    title: "HPVS Cargo logistic website",
    description: `HPVS Cargo, a leading logistics company, required a website that would effectively communicate their services to potential clients. In response, we crafted a dynamic and visually appealing website that showcases HPVS Cargo's services and expertise.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveLink: "https://hpvs.vercel.app/",
    images: [
      "/projects/hpvsHome.png",
      "/projects/hpvsChoose.png",
      "/projects/hpvsDashboard.png",
      "/projects/hpvsabout.png",
      "/projects/hpvswhatwedo.png",
    ],
  },
  {
    title: "Trakha Budget Calculator Tool",
    description: `Trakha, a leading financial services company, required a budget calculator tool that would help their clients manage their finances more effectively. In response, we developed a comprehensive budget calculator tool that enables users to input their income and expenses, calculate their budget, and track their spending.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveLink: "https://trakha-app.vercel.app/",
    images: [
      "/projects/toolHome.png",
      "/projects/toolCal.png",
      "/projects/toolChart.png",
      "/projects/toolChart2.png",
    ],
  },
  {
    title: "Dental Strivers LMS",
    description: `Dental Strivers is a leading dental education company that offers online courses for dental professionals. We developed a dynamic and user-friendly learning management system (LMS) that enables students to access course materials, complete assignments, and track their progress.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveLink: "https://dentalstrivers.ca/",
    images: [
      "/projects/dental_1.png",
      "/projects/dental_2.png",
      "/projects/dental_3.png",
      "/projects/dental_4.png",
    ],
  },
  {
    title: "Data Analyze Site",
    description: `A site for stores to sell their products and store them more efficiently using data bundling & forecasting. Users upload CSVs to generate data modeling tables and forecasting charts, helping stores make better inventory decisions.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveLink: "https://data-analyze-site.vercel.app/",
    images: [
      "/projects/data_1.png",
      "/projects/data_2.png",
      "/projects/data_3.png",
      "/projects/data_4.png",
    ],
  },
  {
    title: "Map for Costco Store",
    description: `The company was having trouble because their delivery team took too long to find store locations. To fix this, I created a platform where delivery personnel can easily search for locations and admins can manage them effortlessly.`,
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveLink: "https://map-eosin.vercel.app/",
    images: [
      "/projects/map_1.png",
      "/projects/map_2.png",
      "/projects/map_3.png",
      "/projects/map_4.png",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title about_project">Projects</h2>

      {projects.map((project, idx) => (
        <div className="project" key={idx}>
          <div>
            <Splide options={{ rewind: true, gap: '1rem', heightRatio: 0.53 }} aria-label={`Project ${project.title}`}> 
              {project.images.map((src, i) => (
                <SplideSlide key={i}>
                  <img src={src} alt={`${project.title} slide ${i + 1}`} />
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div>
            <h3 className="about_project">{project.title}</h3>
            <p className="project__description">{project.description}</p>

            <ul className="project__stack">
              {project.techStack.map((tech, i) => (
                <li key={i} className="project__stack-item">
                   <tech.icon size={40} />
                </li>
              ))}
            </ul>

            <div id="b">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <span className="btn btn--outline">Watch Live</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
