import React from 'react'

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {notes.map((note, index) => (<div 
        key={index} 
        className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl 
             transform hover:scale-101 transition duration-200">

        <h2 className="text-xl font-semibold text-gray-800">
         {note.title}
        </h2>
  
        <p className="text-gray-500 mt-2">
        {note.description}
        </p>

        <button 
        onClick={() => deleteNote(index)} 
        className="bg-red-500 text-white px-3 py-1 rounded mt-4 
               hover:bg-red-700 transition">Delete</button>
    </div>
      ))}
    </div>
  )
}

export default NoteList