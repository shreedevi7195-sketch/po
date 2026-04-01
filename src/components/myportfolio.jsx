import { useEffect, useState } from "react";

export default function PremiumPreview() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white flex items-center justify-center">

      {/* 🌈 Animated Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,#020617,#1e293b,#334155,#1e3a8a)] animate-[gradientMove_12s_ease_infinite]"></div>

      {/* 💎 Glass Overlay */}
      <div className="absolute inset-0  bg-white/5"></div>

      {/* 🧠 Mouse Glow */}
      <div
        className="pointer-events-none absolute  bg-blue-500 opacity-20 blur-[120px] rounded-full transition duration-200"
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
        }}
      ></div>

      {/* 📦 Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-10">

        {/* 💎 Glass Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-2">Frontend</h2>
          <p className="text-gray-300">React, Tailwind, Redux</p>
        </div>

        {/* 💎 Glass Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-2">Backend</h2>
          <p className="text-gray-300">Node, .NET, APIs</p>
        </div>

        {/* 💎 Glass Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-2">Database</h2>
          <p className="text-gray-300">SQL, MongoDB</p>
        </div>

        {/* 🔥 Neon Button */}
        <div className="col-span-full flex justify-center mt-6">
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-110 transition duration-300">
            Hire Me 🚀
          </button>
        </div>

      </div>

      {/* 🎨 Animation Keyframe */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

    </div>
  );
}