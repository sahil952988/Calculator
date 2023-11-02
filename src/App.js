import { Routes, Route } from "react-router"
import CalculatorDesign from "./pages/CalculatorDesign"

const App = () => {
  return (
    <Routes>
      <Route index element={<CalculatorDesign />} />
    </Routes>
  )
}
export default App