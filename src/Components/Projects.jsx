import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyProjects from "../MyProjects";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
 
  return (
    <div className="w-full flex flex-col gap-10 ">
      <span className="w-full flex gap-5  items-center">
        <h1 className="text-slate-500 font-bold">PROJECTS</h1>
        <span className="w-full h-[0.5px] bg-slate-700"></span>
      </span>
      <div className="w-full xsm:grid-cols-1 2xl:grid-cols-2 grid gap-10">
        {MyProjects.map((value, _) => (
          <div key={value.name} className="w-full overflow-hidden bg-slate-700/20 backdrop-blur-[1px] rounded-md transition-all duration-500 ease-in-out hover:scale-[1.02]">
            <img src={value.image} className="w-full h-[200px] object-contain" alt={value.name} />
            <div className="w-full p-5 flex flex-col gap-5 text-white">
              <div className="flex flex-col w-full">
                <h1 className="text-xl font-bold">{value.name}</h1>
                <span className="text-gray-400  text-sm">
                 {value.description}
                </span>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <h3 className="font-bold">Tech Stack used</h3>
                <span className="flex flex-wrap gap-5">
                  {value.stack.map((stack, _) => (
                    <span className="px-3 py-1 text-[11px] font-mono text-white cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(27,250,128)] hover:border-[rgb(27,250,128)] border flex gap-2 items-center justify-center border-slate-500 rounded-md">
                      {stack.icons}
                      {stack.label}
                    </span>
                  ))}
                </span>
              </div>
              {
                value?.link && <a
                target="_blank"
                href={value.link}
                className="text-white px-3 py-2 ml-auto flex items-center justify-center gap-2 border transition-all ease-in-out duration-300 hover:bg-slate-700 border-slate-700 rounded-md"
              >
                Visit
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
