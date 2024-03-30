// Write your code here
import React from 'react'
import {NoteContainer, NoteTitle, NoteContent} from './styledComponents'

const NoteItem = ({note}) => {
  return (
    <NoteContainer>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteContent>{note.note}</NoteContent>
    </NoteContainer>
  )
}

export default NoteItem
