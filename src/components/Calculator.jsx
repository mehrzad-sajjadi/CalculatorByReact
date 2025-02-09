import { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {

    let [result,setResult] = useState("");
    
    let [hasDot,setHasDot] = useState(false);
    // console.log(`has Dot is ${hasDot}`);
    // let hasDot = false;
    // console.log(hasDot);
    function clickHandler(e){
        let input =  e.target.innerText ;
        if(input=="."){
            if( hasDot==true ){
                return ;
            }else{
                hasDot = true;
                setHasDot(hasDot=true);
                // console.log(hasDot);
            }
        }else if(input=="÷" || input=="×" || input=="+" || input=="-"){
            // hasDot = false;
            setHasDot(hasDot=false);
        }

        input == "÷" ? input="/" : input == "×" ? input="*" :"" ;

        setResult(result+input);
    }
    function reset(){
        window.location.reload();
    }
    function C(){
        setResult(result.slice(0,-1) );
        if( result.slice(-1)=="." ){
            setHasDot(hasDot=false);
        }
    }
    function equalBtn(){
        setResult(  evaluate(result).toString()  );
        setHasDot(hasDot=false);
    }


    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 shadow-lg rounded-xl p-6 w-80">
                <div className="bg-gray-700 text-white text-right p-4 mb-4 rounded-md text-2xl font-mono h-16 flex items-center justify-end">
                    {result}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <button onClick={reset} className="col-span-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg">Clear</button>
                    <button onClick={C} className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">C</button>
                    <button onClick={clickHandler} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">÷</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">7</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">8</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">9</button>
                    <button onClick={clickHandler} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">×</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">4</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">5</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">6</button>
                    <button onClick={clickHandler} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">-</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">1</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">2</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">3</button>
                    <button onClick={clickHandler} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">+</button>
                    <button onClick={clickHandler} className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">0</button>
                    <button onClick={clickHandler} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">.</button>
                    <button onClick={equalBtn} className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">=</button>
                </div>
            </div>
        </div>
    );
}
  
export default Calculator ;