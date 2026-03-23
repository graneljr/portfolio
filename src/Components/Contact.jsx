import {
  faCheck,
  faCopy,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const socials = [
  {
    icon: faGithub,
    name: "Github",
    handle: "@graneljr",
    link: "https://github.com/graneljr",
    color: "rgba(255,255,255,0.9)",
    bg: "rgba(255,255,255,0.05)",
  },
  {
    icon: faLinkedin,
    name: "LinkedIn",
    handle: "Armando Granel Jr",
    link: "https://linkedin.com/in/armando-granel-jr-837b31378",
    color: "#4fa3d1",
    bg: "rgba(0,119,181,0.08)",
  },
  {
    icon: faFacebook,
    name: "Facebook",
    handle: "Armando Granel Jr.",
    link: "https://www.facebook.com/armando.graneljr",
    color: "#4f8fd1",
    bg: "rgba(24,119,242,0.08)",
  },
  {
    icon: faInstagram,
    name: "Instagram",
    handle: "@armandograneljr",
    link: "https://www.instagram.com/armandograneljr/",
    color: "#e1306c",
    bg: "rgba(225,48,108,0.08)",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("armandogranel2@gmail.com");
    } else {
      const el = document.createElement("textarea");
      el.value = "armandogranel2@gmail.com";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const redirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full py-5 flex flex-col gap-5">

      {/* Section Label */}
      <span className="w-full flex gap-5 items-center">
        <h1 className="text-slate-500 font-bold whitespace-nowrap tracking-widest text-xs">
          CONTACT ME
        </h1>
        <span className="w-full h-[0.5px] bg-slate-700" />
      </span>

      <div className="flex w-full flex-col gap-6">

        {/* Heading + availability */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-white font-bold text-4xl leading-tight">
              Got a project{" "}
              <span className="text-[rgb(27,250,128)]">in mind?</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col border border-slate-700/60 rounded-2xl overflow-hidden">
          <div
            onClick={handleCopy}
            className="group flex items-center justify-between p-5 border-b border-slate-700/60 cursor-pointer transition-all duration-300 hover:bg-slate-50/5"
          >
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-[10px] font-mono tracking-widest uppercase">
                Email me directly
              </span>
              <span className="text-white text-base sm:text-lg font-medium group-hover:text-[rgb(27,250,128)] transition-colors duration-300">
                armandogranel2@gmail.com
              </span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); handleCopy(); }}
              className={`flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg border transition-all duration-300
                ${copied
                  ? "border-[rgb(27,250,128)]/50 text-[rgb(27,250,128)] bg-[rgb(27,250,128)]/8"
                  : "border-slate-600 text-slate-400 hover:border-[rgb(27,250,128)]/40 hover:text-[rgb(27,250,128)]"
                }`}
            >
              <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="text-xs" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Socials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {socials.map((s, i) => (
              <button
                key={i}
                onClick={() => redirect(s.link)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group flex items-center gap-4 p-5 text-left transition-all duration-300
                  ${i % 2 === 0 ? "sm:border-r border-slate-700/60" : ""}
                  ${i < socials.length - 2 ? "border-b border-slate-700/60" : ""}
                  ${i >= socials.length - (socials.length % 2 === 0 ? 2 : 1) ? "" : "border-b border-slate-700/60"}
                  hover:bg-slate-50/5
                `}
                style={{
                  borderBottom: i < 2 ? "1px solid rgba(100,116,139,0.4)" : "none",
                }}
              >
                {/* Icon box */}
                <div
                  className="h-14 w-14 flex-shrink-0 flex items-center justify-center rounded-xl border border-slate-700 transition-all duration-300 group-hover:border-opacity-60"
                  style={{
                    background: hoveredIndex === i ? s.bg : "rgba(255,255,255,0.04)",
                    borderColor: hoveredIndex === i ? s.color + "66" : undefined,
                  }}
                >
                  <FontAwesomeIcon
                    icon={s.icon}
                    className="text-2xl transition-colors duration-300"
                    style={{
                      color: hoveredIndex === i ? s.color : "rgba(255,255,255,0.7)",
                    }}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 min-w-0">
                  <span
                    className="font-medium text-base transition-colors duration-300"
                    style={{
                      color: hoveredIndex === i ? s.color : "#fff",
                    }}
                  >
                    {s.name}
                  </span>
                  <span
                    className="text-sm transition-colors duration-300 truncate"
                    style={{
                      color: hoveredIndex === i
                        ? s.color + "99"
                        : "rgba(148,163,184,1)",
                    }}
                  >
                    {s.handle}
                  </span>
                </div>

                {/* Arrow */}
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="text-sm flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{
                    color: hoveredIndex === i ? s.color : "rgba(100,116,139,0.6)",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-slate-700/60 bg-slate-900/30">
            <span className="text-slate-600 text-xs font-mono">
              All messages are read personally
            </span>
            <span className="text-slate-600 text-xs font-mono">
              © 2026 Armando Granel Jr.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;