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
    <div>

      <div className="h-[650px] w-[500px] bg-black mt-10 ml-[450px]">
        <div>

          <form>
            <input className=" text-right text-[25px] font-[900px] space-x-2 border-2 border-white h-[60px] w-[450px]  bg-black text-white mt-5  ml-6" type="text" value={result} />
          </form>
          <div className="flex">
            <p className="font-serif text-white pt-5 pl-5">Sahil Calculator</p>
            <img className="w-20 ml-60 pt-5" src="logo.jpg" alt="logo" />
          </div>

          <div className=" pr-5 pl-5 pt-3">
            <button onClick={clear} id="Clear" className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-[#00FFFF] w-56 h-16 ">Clear</button>

            <button onClick={backspace} id="backspace" className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-[#00FFFF] w-[102px] h-[50px] ml-4">C</button>
            <button name="/" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-[#00FFFF] w-[102px] h-[50px] ml-4">/</button>
          </div>


          <div className="grid grid-cols-4 gap-4 pr-5 pl-5 pt-3">
            <button name="7" onClick={handleClick} className="border-2 border-black  rounded-md text-[30px] shadow-2xl bg-gray-400 ">7</button>
            <button name="8" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400">8</button>
            <button name="9" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400">9</button>
            <button name="*" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-[#00FFFF] ">*</button>
            <button name="4" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400">4</button>
            <button name="5" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400">5</button>
            <button name="6" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400">6</button>
            <button name="-" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-[#00FFFF]">-</button>
            <button name="1" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400">1</button>
            <button name="2" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400">2</button>
            <button name="3" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400">3</button>
            <button name="+" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-[#00FFFF]">+</button>
          </div>


          <div className=" pr-5 pl-5 pt-3">
            <button name="0" onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400 w-[102px] h-[50px] ">0</button>
            <button name="." onClick={handleClick} className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-gray-400 w-[102px] h-[50px] ml-4">.</button>
            <button name="=" onClick={calculate} id="result" className="border-2 border-black rounded-md  text-[30px] shadow-2xl bg-[#00FFFF] w-56 h-16 ml-4">=</button>
          </div>


        </div >
      </div >
    </div >
  )
}
export default CalculatorDesign