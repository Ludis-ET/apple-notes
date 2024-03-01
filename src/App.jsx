import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NotesListPage } from "./pages/NotesListPage";
import { NotePage } from "./pages/NotePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/notes/:id" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
