function Calculator() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 shadow-lg rounded-xl p-6 w-80">
                <div className="bg-gray-700 text-white text-right p-4 mb-4 rounded-md text-2xl font-mono h-16 flex items-center justify-end">
                    0
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <button className="col-span-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg">Clear</button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">C</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">÷</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">7</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">8</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">9</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">×</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">4</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">5</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">6</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">-</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">1</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">2</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">3</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">+</button>
                    <button className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">0</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">.</button>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">=</button>
                </div>
            </div>
        </div>
    );
}
  
export default Calculator ;