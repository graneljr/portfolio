import profile from "../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitHubCalendar } from "react-github-calendar";

import StackIcon from "tech-stack-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faPhone } from "@fortawesome/free-solid-svg-icons";
const About = () => {
 

  const techstack = [
    {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="light"
          name="react"
        />
      ),
      label: "React.js",
    },
    {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="light"
          name="tailwindcss"
        />
      ),
      label: "Tailwind",
    },
    {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="light"
          name="nodejs"
        />
      ),
      label: "Node.js",
    },
    {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="expressjs"
        />
      ),
      label: "Express.js",
    },
    {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="light"
          name="postman"
        />
      ),
      label: " PostMan",
    },
    {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="shadcnui"
        />
      ),
      label: "Shadcn ui",
    },

    {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="mongodb"
        />
      ),
      label: "MongoDB",
    },
      {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="git"
        />
      ),
      label: "Git",
    },
      {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="github"
        />
      ),
      label: "GitHub",
    },
    {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="vscode"
        />
      ),
      label: "vscode",
    },
      {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="kotlin"
        />
      ),
      label: "Kotlin",
    },
    {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="android"
        />
      ),
      label: "Android Studio",
    },
     {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="js"
        />
      ),
      label: "JavaScript",
    },
     {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="dark"
          name="mysql"
        />
      ),
      label: "MySQL",
    },
     {
      icons: (
        <StackIcon
          className=" h-[30px] w-[30px]"
          variant="light"
          name="java"
        />
      ),
      label: "Java",
    },
  ];


  return (
    <div className="w-full h-auto mt-[100px] flex flex-col gap-10">
      <div className="w-full flex gap-[20px] ">
         <img
            className="h-[190px] w-[190px] rounded-2xl"
            src={profile}
            alt="me"
          />
        <div className="flex-1 flex-col flex  gap-3">
          <span className="flex flex-col">
            <h1 className="text-white text-2xl font-bold">
              Armando Granel Jr.
            </h1>
            <h3 className="text-[rgb(27,250,128)]">Full Stack Developer</h3>
            <span className="text-slate-300 ">
            Hello, I’m Armando Granel Jr., a developer based in Rizal, Nueva Ecija, Philippines. I build software with a focus on reliability and straightforward design
               {/* a  BSIT
              Student at{" "}
              <span className="text-[rgb(27,250,128)]">
                PHINMA-ARAULLO UNIVERSITY
              </span> */}
            </span>
          </span>
          <a href="/Resume.pdf" download className="mt-auto flex self-end items-center gap-2 border border-slate-300 p-2 rounded-md transition-all duration-300 ease-in-out hover:text-[rgb(27,250,128)] hover:border-[rgb(27,250,128)] text-white">
            Download CV
            <FontAwesomeIcon icon={faDownload}/>
          </a>
        </div>
      </div>
      <div className="w-full overflow-hidden flex flex-col gap-5">
          <GitHubCalendar
            year={new Date().getFullYear()}
            username="graneljr"
            colorScheme="dark"
            style={{
              color: "#ffffff",
              width: "100%",
            }}/>
      
        <div className="flex flex-col w-full  gap-5">
          <span className="w-full flex items-center gap-5">
            <h1 className="text-slate-500 font-bold whitespace-nowrap">
              DEV TOOLS
            </h1>
            <span className="w-full h-[1px] bg-slate-700"></span>
          </span>
          <div className="flex flex-wrap p-5 gap-5 w-full">
            {techstack.map((stack, _) => (
              <span key={stack.label} className="px-3 py-1 text-[14px] font-mono text-white cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(27,250,128)] hover:border-[rgb(27,250,128)] border flex gap-2 items-center justify-center border-slate-500 rounded-md">
                {stack.icons}
                {stack.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
