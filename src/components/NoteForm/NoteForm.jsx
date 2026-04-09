import React, { useState } from 'react'

const NoteForm = ({ addNote, mode }) => {
  const [note, setNote] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote({ title: note, description: desc })
    setNote('')
    setDesc('')
  }

  return (
    <div className={`${mode ? 'bg-gray-800 text-white' : 'bg-white text-black'} 
    p-4 rounded shadow max-w-md mx-auto transition-colors duration-300`}>
      <form onSubmit={handleSubmit}>

        <input
          className={`w-full p-2 border rounded mb-3 mt-3 
            ${mode ? 'bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-blue-400' 
                   : 'bg-white text-black border-gray-300 focus:ring-2 focus:ring-blue-200'} transition-colors duration-200`}
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note"
        />

        <textarea
          className={`w-full p-2 border rounded mb-3 h-20
            ${mode ? 'bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-blue-400' 
                   : 'bg-white text-black border-gray-300 focus:ring-2 focus:ring-blue-200'} transition-colors duration-200`}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter notes description"
        />

        <button
          type="submit"
          className={`w-full px-4 py-2 rounded font-bold transition-colors duration-300
            ${mode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-200 text-cyan-700 hover:bg-blue-300'}`}
        >
          Add Note
        </button>

      </form>
    </div>
  )
}

export default NoteForm