import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Process from "./process/Process";
import Proces from "./process/Proces";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Process />} />
          <Route path="/process/:id" element={<Proces />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
