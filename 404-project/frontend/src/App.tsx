import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App;