import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import NoteForm from './components/NoteForm/NoteForm'
import NoteList from './components/NoteList/NoteList'

const App = () => {

  const [notes, setNotes] = useState([])
  const [mode, setMode] = useState(true)
  
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  }
  const deleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete)
    setNotes(updatedNotes)
  }

  const darkMode = () => {
    setMode(!mode)
  }
  return (
    <div className={mode ? 'bg-gray-900 text-white min-h-screen' : 'bg-gray-100 text-black min-h-screen'}>
      <Navbar mode={mode} darkMode={darkMode} />
      <div className="max-w-md mx-auto mt-8">
      <NoteForm addNote={addNote} mode={mode} />
      </div>
      <NoteList notes={notes} deleteNote={deleteNote} mode={mode}/>
    </div>
  )
}

export default App