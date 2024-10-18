import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/authorization/LoginPage";
import SignupPageStep1 from "./pages/authorization/SignupPageStep1";
import SignupPageStep2 from "./pages/authorization/SignupPageStep2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup-step1" element={<SignupPageStep1 />} />
        <Route path="/signup-step2" element={<SignupPageStep2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
