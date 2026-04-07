import React from 'react'

const NoteList = ({ notes, deleteNote, mode }) => {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4">
      {notes.map((note, index) => (
        <div
          key={index}
          className={`p-5 rounded-xl shadow-lg transition duration-300
            ${mode ? 'bg-gray-800 text-white border-l-4 border-blue-400 hover:shadow-xl hover:scale-103' 
                   : 'bg-white text-gray-900 border-l-4 border-blue-400 hover:shadow-xl hover:scale-103'}
          `}
        >
          <h2 className="text-xl font-semibold">{note.title}</h2>
          <p className="text-gray-800 mt-2">{note.description}</p>

          <button
            onClick={() => deleteNote(index)}
            className={`mt-4 px-3 py-1 rounded transition-colors duration-200
              ${mode ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}
            `}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default NoteList