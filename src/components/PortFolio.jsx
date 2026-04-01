import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

const projects = [
  {
    title: "Airline Booking",
    desc: "Enterprise booking platform for flights",
    live: "https://www.akbartravels.com/sa/flight/",
    img: "/images/Airlines1.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: true,
  },
  {
    title: "Hotel Booking",
    desc: "Enterprise booking platform for hotels.",
    live: "https://www.akbartravels.com/sa/cheap-hotels",
    img: "/images/Hotels.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: true,
  },
  {
    title: "Cab Booking",
    desc: "Enterprise Cab booking platform.",
    live: "https://www.akbarcab.com/",
    img: "/images/Cabs.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: true,
  },
  {
    title: "Visa Booking",
    desc: "Enterprise Visa booking platform.",
    live: "https://www.akbartravels.com/visa/",
    img: "/images/Visa.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: true,
  },
  {
    title: "Akbar Travels - Admin",
    desc: "Admin panel with role-based access & reports.",
    live: "https://www.b2badmin.akbartravels.com/",
    img: "/images/Admin.png",
    tech: ["MVC C#", "VB.Net", "Rest API's", "Githab", "Jira", "MySql", "Bootstrap", "Two Factor Auth", "AWS", "HTML", "CSS", "Console Applications", "Desktop Applications"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Magna Electro Castings",
    desc: "Corporate website with internal modules.",
    live: "https://www.magnacast.com/",
    img: "/images/magna.jpg",
    tech: ["React", "Rest API", "Gitlab", "Bootstrap", "TwoFactor Auth", "AWS", "SQL", "MongoDB", "HTML", "CSS", "Console Applications", "Desktop Applications", "Asp.Net C#", "Javascript", "Ajax"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Samrajyaa",
    desc: "Corporate website with internal modules.",
    live: "https://www.samrajyaa.com/",
    img: "/images/Magna1.jpg",
    tech: ["React", "Rest API", "Gitlab", "Bootstrap", "TwoFactor Auth", "AWS", "SQL", "MongoDB", "HTML", "CSS", "Console Applications", "Desktop Applications", "Asp.Net C#", "Javascript", "Ajax"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Manoj Homes",
    desc: "Real estate website with property listings.",
    live: "http://www.manojhomes.com/",
    img: "/images/Manojhomes.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Sapil Perfumes",
    desc: "Product showcase website.",
    live: "http://sapil.org/",
    img: "/images/Sapil.png",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Dental Avenue",
    desc: "Healthcare service website.",
    live: "http://www.thedentalavenue.com/",
    img: "/images/Dental.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Portfolio() {
  const featured = []; //projects.filter(p => p.featured);
  const exceptfeatured = projects.filter(p => p.excludefeatured);

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔥 Active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const scrollY = window.scrollY;

      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = ["React Developer", ".NET Developer", "Full Stack Developer"];

  useEffect(() => {
    let timeout;

    if (charIndex < roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setText(roles[roleIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setText("");
      }, 1200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      "service_bvch4fr",
      "template_onb4hyh",
      form.current,
      "qnt0h-8LP9ZhXutLB",
    )
      .then(() => {
        setStatus("success");
        setLoading(false);
        //e.target.reset();
        setTimeout(() => {
          form.current.reset();
          setStatus("");
        }, 2000);
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <div className="font-sans bg-gray-50 text-white-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/80 border-b sticky top-0 z-50">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">Sridevi</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">

          {["home", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition ${active === item ? "text-red-600 font-bold" : "text-gray-900 hover:text-red-600"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <div className="h-5 w-px bg-gray-300"></div>

          <a href="https://github.com/shreedevi7195-sketch" target="_blank" rel="noreferrer">
            <FaGithub className="hover:scale-110 transition" />
          </a>
          <a href="https://www.linkedin.com/sridevi-thangarasu" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:scale-110 transition text-blue-600" />
          </a>
          <a href="mailto:shreedevi7195@gmail.com">
            <FaEnvelope className="hover:scale-110 transition text-orange-500" />
          </a>
          <a href="/Sridevi_CV.pdf" target="_blank" rel="noreferrer">
            <FaFileDownload className="hover:scale-110 transition text-green-900" />
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">

            {["home", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg ${active === item ? "text-red-600 font-bold" : "text-gray-900"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <div className="flex gap-6 text-xl">
              <a href="https://github.com/shreedevi7195-sketch" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/sridevi-thangarasu" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-blue-600" />
              </a>
              <a href="mailto:shreedevi7195@gmail.com" target="_blank" rel="noreferrer">
                <FaEnvelope className="text-orange-500" />
              </a>
              <a href="/Sridevi_CV.pdf" target="_blank" rel="noreferrer">
                <FaFileDownload className="text-green-500" />
              </a>
            </div>

          </div>
        )}
      </nav>

      <div className="animated-bg shadow-xl">

        <div className="">
          {/* Hero */}
          <section id="home" className="text-center p-5 py-18 text-white">
            <motion.h2 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl font-bold">
              Hi, 👋  I'm Sridevi Thangarasu
            </motion.h2>
            <h2 className="text-xl text-white font-semibold">
              {text}|
            </h2>
            <motion.p initial="hidden" animate="visible" variants={fadeIn} className="mt-4">
              Senior Full Stack Developer with 9+ years of experience in designing, developing, and maintaining scalable web
              applications. Skilled in implementing role-based authentication systems, building admin portals,
              developing online booking platforms,cms websites and troubleshooting production issues to ensure application
              reliability and performance.
            </motion.p>
            {/* <motion.a href="#projects" className="inline-flex bg-white/10 backdrop-blur-xl  mt-4 border border-white/20 rounded-full px-6 py-2 shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition duration-300">
              Projects
            </motion.a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <motion.a href="/Sridevi_CV.pdf" download className="inline-flex bg-white/10 backdrop-blur-xl  mt-4 border border-white/20 rounded-full px-6 py-2 shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition duration-300">
              Resume
            </motion.a> */}
          </section>

          {/* Skills */}
          <section id="skills" className="text-center p-5 py-5 text-white">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            {/* Responsive Grid: 2 cols mobile, 4 cols desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Frontend", skills: ["HTML5", "CSS3", "Bootstrap", "Tailwindcss", "JavaScript (ES6+)", "React.js", "Redux Toolkit"] },
                { title: "Backend", skills: ["Node.js", "Express.js", "ASP.NET C#", "VB.NET", "MVC", "REST API", "PHP", "JWT Auth"] },
                { title: "Database", skills: ["SQL", "Mysql", "Mongoose"] },
                { title: "Tools", skills: ["GitHub", "Jira", "AWS", "Postman", "Task Schedulers", "Console and desktop apps"] }
              ].map((category, i) => (
                <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-white transition duration-300 hover:scale-105">
                  <h3 className="font-semibold mb-4 text-white">{category.title}</h3>
                  {category.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-2 mb-3 group">
                      {/* Skill Icons */}
                      <span className="text-lg group-hover:scale-125 transition">
                        {/* Frontend */}
                        {skill.includes("HTML") && "🌐"}
                        {skill.includes("CSS") && "🎨"}
                        {skill.includes("JavaScript") && "🟨"}
                        {skill.includes("React") && "⚛️"}
                        {skill.includes("Tailwind") && "💨"}
                        {skill.includes("Bootstrap") && "🅱️"}
                        {skill.includes("Redux") && "🌀"}

                        {/* Backend */}
                        {skill.includes("Node") && "🟢"}
                        {skill.includes("Express") && "🚂"}
                        {skill.includes("ASP") && "🧩"}
                        {skill.includes("VB") && "🔷"}
                        {skill.includes("MVC") && "🏗️"}
                        {skill.includes("API") && "🔗"}
                        {skill.includes("JWT") && "🔐"}
                        {skill.includes("PHP") && "🐘"}

                        {/* Database */}
                        {skill.includes("SQL") && "🗄️"}
                        {skill.includes("Mysql") && "🐬"}
                        {skill.includes("Mongoose") && "🍃"}

                        {/* Tools */}
                        {skill.includes("GitHub") && "🐙"}
                        {skill.includes("Jira") && "📋"}
                        {skill.includes("AWS") && "☁️"}
                        {skill.includes("Postman") && "📮"}
                        {skill.includes("Task") && "⏰"}
                        {skill.includes("Console") && "💻"}
                        {skill.includes("Desktop") && "🖥️"}
                      </span>

                      <p className="text-sm text-gray-300 group-hover:text-white transition">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>


          {/* Featured Projects */}
          <section className="text-center p-5 py-5 text-white">
            {/* <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2> */}
            <div className="grid md:grid-cols-4 gap-8">
              {featured.map((p, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeIn}
                  whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* <img src={p.img} alt="project" className="w-full h-40 object-cover" /> */}
                  <div className="relative group">
                    <img src={p.img} alt="project" className="w-full h-45 object-cover" />
                    <div className="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <span className="text-white font-bold">
                        <a href={p.live} target="_blank">
                          View Live</a></span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="text-sm mt-2">{p.desc}</p>
                    {/* <div className="flex flex-wrap gap-2 mt-3 text-center">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div> */}
                    {/* <a href={p.live} target="_blank" className="text-blue-500 mt-3 inline-block">Live</a> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* All Projects */}
          <section id="projects" className="text-center p-5 py-5 text-black">

            <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>

            6<div className="grid md:grid-cols-5 gap-8">
              {exceptfeatured.map((p, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeIn} whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow overflow-hidden">
                  {/* <img src={p.img} alt="project" className="w-full h-40 object-cover" /> */}
                  <div className="relative group">
                    <img src={p.img} alt="project" className="w-full h-30 object-cover" />
                    <div className="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <span className="text-white font-bold">
                        <a href={p.live} target="_blank">
                          View Live</a></span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{p.title}</h3>
                    <p className="text-sm mt-2">{p.desc}</p>
                    {/* <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div> */}
                  </div>
                </motion.div>
              ))}
            </div>

          </section>

          {/* Contact */}

          <section id="contact" className="text-center p-5 py-5 text-white max-w-full">
            <motion.form ref={form} onSubmit={sendEmail} initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-5">

              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-center mb-4">
                Get In Touch
              </motion.h2>

              <input type="text" name="user_name" placeholder="Your Name" required
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400" />

              <input type="email" name="user_email" placeholder="Your Email" required
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400" />

              <textarea name="message" placeholder="Your Message" required
                className="w-full p-3 rounded-lg border h-32 focus:outline-none focus:ring-2 focus:ring-indigo-400" />

              <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition flex justify-center items-center">
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600 text-center">✅ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center">❌ Failed to send message. Try again.</p>
              )}
            </motion.form>
          </section>


        </div>
      </div>
      {/* Footer */}
      <footer className="text-center p-4 bg-white text-black py-1">
        © 2026 Sridevi Thangarasu | Full Stack Developer
      </footer>
    </div>
  );
}