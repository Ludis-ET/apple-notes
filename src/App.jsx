import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NotesListPage } from "./pages/NotesListPage";

function App() {
  return (
    <div>
      <Header />
      <NotesListPage />
    </div>
  );
}

export default App;
