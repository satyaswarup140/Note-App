// Write your code here
import React, {useState} from 'react'
import NoteItem from '../NoteItem'
import {
  Container,
  EmptyNotesImage,
  NotesHeading,
  NotesList,
  Input,
  TextArea,
  AddButton,
  MainHeading,
  Paragraph,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const handleAddNote = event => {
    event.preventDefault()
    if (title.trim() !== '' && note.trim() !== '') {
      const newNote = {
        id: Math.random().toString(),
        title,
        note,
      }
      setNotesList(prevNotesList => [...prevNotesList, newNote])
      setTitle('')
      setNote('')
    }
  }

  return (
    <Container>
      <MainHeading>No Notes Yet</MainHeading>
      <Paragraph>Notes you add will appear here</Paragraph>
      <NotesHeading>Notes</NotesHeading>
      {notesList.length === 0 ? (
        <EmptyNotesImage
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          alt="notes empty"
        />
      ) : (
        <NotesList>
          {notesList.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </NotesList>
      )}
      <form onSubmit={handleAddNote}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="Take a Note..."
          value={note}
          onChange={e => setNote(e.target.value)}
        />
        <AddButton type="submit">Add</AddButton>
      </form>
    </Container>
  )
}

export default Notes
