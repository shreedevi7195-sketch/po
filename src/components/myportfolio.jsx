import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function myportfolio() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl">Sridevi</h1>
          <div className="space-x-6 hidden md:block">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-center px-4">
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="text-5xl font-extrabold mb-4">
          Hi, I'm Sridevi 👋
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="show" className="text-lg max-w-xl">
          Full Stack Developer crafting modern, scalable and user-friendly web apps using React & .NET
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-8 flex gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-2 rounded-full shadow hover:scale-105 transition">View Work</a>
          <a href="/resume.pdf" className="border px-6 py-2 rounded-full hover:bg-white hover:text-black transition">Resume</a>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-4">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Modern full-stack app with API integration and responsive UI
              </p>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-indigo-600 font-medium">Live</a>
                <a href="#" className="text-gray-500">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-50 px-4">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-4xl font-bold text-center mb-12">
          Get In Touch
        </motion.h2>

        <motion.form variants={fadeUp} initial="hidden" whileInView="show" className="max-w-xl mx-auto flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-lg">
          <input type="text" placeholder="Your Name" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <textarea placeholder="Message" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <button className="bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition">Send Message</button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8">
        <p className="text-sm">© 2026 Sridevi Thangarasu | Full Stack Developer</p>
        <div className="flex justify-center gap-6 mt-4 text-xl">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
      </footer>
    </div>
  );
}
