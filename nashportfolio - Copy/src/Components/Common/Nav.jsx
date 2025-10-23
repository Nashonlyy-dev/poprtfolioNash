import React from 'react'

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex items-center justify-between text-white backdrop-blur-md bg-white/5 border-b border-white/10">
      {/* Brand */}
      <h1 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-500 hover:scale-110 transition-transform duration-300 cursor-pointer">
        Nash<span className="text-gray-400">.</span>
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-[1.05rem] font-semibold">
        {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase()}`}
            className="relative uppercase tracking-wider text-gray-300 hover:text-white transition-all duration-300 group"
          >
            {item}
            <span
              className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-rose-600 to-purple-500
                         transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        ))}
      </div>

      {/* Accent Glow Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-gradient-to-r from-purple-700 to-rose-600 opacity-20 blur-[100px] pointer-events-none"></div>
    </nav>
  )
}

export default Nav  