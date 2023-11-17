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
    <div className="border-2 rounded-lg shadow-lg bg-black  mr-5 mt-5 ml-5 max-w-[400px] h-[550px] lg:ml-[500px]">

      <p className="text-white font-serif text-[20px] ml-32 mt-5 ">CALCULATOR</p>

      <form>
        <input className="  w-[300px] max-w-screen-lg sm:w-[350px] h-[100px] ml-5 mt-5 text-[50px] font-thin text-right pr-3" type="text" value={result} />
      </form>



      <div className="absolute mt-[270px] ">
        <button className="lg:w-[177px] w-[150px] ml-3 h-[50px] bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF]  text-[30px]">0</button>
        <button className="w-[70px]  h-[50px] text-[#00FFFF]   bg-gray-700 rounded-lg shadow-2xl text-[30px] lg:ml-5 ml-3">.</button>
      </div>

      <div className="grid grid-cols-4 gap-3 mr-3 mt-5 lg:ml-5 ml-3">
        <button onClick={clear} id="clear" className="w-[70px] h-[50px] bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px]">C</button>
        <button onClick={backspace} id="backspace" className="w-[70px] h-[50px] bg-gray-700 rounded-lg shadow-2xl text-white text-[30px] " ><i class="fa-solid fa-delete-left"></i></button>
        <button className="w-[70px] h-[50px] bg-gray-700 rounded-lg shadow-2xl text-white text-[30px]"><i class="fa-solid fa-divide"></i></button>
        <button name="*" onClick={handleClick} className="w-[70px] h-[50px] bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px] ">*</button>
        <button name="7" onClick={handleClick} className="w-[70px] h-[50px] text-[#00FFFF] bg-gray-700 rounded-lg shadow-2xl0FFFF] text-[30px]">7</button>
        <button name="8" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">8</button>
        <button name="9" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">9</button>
        <button name="-" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px]">-</button>
        <button name="4" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">4</button>
        <button name="5" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">5</button>
        <button name="6" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">6</button>
        <button name="+" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px]">+</button>
        <button name="1" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">1</button>
        <button name="2" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">2</button>
        <button name="3" onClick={handleClick} className="w-[70px] h-[50px]  bg-gray-700 rounded-lg shadow-2xl text-[#00FFFF] text-[30px]">3</button>
        <button onClick={calculate} id="result" className="w-[70px] h-[115px] bg-gray-700 rounded-lg shadow-2xl text-[#e65f78] text-[30px]">=</button>
      </div>








    </div >

  )
}
export default CalculatorDesign