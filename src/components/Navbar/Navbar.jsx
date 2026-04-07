import React from 'react'

const Navbar = ({ mode, darkMode }) => {
  return (
    <div className={`p-4 text-center text-xl font-bold flex justify-between
      ${mode ? 'bg-gray-800 text-white' : 'bg-blue-200 text-cyan-700'}`}
    >
      <div>Notes App</div>

      <button
        onClick={darkMode}
        className={`ml-4 px-3 py-1 rounded 
          ${mode ? 'bg-gray-600 hover:bg-gray-700 text-white' : 'bg-gray-500 hover:bg-gray-600 text-white'}`
        }
      >
        {mode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default Navbar