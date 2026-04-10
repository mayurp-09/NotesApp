import React from 'react'

const NoteList = ({ notes, deleteNote, mode }) => {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      {notes.map((note, index) => (
        <div
          key={index}
          className={`p-5 rounded-xl shadow-lg transition duration-300
            ${mode
              ? `${note.color} text-gray-900 hover:shadow-xl hover:scale-105`
              : `${note.color} text-gray-900 hover:shadow-xl hover:scale-105`
            }
          `}
        >
          {/* Title */}
          <h2 className="text-xl font-semibold">
            {note.title}
          </h2>

          {/* Description */}
          <p className={`${mode ? 'text-gray-700' : 'text-gray-700'} mt-2 font-medium`}>
            {note.description}
          </p>

          {/* Delete Button */}
          <button
            onClick={() => deleteNote(index)}
            className={`mt-4 px-3 py-1 rounded transition-colors duration-200
              ${mode
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-red-500 hover:bg-red-600 text-white'
              }
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