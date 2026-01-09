import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }
  
  function decreaseNum() {
    setNum(num - 1);
  }

  function resetNum() {
    setNum(0);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 to-black flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Counter App</h1>
        
        <div className="text-center mb-8">
          <div className="text-6xl font-bold text-white mb-4">{num}</div>
          <p className="text-gray-400">Current Count</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={decreaseNum}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Decrease
          </button>
          
          <button
            onClick={increaseNum}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Increase
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={resetNum}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg"
          >
            Reset to Zero
          </button>
          
          <button
            onClick={() => setNum(num + 5)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg"
          >
            Add 5
          </button>
          
          <button
            onClick={() => setNum(num - 5)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg"
          >
            Subtract 5
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Status:</span>
            <span className={num > 0 ? "text-green-400" : num < 0 ? "text-red-400" : "text-yellow-400"}>
              {num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"}
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>Even/Odd:</span>
            <span className={num % 2 === 0 ? "text-blue-400" : "text-pink-400"}>
              {num % 2 === 0 ? "Even" : "Odd"}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm mt-8 text-center">
        Click buttons to modify the counter value
      </p>
    </div>
  );
};

export default App;