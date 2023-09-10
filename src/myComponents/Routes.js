import React from "react";
import {  Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Task from "./Task";
import Email from "./Email";
import Contact from "./Contact";
import Chat from "./Chat";
import Deals from "./Deals";


const Routes_cont = () => {
  return (
    <>
      
        

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/email" element={<Email />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      
    </>
  );
};

export default Routes_cont;
