import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";

import Router from "./routers/Router";
import { useRef } from "react";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
