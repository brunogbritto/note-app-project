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
  return (
    <div className="flex justify-center">
      <NotesList notes={notes} />
    </div>
  );
};

export { App };
