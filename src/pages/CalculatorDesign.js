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
      <div className="   CALCULATOR BACKGROUND 
      lg:h-[650px] max-w-[380px] mr-3 ml-3 lg:w-[400px] bg-[#2C3539] mt-10 lg:ml-[450px]">
        <div>
          <p className="font-mono text-white  text-[20px] lg:pl-[150px] pl-28 pt-5">CALCULATOR</p>


          <form className="DISPLAY">
            <input className=" text-right text-[25px] font-[900px] space-x-2 border-2 border-white shadow-2xl lg:h-[100px] h-[60px] lg:w-[350px] text-white mt-5  ml-6" type="text" value={result} />
          </form>

          <div className=" pl-5 pt-5">
            <button onClick={clear} id="Clear" className="border-2 border-black rounded-md text-[20px] lg:w-[177px] w-[100px] h-16 shadow-2xl
             bg-black text-[#e65f78]">Clear</button>

            <button onClick={backspace} id="backspace" className="border-2 border-black rounded-md text-[20px] w-[85px] h-16 ml-3 shadow-2xl  bg-black text-[#e65f78] ">C</button>
            <button name="/" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] h-16 ml-2 shadow-2xl  bg-black text-[#e65f78]">/</button>
          </div>


          <div className="grid grid-cols-4 lg:gap-4 lg:pr-5 pr-2 lg:pl-5  pt-3">
            <button name="7" onClick={handleClick} className="border-2 border-black  rounded-md  shadow bg-black text-[#00FFFF] text-[20px] w-[85px] h-[50px]">7</button>
            <button name="8" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] shadow-2xl  bg-black text-[#00FFFF] h-[50px]">8</button>
            <button name="9" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px]  shadow-2xl  bg-black text-[#00FFFF] h-[50px]">9</button>
            <button name="*" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] shadow-2xl  bg-black text-[#e65f78] h-[50px] ">*</button>
            <button name="4" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] shadow-2xl  bg-black text-[#00FFFF] h-[50px]">4</button>
            <button name="5" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] shadow-2xl  bg-black text-[#00FFFF] h-[50px]">5</button>
            <button name="6" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] shadow-2xl  bg-black text-[#00FFFF] h-[50px]">6</button>
            <button name="-" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] shadow-2xl  bg-black text-[#e65f78] h-[50px]">-</button>
            <button name="1" onClick={handleClick} className="border-2 border-black rounded-md text-[20px] w-[85px] shadow-2xl  bg-black text-[#00FFFF] h-[50px]">1</button>
            <button name="2" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] shadow-2xl  bg-black text-[#00FFFF] h-[50px]">2</button>
            <button name="3" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] shadow-2xl  bg-black text-[#00FFFF] h-[50px]">3</button>
            <button name="+" onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] shadow-2xl  bg-black text-[#e65f78] h-[50px]">+</button>
          </div>


          <div className="pl-5 pt-3">
            <button name="0" onClick={handleClick} className="border-2 border-black rounded-md text-[20px] w-[85px] h-16 shadow-2xl bg-black text-[#00FFFF] h-">0</button>

            <button name="." onClick={handleClick} className="border-2 border-black rounded-md  text-[20px] w-[85px] h-16 ml-2 shadow-2xl bg-black text-[#00FFFF] ">.</button>

            <button name="=" onClick={calculate} id="result" className="border-2 border-black rounded-md   text-[20px] w-[177px] h-16 ml-2 shadow-2xl   bg-black text-[#e65f78] ">=</button>
          </div>


        </div >
      </div >
    </div >
  )
}
export default CalculatorDesign