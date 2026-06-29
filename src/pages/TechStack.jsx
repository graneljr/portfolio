import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { techstack } from "../utils/techStack";
const TechStack = () => {
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
        <h1 className="text-xl font-bold dark:text-white">Tech Stack</h1>
      </div>

      {techstack.map((stack) => (
        <div
          key={stack.label}
          className=" w-full flex flex-col gap-2 px-5 py-6 shadow-sm border border-gray-200 dark:border-white/20  rounded-xl"
        >
          <h1 className="text-sm font-semibold text-gray-500 dark:text-white/45">
            {stack.label}
          </h1>
          <div className="flex gap-3">
            {stack.items.map((item)=> (
              <span
                key={item}
                className="text-xs font-semibold dark:text-gray-200 py-0.5 px-2 rounded-full  bg-slate-100 border border-slate-300 dark:bg-gray-200/10 dark:border-transparent "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
