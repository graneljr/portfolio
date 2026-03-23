import { useState, useEffect , useRef} from "react";
const NavBar = () => {
  const menu = ["About", "Projects", "Contact"];

  const [active, setActive] = useState(0);
  const underlineRef = useRef(null);
  const itemRefs = useRef([]);

  const moveUnderline = (index) => {
    const underline = underlineRef.current;

    if (!underline) return;

    if (index === -1) {
      underline.style.width = "0px";
      return;
    }

    const target = itemRefs.current[index];

    if (!target) return;

    underline.style.width = `${target.offsetWidth}px`;
    underline.style.transform = `translateX(${target.offsetLeft}px)`;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      moveUnderline(active);
    }, 0);

    return () => clearTimeout(timer);
  }, [active]);

  useEffect(() => {
    moveUnderline(0);
  }, []);

  const scrollToSection = (id, index) => {
    const section = document.getElementById(id.toLowerCase());

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(index);
    }
  };

  useEffect(() => {
    const sections = menu.map((m) => document.getElementById(m.toLowerCase()));

    const observer = new IntersectionObserver(
      (entries) => {
        let found = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = menu.findIndex(
              (m) => m.toLowerCase() === entry.target.id,
            );

            if (index !== -1) {
              setActive(index);
              moveUnderline(index);
              found = true;
            }
          }
        });
        if (!found) {
          moveUnderline(-1);
        }
      },
      {
        threshold: 0.7,
      },
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-center bg-black">
      <div className=" py-5 xsm:w-[80%] sm:w-[75%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] flex justify-between items-center">
       <h1 className="text-xl text-[rgb(27,250,128)]">
        GranelDev
       </h1>
        <ul
          className="relative w-fit gap-10 flex items-center"
          onMouseLeave={() => moveUnderline(active)}
        >
          {menu.map((item, i) => (
            <li
              key={item}
              ref={(el) => (itemRefs.current[i] = el)}
              onMouseEnter={() => moveUnderline(i)}
              onClick={() => {
                setActive(i);
                scrollToSection(item, i);
              }}
              className={`cursor-pointer pb-1 font-medium transition-colors duration-200 ${
                active === i ? "text-[rgb(27,250,128)]" : "text-white"
              }`}
            >
              {item}
            </li>
          ))}

          <span
            ref={underlineRef}
            className="absolute bottom-[-3px] left-0 h-[2px] bg-[rgb(27,250,128)] transition-all duration-300"
            style={{
              width: 0,
              transform: "translateX(0px)",
            }}
          />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
