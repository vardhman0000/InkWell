// SharedContext.js (or similar)
import React, { createContext, useState } from 'react';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem('notes')) || []
    );

    const updateNoteTitle = (index, newTitle) => {
        const updatedNotes = [...notes];
        updatedNotes[index].title = newTitle;
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <NotesContext.Provider value={{ notes, updateNoteTitle }}>
            {children}
        </NotesContext.Provider>
    );
};

export { NotesContext, NotesProvider };
