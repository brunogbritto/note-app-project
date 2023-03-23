import { Note } from "./Note";
import AddNote from "./AddNote";

interface Props {
  notes: { id: string; text: string; date: string }[];
  handleAddNote: (noteText: string) => void;
  handleDeleteNote: (noteText: string) => void;
}

const NotesList = ({ notes, handleAddNote, handleDeleteNote }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <div>
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
};

export { NotesList };
