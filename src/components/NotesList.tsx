import { Note } from "./Note";

interface Props {
  notes: Array<{
    id: string;
    text: string;
    date: string;
  }>;
}

const NotesList = ({ notes }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
};

export { NotesList };
