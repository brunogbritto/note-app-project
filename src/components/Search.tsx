import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="flex items-center bg-gray-200 rounded-2xl p-[5px] mt-5 mb-5">
      <MdSearch size={"1.3em"} />
      <input
        className="border-none bg-gray-200 placeholder-gray-600 w-full hover:outline-none focus:outline-none"
        type="text"
        placeholder="Digite para buscar um note..."
      ></input>
    </div>
  );
};

export { Search };
