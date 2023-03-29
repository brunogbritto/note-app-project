import { LinkButton } from "./LinkButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <h1 className="font-bold text-3xl mt-5">NoteAPP</h1>
      </Link>
      <div className="ml-auto mt-5 ">
        <LinkButton to="/criar-note">Criar Note</LinkButton>
      </div>
    </div>
  );
};

export { Header };
