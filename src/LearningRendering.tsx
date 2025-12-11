import { Routes, Route } from 'react-router-dom';
import { UseStateExample } from "./components/Learning/rendering/UseState/UseState";

function LearningRendering() {
  return (
    <Routes>
      <Route path="/usestate" element={<UseStateExample />} />
    </Routes>
  );
}
export default LearningRendering;