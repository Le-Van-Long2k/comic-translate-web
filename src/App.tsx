import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./layouts/MainPage";
import SettingsPage from "./layouts/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/settings" element={<SettingsPage/>}></Route>
        <Route path="*" element={<Navigate to="/"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
