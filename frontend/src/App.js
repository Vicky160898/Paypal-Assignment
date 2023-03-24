import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sprint from "./pages/Sprint";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Sprint />} />
      </Routes>
    </div>
  );
}

export default App;
