import React from "react";
import CreateContact from "./screen/CreateContact";
import EditContact from "./screen/EditContact";
import Dashboard from "./screen/Home/Dashboard";
import Login from "./screen/Auth/Login"
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/CreateContact" element={<CreateContact />} />
          <Route path="/EditContact" element={<EditContact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
