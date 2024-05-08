import { useState } from 'react';



export default function NotesForm({ handleAddNotes }) {
    const [note, setNote] = useState('');


    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddNotes(note);
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Add Note</button>
                <textarea value={note} onChange={(evt) => setNote(evt.target.value)} />
            </form>
        </>
    );
}