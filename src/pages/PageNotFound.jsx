import { ArrowLeft, Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="xs:w-[90%] flex-1 sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[50%] flex flex-col items-center justify-center gap-6">
      <h1 className="text-9xl font-bold dark:text-white">404</h1>
      <span className="flex px-4 py-2 rounded-lg shadow border border-gray-200 dark:border-white/20 items-center gap-3 text-muted dark:text-white/45">
        <Code2 size={18} /> Error: Page not found at this URL
      </span>
      <h2 className="text-4xl font-bold dark:text-white">
        Opps, nothing here
      </h2>
      <p className="w-1/2  text-muted dark:text-white/45 text-center">
        The page you are looking for does not exist, was moved, or the URL is
        incorrect.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center bg-black dark:bg-white border border-gray-200 dark:border-white/20  px-4 py-3 rounded-md shadow dark:text-black font-semibold gap-2 leading-0 text-white"
        >
          <ArrowLeft size={17} /> Go to Portfolio
        </button>
          <button
          onClick={() => navigate("/tech-stack")}
          className="flex items-center   border border-gray-200 dark:border-white/20 dark:hover:bg-white/10 transition-all duration-300 ease-in-out  px-4 py-3 rounded-md shadow dark:text-white  font-semibold gap-2 leading-0 text-white"
        >
          <Code2 size={17} /> View Tech Stack
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
