import { MdDeleteForever } from "react-icons/md";

interface NoteProps {
  id: string;
  text: string;
  date: string;
}

const Note = ({ id, text, date }: NoteProps) => {
  return (
    <div className="bg-yellow-400 rounded-2xl p-4 h-48 flex flex-col justify-between">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export { Note };
