import { useNavigate } from "react-router-dom";
import { recent_projects } from "../utils/recentProjects";
import { ArrowLeft } from "lucide-react";
const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="xs:w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[50%] flex flex-col gap-5">
      <div className="w-full flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center dark:text-white/45 gap-1 text-gray-500"
        >
          <ArrowLeft size={17} /> Back to Home
        </button>
        <h1 className="text-xl font-bold dark:text-white">Recent Project</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {recent_projects.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-white/20 self-start rounded-lg shadow p-3 flex flex-col gap-2"
          >
            <h1 className="font-semibold text-sm">{item.title}</h1>
            <p className="text-sm text-gray-500 dark:text-white/45">{item.desc}</p>
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
