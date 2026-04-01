import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Airline Booking",
    desc: "Enterprise booking platform for flights",
    live: "https://www.akbartravels.com/sa/flight/",
    img: "/images/Airlines1.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: false,
  },
  {
    title: "Hotel Booking",
    desc: "Enterprise booking platform for hotels.",
    live: "https://www.akbartravels.com/sa/cheap-hotels",
    img: "/images/Hotels.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: false,
  },
  {
    title: "Cab Booking",
    desc: "Enterprise Cab booking platform.",
    live: "https://www.akbarcab.com/",
    img: "/images/Cabs.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: false,
  },
  {
    title: "Visa Booking",
    desc: "Enterprise Visa booking platform.",
    live: "https://www.akbartravels.com/visa/",
    img: "/images/Visa.jpg",
    tech: ["TailwindCSS", "Node", "API", "Github", "Jira", "MySql", "Express", "React", "JWT Auth", "Dockers", "AWS", "Kubernets", "HTML", "CSS"],
    featured: true,
    excludefeatured: false,
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
  const featured = projects.filter(p => p.featured);
  const exceptfeatured = projects.filter(p => p.excludefeatured);

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

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

  const styles = {
    footer: {
      textAlign: "center",
      padding: "15px",
      backgroundColor: "#111",
      color: "#fff",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "10px",
    },
  };

  return (
    <div className="font-sans bg-gray-50 text-white-900">
      {/* Navbar */}
      <nav className="flex justify-between p-5 shadow bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold">Sridevi</h1>
        <div className="space-x-6">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="bg-gray-600">
        {/* Hero */}
        <section id="home" className="text-center py-20 text-white">
          <motion.h2 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl font-bold">
            Hi, 👋  I'm Sridevi Thangarasu
          </motion.h2>

          <motion.p initial="hidden" animate="visible" variants={fadeIn} className="mt-4">
            Senior Full Stack Developer with 9+ years of experience in designing, developing, and maintaining scalable web
            applications. Skilled in implementing role-based authentication systems, building admin portals,
            developing online booking platforms, and troubleshooting production issues to ensure application
            reliability and performance.
          </motion.p>

          <motion.a href="/Sridevi_CV.pdf" download whileHover={{ scale: 1.1 }} className="mt-6 inline-block px-6 py-3 bg-white text-black rounded-lg">
            Download Resume
          </motion.a>
        </section>

        {/* Featured Projects */}
        <section className="p-10 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {featured.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeIn}
                whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* <img src={p.img} alt="project" className="w-full h-40 object-cover" /> */}
                <div className="relative group">
                  <img
                    src={p.img}
                    alt="project"
                    className="w-full h-50 object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <span className="text-white font-bold">
                      <a href={p.live} target="_blank">
                        View Project</a></span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-sm mt-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-center">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                  {/* <a href={p.live} target="_blank" className="text-blue-500 mt-3 inline-block">Live</a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section id="projects" className="p-10 text-center ">
          <h2 className="text-3xl font-bold mb-6 text-white">All Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {exceptfeatured.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeIn} whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow overflow-hidden">
                {/* <img src={p.img} alt="project" className="w-full h-40 object-cover" /> */}
                <div className="relative group">
                  <img src={p.img} alt="project" className="w-full h-50 object-cover" />
                  <div className="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <span className="text-white font-bold">
                      <a href={p.live} target="_blank">
                        View Project</a></span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="text-sm mt-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}

        <section id="contact" className="p-10 text-white max-w-full">


          <motion.form ref={form} onSubmit={sendEmail} initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-5">

            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-center mb-8">
              Contact Me
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
      {/* Footer */}
      <footer className="text-center p-4 bg-white text-black">
        {/* © 2026 Sridevi Thangarasu | Full Stack Developer  
        GitHub | https://www.linkedin.com/sridevi-thangarasu | Contact */}

        <p>
          © 2026 Sridevi Thangarasu | Full Stack Developer
        </p>

        <div style={styles.links}>
          <a href="https://github.com/shreedevi7195-sketch" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/sridevi-thangarasu" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="mailto:shreedevi7195@gmail.com">
            <FaEnvelope /> Contact
          </a>
        </div>

      </footer>
    </div>
  );
}