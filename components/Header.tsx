"use client";

import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import { useBoardStore } from "@/store/BoardStore";

function Header() {
  const { searchString, setSearchString } = useBoardStore((state) => state);

  return (
    <header>
      <div className="w-full mx-auto">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-sky-600 rounded-md filter blur-3xl opacity-50 -z-50" />

        <div className="flex items-center gap-5 flex-col md:flex-row p-5 container justify-between mx-auto mb-2">
          {/* LOGO */}
          <div className="flex gap-2 items-center">
            <Logo color="#0284C7" />
            <h1 className="font-black text-xl">CardStack</h1>
          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-2 w-full flex-1 justify-end">
            <form className="bg-white flex items-center space-x-2 rounded-md p-2 border shadow-md  flex-1 md:flex-initial">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <input
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                type="text"
                placeholder="Search"
                className="flex-1 outline-none text-sm"
              />
              <button type="submit" hidden>
                Search
              </button>
            </form>
            <div className="rounded-full bg-sky-600 border border-sky-700 w-6 h-6 p-2 flex items-center justify-center text-xs text-sky-50 font-black">
              PI
            </div>
          </div>
        </div>
      </div>

      {/* SUGGESTION */}
      <div className="flex flex-center justify-center px-5 md:py-5">
        <p className="flex items-center gap-1 text-sm font-light pr-5 shadow-md w-fit bg-white p-5 rounded-xl max-w-3xl text-sky-600 italic">
          <UserCircleIcon className="inline-block h-10 w-10 text-sky-600" />
          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  );
}
export default Header;
