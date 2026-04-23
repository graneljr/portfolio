import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import me from "./assets/image.png";
import meNight from "./assets/night.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Moon,
  SunMedium,
  Mail,
  Book,
} from "lucide-react";
import { motion } from "motion/react";
function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const frontend = ["JavaScript", "React", "Tailwind", "Shadcn ui"];
  const backend = ["Node.js", "Express.js", "Mongodb", "REST", "MySQL"];
  const dev_tools = ["PostMan", "Git", "Github", "VS CODE"];

  const milestone = [
    {
      title: "Upcoming 3rd year",
      year: "Present",
      desc: "Upskilling while waiting for the school year",
    },
    {
      title: "Assigned as Project Manager & Full Stack Developer",
      year: 2026,
      desc: "Web and Mobile base Booking Management more advance than before for a resort for 2nd year, 2nd semester finals",
    },
    {
      title: "Assigned as Project Manager & Full Stack Developer",
      year: 2025,
      desc: "Web base Online Reservation System for a resort for 2nd year, 1st semester finals",
    },
    {
      title: "Assigned as Project Manager & Developer",
      year: 2025,
      desc: "Simple bank simulator GUI base Java for 1st year, 2nd semester finals",
    },
    {
      title: "Assigned as Project Manager & Developer",
      year: 2024,
      desc: "Simple Library Management terminal base python for 1st year, 1st semester finals",
    },
    {
      title: "Entering College",
      year: 2024,
      desc: "Enrolled as BSIT Student at Phinma Araullo University",
    },
    {
      title: "Start to learn programming",
      year: 2024,
      desc: "Learning by doing",
    },
  ];
  const recent_projects = [
    {
      title: "Booking Management for Jenriva Resort Web Base",
      desc: "Helps managing reservations with advance data analytics, email notifications and helps accessible booking for customers",
      tools: [
        "JavaScript",
        "React",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Github",
        "Git",
        "Shadcn ui",
        "REST",
        "MVC",
        "PostMan",
      ],
    },
    {
      title: "Online Booking for Jenariva Resort Mobile Base",
      desc: "Integrated of the web version for customer purpose",
      tools: ["Java", "Kotlin", "Github", "Git", "PostMan"],
    },
    {
      title: "Online Reservation System for Casa Pricilla Resort",
      desc: "Helps managing reservations and accessible booking",
      tools: ["PHP", "JavaScript", "MySQL", "CSS", "HTML", "PostMan"],
    },
  ];

  const socials = [
    {
      name: "Facebook",
      icon: faFacebook,
      link: "",
    },
    {
      name: "Github",
      icon: faGithub,
      link: "",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      link: "",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      link: "",
    },
  ];
  return (
    <div
      className={`w-full flex items-center dark:bg-black dark:text-white pt-10 justify-center ${dark ? "dark" : ""} transition-all duration-300 ease-in-out`}
    >
      <motion.div 
      initial={{opacity:0, translateY: 20}}
      animate={{opacity:1, translateY: 0}}
      transition={{duration:1, ease: "linear"}}
      className="w-[45%] flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <div className="relative w-[20%] aspect-square">
            <img
              src={me}
              className={`absolute inset-0 w-full h-full object-cover  transition-opacity duration-700 ${
                dark ? "opacity-0" : "opacity-100"
              }`}
            />

            <img
              src={meNight}
              className={`absolute inset-0 w-full h-full object-cover  transition-opacity duration-700 ${
                dark ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="w-full flex flex-col gap-0.5">
              <span className="w-full flex items-center justify-between">
                <h1 className="text-2xl font-bold">Armando Granel Jr</h1>
                <button
                  onClick={() => setDark(!dark)}
                  className={`relative w-16 h-8 p-0.5 border transition-colors duration-400 outline-1 outline-transparent focus:outline-blue-500 ${
                    dark
                      ? "bg-gray-700 border-gray-600"
                      : "bg-gray-200 border-gray-300"
                  }`}
                >
                  <div
                    className="absolute top-1 left-1 w-6 h-6 bg-white flex text-muted items-center justify-center shadow-sm transition-all duration-400"
                    style={{
                      transform: dark ? "translateX(32px)" : "translateX(0px)",
                    }}
                  >
                    <span className="text-sm">
                      {dark ? <Moon /> : <SunMedium />}
                    </span>
                  </div>
                </button>
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <MapPin size={15} /> <h1>Rizal Nueva Ecija, Philippines</h1>
              </span>
            </div>
            <h1 className="font-semibold text-lg">Full Stack Developer</h1>
            <div className="w-full flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 text-sm flex items-center gap-1 font-semibold bg-black text-white dark:bg-white dark:text-black ">
                  <Calendar size={15} /> Schedule a Call{" "}
                  <ArrowRight className="ml-2" size={15} />
                </span>

                <span className="px-4 py-2 text-sm flex items-center shadow gap-1 font-semibold  ">
                  <Mail size={15} /> Send Email
                </span>
              </div>
              <div className="flex flex-1 px-4 py-2 justify-between shadow items-center">
                <span className=" text-sm flex items-center gap-1 font-semibold  ">
                  <Book size={15} /> Read my Blog
                </span>
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col px-5 py-6 shadow-sm gap-3  dark:bg-gray-200/10">
          <h1 className="text-lg font-bold">About</h1>
          <p>
            I'm a passionate full-stack developer with expertise in building
            modern web applications using the MERN stack. I specialize in
            creating scalable, user-friendly solutions that solve real-world
            problems.
          </p>
          <p>
            With a strong foundation in both front-end and back-end
            technologies, I focus on writing clean, maintainable code and
            delivering exceptional user experiences. I'm constantly learning and
            staying up-to-date with the latest industry trends and best
            practices.
          </p>
          <p>
            As an upcoming third-year BSIT student, I’m still growing in my
            field while helping my classmates by sharing what I know and guiding
            them through topics they find difficult. Teaching others also helps
            me understand things better and supports a more collaborative
            learning environment.
          </p>
        </div>
        <div className="w-full flex gap-4">
          <div className="flex  flex-col gap-2 w-[60%]">
            <div className=" w-full flex flex-col px-5 py-6 shadow-sm gap-5 dark:bg-gray-200/10 ">
              <span className="w-full flex items-center justify-between">
                <h1 className="text-md font-bold">Tech Stack</h1>
                <span className="flex items-center gap-2 text-xs font-semibold">
                  View All <ArrowRight size={15} />
                </span>
              </span>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-bold">Frontend</h1>
                  <div className="flex gap-3 pl-2">
                    {frontend.map((item) => (
                      <span key={item} className="py-1 px-2 shadow">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-bold">Backend</h1>
                  <div className="flex gap-3 pl-2">
                    {backend.map((item) => (
                      <span key={item} className="py-1 px-2 shadow">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-bold">Dev Tools</h1>
                  <div className="flex gap-3 pl-2">
                    {dev_tools.map((item) => (
                      <span key={item} className="py-1 px-2 shadow">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full flex flex-col px-5 py-6 shadow-sm gap-5 dark:bg-gray-200/10 ">
              <span className="w-full flex items-center justify-between">
                <h1 className="text-md font-bold">Recent Project</h1>
                <span className="flex items-center gap-2 text-xs font-semibold">
                  View All <ArrowRight size={15} />
                </span>
              </span>
              <div className="w-full flex flex-col gap-2">
                {recent_projects.map((item, index) => (
                  <div key={index} className="shadow p-2 flex flex-col gap-2">
                    <h1 className="font-semibold text-sm">{item.title}</h1>
                    <p className="text-sm text-muted dark:text-white">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, index) => (
                        <span
                          className="py-1 px-3 shadow dark:bg-black"
                          key={index}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-fit flex-1 flex flex-col gap-3 p-3 shadow-sm hover:-translate-y-1  transition-all ease-in-out duration-200 dark:bg-gray-200/10">
            <h1 className="text-md font-bold">Milestone</h1>
            <div className="flex flex-col ">
              {milestone.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 group transition-all duration-300 ease-in-out"
                >
                  <div className="flex flex-col items-center">
                    {index === 0 ? (
                      <span className="w-3 h-3 border bg-black dark:bg-white " />
                    ) : (
                      <span className="w-3 h-3 border group-hover:bg-black dark:group-hover:bg-white border-slate-300 " />
                    )}

                    {index !== milestone.length - 1 && (
                      <span className="w-0.5 flex-1 bg-slate-300" />
                    )}
                  </div>
                  <div className="flex w-full flex-col gap-2 pb-3 -mt-1">
                    <span className="flex items-center w-full justify-between">
                      <h1 className="text-xs font-bold w-[80%]">
                        {item.title}
                      </h1>
                      <p className="text-sm">{item.year}</p>
                    </span>
                    <p className="text-sm text-muted dark:text-white">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-5 shadow dark:bg-gray-200/10 flex gap-3 ">
          <div className="w-1/2 flex flex-col gap-2">
            <h1 className="text-md font-bold">Social Links</h1>
            {socials.map((social, _) => (
              <a
                href={social.link}
                className="shadow py-2 px-3 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={social.icon} /> {social.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
