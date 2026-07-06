import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <Routes>
      {/* Default route redirect */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/tasks" element={<TasksPage />} />
    </Routes>
  );
}

export default App;