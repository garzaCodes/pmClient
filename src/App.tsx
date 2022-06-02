import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppLayout from "./screens/app-layout/app-layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
