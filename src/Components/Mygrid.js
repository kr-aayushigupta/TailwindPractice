import React from "react";

function Mygrid() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-6 bg-gradient-to-r from-cyan-100 via-sky-200 to-blue-300 p-6 shadow-xl rounded-md">
        <div
          className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white rounded-md p-4 text-center
 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Grid Item 1
        </div>
        <div
          className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white rounded-md p-4 text-center
 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Grid Item 2
        </div>
        <div
          className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white rounded-md p-4 text-center
 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Grid Item 3
        </div>
        <div
          className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white rounded-md p-4 text-center
 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Grid Item 4
        </div>
        <div
          className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white rounded-md p-4 text-center
 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Grid Item 5
        </div>
        <div
          className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white rounded-md p-4 text-center
 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Grid Item 6
        </div>
      </div>
    </div>
  );
}

export default Mygrid;
