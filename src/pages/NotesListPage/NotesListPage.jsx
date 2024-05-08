import { useState } from 'react';

export default function NotesListPage({ notes }) {
  const [showNotes, setShowNotes] = useState(false);


return (
  <>
    <h1>NotesListPage</h1>
    {notes.length === 0 ? (
      <div>No Notes Yet!</div>
    ) : (
      <div>
        {notes.map((note, index) => (
          <div key={index}>{note}</div>
        ))}
      </div>
    )}
  </>
);
}
