import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SemuaProduk from "./pages/SemuaProduk";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/semuaproduk" element={<SemuaProduk />} />
      </Routes>
    </Router>
  );
}

export default App;
