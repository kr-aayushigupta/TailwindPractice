import React from 'react'

function Mybutton() {
  return (
    <div>
        <div className="flex justify-center space-x-4 my-6 p-4 bg-white shadow-xl shadow-slate-600 rounded-md">
          
          
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:ring-2 ring-white
           transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
            Primary Button
          </button>

          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:ring-2 ring-white
           transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
            Success Button
          </button>

          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:ring-2 ring-white
           transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
            Danger Button
          </button>

        </div>
    </div>
  )
}

export default Mybutton