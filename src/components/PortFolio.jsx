import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const projects = [
  {
    title: "Airline Booking",
    desc: "Booking platform for Airline",
    live: "https://www.akbartravels.com/sa/flight/",
    img: "/images/Airlines1.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: true,
  },
  {
    title: "Hotel Booking",
    desc: "Booking platform for Hotel.",
    live: "https://www.akbartravels.com/sa/cheap-hotels",
    img: "/images/Hotels.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: true,
  },
  {
    title: "Cab Booking",
    desc: "Cab booking platform.",
    live: "https://www.akbarcab.com/",
    img: "/images/Cabs.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: true,
  },
  {
    title: "Visa Booking",
    desc: "Visa booking platform",
    live: "https://www.akbartravels.com/visa/",
    img: "/images/Visa.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: true,
  },
  {
    title: "Akbar Travels - Admin",
    desc: "Panel with role-based access & reports.",
    live: "https://www.aeb2badmin.akbartravels.com/",
    img: "/images/Admin.png",
    tech: ["MVC C#", "VB.Net", "Rest API's", "Githab", "Jira", "MySql", "Bootstrap", "Two Factor Auth", "AWS", "HTML", "CSS", "Console Applications", "Desktop Applications"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Holiday Planning",
    desc: "platform to plan the holidays",
    live: "https://www.akbartravels.com/sa/holidays/",
    img: "/images/holidays.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: true,
  },
  
  {
    title: "Magna Electro Castings Limited",
    desc: "Ferrous machined castings Manufacturing.",
    live: "https://www.magnacast.com/",
    img: "/images/magna.jpg",
    tech: ["React", "Rest API", "Gitlab", "Bootstrap", "TwoFactor Auth", "AWS", "SQL", "MongoDB", "HTML", "CSS", "Console Applications", "Desktop Applications", "Asp.Net C#", "Javascript", "Ajax"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Magna Digitech India LLP",
    desc: "Prominent 3D sand printing and rapid prototyping.",
    live: "https://www.magnadigi.tech/",
    img: "/images/Digitech.jpg",
    tech: ["React", "Rest API", "Gitlab", "Bootstrap", "TwoFactor Auth", "AWS", "SQL", "MongoDB", "HTML", "CSS", "Console Applications", "Desktop Applications", "Asp.Net C#", "Javascript", "Ajax"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Samrajyaa and Company",
    desc: "Casting Manufacturer and operates as a CNC machining unit serving sectors like automobiles.",
    live: "https://www.samrajyaa.com/",
    img: "/images/Samrajyaa.jpg",
    tech: ["React", "Rest API", "Gitlab", "Bootstrap", "TwoFactor Auth", "AWS", "SQL", "MongoDB", "HTML", "CSS", "Console Applications", "Desktop Applications", "Asp.Net C#", "Javascript", "Ajax"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Magna - Admin",
    desc: "Panel with role-based access & reports.",
    live: "https://www.mecl.online/",
    img: "/images/Admin.png",
    tech: ["MVC C#", "VB.Net", "Rest API's", "Githab", "Jira", "MySql", "Bootstrap", "Two Factor Auth", "AWS", "HTML", "CSS", "Console Applications", "Desktop Applications"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Art of Clubbing",
    desc: "Party planning digital platform",
    live: "http://www.artofclubbing.com/",
    img: "/images/artofclubbing.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Manoj Homes",
    desc: "House construction and interior design.",
    live: "https://manojbuilders.com/",
    img: "/images/Manojhomes.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Sapil Perfumes",
    desc: "Product showcase e-commerce website.",
    live: "https://sapil.com/",
    img: "/images/Sapil.png",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "VR Galaxy",
    desc: " Virtual Reality Entertainment Service.",
    live: "http://www.vrgalaxy.in/",
    img: "/images/vrgalaxy.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Fubsy",
    desc: "Pet Care Products showcase website",
    // live: "https://fuzzywuzzy.in/",
    img: "/images/fubsy.png",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },  
  {
    title: "Dental Avenue",
    desc: "Healthcare Service.",
    live: "http://www.thedentalavenue.com/",
    img: "/images/Dental.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  
  {
    title: "Menorah PM India",
    desc: "HR consulting firm.",
    live: "http://www.menorahpm.com/",
    img: "/images/menorahpm.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "MyDay Delivery",
    desc: "Product Delivery website",
    // live: "https://bubblez.co.in/",
    img: "/images/mydaydelivery.jpeg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Wedding Book",
    desc: "Wedding Event Planner Service",
    // live: "https://bubblez.co.in/",
    img: "/images/weddingbook.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  
  {
    title: "SixthStar Technologies ",
    desc: "IT and web hosting providers",
    live: "https://sixthstartech.com/",
    img: "/images/sixthstar.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "My Air Talk",
    desc: "Recharge - Service",
    // live: "https://bubblez.co.in/",
    img: "/images/myairtalk.png",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
  {
    title: "Bubblez",
    desc: "Personal Care Products website",
    live: "https://bubblez.co.in/",
    img: "/images/bubblez.jpg",
    tech: ["HTML", "CSS", "Asp.Net c# and vb.net", "Javascript", "Ajax", "Responsive UI", "Gitlab", "MySql", "Bootstrap", "Two Factor Auth"],
    featured: false,
    excludefeatured: true,
  },
   {
    title: "Mirror Minds - Admin",
    desc: "Project based Admin Websites.",
    // live: "https://www.mecl.online/",
    img: "/images/Admin.png",
    tech: ["MVC C#", "VB.Net", "Rest API's", "Githab", "Jira", "MySql", "Bootstrap", "Two Factor Auth", "AWS", "HTML", "CSS", "Console Applications", "Desktop Applications"],
    featured: false,
    excludefeatured: true,
  },
  
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const milestones = [
  {
    year: "2016",
    title: "Mirrorminds Technology Solutions",
    location: "Chennai",
    desc: "Software Engineer Trainee"
  },
  {
    year: "2019",
    title: "Magna Electro Castings Pvt Ltd",
    location: "Coimbatore",
    desc: "Software Developer"
  },
  {
    year: "2021",
    title: "Benzy Infotech Pvt Ltd",
    location: "Kochi",
    desc: "Software Engineer"
  },
  {
 year: "2024",
   title: "Benzy Infotech Pvt Ltd",
    location: "Kochi",
    desc: "Senior Software Engineer"
  }
];

export default function Portfolio() {
  //const featured = []; //projects.filter(p => p.featured);
  const exceptfeatured = projects.filter(p => p.excludefeatured);

  const form = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);


  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = ["Fullstack Developer"]; // ["React Developer", ".NET Developer", "Full Stack Developer"];

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

    // let timeout;
    // if (charIndex < roles[roleIndex].length) {
    //   timeout = setTimeout(() => {
    //     setText(roles[roleIndex].slice(0, charIndex + 1));
    //     setCharIndex(charIndex + 1);
    //   }, 80);
    // } else {
    //   timeout = setTimeout(() => {
    //     setCharIndex(0);
    //     setRoleIndex((prev) => (prev + 1) % roles.length);
    //     setText("");
    //   }, 1200);
    // }
    if (charIndex < roles[roleIndex].length) {
      setText(roles[roleIndex]);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [charIndex, roleIndex]);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!formData.user_email) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Invalid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("⚠️ Please fill all required fields");
    } else {
      setErrors({});

      // Simulate API call
      const toastId = toast.loading("Sending message...");

      emailjs.sendForm(
        "service_bvch4fr",
        "template_onb4hyh",
        form.current,
        "qnt0h-8LP9ZhXutLB",
      )
        .then(() => {
          setTimeout(() => {
            toast.update(toastId, {
              render: "🚀 Message sent successfully!",
              type: "success",
              isLoading: false,
              autoClose: 3000
            });
            setFormData({ user_name: "", user_email: "", message: "" });
          }, 1500);
        })
        .catch(() => {
          setTimeout(() => {
            toast.update(toastId, {
              render: "🚀 Message sending Failed",
              type: "failed",
              isLoading: false,
              autoClose: 3000
            });
          }, 1500);
        });
    }
  };

  return (
    <div className="">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/80 border-b sticky top-0 z-50">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">Sridevi Thangarasu</h1>

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

        {/* Hero */}
        <section id="home" className="text-center p-5 py-18 text-white">
          <motion.h2 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl font-bold">
            Hi, 👋  I'm Sridevi - {text}
          </motion.h2>

          <motion.p initial="hidden" animate="visible" variants={fadeIn} className="mt-4 text-center p-4">
            Software Developer with 9+ years of experience in designing, developing, and maintaining scalable web
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

          <div>
        <div className="w-full overflow-x-auto py-5">
          <div className="sm:grid-cols-1 md:flex items-center relative">

        {/* Line */}
        <div className="sm:hidden md:relative top-1/2 left-0 w-full h-1 bg-gray-700"></div>

        {milestones.map((item, index) => (
          <div key={index} className="flex flex-1 flex-col items-center relative">

            {/* Dot */}
            <div className="hidden md:flex w-5 h-5 bg-blue-500 rounded-full z-10 border-4 border-black">
              {/* <h4 className="font-bold">{item.year}</h4> */}
            </div>

            {/* Card */}
            <div className="mt-6 text-white p-3 rounded-4xl shadow-lg w-70 text-center hover:shadow-blue-800/50 scale-105 transition bg-gradient-to-r  bg-white/10 via-gray-700 to-gray-800">
              <h3 className="font-bold">{item.year}</h3>
              <p className="">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="text-sm">{item.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
    <motion.a href="#projects" className="inline-flex bg-white/10 backdrop-blur-xl  mt-3 border border-white/20 rounded-full px-6 py-2 shadow-lg hover:shadow-blue-700/50 hover:scale-105 transition duration-300">
            Projects
          </motion.a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <motion.a href="/Sridevi_CV.pdf" download className="inline-flex bg-white/10 backdrop-blur-xl  mt-3 border border-white/20 rounded-full px-6 py-2 shadow-lg hover:shadow-blue-700/50 hover:scale-105 transition duration-300">
            Resume
          </motion.a>
          </div>
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
              { title: "Tools", skills: ["GitHub", "Jira", "AWS", "Postman", "Schedulers", "ConsoleApps"] }
            ].map((category, i) => (
              <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-white transition duration-300 hover:scale-105">
                <h3 className="font-semibold mb-4 text-white">{category.title}</h3>
                {category.skills.map((skill, j) => (
                  <div key={j} className="flex items-center gap-2 mb-3 group">
                    {/* Skill Icons */}
                    <span className="text-lg group-hover:scale-125 transition">
                      {/* Frontend */}
                      {skill.includes("HTML") && "🌐"} {skill.includes("CSS") && "🎨"}{skill.includes("JavaScript") && "🟨"}
                      {skill.includes("React") && "⚛️"} {skill.includes("Tailwind") && "💨"}
                      {skill.includes("Bootstrap") && "🅱️"} {skill.includes("Redux") && "🌀"}

                      {/* Backend */}
                      {skill.includes("Node") && "🟢"} {skill.includes("Express") && "🚂"} {skill.includes("ASP") && "🧩"} {skill.includes("VB") && "🔷"}
                      {skill.includes("MVC") && "🏗️"} {skill.includes("API") && "🔗"} {skill.includes("JWT") && "🔐"} {skill.includes("PHP") && "🐘"}

                      {/* Database */}
                      {skill.includes("SQL") && "🗄️"} {skill.includes("Mysql") && "🐬"} {skill.includes("Mongoose") && "🍃"}

                      {/* Tools */}
                      {skill.includes("GitHub") && "🐙"} {skill.includes("Jira") && "📋"} {skill.includes("AWS") && "☁️"}
                      {skill.includes("Postman") && "📮"} {skill.includes("Schedulers") && "⏰"} {skill.includes("Console") && "💻"}{skill.includes("Desktop") && "🖥️"}
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

        {/* All Projects */}
        <section id="projects" className="text-center p-5 py-5 text-black">
          <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {exceptfeatured.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeIn} whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow overflow-hidden">
                {/* <img src={p.img} alt="project" className="w-full h-40 object-cover" /> */}
                <div className="relative group">
                  <img src={p.img} alt="project" className="w-full h-35 object-cover" />
                  { p.live && <div className="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <span className="text-white font-bold">                      
                       <a href={p.live} target="_blank"> View Live</a>  
                    </span>
                  </div> }
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

        <section id="contact" className="text-center p-5 py-5 text-white max-w-full">
          <div className="flex grid-cols-2 md:grid-cols-8 justify-center items-center min-h-screen">
            <form ref={form} onSubmit={handleSubmit}
              className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl space-y-4 border border-white/20">
              <h2 className="text-white text-xl font-semibold text-center">
                Get in touch
              </h2>

              {/* Name */}
              <input type="text" name="user_name" placeholder="Your Name" value={formData.user_name}
                onChange={handleChange} className={`w-full p-2 rounded bg-white/20 text-white outline-none ${errors.user_name ? "border border-red-600" : ""}`} />

              {/* Email */}
              <input type="email" name="user_email" placeholder="Your Email" value={formData.user_email}
                onChange={handleChange} className={`w-full p-2 rounded bg-white/20 text-white outline-none ${errors.user_email ? "border border-red-600" : ""}`} />

              {/* Message */}
              <textarea name="message" placeholder="Your Message" value={formData.message}
                onChange={handleChange} className={`w-full p-2 rounded bg-white/20 text-white outline-none ${errors.message ? "border border-red-600" : ""}`} />

              <button className="md:w-md p-5  bg-white/20 hover:bg-blue-950 transition text-white py-2 rounded-lg shadow-lg hover:scale-105">
                Send your Message
              </button>
              {/* 🔥 Toast Container (Glass + Neon style) */}
              <ToastContainer md:w-md p-5  sm:w-3
                position="bottom-right" autoClose={10000} theme="dark"
                toastClassName="backdrop-blur-md bg-white/10 text-white border border-white/20 rounded-xl shadow-lg"
                bodyClassName="text-sm font-medium"
              />
              <br /><br />
            </form>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="text-center p-4 bg-white text-black py-1">
        © 2026 Sridevi Thangarasu | Full Stack Developer
      </footer>
    </div>
  );
}