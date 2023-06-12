"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <div className="w-full bg-gray-500/10 mx-auto">
        <div className="flex items-center gap-5 flex-col md:flex-row p-5 container justify-between mx-auto">
          {/* LOGO */}
          <div className="flex gap-2 items-center">
            <Logo color="#0284C7" />
            <h1 className="font-black text-xl">CardStack</h1>
          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-2 w-full flex-1 justify-end">
            <form className="bg-white flex items-center space-x-2 rounded-md p-2 shadow-md border border-gray-300 flex-1 md:flex-initial">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none text-sm"
              />
              <button type="submit" hidden>
                Search
              </button>
            </form>
            <div className="rounded-full bg-sky-600 border border-sky-700 w-6 h-6 flex items-center justify-center text-xs text-sky-50 font-black">
              PI
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
