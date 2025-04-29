import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import NotFoundPage from "./pages/NotFoundPage/notFoundPage";

const API_HOST = import.meta.env.VITE_API_HOST;

function App() {
  const [message, setMessage] = useState("dar nieko");

  useEffect(() => {
    axios
      .get(API_HOST)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => {
        alert(err);
      });
  });

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
