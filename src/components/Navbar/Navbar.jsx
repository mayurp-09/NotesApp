import React from 'react'

const Navbar = ({ mode, darkMode }) => {
  return (
    <div className={`p-4 text-center text-xl font-bold flex justify-between
      ${mode ? 'bg-gray-800 text-white' : 'bg-blue-200 text-cyan-700'}`}>

      <div>Notes App</div>

      <div className='relative group'>
        <button
          onClick={darkMode}
          className={`ml-4 px-3 py-1 rounded 
            ${mode ? 'text-white' : 'text-white'}`
          }
        >
          {mode ? '☀️' : '🌙'}
        </button>
        <span className="absolute bottom-[-23px] left-1/2 transform -translate-x-1/2 
        bg-black text-white text-xs px-1 py-1 rounded opacity-0 
        group-hover:opacity-100 transition duration-100 whitespace-nowrap">{mode ? 'Switch to Light' : 'Switch to Dark'}
        </span>
      </div>
    </div>
  )
}

export default Navbar