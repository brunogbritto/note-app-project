import { MdDeleteForever } from "react-icons/md";

interface NoteProps {
  id: string;
  text: string;
  date: string;
  handleDeleteNote: (noteText: string) => void;
}

const Note = ({ id, text, date, handleDeleteNote }: NoteProps) => {
  return (
    <div className="bg-yellow-400 rounded-2xl p-4 h-48 flex flex-col justify-between whitespace-pre-wrap">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <MdDeleteForever
          className="cursor-pointer w-6 h-6"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export { Note };
