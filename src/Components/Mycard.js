import React from "react";

function Mycard() {
  return (
    <div>
      <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Card Title
        </h2>
        <p className="text-gray-600 mb-4">
          This is an example of a simple card with some shadow, padding, and
          rounded corners using Tailwind CSS classes.
        </p>
        <a href="#" className="text-blue-500 hover:text-blue-600">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Mycard;
