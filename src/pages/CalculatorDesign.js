import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react"

const CalculatorDesign = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name))

  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, - 1));
  }
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  }

  return (
    <div className="border-2 border-green-400 bg-black  mr-5 mt-5 ml-5 max-w-[470px] h-[600px]">
      <form>
        <input className="  w-[300px] max-w-screen-lg sm:w-[420px] h-[100px] ml-5 mt-5" type="text" value={result} />
      </form>



      <div className="absolute mt-[270px] ml-5">
        <button className="w-[148px] h-[50px] bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF]  text-[30px]">0</button>
        <button className="w-[70px] h-[50px]text-[#00FFFF]   bg-gray-700 rounded-lg shadow-2xl text-[30px] ml-1">.</button>
      </div>

      <div className="grid grid-cols-4 gap-3 mr-3 mt-5 ml-3">
        <button className="w-[70px] h-[50px] bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px]">C</button>
        <button className="w-[70px] h-[50px] bg-gray-700 rounded-lg shadow-2xl text-white text-[30px]" ><i class="fa-solid fa-delete-left"></i></button>
        <button className="w-[70px] h-[50px] bg-gray-700 rounded-lg shadow-2xl text-white text-[30px]"><i class="fa-solid fa-divide"></i></button>
        <button className="w-[70px] h-[50px] bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px] ">*</button>
        <button className="w-[70px] h-[50px] text-[#0 bg-gray-700 rounded-lg shadow-2xl0FFFF] text-[30px]">7</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">8</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">9</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px]">-</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">4</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">5</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">6</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px]">+</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">1</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">2</button>
        <button className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">3</button>
        <button className="w-[70px] h-[115px] bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px]">=</button>
      </div>








    </div >

  )
}
export default CalculatorDesign