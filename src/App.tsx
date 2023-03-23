import { NotesList } from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Esse é o meu primeiro note!",
      date: "22/03/2023",
    },
    {
      id: nanoid(),
      text: "Esse é o meu segundo note!",
      date: "22/03/2023",
    },
    {
      id: nanoid(),
      text: "Esse é o meu terceiro note!",
      date: "22/03/2023",
    },
  ]);

  const AddNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="flex justify-center">
      <NotesList
        notes={notes}
        handleAddNote={AddNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export { App };
