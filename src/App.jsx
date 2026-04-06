import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import NoteForm from './components/NoteForm/NoteForm'
import NoteList from './components/NoteList/NoteList'

const App = () => {

  const [notes, setNotes] = useState([])

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  }
  const deleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete)
    setNotes(updatedNotes)
  }

  return (
    <div>
      <Navbar/>
      <div class="max-w-md mx-auto mt-8">
      <NoteForm addNote={addNote}/>
      </div>
      <NoteList notes={notes} deleteNote={deleteNote}/>
    </div>
  )
}

export default App