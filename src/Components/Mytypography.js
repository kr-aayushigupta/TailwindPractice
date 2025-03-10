import React from 'react'

function Mytypography() {
  return (
    <div>
        <div className="m-6">
          <h2 className="text-3xl font-semibold mb-2 text-white">Typography Examples</h2>
          <p className="text-base mb-2 text-white">
            This is a simple paragraph to demonstrate the text-base className.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-lg mb-2 text-white">
            This is a larger paragraph using the text-lg className.
          </p>
          <p className="text-xl mb-2 text-white">

            This is an extra-large paragraph using the text-xl className.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <label className="block text-white" for="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:ring-white"
            placeholder="Enter your name"
          ></input>

          <label className="block text-white" for="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your email"
          ></input>

          <label className="block text-white" for="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>

        
    </div>
  )
}

export default Mytypography