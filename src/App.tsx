import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./screens/app-layout/app-layout";
import Dashboard from "./screens/dashboard/dashboard";
import Calendar from "./screens/calendar/calendar";
import Contacts from "./screens/contacts/contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from "./screens/tasks/tasks";
import React from "react";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="tasks" element={<Tasks />}></Route>
          <Route path="calendar" element={<Calendar />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
