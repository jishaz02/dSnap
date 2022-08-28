import EditNameScreen from "./screens/EditNameScreen";
import EditUserName from "./screens/EditUserName";
import EditBirthdayScreen from "./screens/EditBirthdayScreen";
import EditEmailScreen from "./screens/EditEmailScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/onboarding" element={<OnBoardingScreen />} />
        <Route path="/edit/name" element={<EditNameScreen />} />
        <Route path="/edit/username" element={<EditUserName />} />
        <Route path="/edit/birthday" element={<EditBirthdayScreen />} />
        <Route path="/edit/email" element={<EditEmailScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
