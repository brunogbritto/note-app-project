import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { Home } from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateNote } from "./routes/CreateNote";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mr-auto ml-auto pr-[15px] pl-[15px]">
        <Header />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-note" element={<CreateNote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export { App };
