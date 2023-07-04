import "./App.css";
import Login from "./pages/login";
import Planet from "./pages/planet";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="planet" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
