import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaUser,
  FaCertificate,
  FaProjectDiagram,
  FaFileAlt,
  FaCommentDots,
} from "react-icons/fa";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const certificates = [

    {
      title: "Machine Learning",
      image: "/certificates/ml.png",
    },

    {
      title: "Python",
      image: "/certificates/python.png",
    },

    {
      title: "Data Analytics",
      image: "/certificates/dataanalytics.png",
    },

  ];

  const projects = [

    {
      title: "Fake News Detection",
      desc: "Machine Learning based NLP system.",
    },

    {
      title: "TravelLoop",
      desc: "Travel planning web application.",
    },

    {
      title: "Food Ordering System",
      desc: "Full stack ordering platform.",
    },

  ];

  return (

    <div className="bg-[#030712] text-white min-h-screen overflow-x-hidden relative">

      {/* PARTICLES */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Particles
          id="particles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
            },

            particles: {

            number: {
              value: 90,
            },

            color: {
              value: ["#00ffff", "#8b5cf6"],
            },

            links: {
              enable: true,
              color: "#00ffff",
              opacity: 0.15,
              distance: 150,
            },

            move: {
              enable: true,
              speed: 1,
            },

            opacity: {
              value: 0.5,
            },

            size: {
              value: 2,
            },
          },
        }}
      />
      </div>

      {/* NAVBAR */}

       <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full px-6 pt-4">

        <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-3xl px-8 py-4 flex justify-between items-center shadow-[0_0_40px_rgba(0,255,255,0.08)]">

          {/* LOGO */}

          <div className="flex items-center gap-4">

            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">

              Shaurya

            </h1>

            <FaCode className="text-cyan-400 text-2xl"/>

          </div>

          {/* MENU */}

          <div className="hidden md:flex gap-5">

            {[
              ["About", "#about", <FaUser />],
              ["Skills", "#skills", <FaCode />],
              ["Projects", "#projects", <FaProjectDiagram />],
              ["Certificates", "/#certificates", <FaCertificate />],
              ["Contact", "#contact", <FaEnvelope />],
            ].map((item,index)=>(

              <a
                key={index}
                href={item[1]}
                target={item[0] === "Certificates" ? "_blank" : undefined}
                rel={item[0] === "Certificates" ? "noreferrer" : undefined}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400 hover:shadow-[0_0_20px_cyan] transition duration-300"
              >

                {item[2]}

                {item[0]}

              </a>

            ))}

          </div>

        </div>

      </nav>

      {/* HERO */}
       <section className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-8 md:px-20 pt-32 pb-10 min-h-screen">

        {/* LEFT */}

        <motion.div
          initial={{ opacity:0, x:-60 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="max-w-3xl"
        >

          {/* TAG */}

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-500/5 shadow-[0_0_20px_rgba(0,255,255,0.15)] mb-10">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-xl text-gray-200">
              Machine Learning Developer
            </span>

          </div>

          {/* TITLE */}

          <h1 className="text-7xl md:text-8xl font-bold leading-tight">

            Hi, I’m <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

              Shaurya Pratap Singh

            </span>

          </h1>

          {/* ANIMATION */}

          <div className="mt-8 text-3xl text-gray-300 font-semibold">

            <TypeAnimation
              sequence={[
                "Machine Learning Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Data Analytics Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* DESCRIPTION */}

          <p className="mt-10 text-gray-400 text-2xl leading-10 max-w-3xl">

            Passionate about building intelligent solutions through
            <span className="text-cyan-400"> Machine Learning</span>,
            <span className="text-purple-400"> Data Analytics</span>
            and
            <span className="text-blue-400"> Full Stack Development</span>.

          </p>

          {/* BUTTONS */}

          <div className="mt-12 flex flex-wrap gap-6">

            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-4 px-10 py-5 rounded-2xl border border-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 hover:shadow-[0_0_35px_cyan] transition duration-300 text-xl"
            >

              <FaFileAlt />

              Open Resume

            </a>

            <a
              href="https://www.linkedin.com/in/shaurya-pratap-singh-504313389/"
              target="_blank"
              className="flex items-center gap-4 px-10 py-5 rounded-2xl border border-purple-400 bg-purple-500/10 hover:bg-purple-500/20 hover:shadow-[0_0_35px_purple] transition duration-300 text-xl"
            >

              <FaCommentDots />

              Let's Connect

            </a>

          </div>

          {/* SOCIALS */}

          <div className="mt-14">

            <p className="text-gray-400 text-xl mb-6">
              Find me on
            </p>

            <div className="flex gap-6">

              <a
                href="https://github.com/"
                target="_blank"
                className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl hover:border-cyan-400 hover:shadow-[0_0_25px_cyan] transition"
              >

                <FaGithub />

              </a>

              <a
                href="https://www.linkedin.com/in/shaurya-pratap-singh-504313389/"
                target="_blank"
                className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl hover:border-blue-400 hover:shadow-[0_0_25px_blue] transition"
              >

                <FaLinkedin />

              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl hover:border-purple-400 hover:shadow-[0_0_25px_purple] transition"
              >

                <FaEnvelope />

              </a>

            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity:0, scale:0.7 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1 }}
          className="relative mt-0"
        >

          {/* GLOW */}

          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-3xl opacity-40 animate-pulse"></div>

          {/* OUTER RING */}

          <div className="absolute inset-0 rounded-full border-[6px] border-cyan-400 shadow-[0_0_60px_cyan] animate-pulse"></div>

          {/* IMAGE */}

          <img
            src="/profile.png"
            alt="profile"
            className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full object-cover border-[6px] border-purple-500"
          />

        </motion.div>

      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="relative z-10 px-8 md:px-20 py-28"
      >

        <h2 className="text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">

          Skills

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {[
            "Python",
            "Machine Learning",
            "React",
            "MongoDB",
          ].map((skill,index)=>(

            <motion.div
              key={index}
              whileHover={{ y:-10 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-400 hover:shadow-[0_0_30px_cyan]"
            >

              <h3 className="text-3xl font-bold">

                {skill}

              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="relative z-10 px-8 md:px-20 py-28"
      >

        <h2 className="text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">

          Projects

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {projects.map((project,index)=>(

            <motion.div
              key={index}
              whileHover={{ y:-10 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400 hover:shadow-[0_0_30px_cyan]"
            >

              <h3 className="text-3xl font-bold mb-5">

                {project.title}

              </h3>

              <p className="text-gray-400 text-lg leading-8">

                {project.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CERTIFICATES */}

      <section
        id="certificates"
        className="relative z-10 px-8 md:px-20 py-28"
      >

        <h2 className="text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">

          Certificates

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {certificates.map((cert,index)=>(

            <motion.div
              key={index}
              whileHover={{ y:-10 }}
              className="overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl hover:border-cyan-400 hover:shadow-[0_0_30px_cyan]"
            >

              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-contain bg-black"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">

                  {cert.title}

                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="relative z-10 px-8 md:px-20 py-28 text-center"
      >

        <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">

          Contact Me

        </h2>

        <p className="mt-8 text-gray-400 text-2xl">

          Let's build something futuristic together.

        </p>

      </section>

    </div>

  );
}

export default App;