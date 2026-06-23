import me from "../assets/image.png";
import meNight from "../assets/night.png";
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
  Expand,
  Code2,
  Dot,
  BookOpen,
  Zap,
  Users,
  Coffee,
  Infinity,
} from "lucide-react";
import { recent_projects } from "../utils/recentProjects";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { globalThemeStore } from "../zustand/globalThemeStore";
import { techstack } from "../utils/techStack";
function Home() {
  const dark = globalThemeStore((state) => state.isDarkMode);
  const toggleDarkMode = globalThemeStore((state) => state.toggleDarkMode);
  const navigate = useNavigate();
  const milestone = [
    {
      title: "Upcoming 3rd year",
      year: "Present",
      desc: "Upskilling while waiting for the school year",
    },
    {
      title: "Seminar About How to use AI at PHINMA-AU",
      year: 2026,
      desc: "Explores how LLM's think and how to use it properly",
    },
    {
      title: "Seminar About Linux Kernel at PHINMA-AU",
      year: 2026,
      desc: "Explores different OS on linux kernel and how to use it ",
    },
    {
      title: "Programming Quiz Bee Champion at PHINMA-AU",
      year: 2026,
      desc: "Programming Quiz Bee event",
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
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className="xs:w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[50%] flex flex-col gap-5"
    >
      <div className="w-full flex gap-5  border border-gray-200 dark:border-white/20 rounded-xl shadow p-5">
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
        <div className="flex flex-1 flex-col gap-3">
          <div className="w-full flex flex-col gap-0.5">
            <span className="w-full flex items-center justify-between">
              <h1 className="text-3xl font-bold">Armando Granel Jr</h1>
              <button
                onClick={toggleDarkMode}
                className={` p-2 rounded-xl border transition-colors duration-400 ${
                  dark ? " border-gray-600" : " border-gray-300"
                }`}
              >
                {dark ? <SunMedium /> : <Moon />}
              </button>
            </span>
            <span className="flex text-sm text-muted-foreground dark:text-gray-200 items-center gap-1 ">
              <MapPin size={15} /> <h1>Rizal Nueva Ecija, Philippines</h1>
            </span>
          </div>
          <span className="px-3 rounded-full py-1 dark:bg-white/10 dark:border-transparent bg-gray-100 self-start border-gray-300 border items-center gap-1 text-xs font-semibold flex ">
            <Zap size={15} className="text-yellow-500" /> FULL STACK DEVELOPER
          </span>
          <div className="w-full mt-auto flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="px-4 rounded-lg py-2 text-sm flex items-center gap-1 font-semibold bg-black text-white dark:bg-white dark:text-black ">
                <Calendar size={15} /> Schedule a Call{" "}
                <ArrowRight className="ml-2" size={15} />
              </span>

              <span className="px-5 border border-slate-100 transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-white/20 dark:border-white/20 rounded-lg py-2 text-sm flex items-center shadow gap-1 font-semibold  ">
                <Mail size={15} /> Send Email
              </span>
            </div>
            <div className="flex gap-2 px-5 border border-slate-100 transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-white/20 dark:border-white/20 rounded-lg py-2 justify-between shadow items-center">
              <span className=" text-sm flex items-center gap-1 font-semibold  ">
                <Book size={15} /> Read my Blog
              </span>
              <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-7 w-full">
        <div className="w-[60%] flex self-start flex-col px-5 py-6 shadow-sm gap-3 border border-gray-200 dark:border-white/20  rounded-xl">
          <h1 className="text-lg font-bold">About</h1>
          <p className="dark:text-white/60">
            I'm a passionate full-stack developer with expertise in building
            modern web applications using the MERN stack. I specialize in
            creating scalable, user-friendly solutions that solve real-world
            problems.
          </p>
          <p className="dark:text-white/60">
            With a strong foundation in both front-end and back-end
            technologies, I focus on writing clean, maintainable code and
            delivering exceptional user experiences. I'm constantly learning and
            staying up-to-date with the latest industry trends and best
            practices.
          </p>
          <p className="dark:text-white/60">
            As an upcoming third-year BSIT student, I’m still growing in my
            field while helping my classmates by sharing what I know and guiding
            them through topics they find difficult. Teaching others also helps
            me understand things better and supports a more collaborative
            learning environment.
          </p>
          <div className="w-full grid grid-cols-4 gap-4">
            <div className="flex items-center flex-col gap-1 py-3 bg-gray-200/70 dark:bg-white/15 dark:text- dark:border-white/30 border border-gray-300 rounded-xl">
              <Code2 size={15} className="text-muted dark:text-white/45 " />
              <h1 className="font-bold text-xl">7+</h1>
              <p className="text-xs w-[70%] text-center text-muted dark:text-white/45 ">
                Projects Built
              </p>
            </div>
            <div className="flex items-center flex-col gap-1 py-3 bg-gray-200/70 dark:bg-white/15 dark:text- dark:border-white/30 border border-gray-300 rounded-xl">
              <Users size={15} className="text-muted dark:text-white/45 " />
              <h1 className="font-bold text-xl">10+</h1>
              <p className="text-xs  w-[70%] text-center text-muted dark:text-white/45 ">
                Classmates Mentored
              </p>
            </div>
            <div className="flex items-center flex-col gap-1 py-3 bg-gray-200/70 dark:bg-white/15 dark:text- dark:border-white/30 border border-gray-300 rounded-xl">
              <Coffee size={15} className="text-muted dark:text-white/45 " />
              <Infinity />
              <p className="text-xs  w-[70%] text-center text-muted dark:text-white/45 ">
                Cups of Coffee
              </p>
            </div>
            <div className="flex items-center flex-col gap-1 py-3 bg-gray-200/70 dark:bg-white/15 dark:text- dark:border-white/30 border border-gray-300 rounded-xl">
              <Code2 size={15} className="text-muted dark:text-white/45 " />
              <h1 className="font-bold text-xl">7+</h1>
              <p className="text-xs w-[70%] text-center text-muted dark:text-white/45 ">
                Projects Built
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 py-6 shadow-sm gap-5 flex flex-col flex-1  border border-gray-200 dark:border-white/20  rounded-xl">
          <div className="flex justify-between items-center ">
            <Expand />
            <span className="px-3 flex py-2  rounded-xl items-center text-xs font-semibold gap-2">
              <Code2 size={16} /> Since 2025
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 pb-2 border-b border-slate-300 dark:border-gray-300">
            <h1 className="text-xs font-semibold text-muted dark:text-white/45">
              FULL STACK DEVELOPER
            </h1>
            <span>
              <h1 className="text-4xl font-bold dark:text-white">Armando</h1>
              <h1 className="text-4xl font-bold dark:text-white">Granel Jr</h1>
            </span>
            <span className="flex items-center text-muted text-sm gap-3 dark:text-white/45">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p> Open for Opportunities</p>
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 pb-2 border-b border-slate-300 dark:border-gray-300">
            <span className="text-muted dark:text-white/45 flex items-center gap-1 text-sm">
              <MapPin size={17} />
              Rizal, Nueva Ecija, Philippines
            </span>
            <span className="text-muted dark:text-white/45 flex items-center gap-1 text-sm">
              <BookOpen size={17} /> 3rd Year BSIT Student
            </span>
            <span className="text-muted dark:text-white/45 flex items-center gap-1 text-sm">
              <Zap className="text-yellow-500" size={17} /> MERN STACK DEVELOPER
            </span>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h1 className="text-xs font-semibold text-muted dark:text-white/45">
                AVAILABILITY
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold dark:text-gray-200 py-0.5 px-2 rounded-full  bg-slate-100 border border-slate-300 dark:bg-gray-200/10 dark:border-transparent ">
                  Freelance
                </span>
                <span className="text-xs font-semibold dark:text-gray-200 py-0.5 px-2 rounded-full  bg-slate-100 border border-slate-300 dark:bg-white/10 dark:border-transparent ">
                  Part-time
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xs dark:text-white/45 font-semibold  text-muted ">
              Langauges
            </h2>
            <div className="flex flex-col">
              <span className="flex items-center justify-between">
                <p className="text-sm dark:text-white/45 text-muted ">
                  Filipino
                </p>
                <p className="text-sm dark:text-white/45 text-muted ">100%</p>
              </span>
              <span className="w-full h-1 rounded-full dark:bg-gray-300 bg-muted-foreground"></span>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center justify-between">
                <p className="text-sm  text-muted dark:text-white/45">
                  English
                </p>
                <p className="text-sm  text-muted dark:text-white/45">50%</p>
              </span>
              <div className="w-full flex">
                <span className="w-1/2 h-1 rounded-l dark:bg-gray-300 bg-muted-foreground"></span>
                <span className="w-1/2 h-1 rounded-r dark:bg-white/20 bg-gray-100"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xs dark:text-white/45 font-semibold  text-muted ">
              SOCIAL LINKS
            </h2>
            <div className="w-full grid grid-cols-2 gap-3">
              {socials.map((social) => (
                <a
                  href={social.link}
                  className="shadow rounded-lg border border-gray-200 text-muted dark:text-white/45 dark:border-white/20 py-1 text-sm px-3 flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={social.icon} /> {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 ">
        <div className="flex  flex-col gap-2 w-[60%]">
          <div className=" w-full flex flex-col px-5 py-6 shadow-sm gap-5 border border-gray-200 dark:border-white/20  rounded-xl">
            <span className="w-full flex items-center justify-between">
              <h1 className="text-md font-bold">Tech Stack</h1>
              <span
                onClick={() => navigate("/tech-stack")}
                className="flex items-center gap-2 text-xs font-semibold"
              >
                View All <ArrowRight size={15} />
              </span>
            </span>
            <div className="flex flex-col gap-3">
              {techstack.map((stack, index) => {
                if (index <= 2)
                  return (
                    <div key={stack.label} className="flex flex-col gap-2">
                      <h1 className="text-sm font-semibold text-muted dark:text-white/45">
                        {stack.label}
                      </h1>
                      <div className="flex gap-3 pl-2">
                        {stack.items.map((item, index) => {
                          if (index <= 5)
                            return (
                              <span
                                key={item}
                                className="text-xs font-semibold dark:text-gray-200 py-0.5 px-2 rounded-full  bg-slate-100 border border-slate-300 dark:bg-gray-200/10 dark:border-transparent "
                              >
                                {item}
                              </span>
                            );
                        })}
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
          <div className=" w-full flex flex-col px-5 py-6 shadow-sm gap-5 border border-gray-200 dark:border-white/20  rounded-xl">
            <span className="w-full flex items-center justify-between">
              <h1 className="text-md font-bold">Recent Project</h1>
              <span onClick={()=> navigate("/projects")} className="flex items-center gap-2 text-xs font-semibold">
                View All <ArrowRight size={15} />
              </span>
            </span>
            <div className="w-full flex flex-col gap-2">
              {recent_projects.map((item, index) => {
                if (index <= 3)
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 dark:border-white/20 rounded-lg shadow p-3 flex flex-col gap-2"
                    >
                      <h1 className="font-semibold text-sm">{item.title}</h1>
                      <p className="text-sm text-muted dark:text-white/45">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((tool, index) => (
                          <span
                            className="text-xs font-semibold dark:text-gray-200 py-0.5 px-2 rounded-full  bg-slate-100 border border-slate-300 dark:bg-gray-200/10 dark:border-transparent "
                            key={index}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
        <div className="h-fit flex-1 flex flex-col gap-3 p-3 shadow-sm hover:-translate-y-1  transition-all ease-in-out duration-200 border border-gray-200 dark:border-white/20  rounded-xl">
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
                    <h1 className="text-xs font-bold w-[80%]">{item.title}</h1>
                    <p className="text-sm">{item.year}</p>
                  </span>
                  <p className="text-sm text-muted dark:text-white/45">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
