import React from "react";

function Sidebar() {
  return (
    <div className="bg-custom-blue h-full overflow-y-auto px-5 flex flex-col">
      <div className="flex-grow">
        <div className="cursor-pointer flex justify-evenly items-center border mt-2 rounded-md">
          <span className="text-white text-2xl p-4">+</span>
          <h1 className="text-white text-xl font-semibold">New Chat</h1>
        </div>
        <ul>
          <li className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150">Room 1</li>
          <li className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150">Room 2</li>
          <li className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150">Room 3</li>
          <li className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150">Room 4</li>
          <li className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150">Room 5</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
