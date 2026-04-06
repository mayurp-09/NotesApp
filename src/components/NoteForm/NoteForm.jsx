import React, { useState } from 'react'

const NoteForm = ({addNote}) => {
  const [note, setNote] = useState('')
  const [desc, setDesc] = useState('')

  function handleSubmit (e){
  e.preventDefault();
  addNote({title: note,
    description: desc
  })
  setNote("")
  setDesc("")
}



  return (
    <div className='bg-white p-4 rounded shadow max-w-md mx-auto'>
        <form onSubmit={handleSubmit}>

          <input className='w-full p-2 border rounded mb-3 mt-3'
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder='Enter your note'
           />

          <textarea className='w-full p-2 border rounded mb-3 h-20'
          placeholder='Enter notes description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          />

          <button className='bg-blue-500 text-white w-full px-4 py-2 
          rounded font-bold'>Add Note</button>

        </form>
    </div>
  )
}

export default NoteForm