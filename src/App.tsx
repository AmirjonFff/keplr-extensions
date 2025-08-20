import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Phrase from "./pages/Phrase";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="p-4 bg-white shadow flex gap-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/login" className="text-blue-500">Login</Link>
        <Link to="/phrase" className="text-blue-500">Phrase</Link>
      </nav>
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
