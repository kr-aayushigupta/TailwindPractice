import React from 'react'

function MyComponent() {
  return (
    <div>
        <div className=" p-4 Parent bg-white rounded-md mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className=" p-4 text-black bg-white border rounded-lg shadow-md">

            <img
              className="saturate-150 rounded-md transition duration-300 ease-in-out  hover:-translate-y-1"
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhbmNlfGVufDB8fDB8fHww"
            ></img>
            <h1 className="text-2xl">Visit</h1>

            <p className="mb-4">France</p>
            <button className="px-3 py-2 text-white rounded-lg shadow-md cursor-pointer bg-cyan-500 shadow-cyan-500/50 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

              Say Bonjour!!
            </button>
          </div>

          {/* ================================ */}
          <div className=" p-4 text-black bg-white border rounded-lg shadow-md">
            <img
              className="saturate-150 rounded-md transition duration-300 ease-in-out  hover:-translate-y-1"
              src="https://images.unsplash.com/photo-1548013146-72479768bada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWF8ZW58MHx8MHx8fDA%3D"
            ></img>
            <h1 className="text-2xl">Visit</h1>

            <p className="mb-4">India</p>
            <button className="px-3 py-2 text-white rounded-lg shadow-md cursor-pointer bg-cyan-500 shadow-cyan-500/50
            
            transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              Say Namaste!!
            </button>
          </div>
          {/* ==================================================== */}
          <div className=" p-4 text-black bg-white border rounded-lg shadow-md">
            <img
              className="saturate-150 rounded-md transition duration-300 ease-in-out  hover:-translate-y-1"
              src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNhfGVufDB8fDB8fHww"
            ></img>
            <h1 className="text-2xl">Visit</h1>

            <p className="mb-4">USA</p>
            <button className="px-3 py-2 text-white rounded-lg shadow-md cursor-pointer bg-cyan-500 shadow-cyan-500/50
            
            transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              Say Hello!!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyComponent