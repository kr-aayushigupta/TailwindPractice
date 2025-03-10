import React from "react";

function Myflex() {
  return (
    <div>
      <div className="flex justify-between items-center space-x-4 my-10 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 h-24 px-8 shadow-xl rounded-md ">

        <div
          className="w-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 rounded-md text-center 
 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Flex Item 1
        </div>
        <div
          className="w-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 rounded-md text-center
 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Flex Item 2
        </div>
        <div
          className="w-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 rounded-md text-center
 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Flex Item 3
        </div>
      </div>
    </div>
  );
}

export default Myflex;
