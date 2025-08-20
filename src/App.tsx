import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Phrase from "./pages/Phrase";


function App() {
  return (
    <div>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/phrase" element={<Phrase />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
