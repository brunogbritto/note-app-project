import { TextField } from "../components/TextField";
import { TextArea } from "../components/TextArea";
import toast from "react-simple-toasts";
import { useState } from "react";

const CreateNote = () => {
  const [note, setNote] = useState("");
  return (
    <div className="bg-yellow-400 rounded-2xl p-4 mx-auto m-8 shadow-xl w-2/3 h-auto md:mx-auto md:max-w-screen-md">
      <form
        className="flex flex-col gap-2 mx-2"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          toast("O seu note foi criado com sucesso!");
        }}
      >
        <TextField
          placeholder="Digite o título"
          value={note}
          onChange={(note) => setNote(note)}
        />
        <TextField
          placeholder="Digite o subtítulo"
          value={note}
          onChange={(note) => setNote(note)}
        />
        <TextArea
          placeholder="Digite sua anotação aqui..."
          value={note}
          onChange={(note) => setNote(note)}
        />
        <button
          type="submit"
          className="bg-green-600 rounded-2xl w-[150px] font-bold text-slate-200 hover:bg-green-500 p-2 mt-6"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export { CreateNote };
