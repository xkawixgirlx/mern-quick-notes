import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotesForm from '../../components/NotesForm.jsx/NotesForm';
import * as notesAPI from '../../utilities/notes-api';



export default function NotesListPage() {
  const [notes, setNotes] = useState([]);
  const { noteId } = useParams();

  useEffect(function () {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, [noteId]);

  async function handleAddNotes(note) {
    const newNote = await notesAPI.add({ text: note });
    setNotes([...notes, newNote]);
  }


  return (
    <>
      <h1>Notes: </h1>
      {notes.length === 0 ? (
        <h2>No Notes Yet!</h2>
      ) : (
        <div>
          {notes.map((note) => (
            <div key={note._id}>
              <li>{note.text}</li>
              <p>{new Date(note.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
      <NotesForm handleAddNotes={handleAddNotes} />
    </>
  );
}
