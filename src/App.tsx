import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects";
import Contacts from "./components/pages/Contacts/Contacts";
import NotFound from "./components/NotFound";
import MainLayout from "./Layouts/MainLayout";

import ScrollToTopPage from "./hooks/scrollToTopPage";

function App() {
  return (
    <>
      <BrowserRouter basename="/cv">
        <div className="App">
          <ScrollToTopPage />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index={true} /*можно без true */ element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
