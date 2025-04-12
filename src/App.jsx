import React, { useState } from 'react';

const App = () => {
  const [son, setSon] = useState(0);

  const plus = () => {
    setSon((prosto) => prosto + 1);
  };

  const minus = () => {
    if (son > 0) {
      setSon((prosto) => prosto - 1);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col bg-gradient-to-tr from-sky-100 to-indigo-200">
      <h1
        key={son}
        className="text-6xl font-extrabold text-blue-700 my-4 transition-transform duration-300 ease-out animate-pulse"
      >
        {son}
      </h1>

      <div className="flex gap-3 justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 active:scale-95 transition-transform duration-200 text-white px-5 py-2 rounded shadow-md
            border-4 border-transparent
            hover:border-t-4 hover:border-r-4 hover:border-b-4 hover:border-l-4
            hover:border-transparent hover:bg-clip-border
            hover:border-t-transparent hover:border-r-transparent hover:border-b-transparent hover:border-l-transparent
            border-4 border-transparent bg-clip-border animate-gradient-green-red"
          onClick={plus}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 active:scale-95 transition-transform duration-200 text-white px-5 py-2 rounded shadow-md
            border-4 border-transparent
            hover:border-t-4 hover:border-r-4 hover:border-b-4 hover:border-l-4
            hover:border-transparent hover:bg-clip-border
            hover:border-t-transparent hover:border-r-transparent hover:border-b-transparent hover:border-l-transparent
            border-4 border-transparent bg-clip-border animate-gradient-green-red"
          onClick={minus}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
